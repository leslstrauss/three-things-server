'use strict'

var mongoose = require('mongoos');
var Schema = mongoose.Schema;

var ThingSchema = new Schema({
  firstThing: String,
  firstWhy: String,
  secondThing: String,
  secondWhy: String,
  thirdThing: String,
  thirdWhy: String,
  dateAdded: Date
});

module.exports = mongoose.model('Thing', ThingSchema);
