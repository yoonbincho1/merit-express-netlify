'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const routes = require('./routes');
const app = express();

// Static Files
app.use(express.static(__dirname + '/static'))

routes.map(val => {
  app.get(val.route, function(req, res) { res.sendFile(path.join(__dirname + '../pages/' + val.file)) })
})


module.exports = app;
module.exports.handler = serverless(app);
