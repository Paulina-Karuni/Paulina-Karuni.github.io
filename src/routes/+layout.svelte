<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$lib/common/footer.svelte';
	import Navigation from '$lib/common/navigation.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="canonical" href="https://paulina-karuni.de{page.url.pathname}" />
</svelte:head>

<!-- ensure all pages can be crawled to generate all routes for all locales -->
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<div class="flex flex-col min-h-screen">
	<Navigation />
	{@render children()}
	<Footer />
</div>
