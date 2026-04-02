const pictures = [
	{
		artist: "Steve Green'hitch",
		date: "October 26 2016",
		title: "Mountain Lake",
		img: "assets/forest.jpg",
	},
	{
		artist: "John Rocks",
		date: "November 02 2026",
		title: "Pacfic Ocean",
		img: "assets/ocean.jpg",
	},
	{
		artist: "Suzy Fallia",
		date: "April 01 1999",
		title: "Oregon Falls",
		img: "assets/waterfall.jpg",
	},
	{
		artist: "Elisabeth Hickio",
		date: "March 12 2012",
		title: "Down The Road",
		img: "assets/hiking.jpg",
	},
	{
		artist: "Miranda Brand",
		date: "June 06 2018",
		title: "Mediteranean Sea",
		img: "assets/sea.jpg",
	},
];

const $btns = document.querySelector(".gallery");
const $div = document.querySelector(".carousel-btn-description");
const active = document.querySelector(".carousel-btn-active");
const $h3 = document.querySelector("h3");
const $p = document.querySelector("p");
const $h2 = document.querySelector("h2");

function Caroussel() {
	const $div2 = document.createElement("div");
	const newH3 = document.createElement("h3");
	const newP = document.createElement("p");
	const newH2 = document.createElement("h2");

	newH3.textContent = pictures.artist;
	newP.textContent = pictures.date;
	newH2.textContent = pictures.title;

	$div2.append(newH3, newP, newH2);

	return $div2;
}

$btns.addEventListener("click", () => {
	$h3.remove();
	$p.remove();
	$h2.remove();

	let test = active.classList.remove("carousel-btn-active");

	for (let i = 0; i > pictures.length; i++) {
		if (pictures[i] != test) {
			active.classList.add("carousel-btn-active");
		} else {
			active.classList.remove("carousel-btn-active");
		}
	}

	return test;
	// console.log("coucou");
});

Caroussel();
