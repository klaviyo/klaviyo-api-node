"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Templates = exports.Segments = exports.Profiles = exports.Metrics = exports.Lists = exports.Flows = exports.Events = exports.ConfigWrapper = exports.Client = exports.Catalogs = void 0;
var _exponentialBackoff = require("exponential-backoff");
var _CatalogsApi = require("./api/CatalogsApi.js");
var _ClientApi = require("./api/ClientApi.js");
var _EventsApi = require("./api/EventsApi.js");
var _FlowsApi = require("./api/FlowsApi.js");
var _ListsApi = require("./api/ListsApi.js");
var _MetricsApi = require("./api/MetricsApi.js");
var _ProfilesApi = require("./api/ProfilesApi.js");
var _SegmentsApi = require("./api/SegmentsApi.js");
var _TemplatesApi = require("./api/TemplatesApi.js");
var _ApiClient = require("./ApiClient.js");
var RETRY_CODES = [429, 503, 504];
var RETRY_MAX_ATTEMPTS_DEFAULT = 3;
var TIME_MULTIPLE_DEFAULT = 5;
var STARTING_DELAY_DEFAULT = 500;
var RETRY_MAX_ATTEMPTS = RETRY_MAX_ATTEMPTS_DEFAULT;
var TIME_MULTIPLE = TIME_MULTIPLE_DEFAULT;
var STARTING_DELAY = STARTING_DELAY_DEFAULT;
var RETRY_OPT_NAME = 'numOfAttempts';
var TIME_MULTIPLE_OPT_NAME = 'timeMultiple';
var STARTING_DELAY_OPT_NAME = 'startingDelay';
var wrapObj = function wrapObj(api) {
  Object.getOwnPropertyNames(api.prototype).forEach(function (functName) {
    if (!functName.match(/constructor/)) {
      api.prototype[functName] = wrapFunction(api.prototype[functName]);
    }
  });
  return new api();
};
var wrapFunction = function wrapFunction(funct) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (0, _exponentialBackoff.backOff)(function () {
      return funct.apply(void 0, args);
    }, {
      jitter: "full",
      numOfAttempts: RETRY_MAX_ATTEMPTS,
      timeMultiple: TIME_MULTIPLE,
      startingDelay: STARTING_DELAY,
      retry: function retry(res) {
        return RETRY_CODES.includes(res.status);
      }
    });
  };
};

/**
   * ConfigWrapper - used to configure the auth key and adjust the backOff params
   * @param {string} authKey The authentication key
   * @param {Object} opts Optional parameters, to set the backOff params
   * @return {ApiClient#instance} a instance of {@link  module:ApiClient}
   * */
var ConfigWrapper = function ConfigWrapper(authKey) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultClient = _ApiClient.ApiClient.instance;
  // Configure API key authorization: ApiKeyAuth
  var ApiKeyAuth = defaultClient.authentications['Klaviyo-API-Key'];
  ApiKeyAuth.apiKey = authKey;
  ApiKeyAuth.apiKeyPrefix = "Klaviyo-API-Key";
  if (opts[RETRY_OPT_NAME]) {
    RETRY_MAX_ATTEMPTS = opts[RETRY_OPT_NAME];
  }
  if (opts[TIME_MULTIPLE_OPT_NAME]) {
    TIME_MULTIPLE = opts[TIME_MULTIPLE_OPT_NAME];
  }
  if (opts[STARTING_DELAY_OPT_NAME]) {
    STARTING_DELAY = opts[STARTING_DELAY_OPT_NAME];
  }
  return defaultClient;
};
exports.ConfigWrapper = ConfigWrapper;
var Catalogs = wrapObj(_CatalogsApi.CatalogsApi);
exports.Catalogs = Catalogs;
var Client = wrapObj(_ClientApi.ClientApi);
exports.Client = Client;
var Events = wrapObj(_EventsApi.EventsApi);
exports.Events = Events;
var Flows = wrapObj(_FlowsApi.FlowsApi);
exports.Flows = Flows;
var Lists = wrapObj(_ListsApi.ListsApi);
exports.Lists = Lists;
var Metrics = wrapObj(_MetricsApi.MetricsApi);
exports.Metrics = Metrics;
var Profiles = wrapObj(_ProfilesApi.ProfilesApi);
exports.Profiles = Profiles;
var Segments = wrapObj(_SegmentsApi.SegmentsApi);
exports.Segments = Segments;
var Templates = wrapObj(_TemplatesApi.TemplatesApi);
exports.Templates = Templates;