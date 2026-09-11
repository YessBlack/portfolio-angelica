import { Button } from '@/components/ui/Button'
import { Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export const ContactForm = () => {
  const { t } = useTranslation()

  const [isSubmitting, setSubmitting] = useState<boolean>(false)
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const isCompleted = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const allFilled = Object.values(form).every((value) => value.trim() !== '')
    const isEmailValid = emailRegex.test(form.email)

    return allFilled && isEmailValid
  }, [form])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleClear = () => {
    setForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch(import.meta.env.VITE_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        toast.success(t('Mensaje enviado correctamente'), {
          position: 'top-right',
          autoClose: 3000
        })

        handleClear()
        return
      }

      toast.error(t('Ocurrió un error al enviar el mensaje'))
    } catch (error) {
      console.log(error)
      toast.error(t('Ocurrió un error al enviar el mensaje'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      className='flex flex-col gap-5 border border-violet-100 rounded-2xl bg-white p-8 shadow-lg shadow-violet-200/40 dark:border dark:border-white/10 dark:bg-white/5 dark:shadow-none'
      onSubmit={handleSubmitEmail}
    >
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-sm font-semibold text-slate-800 dark:text-slate-200'>
            {t('Nombre')}
          </label>
          <input
            id='name'
            type='text'
            name='name'
            required
            placeholder={t('Tu nombre') ?? ''}
            value={form.name}
            onChange={handleChange}
            className='border border-violet-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none ring-violet-300 transition-all duration-200 focus:scale-[1.01] focus:ring-1 dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-500'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='text-sm font-semibold text-slate-800 dark:text-slate-200'>
            {t('Email')}
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={form.email}
            required
            placeholder='tu@email.com'
            onChange={handleChange}
            className='border border-violet-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none ring-violet-300 transition-all duration-200 focus:scale-[1.01] focus:ring-1 dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-500'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='subject' className='text-sm font-semibold text-slate-800 dark:text-slate-200'>
          {t('Asunto')}
        </label>
        <input
          id='subject'
          type='text'
          name='subject'
          value={form.subject}
          required
          onChange={handleChange}
          placeholder={t('Ej: Oportunidad de Frontend Developer') ?? ''}
          className='border border-violet-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none ring-violet-300 transition-all duration-200 focus:scale-[1.01] focus:ring-1 dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-500'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='message' className='text-sm font-semibold text-slate-800 dark:text-slate-200'>
          {t('Mensaje')}
        </label>
        <textarea
          id='message'
          name='message'
          value={form.message}
          rows={5}
          required
          onChange={handleChange}
          placeholder={t('Cuéntame sobre la vacante o lo que tienes en mente...') ?? ''}
          className='border border-violet-200 resize-none rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none ring-violet-300 transition-all duration-200 focus:scale-[1.01] focus:ring-1 dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-500'
        />
      </div>

      <Button
        disabled={!isCompleted || isSubmitting}
        label={t('Enviar mensaje')}
        variant='primary'
        icon={<Send size={16} />}
        type='submit'
      />

      <p className='text-center text-xs text-slate-400 dark:text-slate-500'>
        {t('Toda postulación es bienvenida. Te responderé lo antes posible.')}
      </p>
    </form>
  )
}
