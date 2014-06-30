
/* ~ Deps ~ */

var should = require('should');
var EdmundsClient = require('../..');
var server = require('../server');

/*global describe*/
/*global beforeEach*/
/*global afterEach*/
/*global it*/

/* ~ Locals ~ */

var port = 4001;
var client = new EdmundsClient({ baseUrl: 'localhost:' + port, apiKey: 'x' });

describe('Inventory API Test', function() {
  beforeEach(function(done) {
    server.listen(port, done);
  });

  afterEach(function(done) {
    server.close(done);
  });

  it('should get inventory by vin', function(done) {
    var opts = {};
    opts.vin = 'TODO';
    opts.zipcode = 'TODO';
    opts.range = 'TODO';
    server.setFileName('getinventorybyvin');
    client.getInventoryByVin(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('resultsList');
      res.resultsList.should.have.length(1);
      res.resultsList[0].should.have.property('bodyType', 'Pickup');

      return done();
    });
  });

  it('should get inventory by zip', function(done) {
    var opts = {};
    opts.zipcode = 'TODO';
    opts.range = 'TODO';
    opts.radius = 'TODO';
    opts.make = 'TODO';
    opts.types = 'TODO';
    opts.sort = 'TODO';
    opts.pageNumber = 'TODO';
    opts.pageSize = 'TODO';
    opts.pagenum = 'TODO';
    opts.pagesize = 'TODO';
    opts.basicFilter = 'TODO';
    opts.model = 'TODO';
    opts.priceRange = 'TODO';
    opts.dealerId = 'TODO';
    server.setFileName('getinventorybyzip');
    client.getInventoryByZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('totalCount', 202385);
      res.should.have.property('resultsList');
      res.resultsList.should.have.length(1);
      res.resultsList[0].should.have.property('year', '2012');

      return done();
    });
  });

  it('should get inventory by dealer', function(done) {
    var opts = {};
    opts.dealerId = 'TODO';
    opts.types = 'TODO';
    opts.sort = 'TODO';
    opts.pageNumber = 'TODO';
    opts.pageSize = 'TODO';
    opts.basicFilter = 'TODO';
    server.setFileName('getinventorybydealer');
    client.getInventoryByDealer(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('totalCount', 242);
      res.should.have.property('resultsList');
      res.resultsList.should.have.length(1);
      res.resultsList[0].should.have.property('year', '2013');

      return done();
    });
  });
});