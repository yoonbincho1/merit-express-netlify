'use strict';

const app = require('./express/server');
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.get('/away', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/away.html'))
});

app.listen(3000, () => console.log('Local app listening on port 3000!'));
