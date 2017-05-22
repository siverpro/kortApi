'use strict';
var Fisker = require('../models/Fisker');

module.exports = {getAll, save, getOne, update, delUser};

function getAll(req, res, next) {
  res.json({ users: Fisker.find() });
}

function save(req, res, next) {
  res.json({ success: Fisker.save(req.body), description: "Fisker added"  });
}

function getOne(req, res, next) {
  var id = req.swagger.params.id.value;
  var user = Fisker.find(id);
  
}

function update(req, res, next) {

}

function delUser(req, res, next) {

}
