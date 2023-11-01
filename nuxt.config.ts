export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  head: {
    title: 'Augsburg Mosaic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Interactive map of Augsburg with recommended locations to visit.' }
    ]
  },
  modules: ['nuxt3-leaflet', '@pinia/nuxt'],
  devtools: { enabled: true }
})
