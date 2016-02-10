'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function AwsSDK($q, $window) {
  var apigClient = $window.apigClientFactory.newClient();
  var service = {};

  var requestTemplate = function(methodKey) {
    return function(requestObj, headersObj) {
      var deferred = $q.defer();
      headersObj = headersObj || {};

      if(methodKey.indexOf('Get') > -1) { // For GET request, move "body" parameters into "header", AWS SDK will transform those to query params
        for(var key in requestObj) {
          headersObj[key] = requestObj[key];
        }
      }

      try {
        apigClient[methodKey](headersObj, requestObj || {}, {}).then(function(result){
          deferred.resolve(result);
        }).catch(function(result){
          deferred.reject(result.data.errorMessage);
        });      
      } catch (e) {
        console.log('apigClient error: ', e);
      }

      return deferred.promise;
    };
  };

  // Wrap all apigclient methods from AWS SDK in Angular-compatible template above
  for(var methodKey in apigClient) {
    service[methodKey] = requestTemplate(methodKey);
  }

  return service;

}

servicesModule.service('AwsSDK', AwsSDK);

