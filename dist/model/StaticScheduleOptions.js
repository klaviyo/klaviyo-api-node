"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticScheduleOptions = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The StaticScheduleOptions model module.
 * @module model/StaticScheduleOptions
 * @version 2023-02-22
 */
var StaticScheduleOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StaticScheduleOptions</code>.
   * @alias module:model/StaticScheduleOptions
   * @class
   * @param datetime {Date} The time to send at
   */
  function StaticScheduleOptions(datetime) {
    _classCallCheck(this, StaticScheduleOptions);
    this.datetime = datetime;
  }

  /**
   * Constructs a <code>StaticScheduleOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StaticScheduleOptions} obj Optional instance to populate.
   * @return {module:model/StaticScheduleOptions} The populated <code>StaticScheduleOptions</code> instance.
   */
  _createClass(StaticScheduleOptions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StaticScheduleOptions();
        if (data.hasOwnProperty('datetime')) obj.datetime = _ApiClient.ApiClient.convertToType(data['datetime'], 'Date');
        if (data.hasOwnProperty('is_local')) obj.isLocal = _ApiClient.ApiClient.convertToType(data['is_local'], 'Boolean');
        if (data.hasOwnProperty('send_past_recipients_immediately')) obj.sendPastRecipientsImmediately = _ApiClient.ApiClient.convertToType(data['send_past_recipients_immediately'], 'Boolean');
      }
      return obj;
    }
  }]);
  return StaticScheduleOptions;
}();
/**
 * The time to send at
 * @member {Date} datetime
 */
exports.StaticScheduleOptions = StaticScheduleOptions;
StaticScheduleOptions.prototype.datetime = undefined;

/**
 * If the campaign should be sent with local recipient timezone send (requires UTC time) or statically sent at the given time. Defaults to False.
 * @member {Boolean} isLocal
 */
StaticScheduleOptions.prototype.isLocal = undefined;

/**
 * Determines if we should send to local recipient timezone if the given time has passed. Only applicable to local sends. Defaults to False.
 * @member {Boolean} sendPastRecipientsImmediately
 */
StaticScheduleOptions.prototype.sendPastRecipientsImmediately = undefined;