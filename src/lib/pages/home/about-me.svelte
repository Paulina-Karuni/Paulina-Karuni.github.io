<script lang="ts">
	import logoText from '$lib/assets/images/logo-text.svg';
	import avatar from '$lib/assets/images/paulina-karuni.webp';
	import { HomeNavigationTags } from '$lib/common/navigation';
	import { m } from '$lib/paraglide/messages';
</script>

<div id={HomeNavigationTags.About} class="scroll-mt-16">
	<div id="about-me" class="bg-custom-section-about-me text-base-300">
		<div class="grid grid-cols-1 place-contents-center lg:grid-cols-2 gap-8 xl:gap-0">
			<div class="leading-none place-self-center">
				<div class="pl-8 pr-8 lg:pr-0">
					<div class="h-16"></div>

					<div class="lg:pl-8 xl:pl-16 2xl:pl-32">
						<div class="flex flex-col items-center text-center">
							<img src={logoText} alt={m.introduction_logo_text_alt()} class="h-6 md:h-10 w-auto" />
							<div class="h-3"></div>
							<h2 class="text-custom-h text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-[Raleway]">
								{m.about_me_h2()}
							</h2>
						</div>

						<div class="h-8 md:h-16"></div>

						<div class="space-y-8">
							{#each [m.about_me_p1(), m.about_me_p2(), m.about_me_p3(), m.about_me_p4()] as p}
								<p class="text-base lg:text-md 2xl:text-lg text-justify">{p}</p>
							{/each}
						</div>
					</div>

					<div class="h-6 lg:h-12"></div>
				</div>
			</div>

			<div class="grid place-items-center lg:place-items-center xl:place-items-end">
				<div class="w-full md:max-w-[570px]">
					<img src={avatar} alt={m.about_me_avatar_alt()} class="w-full h-auto object-cover" />
				</div>
			</div>
		</div>
	</div>
</div>
