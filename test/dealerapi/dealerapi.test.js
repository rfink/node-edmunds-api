
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

describe('Dealership API Test', function() {
  beforeEach(function(done) {
    server.listen(port, done);
  });

  afterEach(function(done) {
    server.close(done);
  });

  it('should get dealer ratings and reviews by dealer', function(done) {
    var opts = {};
    opts.dealerid = 'TODO';
    opts.limit = 'TODO';
    opts.pagenum = 'TODO';
    opts.pagesize = 'TODO';
    server.setFileName('getdealerratingsandreviewsbydealer');
    client.getDealerRatingsAndReviewsByDealer(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('dealerId', '26811');

      return done();
    });
  });

  it('should get dealer ratings and reviews by make zip', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.zipcode = 'TODO';
    opts.radius = 'TODO';
    opts.limit = 'TODO';
    opts.pagenum = 'TODO';
    opts.pagesize = 'TODO';
    server.setFileName('getdealerratingsandreviewsbymakezip');
    client.getDealerRatingsAndReviewsByMakeZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('salesReviews');
      res.should.have.property('serviceReviews');

      return done();
    });
  });

  it('should get dealer details', function(done) {
    var opts = {};
    opts.zipcode = 'TODO';
    opts.makeName = 'TODO';
    opts.model = 'TODO';
    opts.styleid = 'TODO';
    opts.radius = 'TODO';
    server.setFileName('getdealerdetails');
    client.getDealerDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('dealerHolder');
      res.dealerHolder.should.have.length(6);
      res.dealerHolder[0].should.have.property('id', 'R_823649');

      return done();
    });
  });
});