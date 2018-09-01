let imgArr = Array.from(document.querySelectorAll(".carousel-item"));
let btnArr = Array.from(document.querySelectorAll(".navlink"));
// todo: stop the transition when you mouse over btn, then start it up 
// when you've been off them from > 10 sec
// add fade to changePic
// figure out transitionstart
for (let item of imgArr) {
	item.addEventListener("transitionend", changeColor);
}
for (let item of btnArr) {
	item.addEventListener("mouseover", changePic)
}
function changeColor() {
	for (let i = 0; i < btnArr.length; i++) {
		if(imgArr[i].classList.contains("active")) {
			btnArr[i].style.color = "rgb(200,170,100)";
		} else {
			btnArr[i].style.color = "rgb(0,0,70)";
		}
	}
}

function changePic() {
	for (let i = 0; i < btnArr.length; i++) {
		if(imgArr[i].classList.contains("active")) {
			imgArr[i].classList.remove("active");
		}
	}
	imgArr[btnArr.indexOf(this)].classList.add("active");
	changeColor();
}