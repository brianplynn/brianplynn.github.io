let imgArr = Array.from(document.querySelectorAll(".carousel-item"));
let btnArr = Array.from(document.querySelectorAll(".navlink"));
let homeBtn = document.getElementById("home-btn");
let title = document.getElementById("title");
let carousel = document.getElementById("carousel-outer");
let currSlide = 0;
let overNavBar = false;
let moduleArr = document.querySelectorAll(".module");
let currMod;
// todo: stop the transition when you mouse over btn, then start it up 
// when you've been off them from > 10 sec
// add fade to changePic
// add fade to changeModule
// optimize!



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
	homeBtn.style.display = "none";
	carousel.style.display = "block";
	title.style.display = "block"

})

function changeColor() {
	btnArr[currSlide].style.color = "#e1d4c0";
	for (let item of btnArr) {
		if (btnArr.indexOf(item) != currSlide) item.style.color = "rgb(0,0,70)";
	}
}
function changePic() {
	$("#carousel-outer").carousel('pause');
	currSlide = btnArr.indexOf(this);
	$("#carousel-outer").carousel(currSlide);
	changeColor();
}

function changeModule() {
	if (currMod) currMod.style.display = "none";
	currMod = moduleArr[Math.max(btnArr.indexOf(this), imgArr.indexOf(this))];
	// max allows us to get real index, no matter if coming from module or button
	currMod.style.display = "flex";
	carousel.style.display = "none";
	title.style.display = "none"
	homeBtn.style.display = "inline-block"
}

