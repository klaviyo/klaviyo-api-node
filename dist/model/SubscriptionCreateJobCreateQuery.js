"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionCreateJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _SubscriptionCreateJobCreateQueryAsSubResource = require("./SubscriptionCreateJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SubscriptionCreateJobCreateQuery model module.
 * @module model/SubscriptionCreateJobCreateQuery
 * @version 2022-10-17
 */var SubscriptionCreateJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubscriptionCreateJobCreateQuery</code>.
   * @alias module:model/SubscriptionCreateJobCreateQuery
   * @class
   * @param data {module:model/SubscriptionCreateJobCreateQueryAsSubResource} 
   */
  function SubscriptionCreateJobCreateQuery(data) {
    _classCallCheck(this, SubscriptionCreateJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>SubscriptionCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/SubscriptionCreateJobCreateQuery} The populated <code>SubscriptionCreateJobCreateQuery</code> instance.
   */
  _createClass(SubscriptionCreateJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubscriptionCreateJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _SubscriptionCreateJobCreateQueryAsSubResource.SubscriptionCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return SubscriptionCreateJobCreateQuery;
}(); /**
      * @member {module:model/SubscriptionCreateJobCreateQueryAsSubResource} data
      */
exports.SubscriptionCreateJobCreateQuery = SubscriptionCreateJobCreateQuery;
SubscriptionCreateJobCreateQuery.prototype.data = undefined;