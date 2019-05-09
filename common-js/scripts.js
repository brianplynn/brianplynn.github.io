function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("p-item");
	if (c == "all") c = "p-item";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		if (x[i].classList.contains(c)) {
			x[i].classList.remove("hid");
		} else {
			x[i].classList.add("hid");
		}
	}
}
// Add active class to the current control button (highlight it)
var btnContainer = document.querySelector(".portfolioFilter");
var btns = btnContainer.getElementsByClassName("btn-portfolio");
var portfolio = document.querySelector(".portfolioContainer");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		portfolio.classList.add("o-0");
		portfolio.classList.add("fade-in");
		setTimeout(function() {
			portfolio.classList.remove("fade-in");
			portfolio.classList.remove("o-0");
		}, 700);
		var current = document.getElementsByClassName("current");
		current[0].className = current[0].className.replace(" current", "");
		this.className += " current";
	});
}

(function($) {
	"use strict";

	// LINE PROGRESS BAR
	enableLineProgress();

	// RADIAL PROGRESS BAR
	enableRadialProgress();

	// ACCORDIAN
	panelAccordian();

	$(window).on("load", function() {
		// ISOTOPE PORTFOLIO WITH FILTER
		filterSelection("all");
	});

	$('a[href="#"]').on("click", function(event) {
		return;
	});

	if ($.isFunction($.fn.fluidbox)) {
		$("a").fluidbox();
	}

	var countCounterUp = 0;

	var a = 0;

	countCounterUp = enableCounterUp(countCounterUp);

	$(window).on("scroll", function() {
		countCounterUp = enableCounterUp(countCounterUp);
	});
})(jQuery);

function panelAccordian() {
	var panelTitle = $(".panel-title");
	panelTitle.on("click", function() {
		$(".panel-title").removeClass("active");
		$(this).toggleClass("active");
	});
}

function enableRadialProgress() {
	$(".radial-progress").each(function() {
		var $this = $(this),
			progPercent = $this.data("prog-percent");

		var bar = new ProgressBar.Circle(this, {
			color: "#aaa",
			strokeWidth: 3,
			trailWidth: 1,
			easing: "easeInOut",
			duration: 1400,
			text: {},
			from: { color: "#aaa", width: 1 },
			to: { color: "#FEAE01", width: 3 },
			// Set default step function for all animate calls
			step: function(state, circle) {
				circle.path.setAttribute("stroke", state.color);
				circle.path.setAttribute("stroke-width", state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText("");
				} else {
					circle.setText(value);
				}
			}
		});

		$(this).waypoint(
			function() {
				bar.animate(progPercent);
			},
			{ offset: "90%" }
		);
	});
}

function enableLineProgress() {
	$(".line-progress").each(function() {
		var $this = $(this),
			progPercent = $this.data("prog-percent");

		var bar = new ProgressBar.Line(this, {
			strokeWidth: 1,
			easing: "easeInOut",
			duration: 1400,
			color: "#FEAE01",
			trailColor: "#eee",
			trailWidth: 1,
			svgStyle: { width: "100%", height: "100%" },
			text: {
				style: {}
			},
			from: { color: "#FFEA82" },
			to: { color: "#ED6A5A" },
			step: (state, bar) => {
				bar.setText(Math.round(bar.value() * 100) + " %");
			}
		});

		$(this).waypoint(
			function() {
				bar.animate(progPercent);
			},
			{ offset: "90%" }
		);
	});
}

function enableCounterUp(a) {
	var counterElement;

	if (isExists("#counter")) {
		counterElement = $("#counter");
	} else {
		return;
	}

	var oTop = $("#counter").offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$(".counter-value").each(function() {
			var $this = $(this),
				countDuration = $this.data("duration"),
				countTo = $this.attr("data-count");
			$({
				countNum: $this.text()
			}).animate(
				{
					countNum: countTo
				},
				{
					duration: countDuration,
					easing: "swing",
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				}
			);
		});
		a = 1;
	}

	return a;
}

function isExists(elem) {
	if ($(elem).length > 0) {
		return true;
	}
	return false;
}

var formSubmit = document.getElementById("form-submit-btn")
var formEmail = document.getElementById("exampleFormControlInput1").value
var formMessage = document.getElementById("exampleFormControlTextarea1").value

formSubmit.addEventListener("click", function(e) {
	console.log("hi");
	fetch('https://portfolio-blynn-backend.herokuapp.com/api/mail', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: formEmail,
			message: formMessage
		})
	}).then(response => {
		window.location.href = "/";		
	})
})