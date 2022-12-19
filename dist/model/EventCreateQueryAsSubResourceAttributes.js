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
 * @version 2022-10-17
 */
var EventCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/EventCreateQueryAsSubResourceAttributes
   * @class
   * @param profile {Object} 
   * @param metric {module:model/MetricCreateQuery} 
   * @param properties {Object} 
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
 * @member {Object} profile
 */
exports.EventCreateQueryAsSubResourceAttributes = EventCreateQueryAsSubResourceAttributes;
EventCreateQueryAsSubResourceAttributes.prototype.profile = undefined;

/**
 * @member {module:model/MetricCreateQuery} metric
 */
EventCreateQueryAsSubResourceAttributes.prototype.metric = undefined;

/**
 * @member {Object} properties
 */
EventCreateQueryAsSubResourceAttributes.prototype.properties = undefined;

/**
 * @member {Date} time
 */
EventCreateQueryAsSubResourceAttributes.prototype.time = undefined;

/**
 * @member {Number} value
 */
EventCreateQueryAsSubResourceAttributes.prototype.value = undefined;

/**
 * @member {String} uniqueId
 */
EventCreateQueryAsSubResourceAttributes.prototype.uniqueId = undefined;