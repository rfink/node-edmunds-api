
module.exports = {
  /**
   * Vehicle API
   */
  "getAllMakes": {
    "params": {
      "state": {
        "required": false,
        "location": "querystring"
      },
      "year": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/makes"
  },
  "getMakeDetails": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      },
      "year": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}"
  },
  "getMakesCount": {
    "params": {
      "state": {
        "required": false,
        "location": "querystring"
      },
      "year": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/makes/count"
  },
  "getAllModelsByMake": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      },
      "year": {
        "required": false,
        "location": "querystring"
      },
      "submodel": {
        "required": false,
        "location": "querystring"
      },
      "category": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/models"
  },
  "getModelDetails": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "model": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      },
      "year": {
        "required": false,
        "location": "querystring"
      },
      "submodel": {
        "required": false,
        "location": "querystring"
      },
      "category": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/{model}"
  },
  "getModelsCount": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      },
      "year": {
        "required": false,
        "location": "querystring"
      },
      "submodel": {
        "required": false,
        "location": "querystring"
      },
      "category": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/models/count"
  },
  "getAllModelYears": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "model": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      },
      "submodel": {
        "required": false,
        "location": "querystring"
      },
      "category": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/{model}/years"
  },
  "getModelYearDetails": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "model": {
        "required": true,
        "location": "url"
      },
      "year": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      },
      "submodel": {
        "required": false,
        "location": "querystring"
      },
      "category": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/{model}/{year}"
  },
  "getModelYearCount": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "model": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      },
      "submodel": {
        "required": false,
        "location": "querystring"
      },
      "category": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/{model}/years/count"
  },
  "getStyleDetailsByMakeModelYear": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "model": {
        "required": true,
        "location": "url"
      },
      "year": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      },
      "submodel": {
        "required": false,
        "location": "querystring"
      },
      "category": {
        "required": false,
        "location": "querystring"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/{model}/{year}/styles"
  },
  "getStyleCountByMake": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/styles/count"
  },
  "getStyleCountByMakeModel": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "model": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/{model}/styles/count"
  },
  "getStyleCountByMakeModelYear": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "model": {
        "required": true,
        "location": "url"
      },
      "year": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/{make}/{model}/{year}/styles/count"
  },
  "getStyleDetails": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "view": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/styles/{styleId}"
  },
  "getStyleDetailsByChromeDataId": {
    "params": {
      "chromeId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/vehicle/v2/partners/chrome/styles/{chromeId}"
  },
  "getStylesCount": {
    "params": {
      "state": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/styles/count"
  },
  "getAllEnginesByStyle": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "availability": {
        "required": false,
        "location": "querystring"
      },
      "name": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/styles/{styleId}/engines"
  },
  "getEngineDetails": {
    "params": {
      "engineId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/vehicle/v2/engines/{engineId}"
  },
  "getAllTransmissionsByStyle": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "availability": {
        "required": false,
        "location": "querystring"
      },
      "name": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/styles/{styleId}/transmissions"
  },
  "getTransmissionDetails": {
    "params": {
      "transmissionId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/vehicle/v2/transmission/{transmissionId}"
  },
  "getAllColorsByStyle": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "category": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/styles/{styleId}/colors"
  },
  "getColorDetails": {
    "params": {
      "colorId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/vehicle/v2/colors/{colorId}"
  },
  "getAllOptionsByStyle": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "category": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/styles/{styleId}/options"
  },
  "getOptionDetails": {
    "params": {
      "optionId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/vehicle/v2/options/{optionId}"
  },
  "getAllConfigurationsByStyleZip": {
    "params": {
      "zip": {
        "required": true,
        "location": "querystring"
      },
      "styleid": {
        "required": true,
        "location": "querystring"
      },
      "selected": {
        "required": true,
        "location": "querystring"
      },
      "optionid": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/v1/api/configurator/withOptions"
  },
  "getDefaultConfigurationByStyleZip": {
    "params": {
      "zip": {
        "required": true,
        "location": "querystring"
      },
      "styleid": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/configurator/default"
  },
  "getEquipmentDetails": {
    "params": {
      "equipmentId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/vehicle/v2/equipment/{equipmentId}"
  },
  "getEquipmentDetailsByStyle": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "availability": {
        "required": false,
        "location": "querystring"
      },
      "equipmentType": {
        "required": false,
        "location": "querystring"
      },
      "name": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/styles/{styleId}/equipment"
  },
  "getDetailsBySquishVin": {
    "params": {
      "squishVin": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/vehicle/v2/squishvins/{squishVin}"
  },
  "decodeVin": {
    "params": {
      "vin": {
        "required": true,
        "location": "url"
      },
      "manufacturerCode": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/vins/{vin}"
  },
  "getTotalCashPriceNewByStyleZip": {
    "params": {
      "style": {
        "required": true,
        "location": "url"
      },
      "zip": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/v1/api/tco/newtotalcashpricebystyleidandzip/{style}/{zip}"
  },
  "getAllMakesWithTcoData": {
    "params": {},
    "url": "/v1/api/tco/getmakeswithtcodata"
  },
  "getAllModelsWithTcoData": {
    "params": {
      "make": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/tco/getmodelswithtcodata"
  },
  "getAllStylesWithTcoDataBySubModel": {
    "params": {
      "make": {
        "required": true,
        "location": "querystring"
      },
      "model": {
        "required": true,
        "location": "querystring"
      },
      "year": {
        "required": true,
        "location": "querystring"
      },
      "submodel": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/tco/getstyleswithtcodatabysubmodel"
  },
  "getNewTcoDataByStyleZip": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "zip": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/v1/api/tco/newtruecosttoownbystyleidandzip/{styleId}/{zip}"
  },
  "getTotalCashPriceUsedByStyleZip": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "zip": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/v1/api/tco/usedtotalcashpricebystyleidandzip/{styleId}/{zip}"
  },
  "getUsedTcoDataByStyleZip": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "zip": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/v1/api/tco/usedtruecosttoownbystyleidandzip/{styleId}/{zip}"
  },
  "getAllUsedTcoByStyleZipState": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "zip": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/tco/v1/details/allusedtcobystyleidzipandstate/{styleId}/{zip}/{state}"
  },
  "getAllNewTcoByStyleZipState": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "zip": {
        "required": true,
        "location": "url"
      },
      "state": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/tco/v1/details/allnewtcobystyleidzipandstate/{styleId}/{zip}/{state}"
  },
  "getTmvPriceNewByMsrpSpec": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "year": {
        "required": true,
        "location": "url"
      },
      "msrp": {
        "required": true,
        "location": "querystring"
      },
      "zip": {
        "required": true,
        "location": "querystring"
      },
      "color": {
        "required": false,
        "location": "querystring"
      },
      "model": {
        "required": false,
        "location": "querystring"
      },
      "vehicleStyle": {
        "required": false,
        "location": "querystring"
      },
      "drivenWheels": {
        "required": false,
        "location": "querystring"
      },
      "fuelType": {
        "required": false,
        "location": "querystring"
      },
      "cylinders": {
        "required": false,
        "location": "querystring"
      },
      "compressorType": {
        "required": false,
        "location": "querystring"
      },
      "trim": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/v1/vehicle/{make}/{year}/price"
  },
  "getTmvPriceCertifiedByStyleZip": {
    "params": {
      "style": {
        "required": true,
        "location": "querystring"
      },
      "zip": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/tmv/tmvservice/findcertifiedpriceforstyle"
  },
  "getTmvPriceTypicallyEquippedUsedByStyleZip": {
    "params": {
      "style": {
        "required": true,
        "location": "querystring"
      },
      "zip": {
        "required": true,
        "location": "querystring"
      },
      "colorid": {
        "required": false,
        "allowMultiple": true,
        "location": "querystring"
      },
      "optionid": {
        "required": false,
        "allowMultiple": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/tmv/tmvservice/calculatetypicallyequippedusedtmv"
  },
  "getTmvPriceNewByStyleZip": {
    "params": {
      "style": {
        "required": true,
        "location": "querystring"
      },
      "zip": {
        "required": true,
        "location": "querystring"
      },
      "colorid": {
        "required": false,
        "allowMultiple": true,
        "location": "querystring"
      },
      "optionid": {
        "required": false,
        "allowMultiple": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/tmv/tmvservice/calculatenewtmv"
  },
  "getTmvPriceNewByMsrpVin": {
    "params": {
      "vin": {
        "required": true,
        "location": "url"
      },
      "msrp": {
        "required": true,
        "location": "querystring"
      },
      "zip": {
        "required": true,
        "location": "querystring"
      },
      "color": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/v1/vehicle/vin/{vin}/price"
  },
  "getTmvPriceUsed": {
    "params": {
      "styleid": {
        "required": true,
        "location": "querystring"
      },
      "condition": {
        "required": true,
        "location": "querystring"
      },
      "mileage": {
        "required": true,
        "location": "querystring"
      },
      "zip": {
        "required": true,
        "location": "querystring"
      },
      "colorid": {
        "required": true,
        "allowMultiple": true,
        "location": "querystring"
      },
      "optionid": {
        "required": true,
        "allowMultiple": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/tmv/tmvservice/calculateusedtmv"
  },
  "getIncentivesAndRebatesDetails": {
    "params": {
      "id": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/incentive/incentiverepository/findbyid"
  },
  "getIncentivesAndRebatesByMake": {
    "params": {
      "makeid": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/incentive/incentiverepository/findincentivesbymakeid"
  },
  "getIncentivesAndRebatesByMakeZip": {
    "params": {
      "makeid": {
        "required": true,
        "location": "querystring"
      },
      "zipcode": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/incentive/incentiverepository/findincentivesbymakeidandzipcode"
  },
  "getIncentivesAndRebatesByModelYearZip": {
    "params": {
      "modelyearid": {
        "required": true,
        "location": "querystring"
      },
      "zipcode": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/incentive/incentiverepository/findincentivesbymodelyearidandzipcode"
  },
  "getIncentivesAndRebatesByStyle": {
    "params": {
      "styleid": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/incentive/incentiverepository/findincentivesbystyleid"
  },
  "getIncentivesAndRebatesByStyleZip": {
    "params": {
      "styleid": {
        "required": true,
        "location": "querystring"
      },
      "zipcode": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/incentive/incentiverepository/findincentivesbystyleidandzipcode"
  },
  "getIncentivesAndRebatesByCategoryZip": {
    "params": {
      "category": {
        "required": true,
        "location": "querystring"
      },
      "zipcode": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehicle/incentive/incentiverepository/findincentivesbycategoryandzipcode"
  },
  "getMaintenanceActionDetails": {
    "params": {
      "maintenance": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/v1/api/maintenance/action/{maintenance}"
  },
  "getMaintenanceScheduleModelYear": {
    "params": {
      "modelyearid": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/maintenance/actionrepository/findbymodelyearid"
  },
  "getAllModelYearsWithMaintenanceSchedules": {
    "params": {},
    "url": "/v1/api/maintenance/actionrepository/findmodelyearidswithmaintenanceschedule"
  },
  "getRecallDetails": {
    "params": {
      "recallId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/v1/api/maintenance/recall/{recallId}"
  },
  "getRecallsByModelYear": {
    "params": {
      "modelyearid": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/maintenance/recallrepository/findbymodelyearid"
  },
  "getServiceBulletinDetails": {
    "params": {
      "bulletinId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/v1/api/maintenance/servicebulletin/{bulletinId}"
  },
  "getServiceBulletinsByModelYear": {
    "params": {
      "modelyearid": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/maintenance/servicebulletinrepository/findbymodelyearid"
  },
  "getAllServiceNotesByStyle": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/v1/api/maintenance/stylesnotes/{styleId}"
  },
  "getLocalLaborRateByZip": {
    "params": {
      "zip": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/v1/api/maintenance/ziplaborrate/{zip}"
  },
  "getPhotosByStyle": {
    "params": {
      "styleId": {
        "required": true,
        "location": "querystring"
      },
      "comparator": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/api/vehiclephoto/service/findphotosbystyleid"
  },
  "getConsumerRatingsAndReviewsByStyle": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      },
      "sortby": {
        "required": false,
        "location": "querystring"
      },
      "pagenum": {
        "required": false,
        "location": "querystring"
      },
      "pagesize": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehiclereviews/v2/styles/{styleId}"
  },
  "getConsumerRatingsAndReviewsByMakeModelYear": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "model": {
        "required": true,
        "location": "url"
      },
      "year": {
        "required": true,
        "location": "url"
      },
      "sortby": {
        "required": false,
        "location": "querystring"
      },
      "pagenum": {
        "required": false,
        "location": "querystring"
      },
      "pagesize": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehiclereviews/v2/{make}/{model}/{year}"
  },
  "getConsumerRatingsAndReviewsByReview": {
    "params": {
      "reviewId": {
        "required": true,
        "location": "url"
      },
      "sortby": {
        "required": false,
        "location": "querystring"
      },
      "pagenum": {
        "required": false,
        "location": "querystring"
      },
      "pagesize": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/vehiclereviews/v2/{reviewId}"
  },
  "getLetterGradeRatingByMakeModelYear": {
    "params": {
      "make": {
        "required": true,
        "location": "url"
      },
      "model": {
        "required": true,
        "location": "url"
      },
      "year": {
        "required": true,
        "location": "url"
      },
      "submodel": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/api/vehicle/v2/grade/{make}/{model}/{year}"
  },
  "getLetterGradeRatingByStyle": {
    "params": {
      "styleId": {
        "required": true,
        "location": "url"
      }
    },
    "url": "/api/vehicle/v2/grade/{styleId}"
  },
  /**
   * Editorial API
   */
  "getArticlesByCategoryMakeModelYear": {
    "params": {
      "category": {
        "required": false,
        "location": "querystring"
      },
      "make": {
        "required": false,
        "location": "querystring"
      },
      "model": {
        "required": false,
        "location": "querystring"
      },
      "year": {
        "required": false,
        "location": "querystring"
      },
      "limit": {
        "required": false,
        "location": "querystring"
      },
      "pagenum": {
        "required": false,
        "location": "querystring"
      },
      "pagesize": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/v1/content"
  },
  "getEditorReviewByMakeModelYear": {
    "params": {
      "make": {
        "required": true,
        "location": "querystring"
      },
      "model": {
        "required": true,
        "location": "querystring"
      },
      "year": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/v1/content/editorreviews"
  },
  /**
   * Inventory API
   */
  "getInventoryByVin": {
    "params": {
      "vin": {
        "required": true,
        "location": "querystring"
      },
      "zipcode": {
        "required": true,
        "location": "querystring"
      },
      "range": {
        "required": true,
        "location": "querystring"
      }
    },
    "url": "/api/inventory/v1/lookup"
  },
  "getInventoryByZip": {
    "params": {
      "zipcode": {
        "required": true,
        "location": "querystring"
      },
      "range": {
        "required": true,
        "location": "querystring"
      },
      "radius": {
        "required": true,
        "location": "querystring"
      },
      "make": {
        "required": true,
        "location": "querystring"
      },
      "types": {
        "required": false,
        "location": "querystring"
      },
      "sort": {
        "required": false,
        "location": "querystring"
      },
      "pageNumber": {
        "required": false,
        "location": "querystring"
      },
      "pageSize": {
        "required": false,
        "location": "querystring"
      },
      "pagenum": {
        "required": false,
        "location": "querystring"
      },
      "pagesize": {
        "required": false,
        "location": "querystring"
      },
      "basicFilter": {
        "required": false,
        "location": "querystring"
      },
      "model": {
        "required": false,
        "location": "querystring"
      },
      "submodel": {
        "required": false,
        "location": "querystring"
      },
      "priceRange": {
        "required": false,
        "location": "querystring"
      },
      "dealerId": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/inventory/v1/getall"
  },
  "getInventoryByDealer": {
    "params": {
      "dealerId": {
        "required": true,
        "location": "querystring"
      },
      "types": {
        "required": true,
        "location": "querystring"
      },
      "sort": {
        "required": false,
        "location": "querystring"
      },
      "pageNumber": {
        "required": false,
        "location": "querystring"
      },
      "pageSize": {
        "required": false,
        "location": "querystring"
      },
      "basicFilter": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/api/inventory/v1/getall"
  },
  /**
   * Dealer API
   */
  "getDealerRatingsAndReviewsByDealer": {
    "params": {
      "dealerid": {
        "required": true,
        "location": "querystring"
      },
      "limit": {
        "required": false,
        "location": "querystring"
      },
      "pagenum": {
        "required": false,
        "location": "querystring"
      },
      "pagesize": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/v1/api/drrrepository/getdrrbydealerid"
  },
  "getDealerRatingsAndReviewsByMakeZip": {
    "params": {
      "make": {
        "required": true,
        "location": "querystring"
      },
      "zipcode": {
        "required": true,
        "location": "querystring"
      },
      "radius": {
        "required": false,
        "location": "querystring"
      },
      "limit": {
        "required": false,
        "location": "querystring"
      },
      "pagenum": {
        "required": false,
        "location": "querystring"
      },
      "pagesize": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/v1/api/drrrepository/getdrrbyzipcodeandmake"
  },
  "getDealerDetails": {
    "params": {
      "zipcode": {
        "required": true,
        "location": "querystring"
      },
      "makeName": {
        "required": false,
        "location": "querystring"
      },
      "model": {
        "required": false,
        "location": "querystring"
      },
      "styleid": {
        "required": false,
        "location": "querystring"
      },
      "radius": {
        "required": false,
        "location": "querystring"
      }
    },
    "url": "/v1/api/dealer"
  }
};
