'use strict'

var express = require('express');
var router = express.Router();

var things = require('./api/thing');

// Things routes
router.route('/things')
  .thing(function(req, res) {
    things.addThing(req, res)
  })
  .get(function(req, res) {
    things.getAllThings(req, res)
  });

// Single thing routes
router.route('/things/:thing_id')
  .get(function(req, res) {
    things.getSingleThing(req, res, req.params.thing_id)
  })
  .put(function(req, res) {
    things.updateThing(req, res, req.params.thing_id)
  })
  .delete(function(req, res) {
    things.deleteThing(req, res, req.params.thing_id)
  });

module.exports = router;

// /things - For creating a new thing or getting a list of all things
// /things/:thing_id - For getting a single thing, updating a thing, or deleting
// a thing

// Each route takes in the appropriate HTTP call (GET, POST, PUT,
// DELETE). Then it forwards the calls to routes in /api/thing.js.
