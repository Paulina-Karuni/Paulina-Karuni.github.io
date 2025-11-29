<script lang="ts">
	import HomeContent from '$lib/pages/home/home-content.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.metadata_title()}</title>
	<meta name="description" content={m.metadata_description()} />
	<meta property="og:title" content={m.metadata_title()} />
	<meta property="og:description" content={m.metadata_description()} />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@id": "https://www.paulina-karuni.de#business",
			"@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
			"name": "Paulina Karuni – CQM Coaching",
			"image": "https://www.paulina-karuni.de/schema.png",
			"url": "https://www.paulina-karuni.de",
			"alternateName": "https://www.quantenmethode-cqm.de",
			"description": "CQM-Coaching mit Paulina Karuni: Chinesische Quantum Methode zur Auflösung innerer Blockaden und Aktivierung der Selbstheilungskräfte.",
			"address": {
				"@type": "PostalAddress",
				"name": "Naturheilpraxis am Engelbecken",
				"streetAddress": "Heinrich-Heine-Str. 21",
				"postalCode": "10179",
				"addressLocality": "Berlin",
				"addressCountry": "DE"
			},
			"email": "paulina.karuni@gmail.com",
			"sameAs": ["https://www.instagram.com/paulina.karuni"]
		}
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Paulina Karuni",
			"jobTitle": "CQM Coachin",
			"description": "Paulina Karuni unterstützt mit der Chinesischen Quantum Methode (CQM) Menschen dabei, innere Blockaden zu lösen, Energien auszugleichen und ihre Selbstheilungskräfte zu aktivieren.",
			"url": "https://www.paulina-karuni.de",
			"email": "paulina.karuni@gmail.com",
			"worksFor": {
				"@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
				"@id": "https://www.paulina-karuni.de#business",
				"name": "Paulina Karuni – CQM Coaching",
				"url": "https://www.paulina-karuni.de"
			},
			"address": {
				"@type": "PostalAddress",
				"name": "Naturheilpraxis am Engelbecken",
				"streetAddress": "Heinrich-Heine-Str. 21",
				"postalCode": "10179",
				"addressLocality": "Berlin",
				"addressCountry": "DE"
			},
			"sameAs": ["https://www.instagram.com/paulina.karuni"]
		}
	</script>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Paulina Karuni – CQM Coaching",
			"url": "https://www.paulina-karuni.de",
			"alternateName": "https://www.quantenmethode-cqm.de",
			"inLanguage": "de",
			"description": "CQM-Coaching mit Paulina Karuni: Blockaden lösen, Energien ausgleichen und Wohlbefinden stärken durch die Chinesische Quantum Methode.",
			"publisher": {
				"@type": "Person",
				"name": "Paulina Karuni",
				"url": "https://www.paulina-karuni.de",
				"sameAs": ["https://www.instagram.com/paulina.karuni"]
			},
			"mainEntity": {
				"@type": "WebPage",
				"@id": "https://www.paulina-karuni.de#webpage",
				"url": "https://www.paulina-karuni.de",
				"name": "Startseite",
				"description": "CQM-Coaching und energetische Transformation mit Paulina Karuni – für mehr Balance, Klarheit und Lebensfreude."
			},
			"hasPart": [
				{
					"@type": "WebPage",
					"@id": "https://www.paulina-karuni.de/impressum",
					"url": "https://www.paulina-karuni.de/impressum",
					"name": "Impressum"
				},
				{
					"@type": "WebPage",
					"@id": "https://www.paulina-karuni.de/datenschutz",
					"url": "https://www.paulina-karuni.de/datenschutz",
					"name": "Datenschutzerklärung"
				}
			]
		}
	</script>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "Was ist CQM?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Die Chinesische Quantum Methode (CQM) ist angewandte Quantenphysik zur Förderung von Gesundheit und Wohlbefinden. Sie unterstützt dabei, innere Blockaden aufzulösen, Energien in Einklang zu bringen und die Selbstheilungskräfte zu aktivieren."
					}
				},
				{
					"@type": "Question",
					"name": "Für welche Herausforderungen eignet sich CQM?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Mit der Chinesischen Quantum Methode (CQM) können vielfältige Themen bearbeitet werden – von Stress, Ängsten, materiellen und emotionalen Blockaden über einschränkende Glaubenssätze bis hin zu körperlichem Unwohlsein. Auch Leistungssteigerung, persönliche Entwicklung und Harmonisierung von Beziehungen sind mögliche Anwendungsfelder. Ziel ist es, verborgene Ursachen zu erkennen und aufzulösen, um mehr Balance und Wohlbefinden zu erreichen."
					}
				},
				{
					"@type": "Question",
					"name": "Wo und wie passiert eine CQM-Sitzung?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "CQM-Coachings finden online via Zoom oder vor Ort in einer Heilpraktikerpraxis in Berlin-Mitte statt. Die Sitzungen können auf Deutsch, Englisch oder Polnisch durchgeführt werden. Die energetischen Korrekturen erfolgen aus technischen Gründen immer auf Deutsch, unabhängig von der Gesprächssprache."
					}
				},
				{
					"@type": "Question",
					"name": "Wie verläuft eine CQM-Sitzung?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Eine CQM-Sitzung beginnt mit einem Gespräch zur Klärung deines Anliegens. Danach werden energetische Blockaden mithilfe von Fragetechniken und intuitiver Wahrnehmung getestet. Die Korrekturen erfolgen direkt im Prozess und werden sofort überprüft. Du bist durchgehend aktiv eingebunden. Abschließend werden die Ergebnisse besprochen."
					}
				},
				{
					"@type": "Question",
					"name": "Wann spüre ich erste Veränderungen?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Viele Klienten erleben bereits nach 1–2 Sitzungen eine spürbare Veränderung wie mehr Klarheit und Leichtigkeit. Die Wirkung hängt jedoch vom jeweiligen Thema ab."
					}
				},
				{
					"@type": "Question",
					"name": "Funktioniert CQM auch online?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Ja, CQM funktioniert auch online, da es auf energetischer und nicht auf körperlicher Ebene arbeitet. Online-Sitzungen sind genauso wirksam wie persönliche Treffen."
					}
				}
			]
		}
	</script>
</svelte:head>
<HomeContent />
