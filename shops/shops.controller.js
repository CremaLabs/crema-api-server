const Shop = require('./shops.model.js');
const Metric = require('../metrics/metrics.model.js');
const sequelize = require('../config/sequelize');


module.exports = {
  getShops
};


// takes in coordinates of map visible to user and return
// all coffee shops in that area
var getShops = function(req, res) {
  var minLat = req.query.sw.lat;
  var maxLat = req.query.ne.lat;
  var minLong = req.query.sw.lng;
  var maxLong = req.query.ne.lng;

  sequelize.query(`SELECT *
              FROM shops, metrics
              WHERE shops.id = metrics."shopID" AND shops.lat <= ${maxLat} AND shops.lat >= ${minLat} 
              AND shops.long <= ${maxLong} AND shops.long >= ${minLong}`)
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => console.log(err) );
};
