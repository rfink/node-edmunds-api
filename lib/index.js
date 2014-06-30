
/* ~ Deps ~ */

var request = require('superagent');
var extend = require('underscore').extend;
var definitions = require('./definitions');

/**
 * The client constructor
 *
 * @param config - configuration object
 * @constructor
 */
function EdmundsClient(config) {
  if (!(this instanceof EdmundsClient)) {
    return new EdmundsClient(config);
  }

  var defaultConfig = {};
  defaultConfig.responseFormat = 'json';
  defaultConfig.baseUrl = 'https://api.edmunds.com';

  this.config = extend(defaultConfig, config);

  if (!this.config.apiKey) {
    throw new Error('API key must be provided');
  }
}

/**
 * Generic handler for API client method
 */
function addDefinition(defName) {
  var definition = definitions[defName];
  return function(params, done) {
    if (!done && typeof params === 'function') {
      done = params;
      params = {};
    }

    var url = this.config.baseUrl + definition.url;
    var xtraParams = {};
    xtraParams.fmt = this.config.responseFormat;
    xtraParams.api_key = this.config.apiKey;

    try {
      Object.keys(definition.params).forEach(function(paramName) {
        var paramDef = definition.params[paramName];
        if (!params[paramName]) {
          if (paramDef.required) {
            throw new Error('Parameter ' + paramName + ' is required');
          } else {
            return;
          }
        }
        if (paramDef.location === 'url') {
          url = url.replace(new RegExp('{' + paramName + '}', 'g'), params[paramName]);
        } else if (paramDef.location === 'querystring') {
          xtraParams[paramName] = params[paramName];
        }
      });
    } catch (e) {
      return done(e);
    }

    return request
      .get(url)
      .query(xtraParams)
      .end(function onEnd(err, res) {
        return done(err, res.body);
      });
  };
}

/* Add prototype methods */

EdmundsClient.prototype.getAllMakes = addDefinition('getAllMakes');
EdmundsClient.prototype.getMakeDetails = addDefinition('getMakeDetails');
EdmundsClient.prototype.getMakesCount = addDefinition('getMakesCount');
EdmundsClient.prototype.getAllModelsByMake = addDefinition('getAllModelsByMake');
EdmundsClient.prototype.getModelDetails = addDefinition('getModelDetails');
EdmundsClient.prototype.getModelsCount = addDefinition('getModelsCount');
EdmundsClient.prototype.getAllModelYears = addDefinition('getAllModelYears');
EdmundsClient.prototype.getModelYearDetails = addDefinition('getModelYearDetails');
EdmundsClient.prototype.getModelYearCount = addDefinition('getModelYearCount');
EdmundsClient.prototype.getStyleDetailsByMakeModelYear = addDefinition('getStyleDetailsByMakeModelYear');
EdmundsClient.prototype.getStyleCountByMake = addDefinition('getStyleCountByMake');
EdmundsClient.prototype.getStyleCountByMakeModel = addDefinition('getStyleCountByMakeModel');
EdmundsClient.prototype.getStyleCountByMakeModelYear = addDefinition('getStyleCountByMakeModelYear');
EdmundsClient.prototype.getStyleDetails = addDefinition('getStyleDetails');
EdmundsClient.prototype.getStyleDetailsByChromeDataId = addDefinition('getStyleDetailsByChromeDataId');
EdmundsClient.prototype.getStylesCount = addDefinition('getStylesCount');
EdmundsClient.prototype.getAllEnginesByStyle = addDefinition('getAllEnginesByStyle');
EdmundsClient.prototype.getEngineDetails = addDefinition('getEngineDetails');
EdmundsClient.prototype.getAllTransmissionsByStyle = addDefinition('getAllTransmissionsByStyle');
EdmundsClient.prototype.getTransmissionDetails = addDefinition('getTransmissionDetails');
EdmundsClient.prototype.getAllColorsByStyle = addDefinition('getAllColorsByStyle');
EdmundsClient.prototype.getColorDetails = addDefinition('getColorDetails');
EdmundsClient.prototype.getAllOptionsByStyle = addDefinition('getAllOptionsByStyle');
EdmundsClient.prototype.getOptionDetails = addDefinition('getOptionDetails');
EdmundsClient.prototype.getAllConfigurationsByStyleZip = addDefinition('getAllConfigurationsByStyleZip');
EdmundsClient.prototype.getDefaultConfigurationByStyleZip = addDefinition('getDefaultConfigurationByStyleZip');
EdmundsClient.prototype.getEquipmentDetails = addDefinition('getEquipmentDetails');
EdmundsClient.prototype.getEquipmentDetailsByStyle = addDefinition('getEquipmentDetailsByStyle');
EdmundsClient.prototype.getDetailsBySquishVin = addDefinition('getDetailsBySquishVin');
EdmundsClient.prototype.decodeVin = addDefinition('decodeVin');
EdmundsClient.prototype.getTotalCashPriceNewByStyleZip = addDefinition('getTotalCashPriceNewByStyleZip');
EdmundsClient.prototype.getAllMakesWithTcoData = addDefinition('getAllMakesWithTcoData');
EdmundsClient.prototype.getAllModelsWithTcoData = addDefinition('getAllModelsWithTcoData');
EdmundsClient.prototype.getAllStylesWithTcoDataBySubModel = addDefinition('getAllStylesWithTcoDataBySubModel');
EdmundsClient.prototype.getNewTcoDataByStyleZip = addDefinition('getNewTcoDataByStyleZip');
EdmundsClient.prototype.getTotalCashPriceUsedByStyleZip = addDefinition('getTotalCashPriceUsedByStyleZip');
EdmundsClient.prototype.getUsedTcoDataByStyleZip = addDefinition('getUsedTcoDataByStyleZip');
EdmundsClient.prototype.getAllUsedTcoByStyleZipState = addDefinition('getAllUsedTcoByStyleZipState');
EdmundsClient.prototype.getAllNewTcoByStyleZipState = addDefinition('getAllNewTcoByStyleZipState');
EdmundsClient.prototype.getTmvPriceNewByMsrpSpec = addDefinition('getTmvPriceNewByMsrpSpec');
EdmundsClient.prototype.getTmvPriceCertifiedByStyleZip = addDefinition('getTmvPriceCertifiedByStyleZip');
EdmundsClient.prototype.getTmvPriceTypicallyEquippedUsedByStyleZip = addDefinition('getTmvPriceTypicallyEquippedUsedByStyleZip');
EdmundsClient.prototype.getTmvPriceNewByStyleZip = addDefinition('getTmvPriceNewByStyleZip');
EdmundsClient.prototype.getTmvPriceNewByMsrpVin = addDefinition('getTmvPriceNewByMsrpVin');
EdmundsClient.prototype.getTmvPriceUsed = addDefinition('getTmvPriceUsed');
EdmundsClient.prototype.getIncentivesAndRebatesDetails = addDefinition('getIncentivesAndRebatesDetails');
EdmundsClient.prototype.getIncentivesAndRebatesByMake = addDefinition('getIncentivesAndRebatesByMake');
EdmundsClient.prototype.getIncentivesAndRebatesByMakeZip = addDefinition('getIncentivesAndRebatesByMakeZip');
EdmundsClient.prototype.getIncentivesAndRebatesByModelYearZip = addDefinition('getIncentivesAndRebatesByModelYearZip');
EdmundsClient.prototype.getIncentivesAndRebatesByStyle = addDefinition('getIncentivesAndRebatesByStyle');
EdmundsClient.prototype.getIncentivesAndRebatesByStyleZip = addDefinition('getIncentivesAndRebatesByStyleZip');
EdmundsClient.prototype.getIncentivesAndRebatesByCategoryZip = addDefinition('getIncentivesAndRebatesByCategoryZip');
EdmundsClient.prototype.getMaintenanceActionDetails = addDefinition('getMaintenanceActionDetails');
EdmundsClient.prototype.getMaintenanceScheduleModelYear = addDefinition('getMaintenanceScheduleModelYear');
EdmundsClient.prototype.getAllModelYearsWithMaintenanceSchedules = addDefinition('getAllModelYearsWithMaintenanceSchedules');
EdmundsClient.prototype.getRecallDetails = addDefinition('getRecallDetails');
EdmundsClient.prototype.getRecallsByModelYear = addDefinition('getRecallsByModelYear');
EdmundsClient.prototype.getServiceBulletinDetails = addDefinition('getServiceBulletinDetails');
EdmundsClient.prototype.getServiceBulletinsByModelYear = addDefinition('getServiceBulletinsByModelYear');
EdmundsClient.prototype.getAllServiceNotesByStyle = addDefinition('getAllServiceNotesByStyle');
EdmundsClient.prototype.getLocalLaborRateByZip = addDefinition('getLocalLaborRateByZip');
EdmundsClient.prototype.getPhotosByStyle = addDefinition('getPhotosByStyle');
EdmundsClient.prototype.getConsumerRatingsAndReviewsByStyle = addDefinition('getConsumerRatingsAndReviewsByStyle');
EdmundsClient.prototype.getConsumerRatingsAndReviewsByMakeModelYear = addDefinition('getConsumerRatingsAndReviewsByMakeModelYear');
EdmundsClient.prototype.getConsumerRatingsAndReviewsByReview = addDefinition('getConsumerRatingsAndReviewsByReview');
EdmundsClient.prototype.getLetterGradeRatingByMakeModelYear = addDefinition('getLetterGradeRatingByMakeModelYear');
EdmundsClient.prototype.getLetterGradeRatingByStyle = addDefinition('getLetterGradeRatingByStyle');
EdmundsClient.prototype.getArticlesByCategoryMakeModelYear = addDefinition('getArticlesByCategoryMakeModelYear');
EdmundsClient.prototype.getEditorReviewByMakeModelYear = addDefinition('getEditorReviewByMakeModelYear');
EdmundsClient.prototype.getInventoryByVin = addDefinition('getInventoryByVin');
EdmundsClient.prototype.getInventoryByZip = addDefinition('getInventoryByZip');
EdmundsClient.prototype.getInventoryByDealer = addDefinition('getInventoryByDealer');
EdmundsClient.prototype.getDealerRatingsAndReviewsByDealer = addDefinition('getDealerRatingsAndReviewsByDealer');
EdmundsClient.prototype.getDealerRatingsAndReviewsByMakeZip = addDefinition('getDealerRatingsAndReviewsByMakeZip');
EdmundsClient.prototype.getDealerDetails = addDefinition('getDealerDetails');

module.exports = EdmundsClient;
