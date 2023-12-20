import "./polyfills.js";
import "./blocks.js";
import "../../node_modules/swiped-events/dist/swiped-events.min.js";
import { scrollClassToggle } from "../js/libs/scroll";
import enquire from 'enquire.js';
import Swiper from 'swiper';
// import { Mousewheel, Pagination, EffectFade, Keyboard } from 'swiper/modules';
import { Mousewheel, EffectFade, Keyboard } from 'swiper/modules';

/* Тут можно писать код общий для всего проекта и требующий единого пространства имен */

(() => {
	let mainSwiper;
	const toggle = scrollClassToggle({ class: 'showed' });
	const heroButton = document.querySelector('a.hero__button[href="#last"]');
	const toProjectsButton = document.querySelector('a.hero__down[href="#first"]');
	const slidesCount = document.querySelectorAll('.main__section').length - 1;
	const sections = document.querySelectorAll('.main__section');
	const logos = document.querySelectorAll('.header__logo');

	const clearClasses = (items, cls = 'header__logo_showed') => {
		if (items)
			[...items].forEach(item => item.classList.remove(cls));
	}

	const classesToggle = (sw) => {
		sw.slides.forEach((slide, index) => {
			clearClasses(logos);
			logos[sw.activeIndex - 1]?.classList.add('header__logo_showed');

			slide.querySelectorAll('[data-animation]').forEach((item) => {
				item.classList[(index === sw.activeIndex) ? 'add': 'remove']('showed');
			});
		});
	}

	const enableMainSwiper = () => {
		return new Swiper(".main.swiper", {
			// modules: [Mousewheel, Pagination, EffectFade, Keyboard],
			modules: [Mousewheel, EffectFade, Keyboard],
			slidesPerView: 1,
			speed: 800,
			direction: 'vertical',
			mousewheel: true,
			effect: "fade",
			fadeEffect: { crossFade: true },
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			/* pagination: {
				el: '.main__dots',
				clickable: true,
				bulletClass: 'main__dot',
				bulletActiveClass: 'active'
			}, */
			on: {
				afterInit: classesToggle,
				activeIndexChange: classesToggle
			}
		});
	}
	
	enquire.register("screen and (min-width: 1101px)", {
		match: function() {
			mainSwiper = enableMainSwiper();
			heroButton?.addEventListener('click', () => mainSwiper.slideTo(slidesCount, 800));
			toProjectsButton?.addEventListener('click', () => mainSwiper.slideNext());
		},
		unmatch: function() {
			if (mainSwiper !== undefined ) {
				mainSwiper.destroy(true, true);
			}

			clearClasses(logos);
			toggle.init();
		}
	});


	if (sections && logos) {
		let observer = new IntersectionObserver((entires, observer) => {
			entires.forEach(({ isIntersecting, target: { index } }) => {
				if (isIntersecting) {
					clearClasses(logos);
					logos[index - 1]?.classList.add('header__logo_showed');
				}
			});
		}, { threshold: 0.5 });
		
		sections.forEach((section, i) => { 
			section.index = i;
			observer.observe(section);
		});
	}

})();