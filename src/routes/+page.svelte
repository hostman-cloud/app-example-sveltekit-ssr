<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>SvelteKit SSR</title>
</svelte:head>

<h1>Home</h1>
<p class="lead">This page is rendered on the server (SSR) on every request.</p>

<dl class="info">
	<dt>Rendered at</dt>
	<dd><code>{data.renderedAt}</code></dd>
	<dt>Node.js</dt>
	<dd><code>{data.nodeVersion}</code></dd>
	<dt>User-Agent</dt>
	<dd><code>{data.userAgent}</code></dd>
</dl>

<p>
	Refresh the page and the render time will change. API endpoint example:
	<a href="/api/hello">/api/hello</a>.
</p>
