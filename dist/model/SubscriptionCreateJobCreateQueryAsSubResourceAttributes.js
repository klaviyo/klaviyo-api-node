"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionCreateJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _Subscription = require("./Subscription.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SubscriptionCreateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes
 * @version 2023-02-22
 */
var SubscriptionCreateJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubscriptionCreateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/SubscriptionCreateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param listId {String} The list to add the newly subscribed profiles to
   * @param subscriptions {Array.<module:model/Subscription>} One or more subscriptions to be created.
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
}();
/**
 * The list to add the newly subscribed profiles to
 * @member {String} listId
 */
exports.SubscriptionCreateJobCreateQueryAsSubResourceAttributes = SubscriptionCreateJobCreateQueryAsSubResourceAttributes;
SubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.listId = undefined;

/**
 * A custom method detail or source to store on the consent records.
 * @member {String} customSource
 */
SubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.customSource = undefined;

/**
 * One or more subscriptions to be created.
 * @member {Array.<module:model/Subscription>} subscriptions
 */
SubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.subscriptions = undefined;