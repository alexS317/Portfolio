// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/style.css"],
  app: {
    head: {
      title: "Alexandra Fontner - Portfolio",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
        },
        { rel: "icon", href: "/favicon.ico" },
      ],
    },
  },
});
