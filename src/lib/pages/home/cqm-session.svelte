<script lang="ts">
	import image from '$lib/assets/images/zen-garden.webp';
	import { generateHomeNavTag, HomeNavigationTags } from '$lib/common/navigation';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<div id={HomeNavigationTags.Session} class="scroll-mt-16">
	<div class="bg-section-three text-section-three-text">
		<div class="flex flex-col lg:flex-row min-h-[80vh] lg:min-h-screen">
			<div class="relative w-full lg:w-1/2 h-[300px] lg:h-auto">
				<img
					src={image}
					alt={m.cqm_session_image_alt()}
					class="absolute inset-0 w-full h-full object-cover"
				/>
			</div>

			<div class="flex flex-col justify-center w-full lg:w-1/2 px-6 py-12 lg:px-16 xl:px-32">
				<h2
					class="text-custom-h text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[Raleway] font-bold text-center"
				>
					{m.cqm_session_h2a()}
					<br />
					<div class="h-2"></div>
					<span
						class="text-custom-h font-[Raleway] text-center font-normal text-lg md:text-xl lg:text-2xl xl:text-3xl"
					>
						{m.cqm_session_h2b()}
					</span>
				</h2>

				<div class="h-8 lg:h-16"></div>

				<div class="flex flex-col items-start space-y-6 text-base lg:text-xl">
					<div>
						<p class="font-semibold text-secondary">{m.cqm_session_place()}</p>
						<p>
							{m.cqm_session_address_office()}<br />
							{m.cqm_session_address_street()}<br />
							{m.cqm_session_address_zip_code()}
						</p>
					</div>
					<div class="h-0 lg:h-4"></div>

					<div>
						<p class="font-semibold text-secondary">{m.cqm_session_online()}</p>
						<p>{m.cqm_session_online_description()}</p>
					</div>
					<div class="h-0 lg:h-4"></div>

					<p class="text-justify">
						{m.cqm_session_p1()}
						{m.cqm_session_p2a()}
						<strong>{m.cqm_session_p2b()}</strong>
						{m.cqm_session_p3()}
					</p>

					<div class="pt-6 w-full flex flex-col items-center gap-8 justify-center">
						<a
							href={localizeHref(generateHomeNavTag(HomeNavigationTags.Contact))}
							class="btn btn-primary btn-lg"
						>
							{m.cqm_session_cta_button()}
						</a>

						<a
							href={localizeHref(generateHomeNavTag(HomeNavigationTags.Contact))}
							class="btn btn-outline btn-primary btn-lg"
						>
							{m.cqm_test_session_cta_button()}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
