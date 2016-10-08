'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.use('/', _express2.default.static(__dirname + './../client/public'));

app.get('/', function (req, res) {
  res.render('./../client/public/index.html');
});

app.get('/test', function (req, res) {
  res.send('test');
});

// app.get('/hello', (req, res) => {
//   return res.send("Can you hear me?");
// });
//
// import posts from './routes/posts';
// app.use('/posts', posts);

var server = app.listen(port, function () {
  console.log("Express listening on port", port);
});