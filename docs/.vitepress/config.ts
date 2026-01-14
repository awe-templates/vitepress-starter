import { defineConfig } from "vitepress";
import llmstxt, {
  copyOrDownloadAsMarkdownButtons,
} from "vitepress-plugin-llms";

export default defineConfig({
  vite: {
    plugins: [llmstxt()],
  },

  markdown: {
    config(md) {
      md.use(copyOrDownloadAsMarkdownButtons);
    },
  },

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
          { text: "LLMs.txt", link: "/guide/llms-txt" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com" }],
  },
});
