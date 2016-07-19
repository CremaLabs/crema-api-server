'use strict';

// const supertest = require('supertest');
const chai = require('chai').asset();
const app = require('../');
const ShopCtrl = require('./shops.controller');
var request = require('supertest');


describe('Shops', function () {
  let url = '/v1/shops/map';

  var hasCorrectResponse = function(res) {
    // TODO
    // some statements about what res.body should look like,
    // return true or false
  };

  describe('GET /map', function () {
    it('should call getShops and respond with data', function(done) {
      request(app)
        .get(url)
        .expect(hasCorrectResponse)
        .end(done);
    });
  });
});
