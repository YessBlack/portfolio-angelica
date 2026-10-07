import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@/components/providers/theme.providers.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <App />
      <ToastContainer />
    </ThemeProvider>
  </BrowserRouter>
)
