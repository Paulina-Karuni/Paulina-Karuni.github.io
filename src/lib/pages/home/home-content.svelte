<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<h1 class="font-bold">Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button class="btn btn-ghost"> Hello </button>
<p>{m.example_message({ username: 'dash' })}</p>
