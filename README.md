# SvelteKit SSR

Example of a [SvelteKit](https://svelte.dev/docs/kit) application with server-side rendering (SSR) that can be deployed to **Hostman** without configuration.

:tada: [Demo]()

:rocket: [Create your Apps](https://hostman.com/my/apps/create)

:books: [Hostman Apps Documentation](https://hostman.com/docs/app-platform/backend-apps/)

## Deployment settings

Enable SSR support when creating the app: it will be deployed as a Node.js backend.

| Parameter     | Value                  |
| ------------- | ---------------------- |
| Framework     | SvelteKit, SSR enabled |
| Build command | `npm run build`        |
| Start command | `node build`           |

The server is built by the [`@sveltejs/adapter-node`](https://svelte.dev/docs/kit/adapter-node) adapter and listens on `0.0.0.0`. The default port is `3000`, it can be changed with the `PORT` environment variable.

If you add forms with [form actions](https://svelte.dev/docs/kit/form-actions), set the `ORIGIN` environment variable to the app URL (for example, `https://example.com`), otherwise SvelteKit will reject POST requests that come through the proxy.

Static version: [app-example-sveltekit](https://github.com/hostman-cloud/app-example-sveltekit).

## What the example shows

- `/`: the page is rendered on the server on every request; the render time, Node.js version and `User-Agent` come from `load` in `+page.server.ts` and are already in the HTML.
- `/about`: the second page of the app.
- `/api/hello`: an API endpoint (`+server.ts`) that returns JSON.

## <a name="dev"></a>Running locally

```bash
# install dependencies
npm install

# run in development mode with file watching
npm run dev

# build for production
npm run build

# start the built application
npm run start
```

Requires Node.js 22.17 or newer.
