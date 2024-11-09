/* =--------------------------------------= Load Document =------------------= */
window.addEventListener("load", function() {

	/* =--------------------------------------= Add Background To NavBar On Scroll =------------------= */
	let header = document.querySelector("header");
	window.onscroll = function() {
		if (this.scrollY >= 80) {
			header.classList.add("active");
		} else {
			header.classList.remove("active");
		}
	}

	/* =--------------------------------------= Particles Animation In Background =------------------= */
	const particleContainer = document.querySelector("#particles-animation");
	function resizeParticleContainer() {
		particleContainer.style.height = `${document.body.scrollHeight}rem`;
	}
	function createParticle() {
		const particle = document.createElement("div");
		particle.classList.add("particle");
		const particleSize = Math.random() * 0.45;
		particle.style.width = `${particleSize}rem`;
		particle.style.height = `${particleSize}rem`;
		particle.style.backgroundColor = `rgba(29, 243, 201, ${Math.random() * 0.7})`;
		particle.style.position = "absolute";
		particle.style.top = `${Math.random() * 100}%`;
		particle.style.left = `${Math.random() * 100}%`;
		particle.style.borderRadius = "50%";
		particleContainer.appendChild(particle);
		setTimeout(() => {
			particle.remove();
		}, 3000);
	}
	if (!createParticle()) {
		setInterval(createParticle, 100);
	} else {
		resizeParticleContainer();
		window.addEventListener("resize", resizeParticleContainer);
		setInterval(createParticle, 100);
	}

});