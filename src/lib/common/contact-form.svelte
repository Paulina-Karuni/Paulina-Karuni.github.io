<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	let submitted = false;
	let error = false;

	async function handleSubmit(event) {
		event.preventDefault(); // Stop default form submission

		const form = event.target;
		const formData = new FormData(form);

		error = false;
		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData
			});

			const result = await res.json();

			if (result.success) {
				submitted = true;
				// form.reset(); // Optionally reset form
			} else {
				error = true;
			}
		} catch (err) {
			error = true;
		}
	}
</script>

{#if submitted}
	<div class="flex items-center justify-center h-64 text-md md:text-lg text-dark-olive-black">
		{m.contact_form_submit_success()}
	</div>
{:else}
	<div>
		<form class="flex flex-col gap-6" on:submit={handleSubmit}>
			<!-- Web3Forms access key -->
			<input type="hidden" name="access_key" value="c1268531-1a30-4cae-a9c9-0ccff7b1b9d0" />
			<!-- Honeypot -->
			<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />

			<!-- Name -->
			<input
				type="text"
				name="name"
				required
				placeholder={m.contact_form_name()}
				class="w-full bg-transparent border-b border-dark-olive-black focus:outline-none focus:border-primary text-dark-olive-black py-2 transition-colors"
			/>

			<!-- Email -->
			<div>
				<input
					type="email"
					name="email"
					required
					placeholder={m.contact_form_email()}
					class="w-full bg-transparent border-b border-dark-olive-black focus:outline-none focus:border-primary text-dark-olive-black py-2 transition-colors"
				/>
				<div class="hidden validator-hint text-sm text-error mt-1">
					{m.contact_form_email_validation_error()}
				</div>
			</div>

			<!-- Message -->
			<textarea
				name="message"
				required
				rows="6"
				placeholder={m.contact_form_message()}
				class="w-full bg-transparent border-b border-dark-olive-black focus:outline-none focus:border-primary text-dark-olive-black py-2 transition-colors resize-none"
			></textarea>

			<!-- Submit Button -->
			<button type="submit" class="w-full btn btn-primary font-normal">
				{m.contact_form_submit()}
			</button>
			<div class="h-4"></div>
		</form>
		{#if error}
			<p class="text-md md:text-lg text-dark-olive-black">{m.contact_form_submit_error()}</p>
			<div class="h-4"></div>
		{/if}
	</div>
{/if}
