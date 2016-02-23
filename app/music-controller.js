app.controller('MusicController', function ($scope) {

	$scope.notes = [
		{ note: 'A', wave: '' },
		{ note: 'A#', wave: '' },
		{ note: 'B', wave: '' },
		{ note: 'C', wave: '' },
		{ note: 'C#', wave: '' },
		{ note: 'D', wave: '' },
		{ note: 'D#', wave: '' },
		{ note: 'E', wave: '' },
		{ note: 'F', wave: '' },
		{ note: 'F#', wave: '' },
		{ note: 'G', wave: '' },
		{ note: 'G#', wave: '' },
		{ note: 'rest', wave: '' }
		];

	$scope.recording = false;

	$scope.playNote = function (note) {
		console.log(note.note);
	};

	$scope.record = function () {
		$scope.recording = true;
	};

	$scope.stop = function () {
		$scope.recording = false;
	};

	$scope.playRecorded = function () {
		$scope.recording = false;
	};

});