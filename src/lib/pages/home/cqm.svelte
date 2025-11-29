<script>
	import { HomeNavigationTags } from '$lib/common/navigation';
	import Padding from '$lib/common/padding.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<div id={HomeNavigationTags.CQM} class="scroll-mt-16">
	<div class="bg-section-three text-section-two-text">
		<Padding hasDoublePadding={true}>
			<div class="h-12 lg:h-24"></div>
			<h2
				class="text-custom-h text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[Raleway] font-bold text-center"
			>
				{m.cqm_h2a()}<br />
				<div class="h-2"></div>
				<span
					class="text-custom-h font-[Raleway] text-center font-normal text-lg md:text-xl lg:text-2xl xl:text-3xl"
				>
					{m.cqm_h2b()}
				</span>
			</h2>
			<div class="h-12"></div>

			<p class="text-md lg:text-lg mb-4 text-justify">
				{m.cqm_p1()}
			</p>
			<p class="text-md lg:text-lg mb-4 text-justify">
				{m.cqm_p2()}
			</p>
			<p class="text-md lg:text-lg mb-4 text-justify">
				{m.cqm_p3()}
			</p>
			<div class="h-6"></div>

			<p class="text-md lg:text-lg mb-4 text-secondary"><strong>{m.cqm_p4()}</strong></p>
			<ul class="list-disc list-outside space-y-2 text-md lg:text-lg mb-4">
				<li>{m.cqm_bullet_point1()}</li>
				<li>{m.cqm_bullet_point2()}</li>
				<li>{m.cqm_bullet_point3()}</li>
				<li>{m.cqm_bullet_point4()}</li>
				<li>{m.cqm_bullet_point5()}</li>
				<li>{m.cqm_bullet_point6()}</li>
			</ul>
			<div class="h-6"></div>
			<p class="text-md lg:text-lg mb-4 text-justify">
				{m.cqm_p5()}
			</p>
			<div class="h-6 lg:h-12"></div>
		</Padding>
	</div>
</div>
