const media = document.querySelectorAll('img, a'),
	cardContents = document.querySelectorAll('.card__content'),
	cards = document.querySelectorAll('.card'),
	popupBg = document.querySelector('.popup-bg'),
	popupBgMusic = document.querySelector('.popup-music__bg'),
	popupMusicContent = document.querySelector('.popup-music__content'),
	imgPopup = document.querySelector('.popup-img'),
	imgCards = document.querySelectorAll('.card__albom'),
	buttonListenMusic = document.querySelectorAll('.card__listen'),
	wrapper = document.querySelector('.popup-music__output'),
	baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname,
	mask = document.querySelector('.mask');
window.addEventListener('load', () => {
	setTimeout(() => {
		mask.classList.add('hide');
		document.body.style.overflowY = 'auto';
		mask.remove();
	}, 1000);
});
for (let i = 0; i < media.length; i++) {
	media[i].setAttribute('draggable', false);
};
// popup img
imgCards.forEach(imgCard => {
	imgCard.addEventListener('click', () => {
		history.pushState(null, null, '');
		popupBg.classList.add('active');
		imgPopup.classList.add('active');
		imgPopup.src = imgCard.querySelector('.card__albom-img').src;
	});
});
// popup music
buttonListenMusic.forEach(button => {
	button.addEventListener('click', openPopup);
});
popupBg.addEventListener('click', closePopup);
// popupBgMusic.addEventListener('click', closePopup);
function openPopup(e) {
	history.pushState(null, null, '');
	popupMusicContent.classList.add('active');
	popupBgMusic.classList.add('active');
	document.querySelector('.popup-music__albom-img').src = this.parentElement.parentElement.querySelector('.card__albom-img').src;
	document.querySelector('.popup-music__title').innerText = this.parentElement.querySelector('.card__title').innerText;
	wrapper.innerHTML = '';
	if (e.target === document.getElementById('Bleach')) {
		document.querySelector('.popup-music__lenght').innerText = 'Длина 42:14';
		outputTracks(Bleach);
	}
	if (e.target === document.getElementById('Nevermind')) {
		document.querySelector('.popup-music__lenght').innerText = 'Длина 42:38';
		outputTracks(Nevermind);
	}
	if (e.target === document.getElementById('Incesticide')) {
		document.querySelector('.popup-music__lenght').innerText = 'Длина 44:05';
		outputTracks(Incesticide);
	}
	if (e.target === document.getElementById('InUtero')) {
		document.querySelector('.popup-music__lenght').innerText = 'Длина 41:23';
		outputTracks(InUtero);
	}
};
function closePopup(e) {
	if (e.target === popupBg) {
		imgPopup.classList.remove('active');
		setTimeout(() => {
			popupBg.classList.remove('active');
		}, 300);
	};
};
popupBgMusic.addEventListener('click', (e) => {
	if (!document.querySelector('.popup-music__inner').contains(e.target)) {
		popupMusicContent.classList.remove('active');
		setTimeout(() => {
			popupBgMusic.classList.remove('active');
		}, 300);
	};
})
// закрытие по esc
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && imgPopup.classList.contains('active')) {
		imgPopup.classList.remove('active');
		setTimeout(() => {
			popupBg.classList.remove('active');
		}, 300);
	} else if (event.key === 'Escape' && popupBgMusic.classList.contains('active')) {
		popupMusicContent.classList.remove('active');
		setTimeout(() => {
			popupBgMusic.classList.remove('active');
		}, 300);
	};
});
window.addEventListener('popstate', () => {
	if (popupBgMusic.classList.contains('active')) {
		popupMusicContent.classList.remove('active');
		setTimeout(() => {
			popupBgMusic.classList.remove('active');
		}, 300);
	} else if (popupBg.classList.contains('active')) {
		imgPopup.classList.remove('active');
		setTimeout(() => {
			popupBg.classList.remove('active');
		}, 300);
	}
});
// для музыки
// список музыки
let Bleach = [
	{
		name: "Blew",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-Blew",
	},
	{
		name: "Floyd The Barber",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-FloydTheBarber"
	},
	{
		name: "About A Girl",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-AboutAGirl"
	},
	{
		name: "School",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-School"
	},
	{
		name: "Love Buzz",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-LoveBuzz",
	},
	{
		name: "Paper Cuts",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-PaperCuts"
	},
	{
		name: "Negative Creep",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-NegativeCreep"
	},
	{
		name: "Scoff",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-Scoff"
	},
	{
		name: "Swap Meet",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-SwapMeet"
	},
	{
		name: "Mr. Moustache",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-MrMoustache"
	},
	{
		name: "Sifting",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-Sifting"
	},
	{
		name: "Big Cheese",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-BigCheese"
	},
	{
		name: "Downer",
		artist: "Nirvana",
		img: "Bleach",
		src: "Nirvana-Downer"
	},
];
let Nevermind = [
	{
		name: "Smells Like Teen Spirit",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-SmellsLikeTeenSpirit",
	},
	{
		name: "In Bloom",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-InBloom",
	},
	{
		name: "Come As You Are",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-ComeAsYouAre",
	},
	{
		name: "Breed",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-Breed",
	},
	{
		name: "Lithium",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-Lithium",
	},
	{
		name: "Polly",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-Polly",
	},
	{
		name: "Territorial Pissings",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-TerritorialPissings",
	},
	{
		name: "Drain You",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-DrainYou",
	},
	{
		name: "Lounge Act",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-LoungeAct",
	},
	{
		name: "Stay Away",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-StayAway",
	},
	{
		name: "On A Plain",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-OnAPlain",
	},
	{
		name: "Something In The Way",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-SomethingInTheWay",
	},
	{
		name: "Endless, Nameless",
		artist: "Nirvana",
		img: "Nevermind",
		src: "Nirvana-EndlessNameless",
	},
];
let Incesticide = [
	{
		name: "Dive",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-Dive",
	},
	{
		name: "Silver",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-Sliver",
	},
	{
		name: "Stain",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-Stain",
	},
	{
		name: "Been A Son",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-BeenASon",
	},
	{
		name: "Turnaround",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-Turnaround",
	},
	{
		name: "Molly's Lips",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-MollysLips",
	},
	{
		name: "Son Of A Gun",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-SonOfAGun",
	},
	{
		name: "(New Wave) Polly",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-NewWavePolly",
	},
	{
		name: "Beeswax",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-Beeswax",
	},
	{
		name: "Downer",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-Downer",
	},
	{
		name: "Mexican Seafood",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-MexicanSeafood",
	},
	{
		name: "Hairspray Queen",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-HairsprayQueen",
	},
	{
		name: "Aero Zeppelin",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-AeroZeppelin",
	},
	{
		name: "Big Long Now",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-BigLongNow",
	},
	{
		name: "Aneurysm",
		artist: "Nirvana",
		img: "Incesticide",
		src: "Nirvana-Aneurysm",
	},
];
let InUtero = [
	{
		name: "Serve The Servants ",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-ServeTheServants",
	},
	{
		name: "Scentless Apprentice",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-ScentlessApprentice",
	},
	{
		name: "Heart-Shaped Box",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-Heart-ShapedBox",
	},
	{
		name: "Rape Me",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-RapeMe",
	},
	{
		name: "Frances Farmer Will Have Her Revenge On Seattle",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-FrancesFarmerWillHaveHerRevengeOnSeattle",
	},
	{
		name: "Dumb",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-Dumb",
	},
	{
		name: "Very Ape",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-VeryApe",
	},
	{
		name: "Milk It",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-MilkIt",
	},
	{
		name: "Pennyroyal Tea",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-PennyroyalTea",
	},
	{
		name: "Radio Friendly Unit Shifter",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-RadioFriendlyUnitShifter",
	},
	{
		name: "Tourette's",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-Tourettes",
	},
	{
		name: "All Apologies",
		artist: "Nirvana",
		img: "InUtero",
		src: "Nirvana-AllApologies",
	},
];
// выгрузка треков в попап окно
function outputTracks(arr) {
	for (let i = 0; i < arr.length; i++) {
		let outputTag = `
			<div class="audio" audio-index="${i + 1}">
				<div class="audio__wrapper">
					<div class="audio__albom">
						<img class="audio__img" src="img/${arr[i].img}.jpg" alt="${arr[i].name}" draggable='false'>
					</div>
					<div class="audio__info">
						<h3 class="audio__title">
							${arr[i].name}
						</h3>
						<h4 class="audio__artist">
							${arr[i].artist}
						</h4>
					</div>
					<audio class="${arr[i].src}" src="music/${arr[i].img}/${arr[i].src}.mp3"></audio>
				</div>
				<p class="audio__lenght" id="${arr[i].src}">
					
				</p>
			</div>
		`;
		wrapper.insertAdjacentHTML("beforeend", outputTag);

		let AudioDuartionTag = wrapper.querySelector(`#${arr[i].src}`);
		let AudioTag = wrapper.querySelector(`.${arr[i].src}`);
		AudioTag.addEventListener('loadeddata', () => {
			let duration = AudioTag.duration;
			let totalMin = Math.floor(duration / 60);
			let totalSec = Math.floor(duration % 60);
			if (totalSec < 10) {
				totalSec = `0${totalSec}`; // если секунд меньше, чем 10, впереди ставится 0
			};
			AudioDuartionTag.innerText = `${totalMin}:${totalSec}`; // полное время песни
			AudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); // добавление атрибута с общей продолжительностью
		});
	};
	document.querySelector('.popup-music__count').innerText = arr.length + ' аудиозаписей';
};