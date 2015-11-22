var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),


module.exports = function (app) {
	app.use('/', router);
};

router.get('/', function (req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	var userAgent = req.headers['user-agent'];

	res.render('video', {
		title: 'video'
	});
});

mongoose.connect('mongodb://localhost/videoApp');