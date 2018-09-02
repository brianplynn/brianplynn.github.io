let imgArr = Array.from(document.querySelectorAll(".carousel-item"));
let btnArr = Array.from(document.querySelectorAll(".navlink"));
let homeBtn = document.getElementById("home-btn");
let title = document.getElementById("title");
let carousel = document.getElementById("carouselExampleFade");
let moduleArr = document.querySelectorAll(".module");
let currMod;
// todo: stop the transition when you mouse over btn, then start it up 
// when you've been off them from > 10 sec
// add fade to changePic
// figure out transitionstart
// write copy for each info module and format
// add fade to changeModule
// optimize!
for (let item of imgArr) {
	item.addEventListener("transitionend", changeColor);
	item.addEventListener("click", changeModule);
}
for (let item of btnArr) {
	item.addEventListener("mouseover", changePic);
	item.addEventListener("click", changeModule);
}
homeBtn.addEventListener("click", () => {
	currMod.style.display = "none";
	homeBtn.style.display = "none";
	carousel.style.display = "block";
	title.style.display = "block"

})

function changeColor() {
	for (let i = 0; i < btnArr.length; i++) {
		if(imgArr[i].classList.contains("active")) {
			btnArr[i].style.color = "#e1d4c0";
		} else {
			btnArr[i].style.color = "rgb(0,0,70)";
		}
	}
}
function changePic() {
// 	stop transition
// 	fade in 
	for (let i = 0; i < btnArr.length; i++) {
		if(imgArr[i].classList.contains("active")) {
			imgArr[i].classList.remove("active");
		}
	}
	imgArr[btnArr.indexOf(this)].classList.add("active");
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