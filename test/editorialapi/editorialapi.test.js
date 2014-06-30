
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

describe('Editorial API Test', function() {
  beforeEach(function(done) {
    server.listen(port, done);
  });

  afterEach(function(done) {
    server.close(done);
  });

  it('should get articles by category make model year', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.year = 'TODO';
    opts.limit = 'TODO';
    opts.pagenum = 'TODO';
    opts.pagesize = 'TODO';
    server.setFileName('getarticlesbycategorymakemodelyear');
    client.getArticlesByCategoryMakeModelYear(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.length(1);
      res[0].should.have.property('title', 'Personal Safety for Teen Drivers');

      return done();
    });
  });

  it('should get editor review by make model year', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.year = 'TODO';
    server.setFileName('geteditorreviewbymakemodelyear');
    client.getEditorReviewByMakeModelYear(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('editorial');
      res.editorial.should.have.property('metaKeywords', '2013 Toyota Camry Review, Midsize Sedan, V6, Entune, SE');

      return done();
    });
  });
});