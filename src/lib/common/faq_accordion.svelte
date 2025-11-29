<script lang="ts">
	export let question: string;
	export let answer: string;
	export let open: boolean;
	export let toggle: () => void;
	export let isFirst: boolean = false;
</script>

<div
	class={`border-t border-section-faq-text text-section-faq-text/90 ${isFirst ? 'border-t-0' : ''}`}
>
	<button class="flex justify-between items-center w-full py-6 text-left" on:click={toggle}>
		<span class="font-semibold text-md lg:text-lg">{question}</span>

		<svg
			class="w-5 h-5 transition-transform duration-300 transform text-section-faq-text"
			class:rotate-180={open}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	{#if open}
		<div class="pb-4 text-md lg:text-lg text-section-faq-text">
			{answer}
		</div>
	{/if}
</div>

<style>
	:global(.accordion-item:first-child) {
		border-top-width: 0 !important;
	}
</style>
