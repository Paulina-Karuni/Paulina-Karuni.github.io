<script lang="ts">
	import ContactForm from '$lib/common/contact-form.svelte';
	import { HomeNavigationTags } from '$lib/common/navigation';
	import { m } from '$lib/paraglide/messages';
</script>

<div id={HomeNavigationTags.Contact} class="scroll-mt-16">
	<div
		class="w-full flex flex-col items-center px-6 md:px-12 bg-section-contact text-dark-olive-black"
	>
		<div class="h-12 lg:h-24"></div>
		<h2
			class="text-custom-h text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[Raleway] font-bold mb-8"
		>
			{m.contact_h2a()}
			<!-- <br /> -->
			<!-- <span
				class="text-custom-h font-[Raleway] font-normal text-lg md:text-xl lg:text-2xl xl:text-3xl"
			>
				{m.contact_h2b()}
			</span> -->
		</h2>
		<div class="h-4 md:h-8"></div>

		<p class="text-justify text-md lg:text-lg max-w-4xl mx-auto text-dark-olive-black">
			{m.contact_par1()}
			<br /><br />
			{m.contact_par1a()}

			<strong> {m.contact_par2b()}</strong>
			{m.contact_par2c()}
			<strong>{m.contact_par2d()}</strong>
			{m.contact_par2e()}
			{m.contact_par2f()}
			{m.contact_par2g()}
		</p>
		<div class="h-14"></div>
		<p class="text-justify text-xl lg:text-2xl font-semibold text-secondary max-w-3xl mx-auto">
			„{m.contact_subtitle()}“
		</p>

		<div class="h-4 md:h-8"></div>

		<div class="w-full max-w-xl mb-8 mt-8">
			<ContactForm />
		</div>
		<div class="h-0 md:h-8"></div>

		<div class="flex flex-row items-start md:items-center gap-4 md:gap-8 text-center">
			<div class="flex items-center gap-1 md:gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-4 h-4 md:w-8 md:h-8 text-secondary"
				>
					<circle cx="12" cy="12" r="4" />
					<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
				</svg>
				<a
					href="mailto:paulina.karuni@gmail.com"
					class="text-secondary hover:underline transition text-base md:text-lg lg:text-xl"
				>
					paulina.karuni@gmail.com
				</a>
			</div>

			<div class="flex items-center gap-1 md:gap-2">
				<a
					href="https://www.instagram.com/paulina.karuni"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
					class="w-4 h-4 md:w-8 md:h-8 text-secondary transition"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
						class="w-full h-full"
					>
						<path
							d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.6.3 1 .7 1.4 1.3.4.5.6 1.3.7 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.6-.7 1-1.3 1.4-.5.4-1.3.6-2.5.7-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1-.7-1.4-1.3-.4-.5-.6-1.3-.7-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.6.7-1 1.3-1.4.5-.4 1.3-.6 2.5-.7C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.5.2 4.4.5 3.6.9c-.9.4-1.6 1.1-2 2C1.1 4.4.8 5.5.7 7 .6 8.3.6 8.7.6 12s0 3.7.1 5c.1 1.5.4 2.6.9 3.4.4.9 1.1 1.6 2 2 .9.4 2 .7 3.4.8 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.5-.1 2.6-.4 3.4-.8.9-.4 1.6-1.1 2-2 .4-.9.7-2 .8-3.4.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.5-.4-2.6-.8-3.4-.4-.9-1.1-1.6-2-2-.9-.4-2-.7-3.4-.8C15.7 0 15.3 0 12 0z"
						/>
						<path
							d="M12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z"
						/>
					</svg>
				</a>
				<a
					href="https://www.instagram.com/paulina.karuni"
					target="_blank"
					rel="noopener noreferrer"
					class="text-secondary hover:underline transition text-base md:text-lg lg:text-xl"
				>
					paulina.karuni
				</a>
			</div>
		</div>
		<div class="h-6 lg:h-12"></div>
	</div>
</div>
