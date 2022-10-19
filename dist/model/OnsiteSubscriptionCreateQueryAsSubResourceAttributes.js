"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnsiteSubscriptionCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OnsiteSubscriptionCreateQueryAsSubResourceAttributes model module.
 * @module model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */var OnsiteSubscriptionCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnsiteSubscriptionCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes
   * @class
   * @param listId {String} 
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
}(); /**
      * @member {String} listId
      */
exports.OnsiteSubscriptionCreateQueryAsSubResourceAttributes = OnsiteSubscriptionCreateQueryAsSubResourceAttributes;
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.listId = undefined;

/**
 * @member {String} customSource
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.customSource = undefined;

/**
 * @member {String} email
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.email = undefined;

/**
 * @member {String} phoneNumber
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.phoneNumber = undefined;

/**
 * @member {Object} properties
 */
OnsiteSubscriptionCreateQueryAsSubResourceAttributes.prototype.properties = undefined;