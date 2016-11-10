'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var cors = _interopDefault(require('cors'));

/**
 * Created by Dmitriy Prilutsky on 10.11.2016.
 */

function canonize(username) {
  var re = new RegExp('@?\/*(https:)?(http:)?(\/\/)?(([a-zA-Z0-9.])[^\/]*\/)?(@)?([a-zA-Z0-9.@_]*)');
  var result = username.match(re)[7];
  username = result == '' ? 'Invalid username' : '@' + result;
  console.log(username);
  return username;
}

var app = express();
app.use(cors());
app.get('/', function (req, res) {
  var username = canonize(req.query.username);
  res.send(username);
});

app.listen(3000, function () {
  console.log('Your app listening on port 3000!');
});
//# sourceMappingURL=index.js.map
