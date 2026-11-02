A SvelteKit app that renders Storyblok stories with `@storyblok/svelte`
(https://www.storyblok.com/docs/packages/storyblok-svelte). `src/routes/[...slug]` fetches the story for the path, `home` for `/`. Register every new block in `src/routes/+layout.js`.

- Svelte and SvelteKit: https://svelte.dev/llms.txt

`npm run dev` serves https://localhost:5173. The Visual Editor needs HTTPS.

## Storyblok

<!-- synced from storyblok/monoblok; edit in the monorepo -->

- Look for the framework's own docs on working with agents, including any skills it ships, before
  writing code.
- Storyblok docs: https://www.storyblok.com/docs
- Storyblok agent skills: https://github.com/storyblok/agent-plugin
