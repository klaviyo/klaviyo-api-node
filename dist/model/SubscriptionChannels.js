"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionChannels = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SubscriptionChannels model module.
 * @module model/SubscriptionChannels
 * @version 2023-02-22
 */
var SubscriptionChannels = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubscriptionChannels</code>.
   * @alias module:model/SubscriptionChannels
   * @class
   */
  function SubscriptionChannels() {
    _classCallCheck(this, SubscriptionChannels);
  }

  /**
   * Constructs a <code>SubscriptionChannels</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionChannels} obj Optional instance to populate.
   * @return {module:model/SubscriptionChannels} The populated <code>SubscriptionChannels</code> instance.
   */
  _createClass(SubscriptionChannels, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubscriptionChannels();
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], ['String']);
        if (data.hasOwnProperty('sms')) obj.sms = _ApiClient.ApiClient.convertToType(data['sms'], ['String']);
      }
      return obj;
    }
  }]);
  return SubscriptionChannels;
}();
/**
 * Allowed values for the <code>email</code> property.
 * @enum {String}
 * @readonly
 */
exports.SubscriptionChannels = SubscriptionChannels;
SubscriptionChannels.EmailEnum = {
  /**
   * value: "MARKETING"
   * @const
   */
  MARKETING: "MARKETING"
};
/**
 * The communication types to subscribe to on the \"EMAIL\" Channel. Currently supports \"MARKETING\".
 * @member {Array.<module:model/SubscriptionChannels.EmailEnum>} email
 */
SubscriptionChannels.prototype.email = undefined;

/**
 * Allowed values for the <code>sms</code> property.
 * @enum {String}
 * @readonly
 */
SubscriptionChannels.SmsEnum = {
  /**
   * value: "MARKETING"
   * @const
   */
  MARKETING: "MARKETING"
};
/**
 * The communication types to subscribe to on the \"SMS\" Channel. Currently supports \"MARKETING\".
 * @member {Array.<module:model/SubscriptionChannels.SmsEnum>} sms
 */
SubscriptionChannels.prototype.sms = undefined;