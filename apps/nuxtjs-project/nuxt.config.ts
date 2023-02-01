// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
      head: {
          "meta": [
            {
              "name": "viewport",
              "content": "width=device-width, initial-scale=1"
            },
            {
              "charset": "utf-8"
            }
          ],
          "link": [
              { rel: "preconnect", href: "https://fonts.googleapis.com" },
              { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
              { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700&display=swap" },
          ],
          "style": [],
          "script": [],
          "noscript": []
      }
  },
  css: [
    'assets/styles/index.scss',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
  modules: [
    '@pinia/nuxt',
  ],
  build: {
		transpile: ['primevue']
	}
})
