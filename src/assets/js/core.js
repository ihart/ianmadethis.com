var IMT = IMT || {};


(function (window, document, Modernizr, undefined) {

	"use strict";

	// Quick and dirty feature detection.
	if (!('addEventListener' in window) || !('querySelector' in document)) {

		return false;

	} else {

		document.querySelector('body').classList.add('is-enhanced');

		// Initialise Click & Reveal functionality.
		var asterix = document.querySelectorAll('[data-click-reveal-target]');

		_.each(asterix, function (el) {

			new IMT.ClickReveal(el);

		});

	}

}(this, this.document, Modernizr));