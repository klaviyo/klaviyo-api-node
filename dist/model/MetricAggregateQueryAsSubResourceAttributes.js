"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricAggregateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The MetricAggregateQueryAsSubResourceAttributes model module.
 * @module model/MetricAggregateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
var MetricAggregateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricAggregateQueryAsSubResourceAttributes</code>.
   * @alias module:model/MetricAggregateQueryAsSubResourceAttributes
   * @class
   * @param metricId {String} 
   * @param measurements {Array.<module:model/MetricAggregateQueryAsSubResourceAttributes.MeasurementsEnum>} 
   * @param interval {module:model/MetricAggregateQueryAsSubResourceAttributes.IntervalEnum} Supported intervals for bucketing query results by time
   * @param filter {Array.<String>} 
   * @param timezone {String} 
   */
  function MetricAggregateQueryAsSubResourceAttributes(metricId, measurements, interval, filter, timezone) {
    _classCallCheck(this, MetricAggregateQueryAsSubResourceAttributes);
    this.metricId = metricId;
    this.measurements = measurements;
    this.interval = interval;
    this.filter = filter;
    this.timezone = timezone;
  }

  /**
   * Constructs a <code>MetricAggregateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricAggregateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/MetricAggregateQueryAsSubResourceAttributes} The populated <code>MetricAggregateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(MetricAggregateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricAggregateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('metric_id')) obj.metricId = _ApiClient.ApiClient.convertToType(data['metric_id'], 'String');
        if (data.hasOwnProperty('measurements')) obj.measurements = _ApiClient.ApiClient.convertToType(data['measurements'], ['String']);
        if (data.hasOwnProperty('interval')) obj.interval = _ApiClient.ApiClient.convertToType(data['interval'], 'String');
        if (data.hasOwnProperty('page_size')) obj.pageSize = _ApiClient.ApiClient.convertToType(data['page_size'], 'Number');
        if (data.hasOwnProperty('by')) obj.by = _ApiClient.ApiClient.convertToType(data['by'], ['String']);
        if (data.hasOwnProperty('return_fields')) obj.returnFields = _ApiClient.ApiClient.convertToType(data['return_fields'], ['String']);
        if (data.hasOwnProperty('filter')) obj.filter = _ApiClient.ApiClient.convertToType(data['filter'], ['String']);
        if (data.hasOwnProperty('timezone')) obj.timezone = _ApiClient.ApiClient.convertToType(data['timezone'], 'String');
        if (data.hasOwnProperty('sort')) obj.sort = _ApiClient.ApiClient.convertToType(data['sort'], 'String');
        if (data.hasOwnProperty('page_cursor')) obj.pageCursor = _ApiClient.ApiClient.convertToType(data['page_cursor'], 'String');
      }
      return obj;
    }
  }]);
  return MetricAggregateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} metricId
 */
exports.MetricAggregateQueryAsSubResourceAttributes = MetricAggregateQueryAsSubResourceAttributes;
MetricAggregateQueryAsSubResourceAttributes.prototype.metricId = undefined;

/**
 * Allowed values for the <code>measurements</code> property.
 * @enum {String}
 * @readonly
 */
MetricAggregateQueryAsSubResourceAttributes.MeasurementsEnum = {
  /**
   * value: "count"
   * @const
   */
  count: "count",
  /**
   * value: "sum_value"
   * @const
   */
  sumValue: "sum_value",
  /**
   * value: "unique"
   * @const
   */
  unique: "unique"
};
/**
 * @member {Array.<module:model/MetricAggregateQueryAsSubResourceAttributes.MeasurementsEnum>} measurements
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.measurements = undefined;

/**
 * Allowed values for the <code>interval</code> property.
 * @enum {String}
 * @readonly
 */
MetricAggregateQueryAsSubResourceAttributes.IntervalEnum = {
  /**
   * value: "day"
   * @const
   */
  day: "day",
  /**
   * value: "hour"
   * @const
   */
  hour: "hour",
  /**
   * value: "month"
   * @const
   */
  month: "month",
  /**
   * value: "week"
   * @const
   */
  week: "week"
};
/**
 * Supported intervals for bucketing query results by time
 * @member {module:model/MetricAggregateQueryAsSubResourceAttributes.IntervalEnum} interval
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.interval = undefined;

/**
 * @member {Number} pageSize
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.pageSize = undefined;

/**
 * Allowed values for the <code>by</code> property.
 * @enum {String}
 * @readonly
 */
MetricAggregateQueryAsSubResourceAttributes.ByEnum = {
  /**
   * value: "$attributed_channel"
   * @const
   */
  attributedChannel: "$attributed_channel",
  /**
   * value: "$attributed_flow"
   * @const
   */
  attributedFlow: "$attributed_flow",
  /**
   * value: "$attributed_message"
   * @const
   */
  attributedMessage: "$attributed_message",
  /**
   * value: "$attributed_variation"
   * @const
   */
  attributedVariation: "$attributed_variation",
  /**
   * value: "$campaign_channel"
   * @const
   */
  campaignChannel: "$campaign_channel",
  /**
   * value: "$flow"
   * @const
   */
  flow: "$flow",
  /**
   * value: "$flow_channel"
   * @const
   */
  flowChannel: "$flow_channel",
  /**
   * value: "$message"
   * @const
   */
  message: "$message",
  /**
   * value: "$message_send_cohort"
   * @const
   */
  messageSendCohort: "$message_send_cohort",
  /**
   * value: "$variation"
   * @const
   */
  variation: "$variation",
  /**
   * value: "$variation_send_cohort"
   * @const
   */
  variationSendCohort: "$variation_send_cohort",
  /**
   * value: "Bounce Type"
   * @const
   */
  bounceType: "Bounce Type",
  /**
   * value: "Campaign Name"
   * @const
   */
  campaignName: "Campaign Name",
  /**
   * value: "Client Canonical"
   * @const
   */
  clientCanonical: "Client Canonical",
  /**
   * value: "Client Name"
   * @const
   */
  clientName: "Client Name",
  /**
   * value: "Client Type"
   * @const
   */
  clientType: "Client Type",
  /**
   * value: "Email Domain"
   * @const
   */
  emailDomain: "Email Domain",
  /**
   * value: "Failure Source"
   * @const
   */
  failureSource: "Failure Source",
  /**
   * value: "Failure Type"
   * @const
   */
  failureType: "Failure Type",
  /**
   * value: "From Number"
   * @const
   */
  fromNumber: "From Number",
  /**
   * value: "From Phone Region"
   * @const
   */
  fromPhoneRegion: "From Phone Region",
  /**
   * value: "List"
   * @const
   */
  list: "List",
  /**
   * value: "Message Name"
   * @const
   */
  messageName: "Message Name",
  /**
   * value: "Message Type"
   * @const
   */
  messageType: "Message Type",
  /**
   * value: "Method"
   * @const
   */
  method: "Method",
  /**
   * value: "Subject"
   * @const
   */
  subject: "Subject",
  /**
   * value: "To Number"
   * @const
   */
  toNumber: "To Number",
  /**
   * value: "To Phone Region"
   * @const
   */
  toPhoneRegion: "To Phone Region",
  /**
   * value: "URL"
   * @const
   */
  URL: "URL",
  /**
   * value: "form_id"
   * @const
   */
  formId: "form_id"
};
/**
 * @member {Array.<module:model/MetricAggregateQueryAsSubResourceAttributes.ByEnum>} by
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.by = undefined;

/**
 * @member {Array.<String>} returnFields
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.returnFields = undefined;

/**
 * @member {Array.<String>} filter
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.filter = undefined;

/**
 * @member {String} timezone
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.timezone = undefined;

/**
 * Allowed values for the <code>sort</code> property.
 * @enum {String}
 * @readonly
 */
MetricAggregateQueryAsSubResourceAttributes.SortEnum = {
  /**
   * value: "$attributed_channel"
   * @const
   */
  attributedChannel: "$attributed_channel",
  /**
   * value: "-$attributed_channel"
   * @const
   */
  attributedChannel_1: "-$attributed_channel",
  /**
   * value: "$attributed_flow"
   * @const
   */
  attributedFlow: "$attributed_flow",
  /**
   * value: "-$attributed_flow"
   * @const
   */
  attributedFlow_3: "-$attributed_flow",
  /**
   * value: "$attributed_message"
   * @const
   */
  attributedMessage: "$attributed_message",
  /**
   * value: "-$attributed_message"
   * @const
   */
  attributedMessage_5: "-$attributed_message",
  /**
   * value: "$attributed_variation"
   * @const
   */
  attributedVariation: "$attributed_variation",
  /**
   * value: "-$attributed_variation"
   * @const
   */
  attributedVariation_7: "-$attributed_variation",
  /**
   * value: "$campaign_channel"
   * @const
   */
  campaignChannel: "$campaign_channel",
  /**
   * value: "-$campaign_channel"
   * @const
   */
  campaignChannel_9: "-$campaign_channel",
  /**
   * value: "$flow"
   * @const
   */
  flow: "$flow",
  /**
   * value: "-$flow"
   * @const
   */
  flow_11: "-$flow",
  /**
   * value: "$flow_channel"
   * @const
   */
  flowChannel: "$flow_channel",
  /**
   * value: "-$flow_channel"
   * @const
   */
  flowChannel_13: "-$flow_channel",
  /**
   * value: "$message"
   * @const
   */
  message: "$message",
  /**
   * value: "-$message"
   * @const
   */
  message_15: "-$message",
  /**
   * value: "$message_send_cohort"
   * @const
   */
  messageSendCohort: "$message_send_cohort",
  /**
   * value: "-$message_send_cohort"
   * @const
   */
  messageSendCohort_17: "-$message_send_cohort",
  /**
   * value: "$variation"
   * @const
   */
  variation: "$variation",
  /**
   * value: "-$variation"
   * @const
   */
  variation_19: "-$variation",
  /**
   * value: "$variation_send_cohort"
   * @const
   */
  variationSendCohort: "$variation_send_cohort",
  /**
   * value: "-$variation_send_cohort"
   * @const
   */
  variationSendCohort_21: "-$variation_send_cohort",
  /**
   * value: "Bounce Type"
   * @const
   */
  bounceType: "Bounce Type",
  /**
   * value: "-Bounce Type"
   * @const
   */
  bounceType_23: "-Bounce Type",
  /**
   * value: "Campaign Name"
   * @const
   */
  campaignName: "Campaign Name",
  /**
   * value: "-Campaign Name"
   * @const
   */
  campaignName_25: "-Campaign Name",
  /**
   * value: "Client Canonical"
   * @const
   */
  clientCanonical: "Client Canonical",
  /**
   * value: "-Client Canonical"
   * @const
   */
  clientCanonical_27: "-Client Canonical",
  /**
   * value: "Client Name"
   * @const
   */
  clientName: "Client Name",
  /**
   * value: "-Client Name"
   * @const
   */
  clientName_29: "-Client Name",
  /**
   * value: "Client Type"
   * @const
   */
  clientType: "Client Type",
  /**
   * value: "-Client Type"
   * @const
   */
  clientType_31: "-Client Type",
  /**
   * value: "Email Domain"
   * @const
   */
  emailDomain: "Email Domain",
  /**
   * value: "-Email Domain"
   * @const
   */
  emailDomain_33: "-Email Domain",
  /**
   * value: "Failure Source"
   * @const
   */
  failureSource: "Failure Source",
  /**
   * value: "-Failure Source"
   * @const
   */
  failureSource_35: "-Failure Source",
  /**
   * value: "Failure Type"
   * @const
   */
  failureType: "Failure Type",
  /**
   * value: "-Failure Type"
   * @const
   */
  failureType_37: "-Failure Type",
  /**
   * value: "From Number"
   * @const
   */
  fromNumber: "From Number",
  /**
   * value: "-From Number"
   * @const
   */
  fromNumber_39: "-From Number",
  /**
   * value: "From Phone Region"
   * @const
   */
  fromPhoneRegion: "From Phone Region",
  /**
   * value: "-From Phone Region"
   * @const
   */
  fromPhoneRegion_41: "-From Phone Region",
  /**
   * value: "List"
   * @const
   */
  list: "List",
  /**
   * value: "-List"
   * @const
   */
  list_43: "-List",
  /**
   * value: "Message Name"
   * @const
   */
  messageName: "Message Name",
  /**
   * value: "-Message Name"
   * @const
   */
  messageName_45: "-Message Name",
  /**
   * value: "Message Type"
   * @const
   */
  messageType: "Message Type",
  /**
   * value: "-Message Type"
   * @const
   */
  messageType_47: "-Message Type",
  /**
   * value: "Method"
   * @const
   */
  method: "Method",
  /**
   * value: "-Method"
   * @const
   */
  method_49: "-Method",
  /**
   * value: "Subject"
   * @const
   */
  subject: "Subject",
  /**
   * value: "-Subject"
   * @const
   */
  subject_51: "-Subject",
  /**
   * value: "To Number"
   * @const
   */
  toNumber: "To Number",
  /**
   * value: "-To Number"
   * @const
   */
  toNumber_53: "-To Number",
  /**
   * value: "To Phone Region"
   * @const
   */
  toPhoneRegion: "To Phone Region",
  /**
   * value: "-To Phone Region"
   * @const
   */
  toPhoneRegion_55: "-To Phone Region",
  /**
   * value: "URL"
   * @const
   */
  URL: "URL",
  /**
   * value: "-URL"
   * @const
   */
  _URL: "-URL",
  /**
   * value: "count"
   * @const
   */
  count: "count",
  /**
   * value: "-count"
   * @const
   */
  count_59: "-count",
  /**
   * value: "form_id"
   * @const
   */
  formId: "form_id",
  /**
   * value: "-form_id"
   * @const
   */
  formId_61: "-form_id",
  /**
   * value: "sum_value"
   * @const
   */
  sumValue: "sum_value",
  /**
   * value: "-sum_value"
   * @const
   */
  sumValue_63: "-sum_value",
  /**
   * value: "unique"
   * @const
   */
  unique: "unique",
  /**
   * value: "-unique"
   * @const
   */
  unique_65: "-unique"
};
/**
 * @member {module:model/MetricAggregateQueryAsSubResourceAttributes.SortEnum} sort
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.sort = undefined;

/**
 * @member {String} pageCursor
 */
MetricAggregateQueryAsSubResourceAttributes.prototype.pageCursor = undefined;