'use strict'

// SETUP------------------------------------------------------------------------
// call express
var express = require('express');
// define app using express
var app = express();
// call body-parser
var bodyParser = require('body-parser');

// configure app to use bodyParser() - allow retrieval of data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 8080


// ROUTES for API---------------------------------------------------------------
// get an instance of the express Router
var router = express.Router();

// test route - GET (http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({
    message: "GET is working!"
  });
});

// more routes for API here

// REGISTER ROUTES
// all of our routes prefixed with /api
app.use('api', router);

// START SERVER-----------------------------------------------------------------
app.listen(port);
console.log('listening on port ' + port);
