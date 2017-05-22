'use strict';
var User = require('../models/Fisker');

module.exports = {getAll, save, getOne, update, delUser};

function getAll(req, res, next) {
  res.json({ users: User.find() });
}

function save(req, res, next) {
  res.json({ success: User.save(req.body), description: "User added"  });
}

function getOne(req, res, next) {
  var id = req.swagger.params.id.value;
  var user = User.find(id);
  
}

function update(req, res, next) {

}

function delUser(req, res, next) {

}
