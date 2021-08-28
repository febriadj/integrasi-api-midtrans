const router = require('express').Router();
const mainPage = require('../controllers/mainPage');
const order = require('../controllers/order');

module.exports = (ApiClient) => {
  router.get('/', mainPage());
  router.post('/order', order(ApiClient));

  return router;
}
