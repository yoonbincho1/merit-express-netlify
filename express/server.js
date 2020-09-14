'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();

app.use('/away', (req, res) => res.sendFile(path.join(__dirname, '../pages/away.html')));
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../pages/index.html')));

module.exports = app;
module.exports.handler = serverless(app);
