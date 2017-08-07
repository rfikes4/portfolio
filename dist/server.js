// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);




const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();

const staticFileMiddleware = express.static(__dirname);
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

const port = 5555;
app.listen(port, () => {
  console.log(`Example app listening on port ${5555}!`);
});