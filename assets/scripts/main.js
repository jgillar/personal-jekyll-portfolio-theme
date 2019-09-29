// animate smooth scrolling to an element on the page
// adapted from here: https://jsfiddle.net/s61x7c4e/
let doScrolling = (element, duration) => {
	if (element == null) {
		return false;
	}
	let startingY = window.pageYOffset;
	let elementY = window.pageYOffset + element.getBoundingClientRect().top;
	// If element is close to page's bottom then window will scroll only to some position above the element.
	let targetY =
		document.body.scrollHeight - elementY < window.innerHeight
			? document.body.scrollHeight - window.innerHeight
			: elementY;
	let diff = targetY - startingY;
	// Easing function: easeInOutCubic
	// From: https://gist.github.com/gre/1650294
	let easing = t => {
		return t < 0.5
			? 4 * t * t * t
			: (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
	};
	let start;

	if (!diff) return;

	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
		if (!start) start = timestamp;
		// Elapsed miliseconds since start of scrolling.
		let time = timestamp - start;
		// Get percent of completion in range [0, 1].
		let percent = Math.min(time / duration, 1);
		// Apply the easing.
		// It can cause bad-looking slow frames in browser performance tool, so be careful.
		percent = easing(percent);

		window.scrollTo(0, startingY + diff * percent);

		// Proceed with animation as long as we wanted it to.
		if (time < duration) {
			window.requestAnimationFrame(step);
		}
	});
};

window.addEventListener("load", () => {
	let navigationLinks = document.querySelectorAll("#main-navigation a");
	console.log(navigationLinks);
	navigationLinks.forEach(link => {
		link.addEventListener("click", function() {
			let target = this.href.slice(this.href.indexOf("#") + 1);
			doScrolling(document.getElementById(target), 1250);
			return false;
		});
	});

	//make project page images equal height
	if (document.body.className.indexOf("project") != -1) {
		let images = document.querySelectorAll(".screenshot-row img");
		images.forEach(img => {
			let aspectRatio = img.width / img.height;
			img.parentElement.style.flex = aspectRatio + " 1 0";
		});

		//lightbox
		//querySelectorAll returns a NodeList so we need to conver it to an array
		let imgListArr = [].slice.call(
			document.querySelectorAll(".screenshot-list img")
		);
		let imgList = imgListArr.map(img => img.src);
		let SimpleLightbox = window.SimpleLightbox;
		imgListArr.forEach((img, index) => {
			img.addEventListener("click", function(event) {
				SimpleLightbox.open({
					items: imgList,
					startAt: index
				});
			});
		});
	}

	//contact footer
	//encode email info so spambots can't get it
	let address = "amFtaWUuZ2lsbGFyQGdtYWlsLmNvbQ=="; //base64 encoded
	let start = "bWFpbHRv";
	let emailElement = document.getElementById("mail");
	emailElement.href = atob(start) + ":" + atob(address);
	emailElement.innerHTML = "" + atob(address);
});
