"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendStrategySubObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _STOScheduleOptions = require("./STOScheduleOptions.js");
var _StaticScheduleOptions = require("./StaticScheduleOptions.js");
var _ThrottledScheduleOptions = require("./ThrottledScheduleOptions.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SendStrategySubObject model module.
 * @module model/SendStrategySubObject
 * @version 2023-02-22
 */
var SendStrategySubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendStrategySubObject</code>.
   * @alias module:model/SendStrategySubObject
   * @class
   * @param method {String} Describes the shape of the options object. Allowed values: ['static', 'throttled', 'immediate', 'smart_send_time']
   */
  function SendStrategySubObject(method) {
    _classCallCheck(this, SendStrategySubObject);
    this.method = method;
  }

  /**
   * Constructs a <code>SendStrategySubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendStrategySubObject} obj Optional instance to populate.
   * @return {module:model/SendStrategySubObject} The populated <code>SendStrategySubObject</code> instance.
   */
  _createClass(SendStrategySubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendStrategySubObject();
        if (data.hasOwnProperty('method')) obj.method = _ApiClient.ApiClient.convertToType(data['method'], 'String');
        if (data.hasOwnProperty('options_static')) obj.optionsStatic = _StaticScheduleOptions.StaticScheduleOptions.constructFromObject(data['options_static']);
        if (data.hasOwnProperty('options_throttled')) obj.optionsThrottled = _ThrottledScheduleOptions.ThrottledScheduleOptions.constructFromObject(data['options_throttled']);
        if (data.hasOwnProperty('options_sto')) obj.optionsSto = _STOScheduleOptions.STOScheduleOptions.constructFromObject(data['options_sto']);
      }
      return obj;
    }
  }]);
  return SendStrategySubObject;
}();
/**
 * Describes the shape of the options object. Allowed values: ['static', 'throttled', 'immediate', 'smart_send_time']
 * @member {String} method
 */
exports.SendStrategySubObject = SendStrategySubObject;
SendStrategySubObject.prototype.method = undefined;

/**
 * @member {module:model/StaticScheduleOptions} optionsStatic
 */
SendStrategySubObject.prototype.optionsStatic = undefined;

/**
 * @member {module:model/ThrottledScheduleOptions} optionsThrottled
 */
SendStrategySubObject.prototype.optionsThrottled = undefined;

/**
 * @member {module:model/STOScheduleOptions} optionsSto
 */
SendStrategySubObject.prototype.optionsSto = undefined;