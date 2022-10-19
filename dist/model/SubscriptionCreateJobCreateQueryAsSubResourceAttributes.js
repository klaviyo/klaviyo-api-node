"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionCreateJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _Subscription = require("./Subscription.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SubscriptionCreateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */var SubscriptionCreateJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubscriptionCreateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param listId {String} 
   * @param subscriptions {Array.<module:model/Subscription>} 
   */
  function SubscriptionCreateJobCreateQueryAsSubResourceAttributes(listId, subscriptions) {
    _classCallCheck(this, SubscriptionCreateJobCreateQueryAsSubResourceAttributes);
    this.listId = listId;
    this.subscriptions = subscriptions;
  }

  /**
   * Constructs a <code>SubscriptionCreateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes} The populated <code>SubscriptionCreateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(SubscriptionCreateJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubscriptionCreateJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('list_id')) obj.listId = _ApiClient.ApiClient.convertToType(data['list_id'], 'String');
        if (data.hasOwnProperty('custom_source')) obj.customSource = _ApiClient.ApiClient.convertToType(data['custom_source'], 'String');
        if (data.hasOwnProperty('subscriptions')) obj.subscriptions = _ApiClient.ApiClient.convertToType(data['subscriptions'], [_Subscription.Subscription]);
      }
      return obj;
    }
  }]);
  return SubscriptionCreateJobCreateQueryAsSubResourceAttributes;
}(); /**
      * @member {String} listId
      */
exports.SubscriptionCreateJobCreateQueryAsSubResourceAttributes = SubscriptionCreateJobCreateQueryAsSubResourceAttributes;
SubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.listId = undefined;

/**
 * @member {String} customSource
 */
SubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.customSource = undefined;

/**
 * @member {Array.<module:model/Subscription>} subscriptions
 */
SubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.subscriptions = undefined;