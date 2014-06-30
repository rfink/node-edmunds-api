
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

describe('Vehicle API Test', function() {
  beforeEach(function(done) {
    server.listen(port, done);
  });

  afterEach(function(done) {
    server.setFileName('');
    server.close(done);
  });

  it('should get all makes', function(done) {
    var opts = {};
    opts.state = 'TODO';
    opts.year = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getallmakes');
    client.getAllMakes(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('makes');
      res.makes.should.have.length(3);
      res.makes[0].should.have.property('id', 200002038);
      res.makes[0].should.have.property('name', 'Acura');

      return done();
    });
  });

  it('should get make details', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.state = 'TODO';
    opts.year = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getmakedetails');
    client.getMakeDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', 200001623);
      res.should.have.property('models');
      res.models.should.have.length(2);
      res.models[0].should.have.property('id', 'Lexus_CT_200h');

      return done();
    });
  });

  it('should get makes count', function(done) {
    var opts = {};
    opts.state = 'TODO';
    opts.year = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getmakescount');
    client.getMakesCount(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('makesCount', 61);

      return done();
    });
  });

  it('should get all models by make', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.state = 'TODO';
    opts.year = 'TODO';
    opts.submodel = 'TODO';
    opts.category = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getallmodelsbymake');
    client.getAllModelsByMake(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('models');
      res.models.should.have.length(2);
      res.models[0].should.have.property('id', 'Lexus_CT_200h');
      res.should.have.property('modelsCount', 16);

      return done();
    });
  });

  it('should get model details', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.state = 'TODO';
    opts.year = 'TODO';
    opts.submodel = 'TODO';
    opts.category = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getmodeldetails');
    client.getModelDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', 'Honda_Civic');

      return done();
    });
  });

  it('should get models count', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.state = 'TODO';
    opts.submodel = 'TODO';
    opts.category = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getmodelscount');
    client.getModelsCount(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('modelsCount', 23);

      return done();
    });
  });

  it('should get all model years', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.year = 'TODO';
    opts.state = 'TODO';
    opts.submodel = 'TODO';
    opts.category = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getallmodelyears');
    client.getAllModelYears(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('years');
      res.years.should.have.length(1);
      res.years[0].should.have.property('id', 200442557);

      return done();
    });
  });

  it('should get model year details', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.year = 'TODO';
    opts.state = 'TODO';
    opts.submodel = 'TODO';
    opts.category = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getmodelyeardetails');
    client.getModelYearDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', 100533091);

      return done();
    });
  });

  it('should get model year count', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.state = 'TODO';
    opts.submodel = 'TODO';
    opts.category = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getmodelyearcount');
    client.getModelYearCount(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('yearsCount', 2);

      return done();
    });
  });

  it('should get style details by make model year', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.year = 'TODO';
    opts.state = 'TODO';
    opts.submodel = 'TODO';
    opts.category = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getstyledetailsbymakemodelyear');
    client.getStyleDetailsByMakeModelYear(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('styles');
      res.styles.should.have.length(1);
      res.styles[0].should.have.property('id', 101353967);

      return done();
    });
  });

  it('should get style count by make', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.state = 'TODO';
    server.setFileName('getstylecountbymake');
    client.getStyleCountByMake(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('stylesCount', 326);

      return done();
    });
  });

  it('should get style count by make model', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.state = 'TODO';
    server.setFileName('getstylecountbymakemodel');
    client.getStyleCountByMakeModel(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('stylesCount', 18);

      return done();
    });
  });

  it('should get style count by make model year', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.year = 'TODO';
    opts.state = 'TODO';
    server.setFileName('getstylecountbymakemodelyear');
    client.getStyleCountByMakeModelYear(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('stylesCount', 18);

      return done();
    });
  });

  it('should get style details', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.view = 'TODO';
    server.setFileName('getstyledetails');
    client.getStyleDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', 101353967);

      return done();
    });
  });

  it('should get style details by chrome data id', function(done) {
    var opts = {};
    opts.chromeId = 'TODO';
    server.setFileName('getstyledetailsbychromedataid');
    client.getStyleDetailsByChromeDataId(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('make');
      res.make.should.have.property('id', 200007302);
      res.should.have.property('id', 100001127);

      return done();
    });
  });

  it('should get styles count', function(done) {
    var opts = {};
    opts.state = 'TODO';
    server.setFileName('getstylescount');
    client.getStylesCount(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('stylesCount', 41581);

      return done();
    });
  });

  it('should get all engines by style', function(done) {
    var opts ={};
    opts.styleId = 'TODO';
    opts.availability = 'TODO';
    opts.name = 'TODO';
    server.setFileName('getallenginesbystyle');
    client.getAllEnginesByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('engines');
      res.engines.should.have.length(2);
      res.engines[0].should.have.property('id', '200478098');
      res.should.have.property('enginesCount', 2);

      return done();
    });
  });

  it('should get engine details', function(done) {
    var opts = {};
    opts.engineId = 'TODO';
    server.setFileName('getenginedetails');
    client.getEngineDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', '200478098');

      return done();
    });
  });

  it('should get all transmissions by style', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.availability = 'TODO';
    opts.name = 'TODO';
    server.setFileName('getalltransmissionsbystyle');
    client.getAllTransmissionsByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('transmissions');
      res.transmissions.should.have.length(2);
      res.transmissions[0].should.have.property('id', '200478100');
      res.should.have.property('transmissionsCount', 2);

      return done();
    });
  });

  it('should get transmission details', function(done) {
    var opts = {};
    opts.transmissionId = 'TODO';
    server.setFileName('gettransmissiondetails');
    client.getTransmissionDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', '200478100');

      return done();
    });
  });

  it('should get all colors by style', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.category = 'TODO';
    server.setFileName('getallcolorsbystyle');
    client.getAllColorsByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('colors');
      res.colors.should.have.length(9);
      res.colors[0].should.have.property('id', '200478112');
      res.should.have.property('colorsCount', 9);

      return done();
    });
  });

  it('should get color details', function(done) {
    var opts = {};
    opts.colorId = 'TODO';
    server.setFileName('getcolordetails');
    client.getColorDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', '200478111');

      return done();
    });
  });

  it('should get all options by style', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.category = 'TODO';
    server.setFileName('getalloptionsbystyle');
    client.getAllOptionsByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('options');
      res.options.should.have.length(2);
      res.options[0].should.have.property('id', '200478145');
      res.should.have.property('optionsCount', 13);

      return done();
    });
  });

  it('should get option details', function(done) {
    var opts = {};
    opts.optionId = 'TODO';
    server.setFileName('getoptiondetails');
    client.getOptionDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', '200235312');

      return done();
    });
  });

  it('should get all configurations by style zip', function(done) {
    var opts = {};
    opts.zip = 'TODO';
    opts.styleid = 'TODO';
    opts.selected = 'TODO';
    opts.optionid = 'TODO';
    server.setFileName('getallconfigurationsbystylezip');
    client.getAllConfigurationsByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('zipCode', '77001');

      return done();
    });
  });

  it('should get default configuration by style zip', function(done) {
    var opts = {};
    opts.zip = 'TODO';
    opts.styleid = 'TODO';
    server.setFileName('getdefaultconfigurationbystylezip');
    client.getDefaultConfigurationByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', 200443450);

      return done();
    });
  });

  it('should get equipment details', function(done) {
    var opts = {};
    opts.equipmentId = 'TODO';
    server.setFileName('getequipmentdetails');
    client.getEquipmentDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('equipment');
      res.equipment.should.have.length(3);
      res.equipment[0].should.have.property('id', '10135396713');
      res.should.have.property('equipmentCount', 68);

      return done();
    });
  });

  it('should get equipment details by style', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.availability = 'TODO';
    opts.equipmentType = 'TODO';
    opts.name = 'TODO';
    server.setFileName('getequipmentdetailsbystyle');
    client.getEquipmentDetailsByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('equipment');
      res.equipment.should.have.length(3);
      res.equipment[0].should.have.property('id', '10135396713');
      res.should.have.property('equipmentCount', 68);

      return done();
    });
  });

  it('should get details by squish vin', function(done) {
    var opts = {};
    opts.squishVin = 'TODO';
    opts.manufacturerCode = 'TODO';
    server.setFileName('getdetailsbysquishvin');
    client.getDetailsBySquishVin(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('squishVin', '1N4AL3APDN');

      return done();
    });
  });

  it('should decode vin', function(done) {
    var opts = {};
    opts.vin = 'TODO';
    opts.manufacturerCode = 'TODO';
    server.setFileName('decodevin');
    client.decodeVin(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('make');
      res.make.should.have.property('id', 200003381);

      return done();
    });
  });

  it('should get total cash price new by style zip', function(done) {
    var opts = {};
    opts.style = 'TODO';
    opts.zip = 'TODO';
    server.setFileName('gettotalcashpricenewbystylezip');
    client.getTotalCashPriceNewByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('value', 37859.0);

      return done();
    });
  });

  it('should get all makes with tco data', function(done) {
    var opts = {};
    server.setFileName('getallmakeswithtcodata');
    client.getAllMakesWithTcoData(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('makes');

      return done();
    });
  });

  it('should get all models with tco data', function(done) {
    var opts = {};
    opts.make = 'TODO';
    server.setFileName('getallmodelswithtcodata');
    client.getAllModelsWithTcoData(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('models');

      return done();
    });
  });

  it('should get all styles with tco data by sub model', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.year = 'TODO';
    opts.submodel = 'TODO';
    server.setFileName('getallstyleswithtcodatabysubmodel');
    client.getAllStylesWithTcoDataBySubModel(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('styles');

      return done();
    });
  });

  it('should get new tco data by style zip', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.zip = 'TODO';
    server.setFileName('getnewtcodatabystylezip');
    client.getNewTcoDataByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('value', 12937.0);

      return done();
    });
  });

  it('should get total cash price used by style zip', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.zip = 'TODO';
    server.setFileName('gettotalcashpriceusedbystylezip');
    client.getTotalCashPriceUsedByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('value', 939.0);

      return done();
    });
  });

  it('should get used tco data by style zip', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.zip = 'TODO';
    server.setFileName('getusedtcodatabystylezip');
    client.getUsedTcoDataByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('value', 16957.0);

      return done();
    });
  });

  it('should get all used tco by style zip state', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.zip = 'TODO';
    opts.state = 'TODO';
    server.setFileName('getallusedtcobystylezipstate');
    client.getAllUsedTcoByStyleZipState(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('fuel');

      return done();
    });
  });

  it('should get all new tco by style zip state', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.zip = 'TODO';
    opts.state = 'TODO';
    server.setFileName('getallnewtcobystylezipstate');
    client.getAllNewTcoByStyleZipState(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('fuel');

      return done();
    });
  });

  it('should get tmv price new by msrp spec', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.year = 'TODO';
    opts.msrp = 'TODO';
    opts.zip = 'TODO';
    opts.color = 'TODO';
    opts.model = 'TODO';
    opts.vehicleStyle = 'TODO';
    opts.drivenWheels = 'TODO';
    opts.fuelType = 'TODO';
    opts.cylinders = 'TODO';
    opts.compressorType = 'TODO';
    opts.trim = 'TODO';
    server.setFileName('gettmvpricenewbymsrpspec');
    client.getTmvPriceNewByMsrpSpec(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('tmvUsd', 31429);

      return done();
    });
  });

  it('should get tmv price certified by style zip', function(done) {
    var opts = {};
    opts.style = 'TODO';
    opts.zip = 'TODO';
    server.setFileName('gettmvpricecertifiedbystylezip');
    client.getTmvPriceCertifiedByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.equal(30788.004);

      return done();
    });
  });

  it('should get tmv price typically equipped used by style zip', function(done) {
    var opts = {};
    opts.style = 'TODO';
    opts.zip = 'TODO';
    opts.colorid = 'TODO';
    opts.optionid = 'TODO';
    server.setFileName('gettmvpricetypicallyequippedusedbystylezip');
    client.getTmvPriceTypicallyEquippedUsedByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('tmv');

      return done();
    });
  });

  it('should get tmv price new by style zip', function(done) {
    var opts = {};
    opts.style = 'TODO';
    opts.zip = 'TODO';
    opts.colorid = 'TODO';
    opts.optionid = 'TODO';
    server.setFileName('gettmvpricenewbystylezip');
    client.getTmvPriceNewByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('tmv');

      return done();
    });
  });

  it('should get tmv price new by msrp vin', function(done) {
    var opts = {};
    opts.vin = 'TODO';
    opts.msrp = 'TODO';
    opts.zip = 'TODO';
    opts.color = 'TODO';
    server.setFileName('gettmvpricenewbymsrpvin');
    client.getTmvPriceNewByMsrpVin(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('pricing');

      return done();
    });
  });

  it('should get tmv price used', function(done) {
    var opts = {};
    opts.styleid = 'TODO';
    opts.condition = 'TODO';
    opts.mileage = 'TODO';
    opts.zip = 'TODO';
    opts.colorid = 'TODO';
    opts.optionid = 'TODO';
    server.setFileName('gettmvpriceused');
    client.getTmvPriceUsed(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('tmv');

      return done();
    });
  });

  it('should get incentives and rebates details', function(done) {
    var opts = {};
    opts.id = 'TODO';
    server.setFileName('getincentivesandrebatesdetails');
    client.getIncentivesAndRebatesDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('incentiveHolder');
      res.incentiveHolder.should.have.length(1);
      res.incentiveHolder[0].should.have.property('rebateAmount', 750.0);

      return done();
    });
  });

  it('should get incentives and rebates by make', function(done) {
    var opts = {};
    opts.makeid = 'TODO';
    server.setFileName('getincentivesandrebatesbymake');
    client.getIncentivesAndRebatesByMake(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('incentiveHolder');
      res.incentiveHolder.should.have.length(2);
      res.incentiveHolder[0].should.have.property('monthlyPayment', 380.0);

      return done();
    });
  });

  it('should get incentives and rebates by make zip', function(done) {
    var opts = {};
    opts.makeid = 'TODO';
    opts.zipcode = 'TODO';
    server.setFileName('getincentivesandrebatesbymakezip');
    client.getIncentivesAndRebatesByMakeZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('incentiveHolder');
      res.incentiveHolder.should.have.length(1);
      res.incentiveHolder[0].should.have.property('monthlyPayment', 199.0);

      return done();
    });
  });

  it('should get incentives and rebates by model year zip', function(done) {
    var opts = {};
    opts.modelyearid = 'TODO';
    opts.zipcode = 'TODO';
    server.setFileName('getincentivesandrebatesbymodelyearzip');
    client.getIncentivesAndRebatesByModelYearZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('incentiveHolder');
      res.incentiveHolder.should.have.length(1);
      res.incentiveHolder[0].should.have.property('monthlyPayment', 199.0);

      return done();
    });
  });

  it('should get incentives and rebates by style', function(done) {
    var opts = {};
    opts.styleid = 'TODO';
    server.setFileName('getincentivesandrebatesbystyle');
    client.getIncentivesAndRebatesByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('incentiveHolder');
      res.incentiveHolder.should.have.length(2);
      res.incentiveHolder[0].should.have.property('monthlyPayment', 380.0);

      return done();
    });
  });

  it('should get incentives and rebates by style zip', function(done) {
    var opts = {};
    opts.styleid = 'TODO';
    opts.zipcode = 'TODO';
    server.setFileName('getincentivesandrebatesbystylezip');
    client.getIncentivesAndRebatesByStyleZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('incentiveHolder');
      res.incentiveHolder.should.have.length(1);
      res.incentiveHolder[0].should.have.property('monthlyPayment', 199.0);

      return done();
    });
  });

  it('should get incentives and rebates by category zip', function(done) {
    var opts = {};
    opts.category = 'TODO';
    opts.zipcode = 'TODO';
    server.setFileName('getincentivesandrebatesbycategoryzip');
    client.getIncentivesAndRebatesByCategoryZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('incentiveHolder');
      res.incentiveHolder.should.have.length(1);
      res.incentiveHolder[0].should.have.property('rebateAmount', 750.0);

      return done();
    });
  });

  it('should get maintenance action details', function(done) {
    var opts = {};
    opts.maintenance = 'TODO';
    server.setFileName('getmaintenanceactiondetails');
    client.getMaintenanceActionDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('actionHolder');
      res.actionHolder.should.have.length(1);
      res.actionHolder[0].should.have.property('id', 563663);

      return done();
    });
  });

  it('should get maintenance schedule by model year', function(done) {
    var opts = {};
    opts.modelyearid = 'TODO';
    server.setFileName('getmaintenanceschedulemodelyear');
    client.getMaintenanceScheduleModelYear(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('actionHolder');
      res.actionHolder.should.have.length(40);
      res.actionHolder[0].should.have.property('id', 563663);

      return done();
    });
  });

  it('should get all model years with maintenance schedules', function(done) {
    server.setFileName('getallmodelyearswithmaintenanceschedules');
    client.getAllModelYearsWithMaintenanceSchedules({}, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('longListHolder');
      res.longListHolder.should.have.length(84);
      res.longListHolder[0].should.equal(100533909);

      return done();
    });
  });

  it('should get recall details', function(done) {
    var opts = {};
    opts.recallId = 'TODO';
    server.setFileName('getrecalldetails');
    client.getRecallDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('recallHolder');
      res.recallHolder.should.have.length(1);
      res.recallHolder[0].should.have.property('id', 169008);

      return done();
    });
  });

  it('should get recalls by model year', function(done) {
    var opts = {};
    opts.modelyearid = 'TODO';
    server.setFileName('getrecallsbymodelyear');
    client.getRecallsByModelYear(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('recallHolder');
      res.recallHolder.should.have.length(1);
      res.recallHolder[0].should.have.property('id', 169008);

      return done();
    });
  });

  it('should get service bulletin details', function(done) {
    var opts = {};
    opts.bulletinId = 'TODO';
    server.setFileName('getservicebulletindetails');
    client.getServiceBulletinDetails(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('serviceBulletinHolder');
      res.serviceBulletinHolder.should.have.length(1);
      res.serviceBulletinHolder[0].should.have.property('id', 190059);

      return done();
    });
  });

  it('should get service bulletins by model year', function(done) {
    var opts = {};
    opts.modelyearid = 'TODO';
    server.setFileName('getservicebulletinsbymodelyear');
    client.getServiceBulletinsByModelYear(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('serviceBulletinHolder');
      res.serviceBulletinHolder.should.have.length(5);
      res.serviceBulletinHolder[0].should.have.property('id', 190058);

      return done();
    });
  });

  it('should get all services notes by style', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    server.setFileName('getallservicenotesbystyle');
    client.getAllServiceNotesByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('maintenanceStyleNotesHolder');
      res.maintenanceStyleNotesHolder.should.have.length(1);
      res.maintenanceStyleNotesHolder[0].should.have.property('style', '/api/vehicle/style/101353967');

      return done();
    });
  });

  it('should get local labor rate by zip', function(done) {
    var opts = {};
    opts.zip = 'TODO';
    server.setFileName('getlocallaborratebyzip');
    client.getLocalLaborRateByZip(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('zipLaborRateHolder');
      res.zipLaborRateHolder.should.have.length(1);
      res.zipLaborRateHolder[0].should.have.property('laborRate', 70);

      return done();
    });
  });

  it('should get photos by style', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.comparator = 'TODO';
    server.setFileName('getphotosbystyle');
    client.getPhotosByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.length(1);
      res[0].should.have.property('type', 'PHOTOS');

      return done();
    });
  });

  it('should get consumer ratings and reviews by style', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    opts.sortby = 'TODO';
    opts.pagenum = 'TODO';
    opts.pagesize = 'TODO';
    server.setFileName('getconsumerratingsandreviewsbystyle');
    client.getConsumerRatingsAndReviewsByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('averageRating', 0.00);

      return done();
    });
  });

  it('should get consumer ratings and reviews by make model year', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.year = 'TODO';
    opts.sortby = 'TODO';
    opts.pagenum = 'TODO';
    opts.pagesize = 'TODO';
    server.setFileName('getconsumerratingsandreviewsbymakemodelyear');
    client.getConsumerRatingsAndReviewsByMakeModelYear(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('averageRating', 0.00);

      return done();
    });
  });

  it('should get consumer ratings and reviews by review', function(done) {
    var opts = {};
    opts.reviewId = 'TODO';
    opts.sortby = 'TODO';
    opts.pagenum = 'TODO';
    opts.pagesize = 'TODO';
    server.setFileName('getconsumerratingsandreviewsbyreview');
    client.getConsumerRatingsAndReviewsByReview(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('id', 1383882);

      return done();
    });
  });

  it('should get letter grade rating by make model year', function(done) {
    var opts = {};
    opts.make = 'TODO';
    opts.model = 'TODO';
    opts.year = 'TODO';
    opts.submodel = 'TODO';
    server.setFileName('getlettergraderatingbymakemodelyear');
    client.getLetterGradeRatingByMakeModelYear(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('make');
      res.make.should.have.property('id', 200001444);

      return done();
    });
  });

  it('should get letter grade rating by style', function(done) {
    var opts = {};
    opts.styleId = 'TODO';
    server.setFileName('getlettergraderatingbystyle');
    client.getLetterGradeRatingByStyle(opts, function onResponse(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('make');
      res.make.should.have.property('id', 200001444);

      return done();
    });
  });
});
