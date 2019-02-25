(() => {

	//variable stack
	let aud = document.querySelector('audio'),
		play = document.querySelector('#playButton'),
		pause = document.querySelector('#pauseButton'),
		rewind = document.querySelector('#rewindButton');

	//functions for buttons
	function playAudio() {
		aud.play();
	}

	function pauseAudio() {
		aud.pause(true);
	}

	function rewindAudio() {
		aud.currentTime = 0;
	}

	//event handling
	play.addEventListener("click", playAudio);
	pause.addEventListener("click", pauseAudio);
	rewind.addEventListener("click", rewindAudio);

})();

//die cunt
