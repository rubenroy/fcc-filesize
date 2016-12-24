var express = require('express');
var formidable = require('formidable');
var path = require('path');

app = express()

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
	res.sendfile('views/index.html', {root: __dirname })
});

app.post('/filesize', function (req, res) {
  var form = new formidable.IncomingForm();
  form.multiples = false;
  form.uploadDir = __dirname;
  
  form.on('file', function(field, file) {
  	res.json({size: file.size});
  });
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });
  
  form.parse(req);
})

app.listen(port, function () {
    console.log('Express server listening on port %d', port);
})
