var skillz = require('../models/skillz');

module.exports = {

	addHeaders: function(req, res, next) {
	    res.status(200).set({
	      'Content-Type': 'application/json',
	      'Access-Control-Allow-Origin': '*',
	      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	      'X-XSS-Protection': '1; mode=block',
	      'X-Frame-Options': 'SAMEORIGIN',
	      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
	    });

	    next(); //without a res.send() or a next(), our request will not move on
	  },
	  generateId: function(req, res, next) {
	  	req.body.id = skillz.skillz.length;
	  	next();
	  },
	  verifyUser: function(req, res, next) {
	  	if (req.params.username === "McJenkins" && req.params.pin === '1234') {
	  		next();
	  	} else {
	  		res.status(401).json("You shall not pass!");
	  	}
	  }

}