'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();

// Static Files
app.use(express.static(__dirname))

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/away', function(req, res) {
    res.sendFile(path.join(__dirname + '/away.html'))
});


module.exports = app;
module.exports.handler = serverless(app);
