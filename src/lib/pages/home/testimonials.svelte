<script lang="ts">
	import image1 from '$lib/assets/images/testimonial1.webp';
	import image2 from '$lib/assets/images/testimonial2.webp';
	import image3 from '$lib/assets/images/testimonial3.webp';
	import { HomeNavigationTags } from '$lib/common/navigation';
	import { m } from '$lib/paraglide/messages';

	const testimonials = [
		{
			title: m.testimonials_title1(),
			image: image1,
			text: [m.testimonials_text1_par1(), m.testimonials_text1_par2(), m.testimonials_text1_par3()],
			alt: m.testimonials_image1_alt()
		},
		{
			title: m.testimonials_title2(),
			image: image2,
			text: [m.testimonials_text2_par1(), m.testimonials_text2_par2(), m.testimonials_text2_par3()],
			alt: m.testimonials_image2_alt()
		},
		{
			title: m.testimonials_title3(),
			image: image3,
			text: [m.testimonials_text3_par1(), m.testimonials_text3_par2(), m.testimonials_text3_par3()],
			alt: m.testimonials_image3_alt()
		}
	];

	let currentSlide = 0;

	function prevSlide() {
		goToSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
	}

	function nextSlide() {
		goToSlide((currentSlide + 1) % testimonials.length);
	}

	function goToSlide(index: number) {
		currentSlide = index;
		const container = document.querySelector('.carousel');
		const slide = document.getElementById('slide' + index);
		if (container && slide) {
			container.scrollTo({
				left: slide.offsetLeft,
				behavior: 'smooth'
			});
		}
	}
</script>

<section
	id={HomeNavigationTags.References}
	class="w-full min-h-screen flex flex-col justify-center items-center bg-section-testimonials px-6 py-20"
>
	<h2
		class="text-custom-h text-xl md:text-2xl lg:text-3xl xl:text-4xl font-[Raleway] font-bold text-center"
	>
		{m.testimonials_h2a()}<br />
		<div class="h-2"></div>
		<span
			class="text-custom-h font-[Raleway] text-center font-normal text-lg md:text-xl lg:text-2xl xl:text-3xl"
		>
			{m.testimonials_h2b()}
		</span>
	</h2>
	<div class="h-12"></div>

	<div class="relative w-full max-w-5xl mx-auto flex items-center justify-center">
		<div class="carousel w-full rounded-xl shadow-lg overflow-hidden relative bg-warm-white">
			{#each testimonials as t, i}
				<div
					id={'slide' + i}
					class="carousel-item relative w-full flex-shrink-0 flex flex-col items-center justify-start"
				>
					<div class="card w-full bg-warm-white rounded-xl overflow-hidden flex flex-col">
						<div class="relative w-full h-56 md:h-80 lg:h-100 overflow-hidden">
							<img src={t.image} alt={t.alt} class="w-full h-full object-cover object-top" />

							<div
								class="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2 z-10"
							>
								<button
									on:click={prevSlide}
									class="btn btn-circle bg-transparent border-2 hover:bg-white border-white text-white hover:text-primary"
									>❮
								</button>
								<button
									on:click={nextSlide}
									class="btn btn-circle bg-transparent border-2 hover:bg-white border-white text-white hover:text-primary"
									>❯
								</button>
							</div>
						</div>

						<div class="px-6 md:px-10 py-10 flex flex-col items-center justify-center text-left">
							<p
								class="text-lg md:text-xl lg:text-2xl font-semibold text-custom-h mb-6 text-center"
							>
								{t.title}
							</p>

							<div class="space-y-4">
								{#each t.text as paragraph}
									<p
										class="text-sm md:text-base lg:text-lg leading-relaxed text-dark-olive-black text-justify"
									>
										{paragraph}
									</p>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
