// Stopwatch
function Stopwatch() {
	let duration = 0;
	let isPlay = false;
	let delta = 0;
	let stopInterval = null;
	let interval = () => {
		stopInterval = setInterval(() => {
			let curr = duration;
			duration = duration + 1 / 1000;
			delta = duration - curr;
			duration += delta;
		}, 1);
	};

	this.start = function () {
		if (isPlay) throw new Error('Stopwatch is playing');

		interval();
		isPlay = true;
		return 'Stopwatch is playing!';
	};
	this.stop = function () {
		if (!isPlay) throw new Error('Stopwatch is not playing');

		clearInterval(stopInterval);
		isPlay = false;
		return 'Stopwatch is stoped';
	};
	this.reset = function () {
		duration = 0;
		return 'Stopwatch is reseted';
	};

	Object.defineProperty(this, 'duration', {
		get: function () {
			return duration;
		},
	});
}

const sw = new Stopwatch();
sw.start();
