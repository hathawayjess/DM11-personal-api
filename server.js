var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json()); //.use applies a function to every request made before passing it on or sending response

app.use(middleware.addHeaders);


//READABLE ONLY ENDPOINTS
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);


//ENDPOINTS TO CHANGE THINGS
app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);


//ENDPOINTS TO ADD THINGS
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);


//SKILLZ ENDPOINTS
app.get('/skillz', mainCtrl.getSkillz);
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);

//SECRETS
app.get('/secrets/:username/:pin', middleware.verifyUser);


app.listen(3000, function() {
	console.log('Listening on 3000');
});