"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Templates = exports.Tags = exports.Segments = exports.Profiles = exports.Metrics = exports.Lists = exports.Flows = exports.Events = exports.DataPrivacy = exports.ConfigWrapper = exports.Catalogs = exports.Campaigns = exports.Accounts = void 0;
var _exponentialBackoff = require("exponential-backoff");
var _AccountsApi = require("./api/AccountsApi.js");
var _CampaignsApi = require("./api/CampaignsApi.js");
var _CatalogsApi = require("./api/CatalogsApi.js");
var _DataPrivacyApi = require("./api/DataPrivacyApi.js");
var _EventsApi = require("./api/EventsApi.js");
var _FlowsApi = require("./api/FlowsApi.js");
var _ListsApi = require("./api/ListsApi.js");
var _MetricsApi = require("./api/MetricsApi.js");
var _ProfilesApi = require("./api/ProfilesApi.js");
var _SegmentsApi = require("./api/SegmentsApi.js");
var _TagsApi = require("./api/TagsApi.js");
var _TemplatesApi = require("./api/TemplatesApi.js");
var _ApiClient = require("./ApiClient.js");
var RETRY_OPT_NAME = 'numOfAttempts';
var TIME_MULTIPLE_OPT_NAME = 'timeMultiple';
var STARTING_DELAY_OPT_NAME = 'startingDelay';

/**
   * ConfigWrapper - used to configure the auth key and adjust the backOff params
   * @param {string} authKey The authentication key
   * @param {Object} opts Optional parameters, to set the backOff params
   * @return {ApiClient#instance} a instance of {@link  module:ApiClient}
   * */
var ConfigWrapper = function ConfigWrapper(authKey) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultClient;
  if (_ApiClient.ApiClient.instance.authentications['Klaviyo-API-Key'].apiKey) {
    defaultClient = new _ApiClient.ApiClient();
  } else {
    defaultClient = _ApiClient.ApiClient.instance;
  } // Configure API key authorization: ApiKeyAuth
  var ApiKeyAuth = defaultClient.authentications['Klaviyo-API-Key'];
  ApiKeyAuth.apiKey = authKey;
  ApiKeyAuth.apiKeyPrefix = "Klaviyo-API-Key";
  if (opts[RETRY_OPT_NAME]) {
    defaultClient.RETRY_MAX_ATTEMPTS = opts[RETRY_OPT_NAME];
  }
  if (opts[TIME_MULTIPLE_OPT_NAME]) {
    defaultClient.TIME_MULTIPLE = opts[TIME_MULTIPLE_OPT_NAME];
  }
  if (opts[STARTING_DELAY_OPT_NAME]) {
    defaultClient.STARTING_DELAY = opts[STARTING_DELAY_OPT_NAME];
  }
  return defaultClient;
};
exports.ConfigWrapper = ConfigWrapper;
var Accounts = new _AccountsApi.AccountsApi();
exports.Accounts = Accounts;
var Campaigns = new _CampaignsApi.CampaignsApi();
exports.Campaigns = Campaigns;
var Catalogs = new _CatalogsApi.CatalogsApi();
exports.Catalogs = Catalogs;
var DataPrivacy = new _DataPrivacyApi.DataPrivacyApi();
exports.DataPrivacy = DataPrivacy;
var Events = new _EventsApi.EventsApi();
exports.Events = Events;
var Flows = new _FlowsApi.FlowsApi();
exports.Flows = Flows;
var Lists = new _ListsApi.ListsApi();
exports.Lists = Lists;
var Metrics = new _MetricsApi.MetricsApi();
exports.Metrics = Metrics;
var Profiles = new _ProfilesApi.ProfilesApi();
exports.Profiles = Profiles;
var Segments = new _SegmentsApi.SegmentsApi();
exports.Segments = Segments;
var Tags = new _TagsApi.TagsApi();
exports.Tags = Tags;
var Templates = new _TemplatesApi.TemplatesApi();
exports.Templates = Templates;