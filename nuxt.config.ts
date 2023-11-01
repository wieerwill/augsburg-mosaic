export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  head: {
    title: 'Augsburg Mosaic | Discover the best spots in Augsburg',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Explore the best spots in Augsburg with Augsburg Mosaic. Discover attractions, food, culture, nature, and more.',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Augsburg Mosaic | Discover the best spots in Augsburg'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Explore the best spots in Augsburg with Augsburg Mosaic. Discover attractions, food, culture, nature, and more.'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://augsburg.wieerwill.de' },
      { hid: 'og:image', property: 'og:image', content: 'https://augsburg.wieerwill.de/screenshot.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Augsburg Mosaic' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://augsburg.wieerwill.de' },
    ]
  },
  modules: ['nuxt3-leaflet', '@pinia/nuxt'],
  devtools: { enabled: true }
})
