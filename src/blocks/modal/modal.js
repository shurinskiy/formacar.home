import scrollLock from 'scroll-lock';
import { makeModalFrame } from "../../js/libs/modal";
import { selectTweaker } from "../../js/libs/selectTweaker";

(() => {
	
	const modal = makeModalFrame({ 
		select: '[data-modal]', 
		scrollLock,
		open: function() {
			selectTweaker(this.querySelectorAll('.form__field_select'));

			form.addEventListener('submit', (e) => {
				e.preventDefault();
				
				// Wellcome here!
			});
		}
	});

})();