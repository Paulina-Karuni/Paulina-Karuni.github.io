<script lang="ts">
	export let hasDoublePadding: boolean = false;
</script>

{#if hasDoublePadding}
	<div class="px-8 md:px-32 lg:px-48 xl:px-64">
		<slot />
	</div>
{:else}
	<div class="px-8 md:px-16 lg:px-24 xl:px-32">
		<slot />
	</div>
{/if}
