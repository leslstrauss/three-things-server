'use strict'

var express = require('express');
var router = express.Router();

var things = require('./api/thing');

/* Things routes */
router.route('/things')
  .thing(function(req, res) {
    things.addThing(req, res)
  })
  .get(function(req, res) {
    things.getAllThings(req, res)
  });

/* Single Thing routes */
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
