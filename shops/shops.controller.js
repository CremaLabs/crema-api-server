const fetch = require('node-fetch');
const config = require('../config/config');
const MetricsCtrl = require('../metrics/metrics.controller');

const GOOGLE_PLACES_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${config.googleKey}`;

module.exports = {
  get: get
};

/***** PUBLIC *****/

function get(req, res) {
  fetch(`
    ${GOOGLE_PLACES_URL}
    &location=${req.query.location}
    &radius=1500
    &type=cafe
    &keyword=coffee
  `)
    .then(response => response.json())
    .then(body => MetricsCtrl.getRatingsForShopsByPlaceIds(body.results))
    .then(shops => res.send(shops))
    .catch(err => {
      console.error('Failed to search Google Places: ', err);
      res.status(500).send('Error searching Google Places');
    });
}
