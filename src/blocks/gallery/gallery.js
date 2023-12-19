import lightGallery from 'lightgallery'; 
import lgVideo from 'lightgallery/plugins/video'
import enquire from 'enquire.js';
import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';

(() => {

	document.querySelectorAll('.gallery__slider.swiper')?.forEach((item, i) => {

		const enableSwiper = () => {
			return new Swiper(item, {
				modules: [Navigation, EffectFade],
				spaceBetween: 0,
				slidesPerView: 1,
				nested: true,
				effect: "fade",
				fadeEffect: { crossFade: true },
				navigation: {
					prevEl: `.gallery__navi_${i} .gallery__button_prev`,
					nextEl: `.gallery__navi_${i} .gallery__button_next`
				},
				on: {
					beforeInit: function(slider) {
						const prev = document.createElement('button');
						const next = document.createElement('button');
						item.navigation = document.createElement('div');
	
						item.navigation.className = `gallery__navi gallery__navi_${i}`;
						prev.className = 'gallery__button gallery__button_prev';
						next.className = 'gallery__button gallery__button_next';
	
						if (item.querySelectorAll('.swiper-slide').length > 1) {
							item.navigation.append(prev);
							item.navigation.append(next);
							slider.el.after(item.navigation);
						}
					},
				}
			});
		}

		enquire.register("screen and (min-width: 641px)", {
			match: function() {
				item.swiper = enableSwiper();
			},
			unmatch: function() {
				if (item.swiper !== undefined ) {
					item.swiper.destroy(true, true);
					item.navigation.remove();
				}
			}
		});
	
		lightGallery(item.querySelector('.swiper-wrapper'), {
			plugins: [lgVideo],
		});		
	});

})();
