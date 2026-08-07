import { defineConfig } from 'i18next-cli'

export default defineConfig({
  locales: ['es', 'en'],

  extract: {
    input: ['src/**/*.{ts,tsx}'],
    output: 'src/i18n/locales/{{language}}.json',
    ignore: ['**/*.test.*', '**/*.spec.*'],

    keySeparator: false,
    nsSeparator: false,

    defaultNS: false,
    mergeNamespaces: true,

    primaryLanguage: 'es',
    secondaryLanguages: ['en'],

    defaultValue: (key, _, language) =>
      language === 'es' ? key : 'MISSING_TRANSLATION',

    removeUnusedKeys: true,
    sort: true
  }
})
