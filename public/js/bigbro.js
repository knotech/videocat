var Client = (function() {
	var Client = {
		defaults: {
			geoLocation: true,
			cookiesEnabled: true,
			doNotTrack: null,
			userAgent: null,
			plugins: null
		}
	}

	// Private vars
	var w = window;
	var nav = window.navigator;

	// Public Methods
	Client.iterDefaults = function() {
		for(var i in Client.defaults) {
			console.log(i, Client.defaults[i]);
		}
	}

	Client.errorCallback = function(e) {
		console.log('Error Callback', e);
	}

	Client.getGeoLocation = function() {
		nav.geolocation.getCurrentPosition(function(data) {
			console.log(data);
		});
	}

	Client.getBatteryLife = function() {
		window.navigator.getBattery(function(data) {
			console.log(data);
		});
	}

	Client.hasGetUserMedia = function() {
		return !!(window.navigator.webkitGetUserMedia || window.navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia || window.navigator.msGetUserMedia);
	}

	Client.getVideo = function() {
		window.navigator.webkitGetUserMedia({video: true, audio: false}, function(localMediaStream) {
			var video = document.querySelector('video');
			var url = window.URL || window.webkitURL;
			video.src = url ? url.createObjectURL(localMediaStream) : stream;
			return video
		}, function() {
			console.log('Denied.')
		});
	}

	Client.insertScript = function(src) {
		var script = document.createElement('script');
		script.setAttribute('src', src);
		document.body.appendChild(script);
	}

	Client.getCanvasContextByID = function(id) {
		var context = document.getElementById(id)[0].getContext('2d');
		return context;
	}

	return Client

})();

if (Client.hasGetUserMedia()) {
	window.addEventListener('canplay', function(e) {
		if (!isStreaming) {
			// videoWidth isn't always set correctly in all browsers
			if (v.videoWidth > 0) h = v.videoHeight / (v.videoWidth / w);
			c.setAttribute('width', w);
			c.setAttribute('height', h);
			// Reverse the canvas image
			con.translate(w, 0);
			con.scale(-1, 1);
			isStreaming = true;
		}
	}, false);
	Client.getVideo();
} else {
	console.log('getUserMedia() is not supported in your browser');
}

// window.onload = bigBrother;
