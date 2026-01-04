# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher
- Terminal for running commands
- Text editor with Markdown support

## Installation

Install the dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

## Building for Production

Build the static site:

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

## Project Structure

```txt
.
├── docs
│   ├── .vitepress
│   │   └── config.ts    # VitePress configuration
│   ├── guide
│   │   ├── index.md     # Guide introduction
│   │   └── getting-started.md
│   └── index.md         # Homepage
└── package.json
```

## Next Steps

- Customize the theme in `.vitepress/config.ts`
- Add more pages to the `docs` folder
- Explore [VitePress documentation](https://vitepress.dev)
