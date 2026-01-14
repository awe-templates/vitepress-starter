# LLMs.txt

This site uses [vitepress-plugin-llms](https://github.com/okineadev/vitepress-plugin-llms) to generate LLM-friendly documentation files.

## What is llms.txt?

The [llms.txt](https://llmstxt.org/) standard provides a way to expose documentation in a format optimized for Large Language Models (LLMs). This allows AI assistants to better understand and reference your documentation.

Learn more about the specification at [llmstxt.org](https://llmstxt.org/).

## Generated Files

During the build process, the plugin generates these files:

| File | Description |
|------|-------------|
| `llms.txt` | Index file with links to all documentation sections |
| `llms-full.txt` | Complete documentation bundled in a single file |
| `*.md` | Individual markdown versions of each page |

## Accessing the Files

After deployment, the files are available at:

- `/llms.txt` - Documentation index
- `/llms-full.txt` - Full documentation bundle

## Configuration

The plugin is configured in `.vitepress/config.ts`:

```ts
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
});
```

## Adding Descriptions

Add frontmatter descriptions to improve the generated index:

```yaml
---
description: How to configure and use the llms.txt plugin
---
```

## Copy/Download Buttons

Each page includes buttons to copy or download the markdown content, making it easy to share documentation with AI tools.
