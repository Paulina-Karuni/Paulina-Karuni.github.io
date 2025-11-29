<script lang="ts">
	import avatar from '$lib/assets/images/avatar.webp';
	import { generateHomeNavTag, HomeNavigationTags } from '$lib/common/navigation';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<div id={HomeNavigationTags.Introduction} class="scroll-mt-16">
	<div class="bg-base-100 text-base-300 w-full">
		<!-- xl:grid-cols-[40%_60%] -->
		<div
			class="grid grid-cols-1 gap-8 md:gap-16 place-contents-center lg:grid-cols-2 xl:grid-cols-[50%_50%] xl:gap-0"
		>
			<!-- Headers & Text -->
			<div class="leading-none place-self-center pr-8">
				<!-- TODO Add padding on mobile to the right -->
				<div class="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 lg:pr-0">
					<div class="h-8"></div>
					<h1
						class="text-custom-h text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-[Raleway]"
					>
						{m.introduction_h1()}
					</h1>
					<div class="h-3"></div>
					<h2 class="text-custom-h text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[Raleway]">
						{m.introduction_h2()}
					</h2>
					<div class="h-8"></div>

					<div class="space-y-6">
						<p class="text-base lg:text-lg text-justify">
							{m.introduction_p1()}
						</p>
						<p class="text-base lg:text-lg text-justify">
							{m.introduction_p2()}
						</p>
						<p class="text-base lg:text-lg text-secondary">{m.introduction_p3()}</p>

						<p class="text-base lg:text-lg text-justify">
							{m.introduction_p5()}
						</p>

						<div class="flex gap-4">
							<a
								href={localizeHref(generateHomeNavTag(HomeNavigationTags.CQM))}
								class="btn btn-primary font-normal">{m.introduction_button_more_about_cqm()}</a
							>
							<a
								href={localizeHref(generateHomeNavTag(HomeNavigationTags.About))}
								class="btn btn-outline font-normal">{m.introduction_button_about_me()}</a
							>
						</div>
						<div class="h-6 lg:h-12"></div>
					</div>
				</div>
			</div>

			<div class="grid place-items-center xl:place-items-end">
				<div class="w-full md:max-w-[620px] overflow-hidden">
					<img src={avatar} alt={m.introduction_avatar_alt()} class="w-full h-auto object-cover" />
				</div>
			</div>
		</div>
	</div>
</div>
