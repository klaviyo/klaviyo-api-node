"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _MetricCreateQuery = require("./MetricCreateQuery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The EventCreateQueryAsSubResourceAttributes model module.
 * @module model/EventCreateQueryAsSubResourceAttributes
 * @version 2023-01-24
 */
var EventCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/EventCreateQueryAsSubResourceAttributes
   * @class
   * @param profile {Object}  Properties of the profile that triggered this event. The profile must contain an identifier. The $email and/or $phone_number can be used as the identify the profile. Other key value pairs can be used to create segments. For example, to create a list of people on trial plans, include a profile's plan type in the profile. The profile supports special fields. The fields include: $email (string), $first_name (string), $last_name (string), $phone_number (string), $city (string), $region (string; state or other region), $country (string), $zip (string), $image (string; url to a photo of a person), and $consent (list of strings; eg: ['sms', 'email', 'web', 'directmail', 'mobile']). 
   * @param metric {module:model/MetricCreateQuery} 
   * @param properties {Object}   Properties of this event. Any top level property (that are not objects) can be used to create segments. The $extra property is a special property. This records any non-segmentable values that can be references later. For example, HTML templates are useful on a segment, but itself is not used in creating a segment. There are limits placed onto the size of the data present. This must not exceed 5 MB. This must not exceed 300 event properties. A single string cannot be larger than 100 KB. Each array must not exceed 4000 elements. The properties cannot contain more than 10 nested levels. 
   */
  function EventCreateQueryAsSubResourceAttributes(profile, metric, properties) {
    _classCallCheck(this, EventCreateQueryAsSubResourceAttributes);
    this.profile = profile;
    this.metric = metric;
    this.properties = properties;
  }

  /**
   * Constructs a <code>EventCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/EventCreateQueryAsSubResourceAttributes} The populated <code>EventCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(EventCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('profile')) obj.profile = _ApiClient.ApiClient.convertToType(data['profile'], Object);
        if (data.hasOwnProperty('metric')) obj.metric = _MetricCreateQuery.MetricCreateQuery.constructFromObject(data['metric']);
        if (data.hasOwnProperty('properties')) obj.properties = _ApiClient.ApiClient.convertToType(data['properties'], Object);
        if (data.hasOwnProperty('time')) obj.time = _ApiClient.ApiClient.convertToType(data['time'], 'Date');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Number');
        if (data.hasOwnProperty('unique_id')) obj.uniqueId = _ApiClient.ApiClient.convertToType(data['unique_id'], 'String');
      }
      return obj;
    }
  }]);
  return EventCreateQueryAsSubResourceAttributes;
}();
/**
 *  Properties of the profile that triggered this event. The profile must contain an identifier. The $email and/or $phone_number can be used as the identify the profile. Other key value pairs can be used to create segments. For example, to create a list of people on trial plans, include a profile's plan type in the profile. The profile supports special fields. The fields include: $email (string), $first_name (string), $last_name (string), $phone_number (string), $city (string), $region (string; state or other region), $country (string), $zip (string), $image (string; url to a photo of a person), and $consent (list of strings; eg: ['sms', 'email', 'web', 'directmail', 'mobile']). 
 * @member {Object} profile
 */
exports.EventCreateQueryAsSubResourceAttributes = EventCreateQueryAsSubResourceAttributes;
EventCreateQueryAsSubResourceAttributes.prototype.profile = undefined;

/**
 * @member {module:model/MetricCreateQuery} metric
 */
EventCreateQueryAsSubResourceAttributes.prototype.metric = undefined;

/**
 *   Properties of this event. Any top level property (that are not objects) can be used to create segments. The $extra property is a special property. This records any non-segmentable values that can be references later. For example, HTML templates are useful on a segment, but itself is not used in creating a segment. There are limits placed onto the size of the data present. This must not exceed 5 MB. This must not exceed 300 event properties. A single string cannot be larger than 100 KB. Each array must not exceed 4000 elements. The properties cannot contain more than 10 nested levels. 
 * @member {Object} properties
 */
EventCreateQueryAsSubResourceAttributes.prototype.properties = undefined;

/**
 *  When this event occurred. By default, the time the request was received will be used. The time is truncated to the second. The time must be after the year 2000 and can only be up to 1 year in the future. 
 * @member {Date} time
 */
EventCreateQueryAsSubResourceAttributes.prototype.time = undefined;

/**
 * A numeric value to associate with this event. For example, the dollar amount of a purchase.
 * @member {Number} value
 */
EventCreateQueryAsSubResourceAttributes.prototype.value = undefined;

/**
 *  A unique identifier for an event. If the unique_id is repeated for the same profile and metric, only the first processed event will be recorded. If this is not present, this will use the time to the second. Using the default, this limits only one event per profile per second. 
 * @member {String} uniqueId
 */
EventCreateQueryAsSubResourceAttributes.prototype.uniqueId = undefined;