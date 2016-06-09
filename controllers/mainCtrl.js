var me = require('../models/me.js');
var skillz = require('../models/skillz.js');


module.exports = {
  getName: function(req, res, next) {
    res.json(me.name);
  },
  getLocation: function(req, res, next) {
    res.json(me.location);
  },
  getOccupations: function(req, res, next) {

    if (req.query.order === 'asc') {
      res.json(me.occupations.sort())
    } else if (req.query.order === 'desc') {
      res.json(me.occupations.sort().reverse())
    } else {
      res.json(me.occupations);
    }
  },
  getLatestOccupation: function(req, res, next) {
    var latest = {
      "latestOccupation": me.occupations.pop()
    }
    res.json(latest);
  },
  getHobbies: function(req, res, next) {
    res.json(me.hobbies);
  },
  getHobbiesByType: function(req, res, next) {
    var ans = [];
    for (var i = 0; i < me.hobbies.length; i++) {
      if (req.params.type === me.hobbies[i].type) {
        ans.push(me.hobbies[i]);
      }
    }
    res.json(ans);
  },
  changeName: function(req, res, next) {
    me.name = req.body.name;
    res.json(me.name);
  },
  changeLocation: function(req, res, next) {
    me.location = req.body.location;
    res.json(me.location);
  },
  addHobby: function(req, res, next) {
    me.hobbies.push(req.body.hobby);
    res.json(me.hobbies);
  },
  addOccupation: function(req, res, next) {
    me.occupations.push(req.body);
    res.json(occupations);
  },
  getSkillz: function(req, res, next) {
    var ans = skillz.skillz;

    if (req.query.experience) {
      ans = ans.filter(function(item) {
        return item["experience"] === req.query.experience;
      })
    }

    res.json(ans);
  },
  postSkillz: function(req, res, next) {
    skillz.skillz.push(req.body);
    res.json(skillz.skillz);
  }
}



//path params are used to identify a specific resource or resources, while query parameters are used to sort/filter those resources.
