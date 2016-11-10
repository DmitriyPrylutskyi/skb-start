(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('express'), require('cors')) :
  typeof define === 'function' && define.amd ? define(['express', 'cors'], factory) :
  (factory(global.express,global.cors));
}(this, (function (express,cors) { 'use strict';

express = 'default' in express ? express['default'] : express;
cors = 'default' in cors ? cors['default'] : cors;

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

})));
//# sourceMappingURL=index.umd.js.map
