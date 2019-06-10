const sharedData = require('../page-data/shared.json');
const homeData = require('../page-data/home.json');
const aboutData = require('../page-data/about-coffee.json');
const coffeeTypesPageData = require('../page-data/coffee-types.json');
const whyCoffeeData = require('../page-data/why-coffee.json');

module.exports = (app) => {
  app.use(require('./view-data'));

  app.get('/', (req, res) => {
    res.render('pages/home.html', { shared: sharedData, page: homeData });
  });

  app.get('/about-coffee', (req, res) => {
    res.render('pages/standard-template.html', { shared: sharedData, page: aboutData });
  });

  app.get('/coffee-types', (req, res) => {
    res.render('pages/coffee-types.html', { shared: sharedData, page: coffeeTypesPageData });
  });

  app.get('/why-coffee', (req, res) => {
    res.render('pages/standard-template.html', { shared: sharedData, page: whyCoffeeData });
  });

  app.get('/*', (req, res) => {
    res.render('pages/error.html', { shared: sharedData });
  });

  return app;
};