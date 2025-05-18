document.addEventListener("DOMContentLoaded", () => {
	InitializeBasicFunctionality();
});

function InitializeBasicFunctionality() {
	let navButton = document.querySelector(".nav-button");
	navButton.addEventListener("click", toggleNav);

	let navItems = document.querySelectorAll("ul.navbar li a");

	for (let i = 0; i < navItems.length; i++) {
		let navItem = navItems[i];
		navItem.addEventListener("click", closeNav);
	}

	let overlay = document.querySelector("._overlay");
	overlay.addEventListener("click", closeNav);
}

// Toggle opening and closing Navbar
function toggleNav() {
	let navButton = document.querySelector(".nav-button");
	let navBar = document.querySelector(".navbar");
	let overlay = document.querySelector("._overlay");

	if (navBar.classList.contains("active")) {
		navBar.classList.remove("active");
		navButton.classList.remove("active");
		overlay.classList.remove("active");
	} else {
		navBar.classList.add("active");
		navButton.classList.add("active");
		overlay.classList.add("active");
	}
}

function closeNav() {
	let navButton = document.querySelector(".nav-button");
	let navBar = document.querySelector(".navbar");
	let overlay = document.querySelector("._overlay");
	if (navBar.classList.contains("active")) {
		navBar.classList.remove("active");
		navButton.classList.remove("active");
		overlay.classList.remove("active");
	}
}
