"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnsiteSubscriptionCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The OnsiteSubscriptionCreateQueryAsSubResourceAttributes model module.
 * @module model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes
 * @version 2023-02-22
 */
var OnsiteSubscriptionCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnsiteSubscriptionCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes
   * @class
   * @param listId {String} The list ID to add the newly subscribed profile to.
   */
  function OnsiteSubscriptionCreateQueryAsSubResourceAttributes(listId) {
    _classCallCheck(this, OnsiteSubscriptionCreateQueryAsSubResourceAttributes);
    this.listId = listId;
  }

  /**
   * Constructs a <code>OnsiteSubscriptionCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes} The populated <code>OnsiteSubscriptionCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(OnsiteSubscriptionCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnsiteSubscriptionCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('list_id')) obj.listId = _ApiClient.ApiClient.convertToType(data['list_id'], 'String');
        if (data.hasOwnProperty('custom_source')) obj.customSource = _ApiClient.ApiClient.convertToType(data['custom_source'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
        if (data.hasOwnProperty('properties')) obj.properties = _ApiClient.ApiClient.convertToType(data['properties'], Object);
      }
      return obj;
    }
  }]);
  return OnsiteSubscriptionCreateQueryAsSubResourceAttributes;
}();
/**
 * The list ID to add the newly subscribed profile to.
 * @member {String} listId
 */
exports.OnsiteSubscriptionCreateQueryAsSubResourceAttributes = OnsiteSubscriptionCreateQueryAsSubResourceAttributes;
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.listId = undefined;

/**
 * A custom method detail or source to store on the consent records for this subscription.
 * @member {String} customSource
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.customSource = undefined;

/**
 * Email address to create subscription and email consent record for.
 * @member {String} email
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.email = undefined;

/**
 * Phone number to create subscription and SMS consent record for, in E.164 format.
 * @member {String} phoneNumber
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.phoneNumber = undefined;

/**
 * Profile properties to set on the newly subscribed profile.
 * @member {Object} properties
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.properties = undefined;