<script>
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { NavigationLinks } from './navigation';
</script>

<footer class="footer mt-auto sm:footer-horizontal bg-base-200 items-center p-4">
	<div class="flex flex-row gap-8 justify-self-center">
		<a class="text-base-300" href={localizeHref(NavigationLinks.Impressum)}
			>{m.footer_impressum()}</a
		>
		<a class="text-base-300" href={localizeHref(NavigationLinks.Datenschutz)}
			>{m.footer_datenschutz()}</a
		>
	</div>
</footer>
