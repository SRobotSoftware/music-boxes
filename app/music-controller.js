app.controller('MusicController', function ($scope, $interval) {

	////////////////////
	// Vars						//
	////////////////////

	$scope.notes = [
		{
			note: 'A',
			wave: 'assets/sounds/39212_35187-lq.mp3'
		}, {
			note: 'A#',
			wave: 'assets/sounds/39211_35187-lq.mp3'
    }, {
			note: 'B',
			wave: 'assets/sounds/39210_35187-lq.mp3'
    }, {
			note: 'C',
			wave: 'assets/sounds/39209_35187-lq.mp3'
    }, {
			note: 'C#',
			wave: 'assets/sounds/39208_35187-lq.mp3'
    }, {
			note: 'D',
			wave: 'assets/sounds/39207_35187-lq.mp3'
    }, {
			note: 'D#',
			wave: 'assets/sounds/39206_35187-lq.mp3'
    }, {
			note: 'E',
			wave: 'assets/sounds/39205_35187-lq.mp3'
    }, {
			note: 'F',
			wave: 'assets/sounds/39204_35187-lq.mp3'
    }, {
			note: 'F#',
			wave: 'assets/sounds/39203_35187-lq.mp3'
    }, {
			note: 'G',
			wave: 'assets/sounds/39202_35187-lq.mp3'
    }, {
			note: 'G#',
			wave: 'assets/sounds/39201_35187-lq.mp3'
    }, {
			note: 'rest',
			wave: ''
    }];
	$scope.song = [];

	$scope.recording = false;

	////////////////////
	// Functions			//
	////////////////////

	// Public Functions

	$scope.playNote = function (note) {
		console.log(note.note);
		playSound(note);
		if ($scope.recording) {
			$scope.song.push(note);
		}
	};

	$scope.record = function () {
		$scope.recording = true;
		clearSong();
		console.log('Recording');
	};

	$scope.stop = function () {
		$scope.recording = false;
		console.log('Stop Recording');
	};

	$scope.playRecorded = function () {
		$scope.stop();
		console.log('Play Recording');
		playSong($scope.song);
	};

	// Private Functions


	function playSong(aSong) {

		console.log(aSong);

		var i = 0;
		var interval = setInterval(function () {
			playSound(aSong[i]);
			i++;
			if (i >= aSong.length) {
				clearInterval(interval);
				aSong[i - 1].lightUp = false;
			}
		}, 250);

	};

	function clearSong() {
		$scope.song = [];
	};

	function playSound(note) {
		var mySound = document.getElementById(note.note);
		mySound.currentTime = 0;
		mySound.play();
	}

});