module.exports = {
  environment: process.env.ELEVENTY_ENV,
  metaLang: "en",
  metaLocale: "en_IE",
  metaRobots: "index, follow",
  googleAnalytics: "",
  cloudflareWebAnalytics: "5f0a2f27b63b4212b06c385016366939",
  title: "Desired Persona",
  url: "https://desiredpersona.com",
  author: "Desired Persona",
  email: "",
  twitterCreator: "@desiredpersona",
  twitterSite: "@desiredpersona",
  feed: {
    subtitle: "Blog feed",
    filename: "feed.xml",
    path: "/feed.xml",
    url: "https://desiredpersona.com/feed.xml",
    id: "https://desiredpersona.com",
  },
  post: {
    readingTime: true,
  },
  text: {
    previous: "← Previous page",
    next: "Next page →",
    readingTime: "minute read",
    updated: "Updated",
  },
};
