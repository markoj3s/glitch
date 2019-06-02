const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.use(express.static('public'));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

require('./server/routes')(app);

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
