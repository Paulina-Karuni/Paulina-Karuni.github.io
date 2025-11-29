<script lang="ts">
	import image from '$lib/assets/images/faq-background.webp';
	import FaqAccordion from '$lib/common/faq_accordion.svelte';
	import { HomeNavigationTags } from '$lib/common/navigation';
	import Padding from '$lib/common/padding.svelte';
	import { m } from '$lib/paraglide/messages';

	export let items = [
		{ question: m.faq_q1(), answer: m.faq_a1() },
		{ question: m.faq_q2(), answer: m.faq_a2() },
		{ question: m.faq_q3(), answer: m.faq_a3() },
		{ question: m.faq_q4(), answer: m.faq_a4() },
		{ question: m.faq_q5(), answer: m.faq_a5() },
		{ question: m.faq_q6(), answer: m.faq_a6() }
	];

	let openIndex: number | null = null;

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<div id={HomeNavigationTags.Faq} class="scroll-mt-16">
	<section
		class="relative w-full bg-cover bg-center bg-no-repeat"
		style="background-image: url({image});"
	>
		<div class="absolute inset-0 bg-white/70"></div>

		<div class="relative z-10">
			<Padding hasDoublePadding={true}>
				<div class="h-12 lg:h-24"></div>

				<h2
					class="text-custom-h text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[Raleway] font-bold text-center"
				>
					{m.faq_h2a()}
					<br />
					<div class="h-2"></div>
					<span
						class="text-custom-h font-[Raleway] text-center font-normal text-lg md:text-xl lg:text-2xl xl:text-3xl"
					>
						{m.faq_h2b()}
					</span>
				</h2>

				<div class="h-12"></div>

				{#each items as item, i}
					<FaqAccordion
						question={item.question}
						answer={item.answer}
						open={openIndex === i}
						toggle={() => toggle(i)}
						isFirst={i === 0}
					/>
				{/each}

				<div class="h-6 lg:h-12"></div>
			</Padding>
		</div>
	</section>
</div>
