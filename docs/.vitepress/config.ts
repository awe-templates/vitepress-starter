import { defineConfig } from "vitepress";

export default defineConfig({
  title: "My Documentation",
  description: "A VitePress Site",
  base: "/vitepress-starter",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/guide/" },
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Deploy to GitHub Pages", link: "/guide/deploy" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com" }],
  },
});
