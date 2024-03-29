let chapter = document.getElementById("chapter");
let headerNav = document.getElementById("headerNav");
let newDiv = document.querySelector(".respNav");
let resources = document.getElementById("resources");
let alienRelationsContainer = document.getElementById("alien-relations");
let burger = document.getElementById("burger");
let decisionButton = document.querySelector("#decision-button");
let mainSection = document.getElementById("main-section");

var buttonLeft = document.querySelector("button#left");
var buttonRight = document.querySelector("button#right");

let backgroundImage = document.querySelector(".background-image-index")

let colors = {
	green:'#278c2d', 		//Jakub
	aqua:'#3a71a6', 		//Marcin
	red:'#ce5263', 			//Becia, Agresusi
	white:'#efece8', 		//Unknown
	purple:'#4b3aa6', 		//Ilia
	yellow:'#c7af42', 		//Mirek, Nerds
	darkred:'#85395b', 		//Albert
	darkblue: '#162c77', 	//Magikale
	lightpurple: '#d8a3dc', //Amina
	orange: '#e58852', 		//Krzychu
	brown: '#9a5c4c', 		//Henryk
	grey: '#b3c5c2' 		//
}
/*
#c7af42
#a58449
#496a4b
#364962
#63798c
#b3c5c2
#efece8
#d8a3dc
#d4629e
#85395b
#ce5263
#f18e74
#d39354
#c76652
#a44857
#9a5c4c
#784cad
#e58852
#fecc80
#8ea3e6
#3a71a6
#4b3aa6
#352959
#060d23
*/

// ============ RESOURCE'S PSEUDOELEMENTS ============

let nerds = document.querySelector("#alien-relations li:nth-of-type(1)");
let magicals = document.querySelector("#alien-relations li:nth-of-type(2)");
let agreSuS = document.querySelector("#alien-relations li:nth-of-type(3)");

let publicOp = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(1)");
let money = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(2)");
let adviser = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(3)");
let research = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(4)");
let fuel = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(5)");
let food = document.querySelector("#header-section nav #resources #resources-container li:nth-of-type(6)");

// ====================== POWIADOMIENIA ======================

let bell = document.getElementById("noti");
let bellNumber = document.querySelector("#noti div")
let notifications = document.getElementById("notifications");
let licznik = 0;
let licznik2 = 0;
function noti(text) {
	licznik = parseInt(licznik);
	licznik++;
	licznik = licznik.toString();
	bellNumber.textContent = licznik;
	bellNumber.style.setProperty("transform", "scale(1)");

	let newNotification = document.createElement("p");
	notifications.insertAdjacentElement('beforeend', newNotification);
	newNotification.textContent = text;
	let newNotiClass = "newNotification" + licznik2.toString();
	newNotification.classList.add(newNotiClass);
	newNotification.classList.add("unread");
}

bell.addEventListener("click", function openNoti() {
	bellNumber.style.setProperty("transform", "scale(0)");
	bellNumber.textContent = "";
	licznik = 0;
	if (notifications.classList.contains("closed")) {
		notifications.classList.remove("closed");
		notifications.classList.add("open");
		let newNotification = document.querySelectorAll(".unread");
		newNotification.forEach((el) => {
			el.classList.remove("unread");
			el.classList.add("read");
			setTimeout(function() {
				el.style.setProperty("background-color", "rgba(0,0,0,0)")
			}, 5000)
		})
	} else if (notifications.classList.contains("open")) {
		notifications.classList.add("closed");
		notifications.classList.remove("open");
	}
})

// ====================== LADOWANIE ZDJEC ======================

function imageLoader() {
	let imgArray = [
		"bogosBinted/agresus.jpg",
		"bogosBinted/albert.jpg",
		"bogosBinted/amina.jpg",
		"bogosBinted/background-main1-contrast.jpg",
		"bogosBinted/background-main1.jpg",
		"bogosBinted/background.jpg",
		"bogosBinted/becia.jpg",
		"bogosBinted/budzik.jpg",
		"bogosBinted/chmurka.jpg",
		"bogosBinted/henryk.jpg",
		"bogosBinted/gameOver.jpg",
		"bogosBinted/gameOverResp.jpg",
		"bogosBinted/gameOverSmierc.jpg",
		"bogosBinted/gilotyna.jpg",
		"bogosBinted/gilotynaGG.jpg",
		"bogosBinted/gsg.jpg",
		"bogosBinted/ilia.jpg",
		"bogosBinted/jakub.jpg",
		"bogosBinted/kamera.jpg",
		"bogosBinted/kawa.jpg",
		"bogosBinted/krzychu.jpg",
		"bogosBinted/marcin.jpg",
		"bogosBinted/megafon.jpg",
		"bogosBinted/mirek.jpg",
		"bogosBinted/nerd.jpg",
		"bogosBinted/noPfpUser.jpg",
		"bogosBinted/planet1.jpg",
		"bogosBinted/planet2.jpg",
		"bogosBinted/planet3.jpg",
		"bogosBinted/radio.jpg",
		"bogosBinted/sniadanie.jpg",
		"bogosBinted/stol.jpg",
		"bogosBinted/Y.jpg",
		"bogosBinted/zeby.jpg",
		"bogosBinted/nikita.jpg",
		"bogosBinted/taxi.jpg",
		"bogosBinted/app.jpg",
		"bogosBinted/endingScreen.jpg",
		"bogosBinted/dp.jpg"
	]

	let doneArray = []

	for(let x = 0; x < imgArray.length; x++) {
		let newImg = document.createElement("img");
		newImg.setAttribute("src", imgArray[x]);
		newImg.style.setProperty("width", "80%");
		newImg.style.setProperty("max-width", "600px")
		mainSection.insertAdjacentElement("afterend", newImg);
		newImg.className = "imgTemp"
		newImg.addEventListener("load", function() {
			doneArray.push("Done");
			if(doneArray.length == imgArray.length) {
				let loading = document.getElementById("image-loading-screen");
				let imgArray2 = document.querySelectorAll(".imgTemp");
				setTimeout(function() {
					for (let i = 0; i < imgArray.length; i++) {
						imgArray2[i].remove();
					}
					loading.style.setProperty("transform", "translateX(-100%)");
					setTimeout(function() {
						loading.remove();
					}, 1000)
				}, 6000)
			}
		})
	}
}

imageLoader()

// ====================== MUZYKA ======================
var audio0 = new Audio("audio/Arcadia.mp3");
var audio1 = new Audio("audio/Frost Waltz.mp3");
var audio2 = new Audio("audio/The Descent.mp3");
var audio3 = new Audio("audio/Truth of the Legend.mp3");
var audio4 = new Audio("audio/Black Vortex.mp3");

// 0 4 1 2 3

let start = document.createElement("button");
start.textContent = "Rozpocznij grę";
document.body.insertAdjacentElement("beforebegin", start);
start.className = "start";
start.addEventListener("click", function() {
	audio0.play();
	audio0.loop = true;
	audio0.volume = 0.1;
	start.style.setProperty("transform", "scale(0)");
})

function playMusic(audio) {
	audio.play();
	audio.loop = true;
	audio.volume = 0.1;
}
// 0 4 1 2 3

// ====================== DUBBING ======================

function dubbing(audioPath) {
	if (audioPath != "") {
		decisionButton.style.setProperty("transform", "scale(0)")
		setTimeout(function() {
			let dubbingAudio = new Audio("audioDub/" + audioPath + ".mp3");
			dubbingAudio.play();
			dubbingAudio.addEventListener("ended", function() {
				decisionButton.style.setProperty("transform", "scale(1)")
			})
		}, 1000)
	} else {
		decisionButton.style.setProperty("transform", "scale(1)")
	}
}

// ========== OSTRZEZENIE PODCZAS WYCHODENIA Z STRONY =========
window.addEventListener("beforeunload", function (e) {
	var confirmationMessage = "Czy na pewno chcesz opuścić stronę?";
	e.returnValue = confirmationMessage;
	return confirmationMessage;
});

// ============ RESPONSYWNE MENU STATYSTYK ============

burger.addEventListener("click", function () {
	if (resources.className == "") {
		resources.className = "open";
		alienRelationsContainer.className = "open";
		burger.className = "fa-solid fa-circle-xmark";
	} else if (resources.className == "open") {
		resources.className = "";
		alienRelationsContainer.className = "";
		burger.className = "fa-solid fa-chart-simple";
	}
});

// ============ KONTRAST I CZCIONKA ============

function fontAndContrast() {
	let font = document.querySelector("#contrast-and-font-size i:first-of-type");
	let contrast = document.querySelector("#contrast-and-font-size i:nth-of-type(2)");

	font.addEventListener("click", function fontChange() {
		if (font.classList.contains("bigger")) {
			font.classList.remove("bigger");
			font.classList.add("smaller");
			document.documentElement.style.setProperty("font-size", "17px");

			font.style.setProperty("color", colors["white"]);
		} else if (font.classList.contains("smaller")) {
			font.classList.remove("smaller");
			font.classList.add("bigger");
			document.documentElement.style.setProperty("font-size", "23px");

			font.style.setProperty("color", colors["green"]);
		}
	})


	contrast.addEventListener("mouseout", function contrastOut() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", colors["green"]);
			document.body.style.setProperty("background-image", "url(bogosBinted/background-main1-contrast.jpg)")
		} else if (contrast.classList.contains("contrastOFF")) {
			document.documentElement.className = "";
			contrast.style.setProperty("color", colors["white"]);
			document.body.style.setProperty("background-image", "url(bogosBinted/background-main1.jpg)")
		}
	})

	contrast.addEventListener("mouseover", function contrastHover() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			document.documentElement.className = "";
			contrast.style.setProperty("color", colors["white"]);
			document.body.style.setProperty("background-image", "url(bogosBinted/background-main1.jpg)")
		} else if (contrast.classList.contains("contrastOFF")) {
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", colors["green"]);
			document.body.style.setProperty("background-image", "url(bogosBinted/background-main1-contrast.jpg)")
		}
	})


	contrast.addEventListener("click", function contrastChange() {
		let buttonLeft = document.querySelector("button#left");
		let buttonRight = document.querySelector("button#right");
		if (contrast.classList.contains("contrastON")) {
			contrast.classList.remove("contrastON");
			document.documentElement.className = "";
			contrast.style.setProperty("color", colors["white"]);
			contrast.classList.add("contrastOFF");
			document.body.style.setProperty("background-image", "url(bogosBinted/background-main1.jpg)")
		} else if (contrast.classList.contains("contrastOFF")) {
			contrast.classList.remove("contrastOFF");
			document.documentElement.className = "contrast";
			contrast.style.setProperty("color", colors["green"]);
			contrast.classList.add("contrastON");
			document.body.style.setProperty("background-image", "url(bogosBinted/background-main1-contrast.jpg)")
		}
	})
}

fontAndContrast();

// ============ EKRAN LADOWANIA ============

function loadingScreen() {
	let loadingScreen = document.querySelector("#loading-screen");
	loadingScreen.style.setProperty("display", "flex");
	loadingScreen.style.setProperty("opacity", 1);
	setTimeout(function () {
		loadingScreen.style.setProperty("display", "none");
		loadingScreen.style.setProperty("opacity", 0);
	}, 3190);
}

// ============ WYSWIETLANIE IKON ============

function showIcons(icon, caption) {
	icon.style.setProperty("display", "flex");
	let info = document.createElement("span");
	info.textContent = caption;
	info.classList.add("iconCaption");
	icon.insertAdjacentElement("beforeend", info);
	let text = "Nowa statystyka została odblokowana: " + caption;
	noti(text);

	setTimeout(function () {
		info.classList.add("closing");
	}, 5000);

	setTimeout(function () {
		info.classList.add("closed");
	}, 6000)
}

// =========================================================

let middleDiv = document.querySelector("div#middleDiv");


let data = {
	chapter: 1,
	underchapter: 1,
	stats: {
		publicOpinion: 0.5,
		currency: 0.5,
		adviser: 0.5,
		research: 0.4,
		fuel: 0.5,
		food: 0.9,
		alienRelations: {
			nerds: 0.5,
			magicals: 0.5,
			agreSuS: 0.5,
		},
	},
	notimeleft: false,
	areTeethBrushed: false,
	isCoffeDrunk: false,
	isBreakfastEaten: false,

	liedAboutPassengers: false,
	liedAboutSeats: false,

	marcinsDecision: false,

	destination: "earth",
	host: "ludzie",
	isGameDone: false
};

var colorNerds = window.getComputedStyle(nerds).getPropertyValue("--pseudoElColor");
var colorMagicals = window.getComputedStyle(magicals).getPropertyValue("--pseudoElColor");
var colorAgreSuS = window.getComputedStyle(agreSuS).getPropertyValue("--pseudoElColor");

var colorPublicOp = window.getComputedStyle(publicOp).getPropertyValue("--pseudoElColor");
var colorMoney = window.getComputedStyle(money).getPropertyValue("--pseudoElColor");

var colorAdviser = window.getComputedStyle(adviser).getPropertyValue("--pseudoElColor");
var colorResearch = window.getComputedStyle(research).getPropertyValue("--pseudoElColor");
var colorFuel = window.getComputedStyle(fuel).getPropertyValue("--pseudoElColor");
var colorFood = window.getComputedStyle(food).getPropertyValue("--pseudoElColor");


function statsChanger(element1, list) {
	function colorChanger(nerds1, magicals1, agreSuS1, pOp1, mon1, adviser1, research1, fue1, food1) {
		if (nerds1 > 0.7) {
			nerds.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (nerds1 >= 0.4 && nerds1 <= 0.7) {
			nerds.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (nerds1 > 0 && nerds1 < 0.4) {
			nerds.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (magicals1 > 0.7) {
			magicals.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (magicals1 >= 0.4 && magicals1 <= 0.7) {
			magicals.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (magicals1 > 0 && magicals1 < 0.4) {
			magicals.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (agreSuS1 > 0.7) {
			agreSuS.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (agreSuS1 >= 0.4 && agreSuS1 <= 0.7) {
			agreSuS.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (agreSuS1 > 0 && agreSuS1 < 0.4) {
			agreSuS.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (pOp1 > 0.7) {
			publicOp.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (pOp1 >= 0.4 && pOp1 <= 0.7) {
			publicOp.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (pOp1 > 0 && pOp1 < 0.4) {
			publicOp.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (mon1 > 0.7) {
			money.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (mon1 >= 0.4 && mon1 <= 0.7) {
			money.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (mon1 > 0 && mon1 < 0.4) {
			money.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (adviser1 > 0.7) {
			adviser.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (adviser1 >= 0.4 && adviser1 <= 0.7) {
			adviser.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (adviser1 > 0 && adviser1 < 0.4) {
			adviser.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (research1 > 0.7) {
			research.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (research1 >= 0.4 && research1 <= 0.7) {
			research.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (research1 > 0 && research1 < 0.4) {
			research.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (fue1 > 0.7) {
			fuel.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (fue1 >= 0.4 && fue1 <= 0.7) {
			fuel.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (fue1 > 0 && fue1 < 0.4) {
			fuel.style.setProperty("--pseudoElColor", colors["red"]);
		}
	
		if (food1 > 0.7) {
			food.style.setProperty("--pseudoElColor", colors["green"]);
		} else if (food1 >= 0.4 && food1 <= 0.7) {
			food.style.setProperty("--pseudoElColor", colors["yellow"]);
		} else if (food1 > 0 && food1 < 0.4) {
			food.style.setProperty("--pseudoElColor", colors["red"]);
		}
	}

	function statsFuse(nerds2, magicals2, agreSuS2, pOp2, mon2, adviser2, research2, fue2, food2) {
		if (nerds2 >= 0 && nerds2 <= 1) {
			nerds.style.setProperty("--transform", "scaleY(" + nerds2 + ")");
		} else if (nerds2 > 1) {
			nerds.style.setProperty("--transform", "scaleY(1)");
		} else {
			nerds.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (magicals2 >= 0 && magicals2 <= 1) {
			magicals.style.setProperty("--transform", "scaleY(" + magicals2 + ")");
		} else if (magicals2 > 1) {
			magicals.style.setProperty("--transform", "scaleY(1)");
		} else {
			magicals.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (agreSuS2 >= 0 && agreSuS2 <= 1) {
			agreSuS.style.setProperty("--transform", "scaleY(" + agreSuS2 + ")");
		} else if (agreSuS2 > 1) {
			agreSuS.style.setProperty("--transform", "scaleY(1)");
		} else {
			agreSuS.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (pOp2 >= 0 && pOp2 <= 1) {
			publicOp.style.setProperty("--transform", "scaleY(" + pOp2 + ")");
		} else if (pOp2 > 1) {
			publicOp.style.setProperty("--transform", "scaleY(1)");
		} else {
			publicOp.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (mon2 >= 0 && mon2 <= 1) {
			money.style.setProperty("--transform", "scaleY(" + mon2 + ")");
		} else if (mon2 > 1) {
			money.style.setProperty("--transform", "scaleY(1)");
		} else {
			money.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (adviser2 >= 0 && adviser2 <= 1) {
			adviser.style.setProperty("--transform", "scaleY(" + adviser2 + ")");
		} else if (adviser2 > 1) {
			adviser.style.setProperty("--transform", "scaleY(1)");
		} else {
			adviser.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (research2 >= 0 && research2 <= 1) {
			research.style.setProperty("--transform", "scaleY(" + research2 + ")");
		} else if (research2 > 1) {
			research.style.setProperty("--transform", "scaleY(1)");
		} else {
			research.style.setProperty("--transform", "scaleY(0)");
		}
		
		if (fue2 >= 0 && fue2 <= 1) {
			fuel.style.setProperty("--transform", "scaleY(" + fue2 + ")");
		} else if (fue2 > 1) {
			fuel.style.setProperty("--transform", "scaleY(1)");
		} else {
			fuel.style.setProperty("--transform", "scaleY(0)");
		}
	
		if (food2 >= 0 && food2 <= 1) {
			food.style.setProperty("--transform", "scaleY(" + food2 + ")");
		} else if (food2 > 1) {
			food.style.setProperty("--transform", "scaleY(1)");
		} else {
			food.style.setProperty("--transform", "scaleY(0)");
		}
	}	

	element1.addEventListener("mouseover", function hover() {
		let ner = data.stats.alienRelations.nerds + list[0];
		let mag = data.stats.alienRelations.magicals + list[1];
		let agreS = data.stats.alienRelations.agreSuS + list[2];
		let pOp = data.stats.publicOpinion + list[3];
		let mon = data.stats.currency + list[4];
		let adv = data.stats.adviser + list[5];
		let res = data.stats.research + list[6];
		let fue = data.stats.fuel + list[7];
		let foo = data.stats.food + list[8];

		statsFuse(ner, mag, agreS, pOp, mon, adv, res, fue, foo);
		colorChanger(ner, mag, agreS, pOp, mon, adv, res, fue, foo);
	});



	element1.addEventListener("click", function change() {
		data.stats.alienRelations.nerds += list[0];
		data.stats.alienRelations.magicals += list[1];
		data.stats.alienRelations.agreSuS += list[2];
		data.stats.publicOpinion += list[3];
		data.stats.currency += list[4];
		data.stats.adviser += list[5];
		data.stats.research += list[6];
		data.stats.fuel += list[7];
		data.stats.food += list[8];

		let ner = data.stats.alienRelations.nerds;
		let mag = data.stats.alienRelations.magicals;
		let agreS = data.stats.alienRelations.agreSuS;
		let pOp = data.stats.publicOpinion;
		let mon = data.stats.currency;
		let adv = data.stats.adviser;
		let res = data.stats.research;
		let fue = data.stats.fuel;
		let foo = data.stats.food;

		if (data.stats.alienRelations.nerds <= 0) {
			data.stats.alienRelations.nerds = 0;
			nextDub = ""
			gameOverFunction("gameOverDeath", "Twoje relacje z cywilizacją nerdów spadły do zera.");
		} else if (data.stats.alienRelations.nerds > 1) {
			data.stats.alienRelations.nerdsn = 1;
		}

		if (data.stats.alienRelations.magicals <= 0) {
			data.stats.alienRelations.magicals = 0;
			nextDub = ""
			gameOverFunction("gameOverDeath", "Twoje relacje z magami nerdów spadły do zera.");
		} else if (data.stats.alienRelations.magicals > 1) {
			data.stats.alienRelations.magicals = 1;
		}

		if (data.stats.alienRelations.agreSuS <= 0) {
			data.stats.alienRelations.agreSuS = 0;
			nextDub = ""
			gameOverFunction("gameOverDeath", "Twoje relacje z cywilizacją agresorów spadły	 do zera.");
		} else if (data.stats.alienRelations.agreSuS > 1) {
			data.stats.alienRelations.agreSuS = 1;
		}

		if (data.stats.publicOpinion <= 0) {
			data.stats.publicOpinion = 0;
			nextDub = ""
			gameOverFunction("gameOver", "Obywatele cię znienawidzili, nie potrafisz być przywódcą! Twoja głowa została sprzedana na wolnym rynku.");
		} else if (data.stats.publicOpinion > 1) {
			data.stats.publicOpinion = 1;
		}

		if (data.stats.currency <= 0) {
			data.stats.currency = 0;
			nextDub = ""
			gameOverFunction("gameOver", "Zbankrutowałeś.");
		} else if (data.stats.currency > 1) {
			data.stats.currency = 1;
		}

		if (data.stats.adviser <= 0) {
			data.stats.adviser = 0;
			nextDub = ""
			gameOverFunction("gameOver", "Twoja reputacja spadła do zera.");
		} else if (data.stats.adviser > 1) {
			data.stats.adviser = 1;
		}

		if (data.stats.research <= 0) {
			data.stats.research = 0;
			nextDub = ""
			gameOverFunction("gameOver", "Za mały poziom badań.");
		} else if (data.stats.research > 1) {
			data.stats.research = 1;
		}
		
		if (data.stats.fuel <= 0) {
			data.stats.fuel = 0;
			nextDub = ""
			gameOverFunction("gameOver", "Za mały poziom paliwa.");
		} else if (data.stats.fuel > 1) {
			data.stats.fuel = 1;
		}

		if (data.stats.food <= 0) {
			data.stats.food = 0;
			nextDub = ""
			gameOverFunction("gameOverDeath", "Śmierć spowodowana brakiem jedzenia.");
		} else if (data.stats.food > 1) {
			data.stats.food = 1;
		}

		nerds.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.nerds + ")");
		magicals.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.magicals + ")");
		agreSuS.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.agreSuS + ")");
		publicOp.style.setProperty("--transform","scaleY(" + data.stats.publicOpinion + ")");
		money.style.setProperty("--transform","scaleY(" + data.stats.currency + ")");
		adviser.style.setProperty("--transform","scaleY(" + data.stats.adviser + ")");
		research.style.setProperty("--transform","scaleY(" + data.stats.research + ")");
		fuel.style.setProperty("--transform","scaleY(" + data.stats.fuel + ")");
		food.style.setProperty("--transform","scaleY(" + data.stats.food + ")");
		
		statsFuse(data.stats.alienRelations.nerds,
				data.stats.alienRelations.magicals,
				data.stats.alienRelations.agreSuS,
				data.stats.publicOpinion,
				data.stats.currency,
				data.stats.adviser,
				data.stats.research,
				data.stats.fuel,
				data.stats.food);

		colorChanger(ner, mag, agreS, pOp, mon, adv, res, fue, foo);


		colorNerds = window.getComputedStyle(nerds).getPropertyValue("--pseudoElColor");
		colorMagicals = window.getComputedStyle(magicals).getPropertyValue("--pseudoElColor");
		colorAgreSuS = window.getComputedStyle(agreSuS).getPropertyValue("--pseudoElColor");
	
		colorPublicOp = window.getComputedStyle(publicOp).getPropertyValue("--pseudoElColor");
		colorMoney = window.getComputedStyle(money).getPropertyValue("--pseudoElColor");

		colorAdviser = window.getComputedStyle(adviser).getPropertyValue("--pseudoElColor");
		colorResearch = window.getComputedStyle(research).getPropertyValue("--pseudoElColor");
		colorFuel = window.getComputedStyle(fuel).getPropertyValue("--pseudoElColor");
		colorFood = window.getComputedStyle(food).getPropertyValue("--pseudoElColor");

		// ale pierdol sie

		//naprawde
	});
	element1.addEventListener("mouseout", function out() {
		nerds.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.nerds + ")");
		magicals.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.magicals + ")");
		agreSuS.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.agreSuS + ")");
		publicOp.style.setProperty("--transform","scaleY(" + data.stats.publicOpinion + ")");
		money.style.setProperty("--transform","scaleY(" + data.stats.currency + ")");
		adviser.style.setProperty("--transform","scaleY(" + data.stats.adviser + ")");
		research.style.setProperty("--transform","scaleY(" + data.stats.research + ")");
		fuel.style.setProperty("--transform","scaleY(" + data.stats.fuel + ")");
		food.style.setProperty("--transform","scaleY(" + data.stats.food + ")");

		nerds.style.setProperty("--pseudoElColor", colorNerds);
		magicals.style.setProperty("--pseudoElColor", colorMagicals);
		agreSuS.style.setProperty("--pseudoElColor", colorAgreSuS);
		publicOp.style.setProperty("--pseudoElColor", colorPublicOp);
		money.style.setProperty("--pseudoElColor", colorMoney);
		adviser.style.setProperty("--pseudoElColor", colorAdviser);
		research.style.setProperty("--pseudoElColor", colorResearch);
		fuel.style.setProperty("--pseudoElColor", colorFuel);
		food.style.setProperty("--pseudoElColor", colorFood);
	});
}

nerds.style.setProperty("--transform","scaleY(" + data.stats.alienRelations.nerds + ")");
magicals.style.setProperty("--transform", "scaleY(" + data.stats.alienRelations.magicals + ")");
agreSuS.style.setProperty("--transform", "scaleY(" + data.stats.alienRelations.agreSuS + ")");

publicOp.style.setProperty("--transform","scaleY(" + data.stats.publicOpinion + ")");
money.style.setProperty("--transform", "scaleY(" + data.stats.currency + ")");
adviser.style.setProperty("--transform", "scaleY(" + data.stats.adviser + ")");
research.style.setProperty("--transform","scaleY(" + data.stats.research + ")");
fuel.style.setProperty("--transform", "scaleY(" + data.stats.fuel + ")");
food.style.setProperty("--transform", "scaleY(" + data.stats.food + ")");

class MyEvent {
	constructor(photoPath, line, opL, opP, fL, fP, sL, sP, audioH1, audioH2) {
		this.photoPath = photoPath; //ex jakub.jpg
		this.line = line; //list of obiects (path,who, color, line)
		this.opL = opL; //string
		this.opP = opP; //string
		this.fL = fL; //function
		this.fP = fP; //function
		this.sL = sL; //list
		this.sP = sP; //list
		this.audioH1 = audioH1;
		this.audioH2 = audioH2;
	}
}

class MyLine {
	constructor(photoPath, who, color, text) {
		this.photoPath = photoPath;
		this.who = who;
		this.color = color;
		this.text = text;
	}
}

// ============= KLONOWANIE (USUWANIE EVENTOW) =============

function eventsRemover() {
	let buttonLeft = document.querySelector("button#left");
	let buttonRight = document.querySelector("button#right");
	buttonLeft.replaceWith(buttonLeft.cloneNode(true));
	buttonRight.replaceWith(buttonRight.cloneNode(true));
}

// =========================================================

let nextDub = "";

function doTheEvent(ob) {
	middleDiv.textContent = "";
	middleDiv.className = "";
	mainSection.className = "";

	decisionButton.style.setProperty("display", "flex");
	eventsRemover();

	let buttonLeft = document.querySelector("button#left");
	let buttonRight = document.querySelector("button#right");

	let newBigPhoto = document.createElement("img");
	newBigPhoto.setAttribute("src", ob.photoPath);
	middleDiv.insertAdjacentElement("beforeend", newBigPhoto);
	newBigPhoto.classList.add("bigPhoto");

	ob.line.forEach((element) => {
		let whoinfo = document.createElement("div");
		whoinfo.classList.add("whoInfo");
		middleDiv.insertAdjacentElement("beforeend", whoinfo);

		let newPhoto = document.createElement("img");
		newPhoto.setAttribute("src", element.photoPath);
		whoinfo.insertAdjacentElement("beforeend", newPhoto);
		newPhoto.classList.add("linePhoto");

		let newSpanNode = document.createTextNode(element.who);
		let newSpan = document.createElement("span");
		newSpan.appendChild(newSpanNode);
		newSpan.style.color = element.color;
		newPhoto.insertAdjacentElement("afterend", newSpan);
		newSpan.classList.add("lineWho");

		let newTextNode = document.createTextNode(element.text);
		let newText = document.createElement("span");
		newText.appendChild(newTextNode);
		newSpan.insertAdjacentElement("afterend", newText);
		newText.classList.add("lineText");

		middleDiv.insertAdjacentElement("beforeend", document.createElement("br"));
	});

	buttonLeft.textContent = ob.opL;
	buttonRight.textContent = ob.opP;

	buttonLeft.addEventListener("click", ob.fL);
	buttonRight.addEventListener("click", ob.fP);

	statsChanger(buttonLeft, ob.sL);
	statsChanger(buttonRight, ob.sP);

	let dubbingAudioH1 = new Audio("audioDubH/" + ob.audioH1 + ".mp3");
	let dubbingAudioH2 = new Audio("audioDubH/" + ob.audioH2 + ".mp3");

	buttonLeft.addEventListener("mouseover", function() {
		dubbingAudioH1.play();
	})
	buttonLeft.addEventListener("mouseout", function() {
		dubbingAudioH1.pause();
		dubbingAudioH1.currentTime = 0;
	})

	buttonRight.addEventListener("mouseover", function() {
		dubbingAudioH2.play();
	})
	buttonRight.addEventListener("mouseout", function() {
		dubbingAudioH2.pause();
		dubbingAudioH2.currentTime = 0;
	})

	buttonLeft.addEventListener("click", function() {
		dubbing(nextDub)
		dubbingAudioH1.pause()
	})
	
	buttonRight.addEventListener("click", function() {
		dubbing(nextDub)
		dubbingAudioH2.pause()
	})
}

function changeChapterPlace(x, place) {
	loadingScreen();
	let chapterNumber = document.querySelector("#chapter h1:first-of-type");
	let chapterPlace = document.querySelector("#chapter h1:nth-of-type(2)");

	let chapterText = "Etap - " + x;
	chapterNumber.textContent = chapterText;

	chapterPlace.textContent = place;

	let text = "Etap: " + x + ", oraz lokalizacja: " + place;
	noti(text);
}


function gameOverFunction(gameOverClassName, cause) {
	let body = document.querySelector("body");

	body.textContent = "";
	body.style.setProperty("background-color", "black");
	body.style.setProperty("background-image", "url()");
	body.className = gameOverClassName;
	setTimeout(function() {
		body.style.setProperty("background-image", "url(bogosBinted/gameOver.jpg)");



		let div = document.createElement("div");
		body.insertAdjacentElement("afterbegin", div);
		div.className = "gameOverContainer"
	
		let newP = document.createElement("p");
		let caseNode = document.createTextNode(cause);
		newP.appendChild(caseNode);
		div.insertAdjacentElement("afterbegin", newP);
		newP.className = "gameOverP";
	
		let playAgain = document.createElement("a");
		let buttonNode = document.createTextNode("Zagraj ponownie");
		playAgain.setAttribute("href", "main.html");
		playAgain.appendChild(buttonNode);
		playAgain.className = "playAgain"
		div.insertAdjacentElement("beforeend", playAgain);
		body.style.setProperty("opacity", 1)
	}, 1000)
}

function endOfTheGame(text, img) {
	let body = document.querySelector("body");

	body.textContent = "";
	body.style.setProperty("background-color", "black");
	body.style.setProperty("background-image", "url()");
	body.className = "end";
	setTimeout(function() {
		body.style.setProperty("background-image", "url(bogosBinted/"+img+".jpg)");

		let div = document.createElement("div");
		let p = document.createElement("p");
		p.className = "napis-po-zakonczeniu"
		div.insertAdjacentElement("beforeend", p);
		p.textContent = text;
		body.insertAdjacentElement("afterbegin", div);
		div.className = "endContainer";
	
		let ul = document.createElement("ul");
		div.insertAdjacentElement("beforeend", ul);
		for(let x = 0; x < 9; x++) {
			let li = document.createElement("li");
			ul.insertAdjacentElement("beforeend", li);
			li.className = "stats";
		}

		let stats = document.querySelectorAll(".stats");
		stats[0].textContent = "Opinia publiczna: " + (data.stats.publicOpinion * 100).toString() + "%";
		stats[1].textContent = "Pieniądze: " + (data.stats.currency * 100).toString() + "%";;
		stats[2].textContent = "Relacje z doradcą: " + (data.stats.adviser * 100).toString() + "%";
		stats[3].textContent = "Poziom odkryć: " + (data.stats.research * 100).toString() + "%";
		stats[4].textContent = "Poziom paliwa: " + (data.stats.fuel * 100).toString() + "%";
		stats[5].textContent = "Poziom jedzenia: " + (data.stats.food * 100).toString() + "%";
		stats[6].textContent = "Relacje z cywilizacją nerdów: " + (data.stats.alienRelations.nerds * 100).toString() + "%";;
		stats[7].textContent = "Relacje z cywilizacją magikali: " + (data.stats.alienRelations.magicals * 100).toString() + "%";;
		stats[8].textContent = "Relacje z cywilizacją agreSuSów: " + (data.stats.alienRelations.agreSuS * 100).toString() + "%";;
	
		let showCreators = document.createElement("div");
		showCreators.textContent = "Pokaż twórców"
		showCreators.className = "showCreators"
		div.insertAdjacentElement("beforeend", showCreators)

		function showCreatorsDiv() {
			body.textContent = "";
			body.className = "endingCreators"

			let dominik = document.createElement("h1");
			dominik.textContent = "Dominik Popek - fabuła, dubbing: Jakub";
			body.insertAdjacentElement("beforeend", dominik)

			let igor = document.createElement("h1");
			igor.textContent = "Igor Ciskał - grafika, dubbing: Albert";
			body.insertAdjacentElement("beforeend", igor)

			let wojtek = document.createElement("h1");
			wojtek.textContent = "Wojciech Mazur - UX/UI, mechanika gry, dubbing: Krzychu";
			body.insertAdjacentElement("beforeend", wojtek)
			wojtek.style.setProperty("border-bottom", "1px solid white")

			let piotr = document.createElement("h1");
			piotr.textContent = "Piotr Chruścicki - dubbing: Marcin";
			body.insertAdjacentElement("beforeend", piotr)

			let wiktoria = document.createElement("h1");
			wiktoria.textContent = "Wiktoria Jamrozik - dubbing: Nikita";
			body.insertAdjacentElement("beforeend", wiktoria)

			let zuzia = document.createElement("h1");
			zuzia.textContent = "Zuzanna Zdebska - dubbing: Becia";
			body.insertAdjacentElement("beforeend", zuzia)

			let maja = document.createElement("h1");
			maja.textContent = "Maja Kieca - dubbing: Ilia";
			body.insertAdjacentElement("beforeend", maja)

			let dominika = document.createElement("h1");
			dominika.textContent = "Dominika Golan - dubbing: Amina";
			body.insertAdjacentElement("beforeend", dominika)

			let kacper = document.createElement("h1");
			kacper.textContent = "Kacper Mazur - dubbing: Henryk";
			body.insertAdjacentElement("beforeend", kacper)

			let kuba = document.createElement("h1");
			kuba.textContent = "Kuba Dudzik - dubbing: Nerd";
			body.insertAdjacentElement("beforeend", kuba)

			let krystian = document.createElement("h1");
			krystian.textContent = "Krystian Zarych - dubbing: Agresus";
			body.insertAdjacentElement("beforeend", krystian)

			let jeremi = document.createElement("h1");
			jeremi.textContent = "Jeremi Kalinka - dubbing: Pan Mirek";
			body.insertAdjacentElement("beforeend", jeremi)
		}

		showCreators.addEventListener("click", function() {
			showCreatorsDiv()
		})
	}, 1000)
}


function changePlanet() {
	middleDiv.textContent = "";
	
	decisionButton.style.setProperty("display", "none");
	let p1 = document.createElement("div");
	p1.className = "planet1";
	let p2 = document.createElement("div");
	p2.className = "planet2";
	let p3 = document.createElement("div");
	p3.className = "planet3";
	
	let img1 = document.createElement("img");
	let img2 = document.createElement("img");
	let img3 = document.createElement("img");
	img1.setAttribute("src", "bogosBinted/planet1.jpg");
	img2.setAttribute("src", "bogosBinted/planet2.jpg");
	img3.setAttribute("src", "bogosBinted/planet3.jpg");

	let title1 = document.createElement("p");
	let title2 = document.createElement("p");
	let title3 = document.createElement("p");

	p1.insertAdjacentElement("beforeend", img1);
	p2.insertAdjacentElement("beforeend", img2);
	p3.insertAdjacentElement("beforeend", img3);

	middleDiv.insertAdjacentElement("beforeend", p1);
	middleDiv.insertAdjacentElement("beforeend", p2);
	middleDiv.insertAdjacentElement("beforeend", p3);

	p1.insertAdjacentElement("beforeend", title1);
	p2.insertAdjacentElement("beforeend", title2);
	p3.insertAdjacentElement("beforeend", title3);
	title1.textContent = "Planeta KOI-4878.01";
	title2.textContent = "Planeta TRAPPIST-1e";
	title3.textContent = "Planeta Proxima Centauri b";

	mainSection.classList.add("planets");
	middleDiv.classList.add("planets");

	p1.addEventListener("mouseover", function() {
		p2.style.setProperty("opacity", 0.5);
		p3.style.setProperty("opacity", 0.5);
	})

	p2.addEventListener("mouseover", function() {
		p1.style.setProperty("opacity", 0.5);
		p3.style.setProperty("opacity", 0.5);
	})

	p3.addEventListener("mouseover", function() {
		p1.style.setProperty("opacity", 0.5);
		p2.style.setProperty("opacity", 0.5);
	})


	p1.addEventListener("mouseout", function() {
		p2.style.setProperty("opacity", 1);
		p3.style.setProperty("opacity", 1);
	})

	p2.addEventListener("mouseout", function() {
		p1.style.setProperty("opacity", 1);
		p3.style.setProperty("opacity", 1);
	})

	p3.addEventListener("mouseout", function() {
		p1.style.setProperty("opacity", 1);
		p2.style.setProperty("opacity", 1);
	})


	p1.addEventListener("click", function() {
		if(data.stats.fuel>=.9){
			data.destination = "koi"
			data.host = "Nerdzi"
			data.stats.fuel-=.8
			changeChapterPlace(3, "Kosmiczny PierUg")
			// nextDub = "c3u1e1"
			dubbing("c3u1e1")
			doTheEvent(c3u1e1);
			noti("Wybrano cel: KOI-4878.01");
		}else noti("Nie masz wystarczająco paliwa.")
	})

	p2.addEventListener("click", function() {
		data.destination = "trap"
		data.host = "Magikale"
		data.stats.fuel-=.3
		changeChapterPlace(3, "Kosmiczny PierUg")
		// nextDub = "c3u1e1"
		dubbing("c3u1e1")
		doTheEvent(c3u1e1);
		noti("Wybrano cel: TRAPPIST-1e");
	})

	p3.addEventListener("click", function() {
		data.destination = "prox"
		data.host = "Agresusi"
		data.stats.fuel-=.2
		changeChapterPlace(3, "Kosmiczny PierUg")
		// nextDub = "c3u1e1"
		dubbing("c3u1e1")
		doTheEvent(c3u1e1);
		noti("Wybrano cel: Proxima Centauri b");
	})
}

//==================== CHAPTER 1 ====================
changeChapterPlace(1, "Dom Jakuba");
//===== Underchapter 1 =====

start.addEventListener("click", function() {
	decisionButton.style.setProperty("transform", "scale(0)")
	setTimeout(function() {
		let dubbingAudio = new Audio("audioDub/c0u1e1.mp3");
		dubbingAudio.play();
		dubbingAudio.addEventListener("ended", function() {
			decisionButton.style.setProperty("transform", "scale(1)")
		})
	}, 500)
})

let c0u1e1 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Gdzie ja jestem, co tu robi tyle ludzi, co to za metal nade mną, i co tu... Marcin??"
	)],
	"Marcin??",
	"*nic nie rób*",
	function (){
		doTheEvent(c0u1e2);
		nextDub = "c0u1e2";
	},
	function (){
		doTheEvent(c0u1e2);
		nextDub = "c0u1e2";
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c0u1e1L",
	"c0u1e1R"
)

let c0u1e2 = new MyEvent(
	"bogosBinted/gilotyna.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Jakieś ostatnie słowa?"
	), 
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Gdzie... Gdzie ja jestem? Marcin? Co ty robisz?!!" 
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Pytam ostatni raz: jakieś ostatnie słowa?"
	)],
	"*rozmawiaj*",
	"*walcz*",
	function (){
		doTheEvent(c0u1e3v1);
		nextDub = "c0u1e3v1"
	},
	function (){
		doTheEvent(c0u1e3v2);
		nextDub = "c0u1e3v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c0u1e2L",
	"c0u1e2R"
)

let c0u1e3v1 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Jak możesz mi to robić! Po tym wszystkim co razem przeszliśmy..."
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Sojusze się zmieniają Jakubie. Miałeś swoje szanse, ale mnie zawiodłeś."
	)],
	"Wypuść mnie zdrajco!",
	"Poczekaj, nie rób niczego głupiego!",
	function (){
		doTheEvent(c0u1e4);
		nextDub = "c0u1e4"
	},
	function (){
		doTheEvent(c0u1e4);
		nextDub = "c0u1e4"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c0u1e3v1L",
	"c0u1e3v1R"
)

let c0u1e3v2 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Nie dam rady, sparaliżował mi prawie całe ciało. Ledwo mogę się podnieść, a co dopiero walczyć."
	)],
	"*rozmawiaj*",
	"*nic nie rób*",
	function (){
		doTheEvent(c0u1e3v1);
		nextDub = "c0u1e3v1"
	},
	function (){
		doTheEvent(c0u1e4);
		nextDub = "c0u1e4"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c0u1e3v2L",
	"c0u1e3v2R"
)

let c0u1e4 = new MyEvent(
	"bogosBinted/gilotyna.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Lud wybrał! W imieniu Kosmicznej Polonii, za zdradę stanu oraz próbę zniszczenia ludzkości, skazuję Jakuba Bukaja na śmierć!"
	)],
	"STÓJ!",
	"NIE!",
	function (){
		doTheEvent(c0u1e5);
		document.body.style.setProperty("background-image", "url(bogosBinted/background-main1-contrast.jpg)");
		audio0.pause();
		nextDub = ""
	},
	function (){
		doTheEvent(c0u1e5);
		document.body.style.setProperty("background-image", "url(bogosBinted/background-main1-contrast.jpg)");
		audio0.pause();
		nextDub = ""
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c0u1e4L",
	"c0u1e4R"
)

let c0u1e5 = new MyEvent(
	"bogosBinted/gilotynaGG.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "", colors["white"],
		"..."
	)],
	"...",
	"...",
	function (){
		if(!data.isGameDone){
			doTheEvent(c0u2e1);
			nextDub = "c0u2e1"
		}else {
			nextDub = ""
			endOfTheGame("Marcin przejął władzę.", "endingScreen")
		}
	},
	function (){
		if(!data.isGameDone){
			doTheEvent(c0u2e1);
			nextDub = "c0u2e1"
		}else {
			nextDub = ""
			endOfTheGame("Marcin przejął władzę.", "endingScreen")
		}
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c0u2e1 = new MyEvent(
	"bogosBinted/agresus.jpg",
	[new MyLine(
		"bogosBinted/agresus.jpg", "Agresus", colors["red"],
		"JAKUBIE"
	)],
	"...",
	"...",
	function (){
		doTheEvent(c0u2e2);
		nextDub = "c0u2e2";
	},
	function (){
		doTheEvent(c0u2e2);
		nextDub = "c0u2e2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c0u2e2 = new MyEvent(
	"bogosBinted/nikita.jpg",
	[new MyLine(
		"bogosBinted/nikita.jpg", "Nikita", colors["darkblue"],
		"WYBIERZ"
	)],
	"...",
	"...",
	function (){
		doTheEvent(c0u2e3);
		nextDub = "c0u2e3"
	},
	function (){
		doTheEvent(c0u2e3);
		nextDub = "c0u2e3"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
)

let c0u2e3 = new MyEvent(
	"bogosBinted/nerd.jpg",
	[new MyLine(
		"bogosBinted/nerd.jpg", "Nerd", colors["yellow"],
		"MĄDRZE"
	)],
	"...",
	"...",
	function (){
		doTheEvent(c1u1e1);
		document.body.style.setProperty("background-image", "url(bogosBinted/background-main1.jpg)");
		playMusic(audio1);
		nextDub = "c1u1e1"
	},
	function (){
		doTheEvent(c1u1e1);
		document.body.style.setProperty("background-image", "url(bogosBinted/background-main1.jpg)");
		playMusic(audio1);
		nextDub = "c1u1e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	[0, 0, 0, 0, 0, 0, 0, 0, 0] 
)

//wstawić jakiś sen (insp. Adamem Mickiewiczem XDDDD)

let c1u1e1 = new MyEvent(
	"bogosBinted/budzik.jpg", 
	[
		new MyLine(
			"bogosBinted/jakub.jpg", "Jakub", colors["green"],
			"Ooh, co to... Co to było? Co to niby miało... JUŻ 8, ZASPAŁEM! Ale ten sen..."
		),
	],
	"O co chodziło z tym snem?",
	"Zaraz się spóźnię!",
	function () {
		doTheEvent(c1u1e2v1);
		nextDub = "c1u1e2v1"
	},

	function () {
		doTheEvent(c1u1e2v2);
		nextDub = "c1u1e2v2"
	},

	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u1e1L",
	"c1u1e1R"
);

//pozdro Kiara <- rel
//Ania Biła <- dalej mnie boli QnQ

let c1u1e2v1 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Nie mam pojęcia o co tam chodziło... Marcin? Jakaś zdrada? Ufam mu jak nikomu innemu, czemu śnią mi się takie rzeczy?"),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"A te stwory? Jacyś kosmici czy co? Chyba gdzieś je widziałem... A, Krzychu mi o nich mówił, takie brednie nieźle potrafią namieszać w głowie.")
	],
	"Zaraz się spóźnię!",
	"Nie mam czasu, muszę się zbierać!",
	function () {
		data.notimeleft = true;

		doTheEvent(c1u1e2v2);
		nextDub = "c1u1e2v2"
	},
	function () {
		data.notimeleft = true;

		doTheEvent(c1u1e2v2);
		nextDub = "c1u1e2v2"
	},

	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u1e2v1L",
	"c1u1e2v1R"
);

let c1u1e2v2 = new MyEvent(
	"bogosBinted/jakub.jpg",
	[
		new MyLine(
			"bogosBinted/jakub.jpg", "Jakub", colors["green"],
			"Na dzisiejszym wywiadzie muszę się dobrze prezentować! Mogę nie zdążyć ze wszystkim."
		),
	],
	"Wypij kawę",
	"Wymyj zęby",
	function () {
		data.isCoffeDrunk = true;
		if (data.notimeleft) {
			data.stats.publicOpinion-=.05;
			doTheEvent(c1u1e3v3);
			nextDub = "c1u1e3v3"
		}
		else {
			 doTheEvent(c1u1e3v1);
			 nextDub = "c1u1e3v1"
		}
	},
	function () {
		data.areTeethBrushed = true;
		if (data.notimeleft) {
			doTheEvent(c1u1e3v4);
			nextDub = "c1u1e3v4"
		}
		else {
			doTheEvent(c1u1e3v2);
			nextDub = "c1u1e3v2"
		}
	},

	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u1e2v2L",
	"c1u1e2v2R"
);

let c1u1e3v1 = new MyEvent(
	"bogosBinted/kawa.jpg",
	[
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub", colors["green"],
			"Dzień bez kawy to dzień stracony! Dobra, na szczęście zostało mi trochę czasu na..."
		),
	],
	"Wymycie zębów",
	"Szybkie śniadanie",
	function () {
		data.areTeethBrushed = true;

		doTheEvent(c1u1e3v4);
		nextDub = "c1u1e3v4"
	},
	function () {
		data.isBreakfastEaten = true;
		data.stats.publicOpinion-=0.05;
		doTheEvent(c1u1e4v1);
		nextDub = "c1u1e4v1"
	},

	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u1e3v1L",
	"c1u1e3v1R"
);

let c1u1e3v2 = new MyEvent(
	"bogosBinted/zeby.jpg",
	[
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"No, i takie ząbki ma człowiek sukcesu :DD teraz zostało mi jeszcze trochę czasu żeby..."
		),
	],
	"Zjeść śniadanie",
	"Wypić kawę",
	function () {
		data.isBreakfastEaten = true;

		doTheEvent(c1u1e4v1);
		nextDub = "c1u1e4v1"
	},
	function () {
		data.isCoffeDrunk = true;

		doTheEvent(c1u1e3v3);
		nextDub = "c1u1e3v3"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u1e3v2L",
	"c1u1e3v2R"
);

let c1u1e3v3 = new MyEvent(
	"bogosBinted/kawa.jpg",
	[
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"Dzień bez kawy to dzień stracony! Już nic innego nie zdążę zrobić, pójdę złapać taxi."
		),
	],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać.",
	function () {
		doTheEvent(c1u1e5v1);
		nextDub = "c1u1e5v1"
	},
	function () {
		doTheEvent(c1u1e5v1);
		nextDub = "c1u1e5v1"
	},
	[0, 0, 0, 0, -0.05, 0, 0, 0, 0],
	[0, 0, 0, 0, -0.15, 0, 0, 0, 0],
	"c1u1e3v3L",
	"c1u1e3v3R"
);

let c1u1e3v4 = new MyEvent(
	"bogosBinted/zeby.jpg",
	[
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"No, i takie ząbki ma człowiek sukcesu :DD Dobra, dość tego gapienia się w lustro, lepiej zamówię taxi."
		),
	],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać.",
	function () {
		doTheEvent(c1u1e5v1);
		nextDub = "c1u1e5v1"
	},
	function () {
		doTheEvent(c1u1e5v1);
		nextDub = "c1u1e5v1"
	},
	[0, 0, 0, 0, -0.05, 0, 0, 0, 0],
	[0, 0, 0, 0, -0.15, 0, 0, 0, 0],
	"c1u1e3v4L",
	"c1u1e3v4R"
);

let c1u1e4v1 = new MyEvent(
	"bogosBinted/sniadanie.jpg",
	[
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"Dobra, najadłem się, teraz lece zamówić taxi. "
		),
	],
	"Wezmę zwykłą taxówkę, każdy grosz się liczy.",
	"Zamówię sobie taxi premium, niech wiedzą, że mnie stać.",
	function () {
		doTheEvent(c1u1e5v1);
		nextDub = "c1u1e5v1"
	},
	function () {
		doTheEvent(c1u1e5v1);
		nextDub = "c1u1e5v1"
	},
	[0, 0, 0, 0, -0.05, 0, 0, 0, 0],
	[0, 0, 0, 0, -0.15, 0, 0, 0, 0],
	"c1u1e4v1L",
	"c1u1e4v1R"
);

let c1u1e5v1 = new MyEvent(
	"bogosBinted/jakub.jpg",
	[
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"Zaraz powinna przyjechać, w tym czasie może..."
		),
	],
	"Zobaczę co się dzieje na Y.",
	"Poczekam w samotności, lepiej odpocznę przed wywiadem.",
	function () {
		doTheEvent(c1u1e6);
		nextDub = ""
	},
	function () {
		doTheEvent(c1u1e7);
		nextDub = "c1u1e7"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u1e5v1L",
	"c1u1e5v1R"
);

let c1u1e6 = new MyEvent(
	"bogosBinted/Y.jpg",
	[
		new MyLine(
			"bogosBinted/noPfpUser.jpg","SkibidiEdge2k13",colors["white"],
			"Halo?? Dziś jest prima aprilis czy ja o czymś nie wiem???"
		),
		new MyLine(
			"bogosBinted/noPfpUser.jpg","ArchUserUWU",colors["white"],
			"Myślicie że ten wyciek był prawdziwy? Przecież by nam powiedzieli o czymś takim..."
		),
		new MyLine(
			"bogosBinted/noPfpUser.jpg","NwordEnjoyer",colors["white"],
			"No to zaczynamy szturm foliarzy XDDD nie ma szans że to prawda, pewnie jakieś AI"
		),
	],
	"Przewiń dalej",
	"Wyłącz telefon",
	function () {
		doTheEvent(c1u1e7);
		nextDub = "c1u1e7"
	},
	function () {
		doTheEvent(c1u1e7);
		nextDub = "c1u1e7"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u1e6L",
	"c1u1e6R"
);

let c1u1e7 = new MyEvent(
	"bogosBinted/taxi.jpg",
	[
		new MyLine(
			"bogosBinted/mirek.jpg","Pan Mirek",colors["yellow"],
			"Długo będzie jeszcze tak Pan stał? Ja mam inne kursy!"
		),
	],
	"O, to już? Szybki Pan jest!",
	"Spokojnie, gdzie się Panu tak śpieszy?",
	function () {
		showIcons(adviser, "Relacja z doradcą");
		doTheEvent(c1u1e8);
		nextDub = "c1u1e8"
	},
	function () {
		showIcons(adviser, "Relacja z doradcą");
		doTheEvent(c1u1e8);
		nextDub = "c1u1e8"
	},
	[0, 0, 0, 0.1, 0, 0, 0, 0, 0],
	[0, 0, 0, -0.1, 0, 0, 0, 0, 0],
	"c1u1e7L",
	"c1u1e7R"
);

let c1u1e8 = new MyEvent(
	"bogosBinted/mirek.jpg",
	[
		new MyLine(
			"bogosBinted/mirek.jpg","Pan Mirek",colors["yellow"],
			"Widział Pan ten filmik z tym jakimś szefem ONZ? Mówił, że niby lecimy w kosmos... Ha! Większej głupoty nie słyszałem."
		),
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"Czekają nas ciekawe czasy, bardzo ciekawe... Jedźmy już, czeka na mnie mój doradca."
		),
	],
	"Jedźmy pod siedzibę radio PDF FM.",
	"Ruszajmy pod radio PDF FM.",
	function () {
		changeChapterPlace(1, "PDF FM");
		doTheEvent(c1u2e1);
		nextDub = "c1u2e1"
	},
	function () {
		changeChapterPlace(1, "PDF FM");
		doTheEvent(c1u2e1);
		nextDub = "c1u2e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u1e8L",
	"c1u1e8R"
);

//=====Underchapter 2=====

let c1u2e1 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[
		new MyLine(
			"bogosBinted/marcin.jpg","Marcin",colors["aqua"],
			'[...] po czym powiesz "również dziekuję, miłego dnia", uśmiechniesz się i wyjdziesz ze studia. Wszystko jasne?'
		),
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"Raczej tak... "
		),
	],
	"A co jak zapyta o Operację Earthless?",
	"Wszystko jasne.",
	function () {
		doTheEvent(c1u2e2v1);
		nextDub = "c1u2e2v1"
	},
	function () {
		doTheEvent(c1u2e2v2);
		nextDub = "c1u2e2v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e1L",
	"c1u2e1R"
);

let c1u2e2v1 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[
		new MyLine(
			"bogosBinted/marcin.jpg","Marcin",colors["aqua"],
			"Słuchaj, nikt niczego nie potwierdził opinii publicznej, po prostu unikaj tematu. Jeszcze wezmą nas za ludzi, którzy wierzą we wszystko co jest w internecie."
		),
	],
	"Dobra, uniknę tego tematu.",
	"Ludziom należy się prawda!",
	function () {
		doTheEvent(c1u2e2v2);
		nextDub = "c1u2e2v2"
	},
	function () {
		doTheEvent(c1u2e3v1);
		nextDub = "c1u2e3v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, -0.1, 0, 0, 0],
	"c1u2e2v1L",
	"c1u2e2v1R"
);

let c1u2e2v2 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"Jutro wybory, przed nami globalny kryzys, a ja wciąż nie wiem co mam o tym powiedzieć ludziom!"
		),
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"To najbardziej stresujący dzień mojego życia. Nie wiem co bym zrobił bez mojego doradcy Marcina Kwiatkowskiego. Poznałem go jeszcze na studiach i jest to jedyna osoba której ufam w tym kłamliwym politycznym świecie."
		),
	],
	"Wróć do rozmowy",
	"Wróć do rozmowy",
	function () {
		doTheEvent(c1u2e4v1);
		nextDub = "c1u2e4v1"
	},
	function () {
		doTheEvent(c1u2e4v1);
		nextDub = "c1u2e4v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e2v2L",
	"c1u2e2v2R"
);

let c1u2e3v1 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[
		new MyLine(
			"bogosBinted/marcin.jpg","Marcin",colors["aqua"],
			"Stary, ty masz wygrać wybory, a nie być jakimś poszukiwaczem prawdy i sprawiedliwości. To jest zły pomysł, ale zrób jak uważasz."
		),
	],
	"A żebyś wiedział że zrobię!",
	"Jeszcze się zastanowię...",
	function () {
		doTheEvent(c1u2e2v2);
		nextDub = "c1u2e2v2"
	},
	function () {
		doTheEvent(c1u2e2v2);
		nextDub = "c1u2e2v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e3v1L",
	"c1u2e3v1R"
);

let c1u2e4v1 = new MyEvent(
	"bogosBinted/glosnik.jpg",
	[
		new MyLine(
			"bogosBinted/noPfpUser.jpg","*młody męski głos*","orange",
			"Zapraszamy pana Jakuba B. do studia. Wchodzimy za 2 minuty!"
		),
	],
	"Dzięki że przyszedłeś, a teraz życz mi powodzenia. Cześć!",
	"Lecę, widzimy się za 20 minut.",
	function () {
		doTheEvent(c1u2e5v1);
		nextDub = "c1u2e5v1"
	},
	function () {
		doTheEvent(c1u2e5v1);
		nextDub = "c1u2e5v1"
	},
	[0, 0, 0, 0, 0, 0.1, 0, 0, 0],
	[0, 0, 0, 0, 0, -0.05, 0, 0, 0],
	"c1u2e4v1L",
	"c1u2e4v1R"
);

let c1u2e5v1 = new MyEvent(
	"bogosBinted/radio.jpg",
	[
		new MyLine(
			"bogosBinted/becia.jpg","*Becia*",colors["red"],
			"Cześć, gotowy? Za 15 sekund wchodzimy."
		),
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"Tak od razu? Myślałem, że jeszcze zostało trochę cza..."
		),
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Trzy, dwa, jeden... Witamy w wywiadzie dnia radia PDF FM, jest piątek godzina 10, z tej strony Beata Kowalczyk, a moim dzisiejszym gościem jest Pan Kuba Bukaj, kandydat na prezydenta RP 2060. Witam serdecznie! Pojutrze ważny dzień, prawda?"
		),
		new MyLine(
			"bogosBinted/jakub.jpg","Jakub",colors["green"],
			"Również witam. Tak, z pewnością jeden z najważniejszych dni dla współczesnej Polski. Wybory prezydenckie na pewno znacząco wpłyną na losy naszego państwa."
		),
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Dobrze, zanim przejdziemy do sedna naszego spotkania... Ponoć miał pan 2 z WOSu na świadectwie!"
		),
	],
	"To prawda. Przyznaję, że w tym wieku nie bardzo uważałem na oceny. Najważniejsze, że zdałem, prawda? Haha!",
	"To tylko plotka, w szkole byłem piątkowym uczniem, a tym bardziej z WOSu!",
	function () {
		doTheEvent(c1u2e6v1);
		nextDub = "c1u2e6v1"
	},
	function () {
		doTheEvent(c1u2e6v1);
		nextDub = "c1u2e6v1"
	},
	[0, 0, 0, 0.1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0.05, 0, 0, 0, 0, 0],
	"c1u2e5v1L",
	"c1u2e5v1R"
);

let c1u2e6v1 = new MyEvent(
	"bogosBinted/radio.jpg",
	[
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Pytam, ponieważ każdy prezydent powinien znać podstawowe struktury organizacji państwa, z tego powodu przygotowałam dla Pana test."
		),
		new MyLine(
			"bogosBinted/jakub.jpg", "Jakub", colors["green"],
			"Jaki test?"),
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Zadam kilka podstawowych pytań z wiedzy o społeczeństwie. Zaczynamy!"
		),
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Pytanie pierwsze: Ilu senatorów liczy senat?"
		),
	],
	"460",
	"100",
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e7v1);
		nextDub = "c1u2e7v1"
	},
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e7v2);
		nextDub = "c1u2e7v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e6v1L",
	"c1u2e6v1R"
);

let c1u2e7v1 = new MyEvent(
	"bogosBinted/radio.jpg",
	[
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Źle! Senat liczy 100 senatorów, możliwe, że pomyliło się panu z liczbą posłów w sejmie, która wynosi 460. Przejdźmy dalej."
		),
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Pytanie drugie: Czym jest zgromadzenie narodowe?"
		),
	],
	"Wspólną obradą sejmu i senatu",
	"Wspólną obradą senatu i prezydenta",
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e8v1);
		nextDub = "c1u2e8v1"
	},
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e8v2);
		nextDub = "c1u2e8v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e7v1L",
	"c1u2e7v1R"
);

let c1u2e7v2 = new MyEvent(
	"bogosBinted/radio.jpg",
	[
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Dobrze! Senat liczy 100 senatorów, natomiast sejm liczy 460 posłów. Przejdźmy dalej."
		),
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Pytanie drugie: Czym jest zgromadzenie narodowe?"
		),
	],
	"Wspólną obradą sejmu i senatu",
	"Wspólną obradą senatu i prezydenta",
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e8v1);
		nextDub = "c1u2e8v1"
	},
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e8v2);
		nextDub = "c1u2e8v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e7v2L",
	"c1u2e7v2R"
);

let c1u2e8v1 = new MyEvent(
	"bogosBinted/radio.jpg",
	[
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Poprawna odpowiedź! Jest zwoływane np. podczas odebrania przysięgi nowo wybranego prezydenta."
		),
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Ostatnie pytanie: Ile lat trzeba mieć, żeby zostać posłem?"
		),
	],
	"30 Lat",
	"21 Lat",
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e9v1);
		nextDub = "c1u2e9v1"
	},
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e9v2);
		nextDub = "c1u2e9v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e8v1L",
	"c1u2e8v1R"
);

let c1u2e8v2 = new MyEvent(
	"bogosBinted/radio.jpg",
	[
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Niestesty, zła odpowiedź. Zgromdzenie narodowe jest zebraniem senatu nie z prezydentem, a z sejmem. Zwoływane jest np. podczas odebrania przysięgi nowo wybranego prezydenta."
			),
		new MyLine(
			"bogosBinted/becia.jpg","Becia",colors["red"],
			"Ostatnie pytanie: Ile lat trzeba mieć żeby zostać posłem?"
			),
	],
	"30 Lat",
	"21 Lat",
	function () {
		data.stats.publicOpinion-=.1
		doTheEvent(c1u2e9v1);
		nextDub = "c1u2e9v1"
	},
	function () {
		data.stats.publicOpinion+=.05
		doTheEvent(c1u2e9v2);
		nextDub = "c1u2e9v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e8v2L",
	"c1u2e8v2R"
);

let c1u2e9v1 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[
		new MyLine(
			"bogosBinted/becia.jpg", "Becia", colors["red"],
			"Pomylił się Pan, żeby zostać posłem wystarczy ukończyć 21 rok życia i do tego mieć prawa wyborcze. Dobrze, skoro pytania mamy za sobą, możemy przejść do właściwej części wywiadu. Jak pan się przygoto..."
		),
	],
	"*podejdź do wywiadu poważnie, nie unikaj trudnych pytań (wymaga skupienia)*",
	"*podejdź do wywiadu spokojnie, z humorem, unikaj trudnych pytań*",
	function () {
		if(data.isCoffeDrunk||data.isBreakfastEaten){
			data.stats.publicOpinion+=.3
			doTheEvent(c1u2e10v1);
			nextDub = "c1u2e10v1"
		}else{
			data.stats.publicOpinion-=.2
			doTheEvent(c1u2e10v2);
			nextDub = "c1u2e10v2"
		}
		
		
	},
	function () {
		if(data.isCoffeDrunk||data.isBreakfastEaten){
			data.stats.publicOpinion+=.1
			doTheEvent(c1u2e10v3);
			nextDub = "c1u2e10v3"
		}else{
			data.stats.publicOpinion-=.1
			doTheEvent(c1u2e10v4);
			nextDub = "c1u2e10v4"
		}
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e9v1L",
	"c1u2e9v1R"
);

let c1u2e9v2 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[
		new MyLine(
			"bogosBinted/becia.jpg", "Becia", colors["red"],
			"Zgadza się! Wystarczy ukończyć 21 rok życia i mieć prawa wyborcze. Dobrze, skoro pytania mamy za sobą, możemy przejść do właściwej części wywiadu. Jak pan się przygoto..."
		),
	],
	"*podejdź do wywiadu poważnie, nie unikaj trudnych pytań (wymaga skupienia)*",
	"*podejdź do wywiadu spokojnie, z humorem, unikaj trudnych pytań*",
	function () {
		if(data.isCoffeDrunk||data.isBreakfastEaten){
			data.stats.publicOpinion+=.3
			doTheEvent(c1u2e10v1);
			nextDub = "c1u2e10v1"
		}else{
			data.stats.publicOpinion-=.2
			doTheEvent(c1u2e10v2);
			nextDub = "c1u2e10v2"
		}
	},
	function () {
		if(data.isCoffeDrunk||data.isBreakfastEaten){
			data.stats.publicOpinion+=.1
			doTheEvent(c1u2e10v3);
			nextDub = "c1u2e10v3"
		}else{
			data.stats.publicOpinion-=.1
			doTheEvent(c1u2e10v4);
			nextDub = "c1u2e10v4"
		}
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e9v2L",
	"c1u2e9v2R"
);

let c1u2e10v1 = new MyEvent(
	"bogosBinted/chumrka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Rozmowa bardzo dobrze mi wyszła! Dzięki temu, że rano nabrałem energii, sprytnie odpowiadałem na pytania Beaty. To na pewno pomoże mi w kampanii."
	)],
	"Kontynuuj wywiad",
	"Kontynuuj wywiad",
	function (){
		doTheEvent(c1u2e11v1);
		nextDub = "c1u2e11v1"
	},
	function (){
		doTheEvent(c1u2e11v1);
		nextDub = "c1u2e11v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e10v1L",
	"c1u2e10v1R"
)

let c1u2e10v2 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Dałem z siebie wszystko, ale przez to, że rano nie miałem czasu ani na śniadanie, ani na kawę, nie byłem do końca skupiony. Powiedziałem kilka głupich rzeczy, a wyborcy mogą mi tego nie wybaczyć."
	)],
	"Kontynuuj wywiad",
	"Kontynuuj wywiad",
	function (){
		doTheEvent(c1u2e11v1);
		nextDub = "c1u2e11v1"
	},
	function (){
		doTheEvent(c1u2e11v1);
		nextDub = "c1u2e11v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e10v2L",
	"c1u2e10v2R"
)

let c1u2e10v3 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Starałem się nie wychodzić zbytnio przed szereg i nieźle mi to wyszło. Dzięki temu, że rano nabrałem siły udało mi się przez cały dzień zachować skupienie i zimną krew. To wyjdzie mi na plus w kampanii."
	)],
	"Kontynuuj wywiad",
	"Kontynuuj wywiad",
	function (){
		doTheEvent(c1u2e11v1);
		nextDub = "c1u2e11v1"
	},
	function (){
		doTheEvent(c1u2e11v1);
		nextDub = "c1u2e11v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e10v3L",
	"c1u2e10v3R"
)

let c1u2e10v4 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"], //wodą się nie nawodnisz debilu ~ Wojciech 2024
		"Dziś rano nie miałem czasu nabrać siły na ten dzień. Postanowiłem unikać niewygodnych pytań, co nie zawsze szło po mojej myśli. Na szczęście udało mi się nie naopowiadać głupot, więc nie jest najgorzej."
	)],
	"Kontynuuj wywiad",
	"Kontynuuj wywiad",
	function (){
		doTheEvent(c1u2e11v1);
		nextDub = "c1u2e11v1"
	},
	function (){
		doTheEvent(c1u2e11v1);
		nextDub = "c1u2e11v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e10v4L",
	"c1u2e10v4R"
)

let c1u2e11v1 = new MyEvent(
	"bogosBinted/radio.jpg",
	[new MyLine(
		"bogosBinted/becia.jpg", "Becia", colors["red"],
		"Właśnie dostaliśmy wiadomość z ostatniej chwili! Sekretarz generalny ONZ potwierdziił rzetelność nagrania które było uważane za podrobione przez sztuczną inteligencję. Panie Jakubie, co teraz? Czy jesteśmy na to gotowi?"
	)],
	"Jak najbardziej, program Earthless...",
	"Myślę, że na pewno sobię poradzimy.",
	function (){
		doTheEvent(c1u2e12v1);
		nextDub = "c1u2e12v1"
	},
	function (){
		doTheEvent(c1u2e12v2);
		nextDub = "c1u2e12v2"
	},
	[0, 0, 0, .2, 0, -.2, 0, 0, 0],
	[0, 0, 0, -.2, 0, .2, 0, 0, 0],
	"c1u2e11v1L",
	"c1u2e11v1R"
)

let c1u2e12v1 = new MyEvent(
	"bogosBinted/radio.jpg", 
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Jak najbardziej, program Earthless jest odpowiedzią na ten problem. We współpracy z najlepszymi polskimi naukowcami, stworzyliśmy plan emigracji wszystkich Polaków w przestrzeń kosmiczną. Mamy ambitnych ludzi, nowoczesne narzędzia i dopracowany plan. Teraz jedyne czego potrzebuję żeby go wyegzekwować to mnie na stanowisku prezydenta. To jedyny sposób na zapewnienie bezpieczeństwa Polakom."
	),new MyLine(
		"bogosBinted/becia.jpg", "Becia", colors["red"],
		"To był wywiad dnia radia PDF FM! Panie Jakubie, dziękuję bardzo za rozmowę."
	)],
	"Również dziękuję, miłego dnia.",
	"Dzięki wielkie, pamiętajcie Bukaj2060!",
	function (){
		doTheEvent(c1u2e13v1);
		nextDub = "c1u2e13v1"
	},
	function (){
		doTheEvent(c1u2e13v1);
		nextDub = "c1u2e13v1"
	},
	[0, 0, 0, 0, 0, .05, 0, 0, 0], 
	[0, 0, 0, .05, 0, -.1, 0, 0, 0],
	"c1u2e12v1L",
	"c1u2e12v1R"
)

let c1u2e12v2 = new MyEvent(
	"bogosBinted/radio.jpg", 
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Muszę przyznać, że my tak jak większość uważaliśmy ten film za nieprawdziwy. W tej sytuacji jedyne co mogę zrobić, to zapewnić, że na pewno sobie poradzimy."
	),new MyLine(
		"bogosBinted/becia.jpg", "Becia", colors["red"],
		"Czy jest coś, co może Pan zapewnić obywatelom jako możliwy przyszły prezydent Polski?"
	),new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Mój sztab na pewno już nad tym pracuje i zapewniam, że zrobimy wszystko, żeby przygotować na to obywateli."
	),new MyLine(
		"bogosBinted/becia.jpg", "Becia", colors["red"],
		"To był wywiad dnia radia PDF FM! Panie Jakubie, dziękuję bardzo za rozmowę."
	)],
	"Również dziękuję, miłego dnia.",
	"Dzięki wielkie, pamiętajcie Bukaj2060!",
	function (){
		changeChapterPlace(1, "Siedziba Earthless")
		doTheEvent(c1u2e13v1);
		nextDub = "c1u2e13v1"
	},
	function (){
		changeChapterPlace(1, "Siedziba Earthless")
		doTheEvent(c1u2e13v1);
		nextDub = "c1u2e13v1"
	},
	[0, 0, 0, 0, 0, .05, 0, 0, 0],
	[0, 0, 0, .05, 0, -.1, 0, 0, 0] ,
	"c1u2e12v2L",
	"c1u2e12v2R"
)

let c1u2e13v1 = new MyEvent(
	"bogosBinted/stol.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Jak myślicie, dobrze tam wypadłem?"
	),new MyLine(
		"bogosBinted/amina.jpg", "Amina", "red",
		"Póki co, nie jesteś wyzywany na Y więc nie narzekaj."
	),new MyLine(
		"bogosBinted/henryk.jpg", "Henryk", "red",
		"Spokojnie, zaraz ktoś coś wytnie z kontekstu i od razu to obleci cały internet. Kuba, może sprawdź co tam się teraz dzieje."
	)],
	"Dobra, zobaczmy",
	"Nie bardzo mnie to teraz obchodzi, na razie czekajmy na wyniki. Musimy być gotowi.",
	function (){
		if (data.areTeethBrushed) {
			doTheEvent(c1u2e14v1)
			nextDub = ""
		}
		else {
			doTheEvent(c1u2e14v2);
			nextDub = ""
		}
	},
	function (){
		doTheEvent(c1u2e15v1);
		nextDub = "c1u2e15v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e13v1L",
	"c1u2e13v1R"
)

let c1u2e14v1 = new MyEvent(
	"bogosBinted/Y.jpg",
	[new MyLine(
		"bogosBinted/noPfpUser.jpg", "FreePenguin", colors["white"],
		"Jakub zaorał wszystkich innych kandydatów! Idol xddd"
	),new MyLine(
		"bogosBinted/noPfpUser.jpg", "segga_crappost", colors["white"],
		"Chłop po raz pierwszy zaczął gadać z sensem? Wow"
	),new MyLine(
		"bogosBinted/noPfpUser.jpg", "polish-player-2k09", colors["white"],
		"MÓJ PREZYDENT BUKAJ2060!!11!!11"
	),new MyLine(
		"bogosBinted/noPfpUser.jpg", "marsrekin", colors["white"],
		"Dziś go podwiozłem pod radio, spoko człowiek!"
	)],
	"Chyba nie jest tak źle",
	"Jest świetnie! Naprawdę mam szansę wygrać!",
	function (){
		doTheEvent(c1u2e15v1);
		nextDub = "c1u2e15v1"
	},
	function (){
		doTheEvent(c1u2e15v1);
		nextDub = "c1u2e15v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e14v1L",
	"c1u2e14v1R"
)

let c1u2e14v2 = new MyEvent(
	"bogosBinted/Y.jpg",
	[new MyLine(
		"bogosBinted/noPfpUser.jpg", "FreePenguin", colors["white"],
		"Jakub zaorał wszystkich innych kandydatów! Idol xddd"
	),new MyLine(
		"bogosBinted/noPfpUser.jpg", "segga_crappost", colors["white"],
		"Chłop po raz pierwszy zaczął gadać z sensem? Wow"
	),new MyLine(
		"bogosBinted/noPfpUser.jpg", "marsrekin", colors["white"],
		"Dziś go podwiozłem pod radio, tak strasznie mu śmierdziało z buzi... Ten człowiek chyba nie myje zębów! Ja mu nie ufam"
	),new MyLine(
		"bogosBinted/noPfpUser.jpg", "polish-player-2k09", colors["white"],
		"MÓJ PREZYDENT BUKAJ2060!!11!!11"
	)],
	"Chyba nie jest tak źle",
	"Jest świetnie! Naprawdę mam szansę wygrać!",
	function (){
		doTheEvent(c1u2e15v1);
		nextDub = "c1u2e15v1"
	},
	function (){
		doTheEvent(c1u2e15v1);
		nextDub = "c1u2e15v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e14v2L",
	"c1u2e14v2R"
)

let c1u2e15v1 = new MyEvent(
	"bogosBinted/stol.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Mam nadzieję, że ta zniesiona cisza wyborcza nam nie zaszkodzi. Mamy za to narzędzie to kamapnii nawet w dzień wyborów!"
	),
	new MyLine(
		"bogosBinted/ilia.jpg", "Ilia", colors["purple"],
		"Na pewno wyjdzie nam to na dobre."
	),new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors['orange'],
		"Chodźcie, jest ogłoszenie wyników!"
	)],
	"Chwila prawdy.",
	"To tylko formalność, ale zobaczmy.",
	function (){
		showIcons(research, "Postęp badań")
		doTheEvent(c1u2e16v1);
		nextDub = "c1u2e16v1"
	},
	function (){
		showIcons(research, "Postęp badań")
		doTheEvent(c1u2e16v1);
		nextDub = "c1u2e16v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e15v1L",
	"c1u2e15v1R"
)

let c1u2e16v1 = new MyEvent(
	"bogosBinted/radio.jpg",
	[new MyLine(
		"bogosBinted/becia.jpg", "Becia", colors["red"],
		"Uwaga, Państwowa Komisja Wyborcza podała wyniki wyborów prezydenckich 2060! Wybory zakończyły się w pierwszej turze, a ich zwycięzcą zostaje Jakub Bukaj, zdobywając 65% głosów. Gratualacje dla Pana prezydenta!"
	),new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors['aqua'],
		"MAMY TO!"
	),new MyLine(
		"bogosBinted/ilia.jpg", "Ilia", colors['purple'],
		"Udało się!"
	),new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"A więc Panie i Panowie - bierzemy się do pracy! Amina, Henryk i Ilia przygotujcie prezentacje waszych badań, Krzychu idź do Alberta, a ja z Marcinem idziemy zrobić ten live z przemówieniem."
	),new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors['orange'],
		"Kuba, czekaj! Albert ma do ciebie sprawę."
	)],
	"Czego ten staruch znowu chce?",
	"Nie mam na to teraz czasu, musimy to natychmiast nagrać.",
	function (){
		doTheEvent(c1u2e17v1);
		nextDub = "c1u2e17v1"
	},
	function (){
		doTheEvent(c1u2e17v2);
		nextDub = ""
	},
	[-.05, 0, 0, .05, 0, 0, 0, 0, 0],
	[.05, 0, 0, -.15, 0, 0, 0, 0, 0],
	"c1u2e16v1L",
	"c1u2e16v1R"
)

let c1u2e17v2 = new MyEvent(
	"bogosBinted/gsg.jpg",
	[new MyLine(
		"bogosBinted/noPfpUser.jpg", "", colors["grey"],
		"Gratulacje, odblokowałeś pierwszy wynalazek: generator sztucznej grawitacji! Tym razem jeszcze ujdzie Ci to na sucho, ale pamiętaj, aby szanować Alberta."
	)],
	"Okej...",
	"Rozumiem.",
	function (){
		changeChapterPlace(2, "Studio nagrań")
		audio1.pause();
		playMusic(audio2);
		doTheEvent(c2u1e1);
		nextDub = "c2u1e1";
	},
	function (){
		changeChapterPlace(2, "Studio nagrań");
		audio1.pause();
		playMusic(audio2);
		doTheEvent(c2u1e1);
		nextDub = "c2u1e1";
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e17v2L",
	"c1u2e17v2R"
)

let c1u2e17v1 = new MyEvent(
	"bogosBinted/albert.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors['orange'],
		"Twierdzi, że skończył to, co mu zleciłeś."
	),new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"O, czyli jednak? Powoli zaczynałem wątpić w to jego paplanie, ale jednak! Albert, pokaż co tam zmajstrowałeś!"
	),new MyLine(
		"bogosBinted/albert.jpg", "Albert", colors["darkred"],
		"Nie wierzyłeś we mnie, ale siedziałem nad tym całymi dniami i jest! Stworzyłem generator sztucznej grawitacji."
	)],
	"Jak to niby jest możliwe?",
	"Nie wierzę, nie ma szans",
	function (){
		doTheEvent(c1u2e18v1);
		nextDub = "c1u2e18v1"
	},
	function (){
		doTheEvent(c1u2e18v1);
		nextDub = "c1u2e18v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e17v1L",
	"c1u2e17v1R"
)

let c1u2e18v1 = new MyEvent(
	"bogosBinted/gsg.jpg",
	[new MyLine(
		"bogosBinted/albert.jpg", "Albert", colors["darkred"],
		"Już tłumaczę o co chodzi. Za pomocą kilku skomplikowanych układów elektrycznych, których nikt poza MNĄ nie byłby w stanie zrozumieć swoim małym móżdżkiem, stworzyłem narzędzie opierające się o działaniu nagęszczacza meterii. Zagęszcza on tyle materii, ile potrzeba żeby wytworzyć dane pole grawitacyj..."
	)],
	"Wiesz co, śpieszy mi się... do zobacznia",
	"Mhm, a czym jest ten zagęszczacz materii?",
	function (){
		doTheEvent(c1u2e17v2);
		nextDub = ""
	},
	function (){
		doTheEvent(c1u2e19v1);
		nextDub = "c1u2e19v1"
	},
	[.05, 0, 0, -.05, 0, 0, 0, 0, 0],
	[-.05, 0, 0, .05, 0, 0, 0, 0, 0],
	"c1u2e18v1L",
	"c1u2e18v1R"
)

let c1u2e19v1 = new MyEvent(
	"bogosBinted/albert.jpg",
	[new MyLine(
		"bogosBinted/albert.jpg", "Albert", colors["darkred"],
		"Cieszę się, że pytasz! Zagęszczacz materii... ha! Co to takiego? To nie jest zwykłe urządzenie, to przełomowa technologia, która wyrywa nas z ram ograniczeń fizyki, to maszyna, która zmienia naszą percepcję rzeczywistości! Wyobraź sobie, że mogę skoncentrować całą masę Wszechświata w jednym punkcie, na tyle małym, że nie mieści się w waszym wyobrażeniu!. Ale jak to możliwe, zapytasz? Otóż ja, wyjątkowy umysł, odkryłem sekrety teoretycznej fizyki kwantowej, a następnie przeniosłem je do praktyki! Zagęszczacz materii wykorzystuje połączenie skomplikowanych manipulacji polami kwantowymi, promieniowaniem gamma i... no cóż, skomplikowanymi obwodami elektronicznymi, których funkcjonowanie przechodzi twoje zwykłe pojęcie!"
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Dobra robota! Krzysiek, zajmiesz się użyciem tego na statku?"
	),
	new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors['orange'],
		"Proste, że tak!"
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Super, a ty Albert teraz zajmij się tym, żeby w ogóle tam dolecieć za życia."
	),
	new MyLine(
		"bogosBinted/albert.jpg", "Albert", colors["darkred"],
		"Jak niby mam to zrobić, wiesz jakie tam są odległości?! Kolejna rzecz która łamie prawa fizyki, chodziłeś ty kiedykolwiek do tej szkoły??"
	)
	],
	"Womp womp, do roboty.",
	"Powodzenia!",
	function (){
		changeChapterPlace(2, "Studio nagrań")
		doTheEvent(c2u1e1);
		nextDub = "c2u1e1";
	},
	function (){
		changeChapterPlace(2, "Studio nagrań")
		doTheEvent(c2u1e1);
		nextDub = "c2u1e1";
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c1u2e19v1L",
	"c1u2e19v1R"
)

//======================================================================
//====================CHAPTER 2=========================================
//======================================================================

let c2u1e1 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Dobra, czyli wiesz co mówić?"
	)],
	"Tak, jestem gotowy.",
	"Może jakaś mała rada?",
	function (){
		doTheEvent(c2u1e2v1);
		nextDub = "c2u1e2v1"
	},
	function (){
		if(data.stats.adviser>=.3) {
			doTheEvent(c2u1e2v2)
			nextDub = "c2u1e2v2"
		}
		else {
			doTheEvent(c2u1e2v3);
			nextDub = "c2u1e2v3"
		}
	},
	[0, 0, .05, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u1e1L",
	"c2u1e1R"
)

let c2u1e2v1 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Dobra to zaczynamy. 3, 2, ..."
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Witajcie rodacy! Na początku chciałbym wam bardzo podziękować za zaufanie. Rola prezydenta to coś, na co przygotowywałem się całe życie. Stoimy przed wielkimi wyzwaniami jako naród, i nawet jako ludzkość. W związku z naszą misją ratowania narodu, muszę wam powiedzieć, że..."
	)],
	"Musicie się przygotować, nie każdy będzie mógł wejść na statek...",
	"Zapewniam, że uratujemy każdego Polaka...",
	function (){
		doTheEvent(c2u1e3v1);
		nextDub = "c2u1e3v1"
	},
	function (){
		data.liedAboutPassengers = true
		doTheEvent(c2u1e3v2);
		nextDub = "c2u1e3v2"
	},
	[0, 0, 0, -.1, 0, -.15, 0, 0, 0],
	[0, 0, 0, .05, 0, .1, 0, 0, 0],
	"c2u1e2v1L",
	"c2u1e2v1R"
)

let c2u1e2v2 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Przede wszystkim powiedz to, co spodoba się ludziom. Ostatnie, czego teraz potrzebujemy, to paniki, więc nie mów o tym, że nie wszyscy będą mogli uciec. Lepiej nie wspomninaj też nic o tym kto będzie mieć jakie warunki na statku. Pamiętaj, mamy umowy. Dzięki tym ludziom jesteśmy tu gdzie jesteśmy, dlatego nie mów nic głupiego."
	)],
	"Nie będę czuł się z tym dobrze...",
	"Dobra, włączaj kamerę.",
	function (){
		doTheEvent(c2u1e2v1);
		nextDub = "c2u1e2v1"
	},
	function (){
		doTheEvent(c2u1e2v1);
		nextDub = "c2u1e2v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u1e2v2L",
	"c2u1e2v2R"
)

let c2u1e2v3 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Już się ostatnio przekonałem jak szanujesz moje rady... Mów co chcesz."
	)],
	"Obiecuję, że to się nie powtórzy.",
	"Skoro tak mówisz... włączaj kamerę.",
	function (){
		doTheEvent(c2u1e2v2);
		nextDub = "c2u1e2v2"
	},
	function (){
		doTheEvent(c2u1e2v1);
		nextDub = "c2u1e2v1"
	},
	[0, 0, .1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u1e2v3L",
	"c2u1e2v3R"
)



let c2u1e3v1 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Muszę was poinformować, że ze względu na ograniczenia technologiczne oraz finansowe, nie dla każdego znajdzie się miejsce. Robimy wszystko, co w naszej mocy, aby mogło polecieć jak najwięcej osób, jednak niestety możemy nie zdążyć na czas. Chcę też państwu powiedzieć o warunkach na statku..."
	)],
	"Które dla każdego będą takie same.",
	"Które mogą być różne...",
	function (){
		data.liedAboutSeats = true;
		doTheEvent(c2u1e4v1);
		nextDub = "c2u1e4v1"
	},
	function (){
		doTheEvent(c2u1e4v2);
		nextDub = "c2u1e4v2"
	},
	[0, 0, 0, .05, 0, .1, 0, 0, 0],
	[0, 0, 0, -.1, 0, -.15, 0, 0, 0],
	"c2u1e3v1L",
	"c2u1e3v1R"
)

let c2u1e3v2 = new MyEvent(
	"bogosBinted/jakub.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Zapewniam, że uratujemy każdego Polaka. Każdy, kto będzie chciał wejść na statek ze swoją rodziną, obiecuję, że będzie mógł to uczynić. Jednocześnie musicie wiedzieć o warunkach na statku..."
	)],
	"Które dla każdego będą takie same.",
	"Które mogą być różne...",
	function (){
		data.liedAboutSeats = true;
		doTheEvent(c2u1e4v1);
		nextDub = "c2u1e4v1"
	},
	function (){
		doTheEvent(c2u1e4v2);
		nextDub = "c2u1e4v2"
	},
	[0, 0, 0, .05, 0, .1, 0, 0, 0],
	[0, 0, 0, -.1, 0, -.15, 0, 0, 0],
	"c2u1e3v2L",
	"c2u1e3v2R"
)

let c2u1e4v1 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Każdy, bez względu na swój status społeczny, będzie miał dostęp do takich samych warunków na statku. Nadchodzą ciężkie czasy, ale my jesteśmy gotowi."
	)],
	"Dziękuję za uwagę, wszystkiego dobrego.",
	"Pamiętajcie by być dobrej myśli.",
	function (){
		changeChapterPlace(2, "Laboratorium Earthless")
		doTheEvent(c2u2e1);
		nextDub = "c2u2e1";
	},
	function (){
		changeChapterPlace(2, "Laboratorium Earthless")
		doTheEvent(c2u2e1);
		nextDub = "c2u2e1";
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u1e4v1L",
	"c2u1e4v1R"
)


let c2u1e4v2 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Które mogą być różne w zależności od tego kto kiedy wykupił bilet. Bilety muszą być płatne ze względu na koszty, które nie mogły być pokryte z budżetu państwa. Nadchodzą ciężkie czasy, ale my jesteśmy gotowi."
	)],
	"Dziękuję za uwagę, wszystkiego dobrego.",
	"Pamiętajcie by być dobrej myśli.",
	function (){
		changeChapterPlace(2, "Laboratorium Earthless");
		doTheEvent(c2u2e1);
		nextDub = "c2u2e1"
	},
	function (){
		changeChapterPlace(2, "Laboratorium Earthless");
		doTheEvent(c2u2e1);
		nextDub = "c2u2e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u1e4v2L",
	"c2u1e4v2R"
)

let c2u2e1 = new MyEvent(
	"bogosBinted/stol.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Dobrze, to teraz powtórzmy sobie podział obowiązków. Henryk, jaki mamy plan na wyżywienie wszystkich?"
	),
	new MyLine(
		"bogosBinted/henryk.jpg", "Henryk", colors["brown"],
		"Kierowniku, tu nie ma żadnej filizofii! W moim domu rodzinnym nauczyłem się automatyzować nasze uprawy. Wystarczy trochę kreatywności i zrobię ci samorobiące się uprawy czego tylko Kierownik będzie chciał. Eee...zacząłbym od ziemniaków, kocham ziemniaki!"
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Ale jak chcesz cokolwiek posadzić na statku kosmicznym?"
	),
	new MyLine(
		"bogosBinted/ilia.jpg", "Ilia", colors["purple"],
		"O to się nie martw, to jest do zrobienia. Nie pamiętasz jak ci opowiadałam o tym, czego potrzebuje roślina? "
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"No pewnie, roślina potrzebuje..."
	)],
	"światła, wody i tlenu.",
	"światła, wody i dwutlenku węgla.",
	function (){
		data.stats.research+=.05
		doTheEvent(c2u2e2v1);
		nextDub = "c2u2e2v1"
	},
	function (){
		data.stats.research-=.05
		doTheEvent(c2u2e2v2);
		nextDub = "c2u2e2v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u2e1L",
	"c2u2e1R"
)

let c2u2e2v1 = new MyEvent(
	"bogosBinted/stol.jpg",
	[new MyLine(
		"bogosBinted/ilia.jpg", "Ilia", colors["purple"],
		"Skąd! Po co jej tlen? Ona go produkuje, a nie potrzebuje. Za to będzie potrzebowała dwutlenku węgla, który jest wydychany przez ludzi, więc z tym nie będzie problemu. Podobnie z wodą, jeśli zaprojektujemy odpowiednie systemy filtracji, nigdy nam jej nie zabraknie. Jeśli chodzi o światło, niekoniecznie musi być ono słoneczne, ale musimy użyć specialnych lamp dostosowanych do roślin."
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Rzeczywiście, pomyliło mi się. Ale pomożesz Henrykowi w stworzeniu tych automatycznych upraw?"
	),
	new MyLine(
		"bogosBinted/ilia.jpg", "Ilia", colors["purple"],
		"Oczywiście Jakubie."
	), 
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Świetnie, a Krzyś? Jak ci idzie ten napęd?"
	),
	new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"Już wszystko gotowe, tylko Amina miała załatwić paliwo... Jej przecież się nie śpieszy jak zawsze."
	),
	new MyLine(
		"bogosBinted/amina.jpg", "Amina", colors["lightpurple"],
		"Odezwał się zapracowany! I tak, mam wszystko gotowe, ale muszę z tobą o tym pomówić na osobności."
	)],
	"Dobrze, byle szybko.",
	"Nie mamy na to teraz czasu.",
	function (){
		doTheEvent(c2u2e3v1);
		nextDub = "c2u2e3v1"
	},
	function (){
		doTheEvent(c2u2e3v2);
		nextDub = "c2u2e3v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u2e2v1L",
	"c2u2e2v1R"
)

let c2u2e2v2 = new MyEvent(
	"bogosBinted/stol.jpg",
	[new MyLine(
		"bogosBinted/ilia.jpg", "Ilia", colors["purple"],
		"No właśnie! Dwutlenek węgla jest wydychany przez ludzi, więc z tym nie będzie problemu. Podobnie z wodą, jeśli zaprojektujemy odpowiednie systemy filtracji, nigdy nam jej nie zabraknie. Jeśli chodzi o światło, niekoniecznie musi być ono słoneczne, ale musimy użyć specialnych lamp dostosowanych do roślin."
		),
		new MyLine(
			"bogosBinted/jakub.jpg", "Jakub", colors["green"],
			"Świetnie, więc pomożesz Henrykowi w stworzeniu tych automatycznych upraw?"
		),
		new MyLine(
			"bogosBinted/ilia.jpg", "Ilia", colors["purple"],
			"Oczywiście Jakubie."
		), 
		new MyLine(
			"bogosBinted/jakub.jpg", "Jakub", colors["green"],
			"Świetnie, a Krzyś? Jak ci idzie ten napęd?"
		),
		new MyLine(
			"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
			"Już wszystko gotowe, ale Amina miała załatwić paliwo... Jej przecież się nie śpieszy jak zawsze."
		),
		new MyLine(
			"bogosBinted/amina.jpg", "Amina", colors["lightpurple"],
			"Odezwał się zapracowany! I tak, mam wszystko gotowe, ale muszę z tobą o tym pomówić na osobności."
		)],
		"Dobrze, byle szybko.",
		"Nie mamy na to teraz czasu.",
	function (){
		showIcons(fuel, "Stan paliwa")
		doTheEvent(c2u2e3v1);
		nextDub = "c2u2e3v1"
	},
	function (){
		doTheEvent(c2u2e3v2);
		nextDub = "c2u2e3v2"
	},
	[0, 0, 0, 0, 0, 0, .05, 0, 0],
	[0, 0, 0, 0, 0, 0, -.05, 0, 0],
	"c2u2e2v2L",
	"c2u2e2v2R"
)

let c2u2e3v1 = new MyEvent(
	"bogosBinted/amina.jpg",
	[new MyLine(
		"bogosBinted/amina.jpg", "Amina", colors["lightpurple"],
		"Doszliśmy do wniosku, że najlepszym sposobem żeby wydobyć z Ziemi jak najwięcej energii, jest zasilenie statku na metan i tlen. Tylko z tym wiąże się mały problem."
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Jaki?"
	), 
	new MyLine(
		"bogosBinted/amina.jpg", "Amina", colors["lightpurple"],
		"Nie wiemy ile dokładnie będziemy potrzebowali tego metanu. Nasz obecny zapas może wystarczyć, ale aby wydobyć go na tyle, żeby wystarczyło na dolecenie do podobnej planety, musielibyśmy otworzyć nowe kopalnie."
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"W takim razie w czym problem?"
	),
	new MyLine(
		"bogosBinted/amina.jpg", "Amina", colors["lightpurple"],
		"Te kopalnie byłyby pod terenem, zamieszkiwanym przez sporą ilość ludzi. Potencjalne zawalenie się którejkolwiek z kopalni, skutkuje śmiercią wielu mieszkańców. Setek. Albo nawet i tysięcy."
	)],
	"Trudno, skoro nie ma innych opcji, zlećcie to komuś.",
	"Nie możemy ryzykować życia niewinnych ludzi!",
	function (){
		showIcons(food, "Dostępna żywność")
		doTheEvent(c2u2e4v1);
		nextDub = "c2u2e4v1"
	},
	function (){
		showIcons(food, "Dostępna żywność")
		doTheEvent(c2u2e4v1);
		nextDub = "c2u2e4v1"
	},
	[0, 0, 0, -.3, -.2, 0, 0, .4, 0],
	[0, 0, 0, 0, .2, 0, 0, 0, 0],
	"c2u2e3v1L",
	"c2u2e3v1R"
)

let c2u2e3v2 = new MyEvent(
	"bogosBinted/amina.jpg",
	[new MyLine(
		"bogosBinted/amina.jpg", "Amina", colors["lightpurple"],
		"Dobrze, to w takim razie zapytam Marcina o zdanie."
	)],
	"Dobra, mów o co chodzi.",
	"Rób co chcesz.",
	function (){
		showIcons(fuel, "Stan paliwa")
		doTheEvent(c2u2e3v1);
		nextDub = "c2u2e3v1"
	},
	function (){
		data.marcinsDecision
		showIcons(food, "Dostępna żywność")
		doTheEvent(c2u2e4v1);
		nextDub = "c2u2e4v1"
	},
	[0, 0, 0, 0, 0, -.1, 0, 0, 0],
	[0, 0, 0, 0, 0, .1, 0, 0, 0],
	"c2u2e3v2L",
	"c2u2e3v2R"
)

let c2u2e4v1 = new MyEvent(
	"bogosBinted/stol.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"To chyba wszystko, ktoś ma jeszcze coś do dodania?"
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Co ze spiskowcami? Coraz więcej ludzi nie chce z nami lecieć, twierdzą, że operacja Earthless ma służyć pozbyciu się ludzi z przeludnionej Ziemi."
	),
	new MyLine(
		"bogosBinted/henryk.jpg", "Henryk", colors["brown"],
		"Może to nawet lepiej? Powinno nam wystarczyć na wyżywienie tych wszystkich ludzi, jednak ręki sobie uciąć nie dam, za to głodny po kosmosie nie będę latał!"
	)],
	"Ruszymy z kampanią informacyjną, musi z nami polecieć tyle ludzi, ile się da.",
	"Odpuśćmy, musimy zwiększyć szanse na przetrwanie.",
	function (){
		doTheEvent(c2u2e5v1);
		nextDub = "c2u2e5v1"
	},
	function (){
		doTheEvent(c2u2e5v1);
		nextDub = "c2u2e5v1"
	},
	[0, 0, 0,.1, -.2, 0, 0, 0, -.1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u2e4v1L",
	"c2u2e4v1R"
)

let c2u2e5v1 = new MyEvent(
	"bogosBinted/stol.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"Została jeszcze najważniejsza sprawa: gdzie my w końcu lecimy?"
	)],
	"To znaczy? Jeszcze tego nie ustaliłeś?",
	"Jakie mamy opcje?",
	function (){
		doTheEvent(c2u3e1);
		nextDub = "c2u3e1"
	},
	function (){
		doTheEvent(c2u3e1);
		nextDub = "c2u3e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u2e5v1L",
	"c2u2e5v1R"
)

let c2u3e1 = new MyEvent(
	"bogosBinted/krzychu.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"Mamy 3 opcje: KOI-4878.01, TRAPPIST-1e oraz Proxima Centauri b."
	)],
	"Czym się różnią?",
	"Jakie są na nich warunki?",
	function (){
		doTheEvent(c2u3e2v1);
		nextDub = "c2u3e2v1"
	},
	function (){
		doTheEvent(c2u3e2v1);
		nextDub = "c2u3e2v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u3e1L",
	"c2u3e1R"
)

let c2u3e2v1 = new MyEvent(
	"bogosBinted/planet1.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"To po kolei: KOI-4878.01 - jedna z planet najbardziej podobnych do Ziemi. Ma praktycznie identyczną masę i powierzchnię, podobną średnią temperaturę (zakładając, że ma atmosferę) i prawdopodobnie wodę. Niestey jest bardzo daleko i potrzebowalibyśmy całego naszego paliwa, żeby tam dolecieć. Do tego możliwe, że zamieszkiwany przez pewną rasę kosmitów nazywanych Nerdami. 1075 lat świetlnych od Ziemi."
	)],
	"Okej",
	"Mhm",
	function (){
		doTheEvent(c2u3e3v1);
		nextDub = "c2u3e3v1"
	},
	function (){
		doTheEvent(c2u3e3v1);
		nextDub = "c2u3e3v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u3e2v1L",
	"c2u3e2v1R"
)

let c2u3e3v1 = new MyEvent(
	"bogosBinted/planet2.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"TRAPPIST-1e - Dużo mniejsza od Ziemi, ale wciąż podobna planeta. Też może mieć wodę i w miarę znośną temperaturę oraz atmosferę. Zaletą tego miejsca jest to, że ją zamieszkują przyjaźnie nastawieni Magikale. Problem taki, że dysponują oni technologią, której nikt nie rozumie, stąd ich nazwa, więc lepiej im nie podpadać. 39 lat świetlnych od Ziemi."
	)],
	"Okej",
	"Mhm",
	function (){
		doTheEvent(c2u3e4v1);
		nextDub = "c2u3e4v1"
	},
	function (){
		doTheEvent(c2u3e4v1);
		nextDub = "c2u3e4v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u3e3v1L",
	"c2u3e3v1R"
)

let c2u3e4v1 = new MyEvent(
	"bogosBinted/planet3.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"Proxima centauri b - najbliżej z tych 3 planet - tylko 4 lata świetlne. Również zdatna do życia planeta, okrążenie wokół jej gwiazdy macierzystej trwa 11 dni. Zamieszkiwana przez Agresusów - mogą na nas zareagować agresywnie."
	)],
	"Ty mówisz poważnie z tymi kosmitami? Myślałem, że już o tym rozmawialiśmy.",
	"Okej w takim razie lećmy na...",
	function (){
		doTheEvent(c2u3e5v1),
		nextDub = "c2u3e5v1"
	},
	function (){
		changePlanet();
		audio2.pause()
		playMusic(audio3)
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u3e4v1L",
	"c2u3e4v1R"
)

let c2u3e5v1 = new MyEvent(
	"bogosBinted/krzychu.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"Naprawdę wierzysz w to, że jesteśmy sami we wszechświecie? Istnieje spora szansa, że jest na odwrót, więc wolałem ci powiedzieć."
	)],
	"Dobra, wracając do tych planet...",
	"Taa, w każdym razie polećmy na...",
	function (){
		changePlanet();
		audio2.pause();
		playMusic(audio3);
	},
	function (){
		changePlanet();
		audio2.pause();
		playMusic(audio3);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c2u3e5v1L",
	"c2u3e5v1R"
)

// =================================================================
// ======================= CHAPTER 3 ===============================
// =================================================================

let c3u1e1 = new MyEvent(// nie ma
	"bogosBinted/stol.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		'Witajcie na "Kosmicznym Pierogu"! Po namyśle z Jakubem doszliśmy do wniosku, że lecimy na '+data.destination+'. Na szczęście dzięki Albertowi dolecimy tam jeszcze za naszego życia!'
	),
	new MyLine(
		"bogosBinted/henryk.jpg", "Henryk", colors["brown"],
		"Niby jak zamierzacie tak szybko przelecieć ten dystans?"
	)],
	"Też chętnie posłucham.",
	"Albert, wytłumacz im.",
	function (){
		doTheEvent(c3u1e2v1);
		nextDub = "c3u1e2v1"
	},
	function (){
		doTheEvent(c3u1e2v1);
		nextDub = "c3u1e2v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u1e1L",
	"c3u1e1R"
)

let c3u1e2v1 = new MyEvent( 
	"bogosBinted/albert.jpg",
	[new MyLine(
		"bogosBinted/albert.jpg", "Albert", colors["darkred"],
		"To akurat nie jest takie trudne. Stworzyłem AutoPlanetoPilot! Wystarczyło zintegrować wszystkie silniki na tym statku, odnaleźć współrzędne wszystkich planet po drodze, a sztuczna inteligencja zrobi resztę za nas!"
	)],
	"Ale jak chcesz przelecieć tyle lat świetlnych?",
	"Skoro wszystko gotowe, możemy już startować.",
	function (){
		doTheEvent(c3u1e3v1)
		nextDub = "c3u1e3v1"
	},
	function (){
		doTheEvent(c3u1e3v2)
		nextDub = ""
	},
	[0, 0, 0, 0, 0, 0, .1, 0, 0],
	[0, 0, 0, 0, 0, 0, -.1, 0, 0], 
	"c3u1e2v1L",
	"c3u1e2v1R"
)

let c3u1e3v2 = new MyEvent(
	"bogosBinted/gsg.jpg",
	[new MyLine(
		"bogosBinted/noPfpUser.jpg", "", colors["grey"],
		"Gratulacje, odblokowałeś drugi wynalazek: AutoPlanetoPilot! Tym razem jeszcze ujdzie Ci to na sucho, ale pamętaj, aby szanować Alberta."
	)],
	"Okej...",
	"Rozumiem.",
	function (){
		doTheEvent(c3u2e1)
		nextDub = "c3u2e1"
	},
	function (){
		doTheEvent(c3u2e1)
		nextDub = "c3u2e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u1e3v1L",
	"c3u1e3v1R"
)

let c3u1e3v1 = new MyEvent(
	"bogosBinted/app.jpg",
	[new MyLine(
		"bogosBinted/albert.jpg", "Albert", colors["darkred"],
		'Cieszę się, że pytasz. Więc, o co chodzi z tym całym AutoPlanetoPilotem? Otóż ten system wykorzystuje zjawisko znane jako "asysta grawitacyjna", które pozwala na zwiększenie prędkości pojazdu kosmicznego poprzez wykorzystanie grawitacji innych planet! To tak jakby korzystać z siły pchającej nas do przodu, wyłącznie dzięki oddziaływaniu grawitacyjnemi! Tylko trzeba z tym uważać. To nie jest kwestia po prostu wlepienia się na orbitę Marsa czy Jowisza i czekania, aż grawitacja nas wystrzeli w kosmos! Nie, to o wiele bardziej skomplikowane! AutoPlanetoPilot musi precyzyjnie obliczać trajektorię, prędkość i kąt podejścia do danej planety, aby wykorzystać jej grawitację w najbardziej efektywny sposób! To jak gra w kosmicznego bilarda, tylko z milionami planet i gwiazd jako kule!'
	)],
	"A dasz radę zrobić te działka protonowe?",
	"Dobra robota, teraz się bierz za działka protonowe.", 
	function (){
		doTheEvent(c3u1e4v1)
		nextDub = "c3u1e4v1"
	},
	function (){
		doTheEvent(c3u1e4v1)
		nextDub = "c3u1e4v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u1e3v1L",
	"c3u1e3v1R"
)

let c3u1e4v1 = new MyEvent(
	"bogosBinted/albert.jpg",
	[new MyLine(
		"bogosBinted/albert.jpg", "Albert", colors["darkred"],
		'Chyba cię pokasztaniło z butów na zbity ryj! Nie ma szans by to zrobić.'
	)],
	"Mądry chłopak jesteś, dasz radę.",
	"Uspokój się chłopie i do roboty.",
	function (){
		doTheEvent(c3u2e1)
		nextDub = "c3u2e1"
	},
	function (){
		doTheEvent(c3u2e1)
		nextDub = "c3u2e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u1e4v1L",
	"c3u1e4v1R"
)

let c3u2e1 = new MyEvent(
	"bogosBinted/stol.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Przerwijmy na chwilę tą naukową paplaninę i zajmijmy się aktualnymi problemami."
	)],
	"O co chodzi?",
	"Co się dzieje?",
	function (){
		if(data.liedAboutPassengers&&data.liedAboutSeats){
			data.stats.publicOpinion-=.3
			doTheEvent(c3u2e2v1);
			nextDub = "c3u2e2v1"
		}else if(data.liedAboutPassengers){
			doTheEvent(c3u2e2v2);
			nextDub = "c3u2e2v2"
			data.stats.publicOpinion-=.2
		}else if(data.liedAboutSeats){
			doTheEvent(c3u2e2v3);
			nextDub = "c3u2e2v3"
			data.stats.publicOpinion-=.1
		}else {
			doTheEvent(c3u2e2v4);
			nextDub = "c3u2e2v4"
		}
		
	},
	function (){
		if(data.liedAboutPassengers&&data.liedAboutSeats){
			data.stats.publicOpinion-=.3
			doTheEvent(c3u2e2v1);
			nextDub = "c3u2e2v1"
		}else if(data.liedAboutPassengers){
			doTheEvent(c3u2e2v2);
			nextDub = "c3u2e2v2"
			data.stats.publicOpinion-=.2
		}else if(data.liedAboutSeats){
			doTheEvent(c3u2e2v3);
			nextDub = "c3u2e2v3"
			data.stats.publicOpinion-=.1
		}else {
			doTheEvent(c3u2e2v4);
			nextDub = "c3u2e2v4"
		}
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u2e1L",
	"c3u2e1R"
)

let c3u2e2v1 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Ludzie się dowiedzieli o wszystkim, o czym ich okłamałeś podczas tamtego liva na Facebooku. Teraz chcą zwrotu pieniędzy, niektórzy już w ogóle rezygnują."
	)],
	"Daj im zwroty, a jeśli trzeba to bilety za bezcen.",
	"Nie chcą - ich problem.",
	function (){
		if(data.marcinsDecision){
			data.stats.publicOpinion-=.2
			data.stats.fuel+=.3
			doTheEvent(c3u2e3v1);
			nextDub = "c3u2e3v1"
		}else{
			doTheEvent(c3u2e3v2);
			nextDub = "c3u2e3v2"
		}
	},
	function (){
		if(data.marcinsDecision){
			data.stats.publicOpinion-=.2
			data.stats.fuel+=.3
			doTheEvent(c3u2e3v1);
			nextDub = "c3u2e3v1"
		}else{
			doTheEvent(c3u2e3v2);
			nextDub = "c3u2e3v2"
		}
	},
	[0, 0, 0, .1, -.2, 0, 0, 0, 0],
	[0, 0, 0, -.1, .2, 0, 0, 0, .1],
	"c3u2e2v1L",
	"c3u2e2v1R"
)

let c3u2e2v2 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Ludzie się w końcu dowiedzieli, że okłamałeś ich o tym, kto może wejść na satek. Teraz próbują się dostać siłowo."
	)],
	"Daj im darmowe bilety.",
	"Zająć się nimi szybko, zaraz wylatujemy.",
	function (){
		if(data.marcinsDecision){
			data.stats.publicOpinion-=.2
			data.stats.fuel+=.3
			doTheEvent(c3u2e3v1);
			nextDub = "c3u2e3v1"
		}else{
			doTheEvent(c3u2e3v2);
			nextDub = "c3u2e3v2"
		}
	},
	function (){
		if(data.marcinsDecision){
			data.stats.publicOpinion-=.2
			data.stats.fuel+=.3
			doTheEvent(c3u2e3v1);
			nextDub = "c3u2e3v1"
		}else{
			doTheEvent(c3u2e3v2);
			nextDub = "c3u2e3v2"
		}
	},
	[0, 0, 0, .1, -.2, 0, 0, 0, 0],
	[0, 0, 0, -.1, .2, 0, 0, 0, .1],
	"c3u2e2v2L",
	"c3u2e2v2R"
)

let c3u2e2v3 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Ludzie dowiedzieli się o nierównych warunkach na statku. Chcą za to tańsze bilety."
	)],
	"Obniż ceny, byle z nami polecieli.",
	"Pełna cena albo nigdzie nie lecą.",
	function (){
		if(data.marcinsDecision){
			data.stats.publicOpinion-=.2
			data.stats.fuel+=.3
			doTheEvent(c3u2e3v1);
			nextDub = "c3u2e3v1"
		}else{
			doTheEvent(c3u2e3v2);
			nextDub = "c3u2e3v2"
		}
	},
	[0, 0, 0, .1, -.1, 0, 0, 0, 0],
	[0, 0, 0, -.1, .1, 0, 0, 0, .1],
	"c3u2e2v3L",
	"c3u2e2v3R"
)

let c3u2e2v4 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Mimo tego co mówiłeś na live, wzrosło zainteresowanie lotem, ale kończą nam się miejsca!"
	)],
	"Nie możemy już wpuścić więcej.",
	"Wpuść każdego, kto będzie chciał!",
	function (){
		if(data.marcinsDecision){
			data.stats.publicOpinion-=.2
			data.stats.fuel+=.3
			doTheEvent(c3u2e3v1);
			nextDub = "c3u2e3v1"
		}else{
			doTheEvent(c3u2e3v2);
			nextDub = "c3u2e3v2"
		}
	},
	[0, 0, 0, -.1, 0, 0, 0, 0, 0],
	[0, 0, 0, .1, 0, 0, 0, 0, .1],
	"c3u2e2v4L",
	"c3u2e2v4R"
)

let c3u2e3v1 = new MyEvent(
	"bogosBinted/jakub.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Chciałeś mi jeszcze o czymś powiedzieć?"
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Jeszcze jedna sprawa... Pamiętasz to, o czym chciała Ci powiedzieć Amina? Chciała wykorzystać dosyć ryzykowny sposób na wydobycie metanu do zasilenia statku... Ja na to pozwoliłem i... doszło do katastrofy. Umarło 3 tysiące ludzi."
	)],
	"TY IDIOTO!",
	"Każdy popełnia błędy...",
	function (){
		doTheEvent(c3u2e3v2);
		nextDub = "c3u2e3v2"
	},
	function (){
		doTheEvent(c3u2e3v2);
		nextDub = "c3u2e3v2"
	},
	[0, 0, 0, 0, 0, -.1, 0, 0, 0],
	[0, 0, 0, 0, 0, .1, 0, 0, 0],
	"c3u2e3v1L",
	"c3u2e3v1R"
)

let c3u2e3v2 = new MyEvent(
	"bogosBinted/jakub.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Chciałeś mi jeszcze o czymś powiedzieć?"
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Nie, to wszystko."
	)],
	"Okej, to tyle na teraz. Startujmy.",
	"Przekaż wszystkim, żeby się przygotowali do startu.",
	function (){
		changeChapterPlace(3, "Kosmiczny PierUg, 5% trasy.");
		doTheEvent(c3u3e1)
		nextDub = "c3u3e1";
	},
	function (){
		changeChapterPlace(3, "Kosmiczny PierUg, 5% trasy.")
		doTheEvent(c3u3e1);
		nextDub = "c3u3e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u2e3v2L",
	"c3u2e3v2R"
)

let c3u3e1 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Start przeszedł bez zarzutu, już jesteśmy w drodze na "+data.destination+"! Niestety już zaczynam widzieć pierwsze problemy, mój zespół już ustawia się w kolejce z kolejnymi sprawami."
	)],
	"...",
	"...",
	function (){
		doTheEvent(c3u3e2v1)
		nextDub = "c3u3e2v1"
	},
	function (){
		doTheEvent(c3u3e2v1)
		nextDub = "c3u3e2v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0] ,
	"c3u3e1L",
	"c3u3e1R"
)

let c3u3e2v1 = new MyEvent( 
	"bogosBinted/henryk.jpg",
	[new MyLine(
		"bogosBinted/henryk.jpg", "Henryk", colors["brown"],
		"Szefie, mam jedną sprawę. Wzieliśmy 2 rodzaje zboża: jedno jest znacznie łatwiej uprawiać, ale może powodować choroby i jest i porostu gorszej jakości. A drugie jest dobrej jakości, ale ciężej się je uprawia. Którego rodzaju powinniśmy użyć?"
	)],
	"Lepiej pójdźmy w ilość, żęby starczyło dla każdego.",
	"Nie możemy ryzykować zdrowia ludzi.",
	function (){
		doTheEvent(c3u3e3v1)
		nextDub = "c3u3e3v1"
	},
	function (){
		doTheEvent(c3u3e3v1)
		nextDub = "c3u3e3v1"
	},
	[0, 0, 0, -.1, .1, 0, 0, 0, .1],
	[0, 0, 0, .1, -.1, 0, 0, 0, 0],
	"c3u3e2v1L",
	"c3u3e2v1R"
)

let c3u3e3v1 = new MyEvent(
	"bogosBinted/amina.jpg",
	[new MyLine(
		"bogosBinted/ilia.jpg", "Ilia", colors["purple"],
		"Kuba, musimy powoli myśleć o tym jak się przygotować do życia na nowej planecie. Będziemy musieli utworzyć pole magnetyczne, aby uchronić się przed kosmicznym promieniowaniem. Wiesz z czego składa się promieniowanie kosmiczne?"
	)],
	"Sigma, omega i lambda",
	"Alfa, beta i gamma",
	function (){
		doTheEvent(c3u3e4v1);
		nextDub = "c3u3e4v1"
		data.stats.research-=.1
	},
	function (){
		data.stats.research+=.1
		doTheEvent(c3u3e4v2)
		nextDub = "c3u3e4v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u3e3v1L",
	"c3u3e3v1R"
)

let c3u3e4v1 = new MyEvent(
	"bogosBinted/ilia.jpg",
	[new MyLine(
		"bogosBinted/ilia.jpg", "Ilia", colors["purple"],
		"Ty niedoedukowany chloroplaście, chodziło o alfa, beta i gamma. W każdym razie jest ono śmiertelnie niebezpieczne dla człowieka, więc będziemy potrzebowali sporo prądu na planecie, żeby stworczyć pole magnetyczne."
	)],
	"Da się zrobić.",
	"Nie zawracaj mi tym teraz głowy, idź z tym do Alberta",
	function (){
		doTheEvent(c3u3e5v1)
		nextDub = "c3u3e5v1"
	},
	function (){
		doTheEvent(c3u3e5v1)
		nextDub = "c3u3e5v1"
	},
	[0, 0, 0, 0, -.2, 0, .1, 0, 0],
	[0, 0, 0, 0, .2, 0, -.1, 0, 0],
	"c3u3e4v1L",
	"c3u3e4v1R"
)

let c3u3e4v2 = new MyEvent(
	"bogosBinted/ilia.jpg",
	[new MyLine(
		"bogosBinted/ilia.jpg", "Ilia", colors["purple"],
		"Dokładnie tak, i są one śmiertelnie niebezpieczne dla człowieka, więc będziemy potrzebowali sporo prądu na planecie, żeby stworczyć pole magnetyczne."
	)],
	"Da się zrobić.",
	"Nie zawracaj mi tym teraz głowy, idź z tym do Alberta",
	function (){
		doTheEvent(c3u3e5v1)
		nextDub = "c3u3e5v1"
	},
	function (){
		doTheEvent(c3u3e5v1)
		nextDub = "c3u3e5v1"
	},
	[0, 0, 0, 0, -.2, 0, .1, 0, 0],
	[0, 0, 0, 0, .2, 0, -.1, 0, 0],
	"c3u3e4v2L",
	"c3u3e4v2R"
)

let c3u3e5v1 = new MyEvent(
	"bogosBinted/Amina.jpg",
	[new MyLine(
		"bogosBinted/amina.jpg", "Amina", colors["lightpurple"],
		"Jeśli chodzi o kolonizację to też mam sprawę. Musimy dodać tlen do atmosfery, a konkretniej zmienić go z dwutlenkiem węgla. Posadzenie tam roślin powinno załatwić sprawę, ale to zajmie sporo czasu i będzie bardzo kosztowne"
	)],
	"Do zrobienia.",
	"Musicie wymyślić jakiś tańszy sposób",
	function (){
		doTheEvent(c3u3e6v1)
		nextDub = "c3u3e6v1"
	},
	function (){
		doTheEvent(c3u3e6v1)
		nextDub = "c3u3e6v1"
	},
	[0, 0, 0, 0, -.2, 0, .1, 0, 0],
	[0, 0, 0, 0, .2, 0, -.1, 0, 0],
	"c3u3e5v1L",
	"c3u3e5v1R"
)

let c3u3e6v1 = new MyEvent(
	"bogosBinted/krzychu.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"HAHAH, OD POCZĄTKU WIEDZIAŁEM!"
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"No i co się tak cieszysz, o co chodzi?"
	),
	new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"Próbują się z nami skontaktwać ci kosmici z "+data.destination+" - "+data.host+"!"
	)],
	"Wow, naprawdę w to nie wierzyłem.",
	"O czym mówią?",
	function (){
		changeChapterPlace(3, "Kosmiczny pieróg, 50% trasy.")
		
		if(data.host === "Nerdzi"){
			doTheEvent(c3u4e1v1);
			nextDub = "c3u4e1v1"
		}else if(data.host === "Magikale"){
			doTheEvent(c3u4e1v2);
			nextDub = "c3u4e1v2"
		}else if(data.host ==="Agresusi"){
			doTheEvent(c3u4e1v3);
			nextDub = "c3u4e1v3"
		}
	},
	function (){
		changeChapterPlace(3, "Kosmiczny pieróg, 50% trasy.")
		
		if(data.host === "Nerdzi"){
			doTheEvent(c3u4e1v1);
			nextDub = "c3u4e1v1"		
		}else if(data.host === "Magikale"){
			doTheEvent(c3u4e1v2);
			nextDub = "c3u4e1v2"
		}else if(data.host ==="Agresusi"){
			doTheEvent(c3u4e1v3);
			nextDub = "c3u4e1v3"
		}
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u3e6v1L",
	"c3u3e6v1R"
)

let c3u4e1v1 = new MyEvent(
	"bogosBinted/nerd.jpg",
	[new MyLine(
		"bogosBinted/nerd.jpg", "Nerd", colors["yellow"],
		"Witajcie Ziemianie, zauważyliśmy, że zmierzacie w naszym kierunku! Chcę tylko przekazać, że jesteście tu mile widziani tylko, jeśli jesteście wystarczająco rozwinięci technologicznie, żeby nam pomóc w badaniach, inaczej nie podlecicie bliżej bez naszej zgody!"
	)],
	"Hmm ciekawe, zapytam Marcina co możnaby im odpowiedzieć.",
	"Marcin, podejdź tu! Sprawa jest.",
	function (){
		doTheEvent(c3u4e2v1)
		nextDub = "c3u4e2v1"
	},
	function (){
		doTheEvent(c3u4e2v1)
		nextDub = "c3u4e2v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	"c3u4e1v1L",
	"c3u4e1v1R"
)

let c3u4e1v2 = new MyEvent(
	"bogosBinted/nikita.jpg",
	[new MyLine(
		"bogosBinted/nikita.jpg", "Nikita", colors["darkblue"],
		"Witajcie ziemianie, jestem Nikita, przywódca Magikali. Mamy dobre intencje i mamy nadzieję, że wy też, haha. Zweryfikujemy to." //przywódczyni??
	)],
	"Hmm ciekawe, zapytam Marcina co możnaby im odpowiedzieć.",
	"Marcin, podejdź tu! Sprawa jest.",
	function (){
		doTheEvent(c3u4e2v1)
		nextDub = "c3u4e2v1"
	},
	function (){
		doTheEvent(c3u4e2v1)
		nextDub = "c3u4e2v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	"c3u4e1v2L",
	"c3u4e1v2R"
)

let c3u4e1v3 = new MyEvent(
	"bogosBinted/agresus.jpg",
	[new MyLine(
		"bogosBinted/agresus.jpg", "Agresus", colors["red"],
		"Ludzie, sprawa prosta. Lecicie tu, to służycie NAM, albo nie pożyjecie długo tymi waszymi ziemskimi życiami."
	)],
	"Hmm ciekawe, zapytam Marcina co możnaby im odpowiedzieć.",
	"Marcin, podejdź tu! Sprawa jest.",
	function (){
		doTheEvent(c3u4e2v1)
		nextDub = "c3u4e2v1"
	},
	function (){
		doTheEvent(c3u4e2v1)
		nextDub = "c3u4e2v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u4e1v3L",
	"c3u4e1v3R"
)

let c3u4e2v1 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Na ten moment wychodzi, że musimy do tego podejść pokojowo. Nie wiemy jak bardzo tak naprawdę są rozwinięci, więc radziłbym przede wszystkim liczyć na pokój."
	)],
	"A jeśli lepiej będzie zaatakować?",
	"A co jeśli nie będą chcieli pokoju?",
	function (){
		doTheEvent(c3u4e3v1)
		nextDub = "c3u4e3v1"
	},
	function (){
		doTheEvent(c3u4e3v1)
		nextDub = "c3u4e3v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u4e2v1L",
	"c3u4e2v1R"
)

let c3u4e3v1 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Wtedy będziemy zmuszeni albo uciekać i liczyć na szczęście gdzieś indziej, albo walczyć, ale jesteśmy i na to gotowi, prawda Albert?"
	)],
	"Oo już?",
	"Nie chce mi się go znowu słuchać, wyślijmy im tą wiadomość.",
	function (){
		doTheEvent(c3u4e4v1)
		nextDub = "c3u4e4v1"
	},
	function (){
		doTheEvent(c3u4e4v1)
		nextDub = "c3u4e4v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u4e3v1L",
	"c3u4e3v1R"
)

let c3u4e4v1 = new MyEvent(
	"bogosBinted/plp.jpg",
	[new MyLine(
		"bogosBinted/albert.jpg", "Albert", colors["darkred"],
		"Ha! Oto przed wami majestatyczna potęga - działko protonowe! To monstrum technologii, które przemienia mikroskopijne protony w niebezpieczne pociski o potężnej energii! Gdy te malutkie cząsteczki są wystrzeliwane z prędkością bliską światła, nic nie jest w stanie im się oprzeć. Przebijają się przez materiał jak gorący nóż przez masło, powodując chaos i zniszczenie na swojej drodze. To jak burza na horyzoncie, gotowa zaorać wszystko, co stanie na jej drodze! Ale, oczywiście, ja, jako twórca tej bestii, używam jej moc w pełnej świadomości i z najwyższą ostrożnością. Działko protonowe - symbol potęgi i siły ludzkiego umysłu, ale także ostrzeżenie przed jej niewłaściwym użyciem. Bo z wielką mocą przychodzi wielka odpowiedzialność, a ja jestem gotów ponieść tę odpowiedzialność w imię nauki i postępu!"
	)],
	"Super, nagrajmy już tą wiadomość.",
	"Więcej cię już nie słucham.",
	function (){
		doTheEvent(c3u5e1v1)
		nextDub = "c3u5e1v1"
	},
	function (){
		doTheEvent(c3u5e1v1)
		nextDub = "c3u5e1v1"
	},
	[0, 0, 0, 0, 0, 0, .05, 0, 0],
	[0, 0, 0, 0, 0, 0, -.1, 0, 0],
	"c3u4e4v1L",
	"c3u4e4v1R"
)

let c3u5e1v1 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Muszę podjąć decyzję."
	)],
	"Będę dążył do pokoju.",
	"Nie po to mamy działa protonowe, żeby ich teraz nie używać!",
	function (){
		doTheEvent(c3u5e2v1);
		nextDub = "c3u5e2v1"
	},
	function (){
		doTheEvent(c3u5e2v2);
		nextDub = "c3u5e2v2"
	},
	[0, 0, 0, 0, .1, .2, 0, 0, 0],
	[0, 0, -.4, 0, -.2, -.2, 0, 0, 0],
	"c3u5e1v1L",
	"c3u5e1v1R"
)

let c3u5e1v2 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Muszę podjąć decyzję."
	)],
	"Będę dążył do pokoju.",
	"Nie po to mamy działa protonowe, żeby ich teraz nie używać!",
	function (){
		doTheEvent(c3u5e2v3);
		nextDub = "c3u5e2v3"
	},
	function (){
		doTheEvent(c3u5e2v4);
		nextDub = "c3u5e2v4"
	},
	[0, 0, 0, 0, .1, .2, 0, 0, 0],
	[0, 0, -.4, 0, -.2, -.2, 0, 0, 0],
	"c3u5e1v2L",
	"c3u5e1v2R"
)

let c3u5e1v3 = new MyEvent(
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Muszę podjąć decyzję."
	)],
	"Będę dążył do pokoju.",
	"Nie po to mamy działa protonowe, żeby ich teraz nie używać!",
	function (){
		doTheEvent(c3u5e2v5);
		nextDub = "c3u5e2v5"
	},
	function (){
		doTheEvent(c3u5e2v6);
		nextDub = "c3u5e2v6"
	},
	[0, 0, 0, 0, .1, .2, 0, 0, 0],
	[0, 0, -.4, 0, -.2, -.2, 0, 0, 0],
	"c3u5e1v3L",
	"c3u5e1v3R"
)

let c3u5e2v1 = new MyEvent( 
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Drodzy Nerdzi! Dziękuję za waszą wiadomość i pokojowe nastawienie. Liczę, że kiedy dolecimy, dogadamy się na temat wspólnych badań naukowych!"
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"No, to teraz czekamy na odpowiedź." 
	)],
	"Oby odpowiedzieli jak najszybciej.",
	"Mam nadzieję, że to nie potrwa długo.",
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		if(data.stats.research>=.4){
			doTheEvent(c3u5e3v1);
			nextDub = "c3u5e3v1"
		}else{
			doTheEvent(c3u5e3v2);
			nextDub = "c3u5e3v2"
		}
	},
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		if(data.stats.research>=4){
			doTheEvent(c3u5e3v1);
			nextDub = "c3u5e3v1"
		}else{
			doTheEvent(c3u5e3v2);
			nextDub = "c3u5e3v2"
		}
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u5e2v1L",
	"c3u5e2v1R"
)

let c3u5e2v2 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Nerdzi, nie boimy się was i nie zamierzamy wam podlegać, a więc możecie się szykować na wojnę, ale wiedzcie, że nie macie z nami szans!"
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Nie wierzę, że to robisz..."
	)],
	"Spokojnie, przecież sobie poradzimy.",
	"Robię to, co uważam za słuszne.",
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		doTheEvent(c3u5e3v2)
		nextDub = "c3u5e3v2"
	},
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		doTheEvent(c3u5e3v2)
		nextDub = "c3u5e3v2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, -.1, 0, 0, 0],
	"c3u5e2v2L",
	"c3u5e2v2R"
)

let c3u5e2v3 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Droga Nikito! Dziękuję za Twoją wiadomość i pokojowe nastawienie. Liczę, że kiedy dolecimy i poznamy się lepiej, poznasz nasze dobre intencje i dogadamy się na wspólne warunki życia 2 cywilizacji."
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"No, to teraz czekamy na odpowiedź." 
	)],
	"Oby odpowiedzieli jak najszybciej.",
	"Mam nadzieję, że to nie potrwa długo.",
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		if(data.stats.publicOpinion>=.6){
			doTheEvent(c3u5e3v3);
			nextDub = "c3u5e3v3"
		}else{
			doTheEvent(c3u5e3v4);
			nextDub = "c3u5e3v4"
		}
	},
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		if(data.stats.publicOpinion>=.6){
			doTheEvent(c3u5e3v3);
			nextDub = "c3u5e3v3"
		}else{
			doTheEvent(c3u5e3v4);
			nextDub = "c3u5e3v4"
		}
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u5e2v3L",
	"c3u5e2v3R"
)

let c3u5e2v4 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Magikale, nie boimy się was i nie zamierzamy wam podlegać, a więc możecie się szykować na wojnę, ale wiedzcie, że nie macie z nami szans!"
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Nie wierzę, że to robisz..."
	)],
	"Spokojnie, przecież sobie poradzimy.",
	"Robię to, co uważam za słuszne.",
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		doTheEvent(c3u5e3v4)
		nextDub = "c3u5e3v4"
	},
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		doTheEvent(c3u5e3v4)
		nextDub = "c3u5e3v4"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, -.1, 0, 0, 0],
	"c3u5e2v4L",
	"c3u5e2v4R"
)

let c3u5e2v5 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Drodzy Agresusi! Postaramy się do was dostosować i mimo wszystko liczę na to, że się jakoś dogadamy."
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"No, to teraz czekamy na odpowiedź." 
	)],
	"Oby odpowiedzieli jak najszybciej.",
	"Mam nadzieję, że to nie potrwa długo.",
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		doTheEvent(c3u5e3v5)
		nextDub = "c3u5e3v5"
	},
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		doTheEvent(c3u5e3v5)
		nextDub = "c3u5e3v5"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u5e2v5L",
	"c3u5e2v5R"
)

let c3u5e2v6 = new MyEvent(
	"bogosBinted/kamera.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Agresusi, nie boimy się was i nie zamierzamy wam podlegać, a więc możecie się szykować na wojnę, ale wiedzcie, że nie macie z nami szans!"
	),
	new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Nie wierzę, że to robisz..."
	)],
	"Spokojnie, przecież sobie poradzimy.",
	"Robię to, co uważam za słuszne.",
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		doTheEvent(c3u5e3v6)
		nextDub = "c3u5e3v6"
	},
	function (){
		changeChapterPlace(4, "Kosmiczny PierUg, 95% trasy")
		data.stats.food-=.1
		doTheEvent(c3u5e3v6)
		nextDub = "c3u5e3v6"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, -.1, 0, 0, 0],
	"c3u5e2v6L",
	"c3u5e2v6R"
)
let c3u5e3v1 = new MyEvent(
	"bogosBinted/nerd.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Odpowiedzieli!"
	),
	new MyLine(
		"bogosBinted/nerd.jpg", "Nerd", colors["yellow"],
		"Cieszę się, że udało nam się dojść do porozumienia. Serdecznie zapraszamy na naszą planetę."
	)],
	"Świetnie, no to lecimy.",
	"Super, przygotujmy się do lądowania.",
	function (){
		doTheEvent(c4u1e1v1)
		nextDub = "c4u1e1v1"
	},
	function (){
		doTheEvent(c4u1e1v1)
		nextDub = "c4u1e1v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u5e3v1L",
	"c3u5e3v1R"
)
let c3u5e3v2 = new MyEvent(
	"bogosBinted/nerd.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Odpowiedzieli!"
	),
	new MyLine(
		"bogosBinted/nerd.jpg", "Nerd", colors["yellow"],
		"A więc drogi Jakubie, jesteśmy w stanie wojny! Zobaczymy, kto tutaj wyjdzie na plus."
	)],
	"Czyli jednak się pobawimy działkami!",
	"Musimy uciekać, niech Krzychu zmieni kurs.",
	function (){
		doTheEvent(c4u1e1v3)
		nextDub = "c4u1e1v3"
		changeChapterPlace(4, "")
	},
	function (){
		doTheEvent(c4u1e1v2)
		nextDub = "c4u1e1v2"
		changeChapterPlace(4, "")
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u5e3v2L",
	"c3u5e3v2R"
)
let c3u5e3v3 = new MyEvent(
	"bogosBinted/nikita.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Odpowiedzieli!"
	),
	new MyLine(
		"bogosBinted/nikita.jpg", "Nikita", colors["darkblue"],
		"Bardzo się cieszymy, serdecznie zapraszamy na naszą planetę."
	)],
	"Świetnie, no to lecimy.",
	"Super, przygotujmy się do lądowania.",
	function (){
		doTheEvent(c4u1e1v1)
		nextDub = "c4u1e1v1"
		changeChapterPlace(4, "")
	},
	function (){
		doTheEvent(c4u1e1v1)
		nextDub = "c4u1e1v1"
		changeChapterPlace(4, "")
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	"c3u5e3v3L",
	"c3u5e3v3R"
)
let c3u5e3v4 = new MyEvent(
	"bogosBinted/nikita.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Odpowiedzieli!"
	),
	new MyLine(
		"bogosBinted/nikita.jpg", "Nikita", colors["darkblue"],
		"Nie ufamy wam, nie jesteście rasą godną zaufania, a ty jako przywódca nie robisz niczego, żeby to zmienić."
	)],
	"Czyli jednak się pobawimy działkami!",
	"Musimy uciekać, niech Krzychu zmieni kurs.",
	function (){
		doTheEvent(c4u1e1v3)
		nextDub = "c4u1e1v3"
		changeChapterPlace(4, "")
	},
	function (){
		doTheEvent(c4u1e1v2)
		nextDub = "c4u1e1v2"
		changeChapterPlace(4, "")
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u5e3v4L",
	"c3u5e3v4R"
)
let c3u5e3v5 = new MyEvent(
	"bogosBinted/agresus.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Odpowiedzieli!"
	),
	new MyLine(
		"bogosBinted/agresus.jpg", "Agresus", colors["red"],
		"Nie będziemy zawiązywać sojuszu z takimi mięczakami. Lepiej uciekajcie, albo będziecie mieli kłopoty."
	)],
	"Świetnie, no to lecimy.",
	"Super, przygotujmy się do lądowania.",
	function (){
		doTheEvent(c4u1e1v1)
		nextDub = "C4u1e1v1"
	},
	function (){
		doTheEvent(c4u5e4v1)
		nextDub = "C4u1e1v1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	"c3u5e3v5L",
	"c3u5e3v5R"
)
let c3u5e3v6 = new MyEvent(
	"bogosBinted/jakub.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Odpowiedzieli!"
	),
	new MyLine(
		"bogosBinted/agresus.jpg", "Agresus", colors["red"],
		"Widzę, że nie da się was tak łatwo nastraszyć! Wydajecie się być dobrymi towarzyszami walki, zawiążmy sojusz."
	)],
	"Czyli jednak się pobawimy działkami!",
	"Musimy uciekać, niech Krzychu zmieni kurs.",
	function (){
		doTheEvent(c4u1e1v3);
		nextDub = "c4u1e1v3";
		audio3.pause();
		playMusic(audio4);
	},
	function (){
		doTheEvent(c4u1e1v2);
		nextDub = "c4u1e1v2";
		audio3.pause();
		playMusic(audio4);
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c3u5e3v6L",
	"c3u5e3v6R"
)

//============================================================================================
//==================================CHAPTER 4 W KONCUAHHHH====================================
//============================================================================================

let c4u1e1v1 = new MyEvent( //wojna domova (kim byl ten domov)
	"bogosBinted/chmurka.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Dogadaliśmy się z tutejszą rasą i obyło się bez żadnych konfliktów. Niestety zamiast tego doszło do wojny domowej wśród Polaków."
	)],
	"Poczekam na raport Marcina.",
	"Poczekam na raport Marcina.",
	function (){
		doTheEvent(c4u1e1v1e1)
		nextDub = "c4u1e1v1e1"
	},
	function (){
		doTheEvent(c4u1e1v1e1)
		nextDub = "c4u1e1v1e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c4u1e1v1L",
	"c4u1e1v1R"
)

let c4u1e1v1e1 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Mamy duży problem, tak jak się spodziewałem, ludzie się buntują. Twierdzą, że zamienili cię w kosmitę, i że ci "+data.host+" zjedzą wszystkich ludzi."
	)],
	"Nie ma szans...",
	"I co teraz zrobimy?",
	function (){
		doTheEvent(c4u1e1v1e2)
		nextDub = "c4u1e1v1e2"
	},
	function (){
		doTheEvent(c4u1e1v1e2)
		nextDub = "c4u1e1v1e2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c4u1e1v1e1L",
	"c4u1e1v1e1R"
)

let c4u1e1v1e2 = new MyEvent(
	"bogosBinted/marcin.jpg",
	[new MyLine(
		"bogosBinted/marcin.jpg", "Marcin", colors["aqua"],
		"Myślę, że przez opinie ludzi na Twój temat teraz to JA jestem jedyną odpowiednią osobą na stanowisko głowy państwa."
	),
	new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Marcin, co ty chesz zro-."
	)],
	"...",
	"...",
	function (){
		doTheEvent(c0u1e1)
		nextDub = "c0u1e1"
	},
	function (){
		doTheEvent(c0u1e1)
		nextDub = "c0u1e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	"c4u1e1v1e2L",
	"c4u1e1v1e2R"
)

let c4u1e1v2 = new MyEvent( //ucieczka
	"bogosBinted/krzychu.jpg",
	[new MyLine(
		"bogosBinted/krzychu.jpg", "Krzychu", colors["orange"],
		"Jesteś pewien? Może nam nie wystarczyć paliwa do najbliższej planety."
	)
	],
	"Jestem pewien.",
	"Nie mamy wyboru.",
	function (){
		doTheEvent(c4u1e1v2e1)
		nextDub = "c4u1e1v2e1"
	},
	function (){
		doTheEvent(c4u1e1v2e1)
		nextDub = "c4u1e1v2e1"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //
	"c4u1e1v2L",
	"c4u1e1v2R"
)

let c4u1e1v2e1 = new MyEvent(
	"bogosBinted/jakub.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"No to czekamy."
	)],
	"I czekamy...",
	"I czekamy...",
	function (){
		doTheEvent(c4u1e1v2e2)
		nextDub = "c4u1e1v2e2"
	},
	function (){
		doTheEvent(c4u1e1v2e2)
		nextDub = "c4u1e1v2e2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, -.1], //
	[0, 0, 0, 0, 0, 0, 0, 0, -.1], //
	"c4u1e1v2e1L",
	"c4u1e1v2e1R"
)

let c4u1e1v2e2 = new MyEvent(
	"bogosBinted/jakub.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"I czekamy... Czekamy."
	)],
	"I czekamy...",
	"I czekamy...",
	function (){
		doTheEvent(c4u1e1v2e2)
		nextDub = "c4u1e1v2e2"
	},
	function (){
		doTheEvent(c4u1e1v2e2)
		nextDub = "c4u1e1v2e2"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, -.1], //
	[0, 0, 0, 0, 0, 0, 0, 0, -.1], //
	"c4u1e1v2e2L",
	"c4u1e1v2e2R"
)

let c4u1e1v3 = new MyEvent(
	"bogosBinted/jakub.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors["green"],
		"Na wojnie okazało się, że walka była zacięta. Wygraliśmy, ale niestety zginęła prawie cała nasza populacja, a z ocaleńców nie uda nam się odbudować nowej. Może mogliśmy tego uniknąć dbając o naszą planetę?"
	)],
	"Na następny raz zapiętam.",
	"Przynajmniej się postrzelałem z kosmitami.",
	function (){
		nextDub = ""
		endOfTheGame("Pogrążyłeś kraj w wojnie.", "endingScreen")
	},
	function (){
		nextDub = ""
		endOfTheGame("Pogrążyłeś kraj w wojnie.", "endingScreen")
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	"c4u1e1v3L",
	"c4u1e1v3R"
)

// endOfTheGame("NAPIS KONCOWY", "ZDJECIE (BEZ url(bogosBinted/)")

// ZEBY WLACZYC KOLEJNA IKONKE STATOW TRZEBA WPISAC showIcons(np. nerds/alienRelations)
// szczerze?
// KURWO MIAŁEŚ BYĆ O ~19
// Kto xdddd o huj chodzi
// ^^^^^ O ten tramwaj co nie biega
// JEBLEMBABENAPAAAAAASAAACH
// Stary 15:00 i gotowe cnie???? CNIEEEE??

/*
let cuev = new MyEvent(
	"bogosBinted/jakub.jpg",
	[new MyLine(
		"bogosBinted/jakub.jpg", "Jakub", colors[],
		"testline"
	)],
	"LewaOpcja",
	"PrawaOpcja",
	function (){
		//doTheEvent(cuev)
		//nextDub = "cuev"
	},
	function (){
		//doTheEvent(cuev)
		//nextDub = "cuev"
	},
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //
	[0, 0, 0, 0, 0, 0, 0, 0, 0] //
)
*/

// W TYM MA BYC ZROBIONY OSTATNI SLAJD PRZED WYBOREM ZMIANY PLANETY
// let cuev = new MyEvent(
// 	"bogosBinted/jakub.jpg",
// 	[new MyLine(
// 		"bogosBinted/jakub.jpg", "Jakub", colors['green'],
// 		"testline"
// 	)],
// 	"LewaOpcja",
// 	"PrawaOpcja",
// 	function (){
// 		changePlanet();
// 	},
// 	function (){
// 		changePlanet();
// 	},
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0], //
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0] //
// )

// ZEBY WLACZYC KOLEJNA IKONKE STATOW TRZEBA WPISAC showIcons(np. nerds/alienRelations)
// szczerze?

doTheEvent(c0u1e1);

//pierwsze problemy na statku

//przygotować się do życia na nowej planecie (inagle)

//kontakt z cywilizacjami (notion)

//wybrać układy z cywilizacjami

//wojna / domowa (jebany domov)

//DOROBIC POWIADOMIENIA (na ez ale ja nie umiem)