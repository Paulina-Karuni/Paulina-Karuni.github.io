<script lang="ts">
	import logo from '$lib/assets/images/logo-icon.svg';
	import logoText from '$lib/assets/images/logo-text.svg';

	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { generateHomeNavTag, HomeNavigationTags } from './navigation';
	import ThemeToggler from './theme-toggler.svelte';

	let drawerState = $state(false);
</script>

<div class="drawer">
	<!-- Checkbox to control open/close state -->
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked={drawerState} />
	<!-- Navbar -->
	<div class="drawer-content flex flex-col">
		<nav class="flex-no-wrap fixed z-50 top-0 flex w-full h-16">
			<div class="navbar bg-base-200 w-full">
				<div class="flex-none md:hidden">
					<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block h-6 w-6 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</label>
				</div>
				<a class="mx-2 px-2" href={localizeHref('/')}>
					<img src={logo} alt={m.introduction_logo_alt()} class="h-12 w-12" />
				</a>
				<a class="mx-2 px-2" href={localizeHref('/')}>
					<img
						src={logoText}
						alt={m.introduction_logo_text_alt()}
						class="h-6 w-auto hidden xl:block"
					/>
				</a>
				<!-- spacer to take up all unused width -->
				<div class="flex-1"></div>
				<!-- default color does not render on windows -->
				<div class="hidden flex-none md:block">
					<ul class="menu menu-horizontal">
						<!-- TODO close drawer on click???? -->
						<li>
							<a href={localizeHref(generateHomeNavTag(HomeNavigationTags.Introduction))}
								>{m.navigation_introduction()}</a
							>
						</li>
						<li>
							<a href={localizeHref(generateHomeNavTag(HomeNavigationTags.About))}
								>{m.navigation_about()}</a
							>
						</li>

						<li>
							<a href={localizeHref(generateHomeNavTag(HomeNavigationTags.CQM))}
								>{m.navigation_cqm()}</a
							>
						</li>
						<li>
							<a href={localizeHref(generateHomeNavTag(HomeNavigationTags.Session))}
								>{m.navigation_coaching()}</a
							>
						</li>
						<li>
							<a href={localizeHref(generateHomeNavTag(HomeNavigationTags.References))}
								>{m.navigation_references()}</a
							>
						</li>
						<li>
							<a href={localizeHref(generateHomeNavTag(HomeNavigationTags.Faq))}
								>{m.navigation_faq()}</a
							>
						</li>
					</ul>
				</div>

				<a
					href={localizeHref(generateHomeNavTag(HomeNavigationTags.Contact))}
					class="btn btn-primary font-normal">{m.navigation_contact()}</a
				>
				<div class="w-4"></div>
				<ThemeToggler />
			</div>
		</nav>
	</div>
	<!-- TODO Add x button to close the drawer -->
	<!-- Drawer -->
	<div class="drawer-side z-50">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>

		<!-- text-white is needed on iOS safari -->
		<ul class="menu bg-base-100 min-h-full w-80 p-4 gap-3">
			<a href={localizeHref('/')}>
				<div class="flex flex-col items-center justify-center space-y-4">
					<img src={logo} alt={m.introduction_logo_alt()} class="h-14 w-14" />

					<img src={logoText} alt={m.introduction_logo_text_alt()} class="h-6 w-auto" />
				</div>
			</a>
			<div class="h-2"></div>
			<li>
				<a
					onclick={() => (drawerState = false)}
					href={localizeHref(generateHomeNavTag(HomeNavigationTags.Introduction))}
					>{m.navigation_introduction()}</a
				>
			</li>
			<li>
				<a
					onclick={() => (drawerState = false)}
					href={localizeHref(generateHomeNavTag(HomeNavigationTags.About))}
					>{m.navigation_about()}</a
				>
			</li>

			<li>
				<a
					onclick={() => (drawerState = false)}
					href={localizeHref(generateHomeNavTag(HomeNavigationTags.CQM))}>{m.navigation_cqm()}</a
				>
			</li>
			<li>
				<a
					onclick={() => (drawerState = false)}
					href={localizeHref(generateHomeNavTag(HomeNavigationTags.Session))}
					>{m.navigation_coaching()}</a
				>
			</li>
			<li>
				<a
					onclick={() => (drawerState = false)}
					href={localizeHref(generateHomeNavTag(HomeNavigationTags.References))}
					>{m.navigation_references()}</a
				>
			</li>
			<li>
				<a
					onclick={() => (drawerState = false)}
					href={localizeHref(generateHomeNavTag(HomeNavigationTags.Faq))}>{m.navigation_faq()}</a
				>
			</li>
			<li>
				<a
					onclick={() => (drawerState = false)}
					href={localizeHref(generateHomeNavTag(HomeNavigationTags.Contact))}
					>{m.navigation_contact()}</a
				>
			</li>
			<div class="h-1"></div>

			<!-- <button class="btn btn-primary">{m.navigation_contact()}</button> -->
		</ul>
	</div>
</div>
<!-- spacer to ensure content is not below nav bar -->
<div class="h-16"></div>
