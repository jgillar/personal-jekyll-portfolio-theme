window.addEventListener("load", () => {
	//make project page images equal height
	if (document.body.className.indexOf("project") != -1) {
		let images = document.querySelectorAll(".screenshot-row img");
		images.forEach(img => {
			let aspectRatio = img.width / img.height;
			img.parentElement.style.flex = aspectRatio + " 1 0";
		});
	}

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
});
