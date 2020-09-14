'use strict';
const routes = require('./express/routes');
const path = require('path');
const express = require('express');
const app = express();

// Static Files
app.use(express.static(__dirname + '/static'))

routes.map(val => {
  app.get(val.route, function(req, res) { res.sendFile(path.join(__dirname + '/pages/' + val.file)) })
})

app.listen(3000, () => console.log('Local app listening on port 3000!'));
