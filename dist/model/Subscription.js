"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = void 0;
var _ApiClient = require("../ApiClient.js");
var _SubscriptionChannels = require("./SubscriptionChannels.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The Subscription model module.
 * @module model/Subscription
 * @version 2023-02-22
 */
var Subscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Subscription</code>.
   * @alias module:model/Subscription
   * @class
   */
  function Subscription() {
    _classCallCheck(this, Subscription);
  }

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  _createClass(Subscription, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Subscription();
        if (data.hasOwnProperty('channels')) obj.channels = _SubscriptionChannels.SubscriptionChannels.constructFromObject(data['channels']);
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
        if (data.hasOwnProperty('profile_id')) obj.profileId = _ApiClient.ApiClient.convertToType(data['profile_id'], 'String');
      }
      return obj;
    }
  }]);
  return Subscription;
}();
/**
 * @member {module:model/SubscriptionChannels} channels
 */
exports.Subscription = Subscription;
Subscription.prototype.channels = undefined;

/**
 * The email address to subscribe or to set on the profile if `channels` is specified and the email channel is omitted.
 * @member {String} email
 */
Subscription.prototype.email = undefined;

/**
 * The phone number to subscribe or to set on the profile if `channels` is specified and the SMS channel is omitted.
 * @member {String} phoneNumber
 */
Subscription.prototype.phoneNumber = undefined;

/**
 * The ID of the profile to subscribe. If provided, this will be used to perform the lookup.
 * @member {String} profileId
 */
Subscription.prototype.profileId = undefined;