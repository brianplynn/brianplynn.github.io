let imgArr = Array.from(document.querySelectorAll(".carousel-item"));
let btnArr = Array.from(document.querySelectorAll(".navlink"));
let homeBtn = document.getElementById("home-btn");
let title = document.getElementById("title");
let carousel = document.getElementById("carousel-outer");
let currSlide = 0;
let navBar = document.getElementById("navbar");
navbar.classList.add("fade-in");
let overNavBar = false;
let moduleArr = document.querySelectorAll(".module");
let currMod;
let freelanceAnimated, aboutAnimated, socialAnimated, projectsAnimated;


for (let item of imgArr) {	
	item.addEventListener("click", changeModule);
}
for (let item of btnArr) {
	item.addEventListener("mouseenter", changePic);
	item.addEventListener("mouseleave", () => {
		$('#carousel-outer').carousel('cycle');
	});
	item.onmouseover = function () {
    	overNavBar = true;
	}
	item.onmouseout = function () {
	    overNavBar = false;
	}
	item.addEventListener("click", changeModule);
}

$('#carousel-outer').on('slide.bs.carousel', () => {
	if  (!overNavBar){
		currSlide++;
		if (currSlide > 3) currSlide = 0;
		changeColor();
	}
});

homeBtn.addEventListener("click", () => {
	currMod.style.display = "none";
	currMod.classList.remove("fade-in");
	currMod = undefined;
	navBar.classList.add("fade-in");
	navBar.classList.remove("fade-in2");
	homeBtn.style.display = "none";
	carousel.style.display = "block";
	carousel.classList.add("fade-in");
	title.style.display = "block";
	title.classList.add("fade-in");
})

function changeColor() {
	btnArr[currSlide].style.color = "#c6bba9";
	for (let item of btnArr) {
		if (btnArr.indexOf(item) != currSlide) item.style.color = "black";
	}
}
function changePic() {
	$("#carousel-outer").carousel('pause');
	currSlide = btnArr.indexOf(this);
	$("#carousel-outer").carousel(currSlide);
	changeColor();
	for (let item of subNavArr) {
		item.classList.add(".subnav-flex");
	}
}

function changeModule() {
	if (currMod) {
		currMod.style.display = "none";
		currMod.classList.remove("fade-in");
	}
	let modNum = Math.max(btnArr.indexOf(this), imgArr.indexOf(this))
	currMod = moduleArr[modNum];
	// max allows us to get real index, no matter if coming from module or button
	currMod.style.display = "flex";
	switch (modNum) {
		case 0:
			animateAbout();
			break;
		case 1:
			animateProjects();
			break;
		case 2:
			animateFreelance();
			break;
		case 3:
			animateSocial();
	}
	navBar.classList.add("fade-in2");
	navBar.classList.remove("fade-in");
	carousel.style.display = "none";
	title.style.display = "none"
	homeBtn.style.display = "inline-block";
}

function animateAbout() {
	console.log(window.innerWidth);
	console.log($(window).width());
	if (!aboutAnimated && $(window).width() > 981) {
		document.querySelector("about-module")
		document.querySelector(".about-header").classList.add("typewriter");
		let delay = 1.25;
		for (let item of Array.from(document.querySelectorAll(".right-element"))) {
			item.classList.add("fade-in-mod");
			item.style.animationDelay = `${delay}s`;
			delay += .25;
			item.addEventListener("animationend", () => {
				item.style.opacity = "1";
			});
		}
		delay = 1.3;
		for (let item of Array.from(document.querySelectorAll(".left-element"))) {
			item.classList.add("fade-in-mod");
			item.style.animationDelay = `${delay}s`;
			delay += .5;
			item.addEventListener("animationend", () => {
				item.style.opacity = "1";
			});
		}
		
		aboutAnimated = true;
	} else if (aboutAnimated && $(window).width() > 981 &&  document.querySelector(".about-header").classList.contains("typewriter")) {
		document.querySelector(".about-header").classList.remove("typewriter");
		for (let item of Array.from(document.querySelectorAll(".right-element"))) {
			item.classList.remove("fade-in-mod");
		}
		for (let item of Array.from(document.querySelectorAll(".left-element"))) {
			item.classList.remove("fade-in-mod");
		}
		currMod.classList.add("fade-in");
	} else {
		currMod.classList.add("fade-in");
	}
}
function animateProjects() {
	if (!projectsAnimated && $(window).width() > 981) {
		document.querySelector(".projects-header").classList.add("typewriter");
		let delay = 1.25;
		for (let item of Array.from(document.querySelectorAll(".modal-btn"))) {
			item.classList.add("fade-in-mod");
			item.style.animationDelay = `${delay}s`;
			delay += .5;
			item.addEventListener("animationend", () => {
				item.style.opacity = "1";
			});
		}
		projectsAnimated = true;
	} else if (projectsAnimated && $(window).width() > 981 && document.querySelector(".projects-header").classList.contains("typewriter")) {
		document.querySelector(".projects-header").classList.remove("typewriter");
		for (let item of Array.from(document.querySelectorAll(".modal-btn"))) {
			item.classList.remove("fade-in-mod");
		}
		currMod.classList.add("fade-in");
	} else {
		currMod.classList.add("fade-in");
	}
}

function animateSocial() {
	if (!socialAnimated && $(window).width() > 981) {
		document.querySelector(".social-header").classList.add("typewriter");
		let delay = 1.5;
		for (let item of Array.from(document.querySelectorAll(".social-btn"))) {
			item.classList.add("fade-in-mod");
			item.style.animationDelay = `${delay}s`;
			delay += .5;
			item.addEventListener("animationstart", () => {
				item.style.opacity = "1";
			});
		}
		socialAnimated = true;
	} else if (socialAnimated && $(window).width()> 981 && document.querySelector(".social-header").classList.contains("typewriter")) {
		document.querySelector(".social-header").classList.remove("typewriter");
		for (let item of Array.from(document.querySelectorAll(".social-btn"))) {
			item.classList.remove("fade-in-mod");
		}
		currMod.classList.add("fade-in");
	} else {
		currMod.classList.add("fade-in");
	}
}

function animateFreelance() {
	if (!freelanceAnimated && $(window).width() > 981) {
		document.querySelector(".freelance-header").classList.add("typewriter");
		let delay = 1.25;
		for (let item of Array.from(document.querySelectorAll(".freelance-modal-btn"))) {
			item.classList.add("fade-in-mod");
			item.style.animationDelay = `${delay}s`;
			delay += .5;
			item.addEventListener("animationend", () => {
				item.style.opacity = "1";
			});
		}
		freelanceAnimated = true;
	} else if (freelanceAnimated && $(window).width() > 981 && document.querySelector(".freelance-header").classList.contains("typewriter")) {
		document.querySelector(".freelance-header").classList.remove("typewriter");
		for (let item of Array.from(document.querySelectorAll(".freelance-modal-btn"))) {
			item.classList.remove("fade-in-mod");
		}
		currMod.classList.add("fade-in");
	} else {
		currMod.classList.add("fade-in");
	}
}