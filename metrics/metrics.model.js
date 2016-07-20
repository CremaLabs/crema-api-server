const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Shop = require('../shops/shops.model.js');
const User = require('../users/user.model.js');


const Metric = sequelize.define('metric', {
  availRating: { type: Sequelize.FLOAT },
  userMessage: { type: Sequelize.STRING },
  userID: { type: Sequelize.INTEGER },
  shopID: { type: Sequelize.INTEGER }
});


Metric.sync();
User.hasMany(Metric, { foreignKey: 'userID' });
Shop.hasMany(Metric, { foreignKey: 'shopID '});
Metric.belongsTo(Shop, { foreignKey: 'shopID' });
Metric.belongsTo(User, { foreignKey: 'userID' });

module.exports = Metric;