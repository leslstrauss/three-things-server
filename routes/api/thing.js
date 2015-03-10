'use strict'

var mongoose = require('mongoose');
var Thing = require('../../models/thing');

module.exports.addThing = function(req, res) {
  var thing = new Thing(req.body.thing);
  thing.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({
      thing: thing
    });
  });
};

module.exports.getAllThings = function(req, res) {
  Thing.find(function(err, things) {
    if (err) {
      res.send(err);
    }
    res.json({
      things: things
    });
  });
};

module.exports.getSingleThing = function(req, res, id) {
  Thing.findById(id, function(err, thing) {
    if (err) {
      res.send(err);
    }
    res.json({
      thing: thing
    });
  });
};

module.exports.updateThing = function(req, res, id) {
  Thing.findByIdAndUpdate(id, {
    $set: req.body.thing
  }, function(err, thing) {
    if (err) {
      res.send(err);
    }
    res.json({
      thing: thing
    });
  });
};

module.exports.deleteThing = function(req, res, id) {
  Thing.findByIdAndRemove(id, function(err) {
    if (err) {
      res.send(err);
    }
    res.sendStatus(200);
  });
};
