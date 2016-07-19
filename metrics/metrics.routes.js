const MetricRouter = require('express').router();
const MetricCtrl = require('./metrics.controller');

MetricRouter.route('/addRating')
  .post(MetricCtrl.addRating);


module.exports = MetricRouter;