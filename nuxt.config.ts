// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/style.css"],

  app: {
    head: {
      title: "Alexandra Fontner - Portfolio",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css",
        },
      ],
    },
  },

  compatibilityDate: "2024-10-26",
});