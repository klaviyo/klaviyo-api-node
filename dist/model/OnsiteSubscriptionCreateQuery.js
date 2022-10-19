"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnsiteSubscriptionCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _OnsiteSubscriptionCreateQueryAsSubResource = require("./OnsiteSubscriptionCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OnsiteSubscriptionCreateQuery model module.
 * @module model/OnsiteSubscriptionCreateQuery
 * @version 2022-10-17
 */var OnsiteSubscriptionCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnsiteSubscriptionCreateQuery</code>.
   * @alias module:model/OnsiteSubscriptionCreateQuery
   * @class
   * @param data {module:model/OnsiteSubscriptionCreateQueryAsSubResource} 
   */
  function OnsiteSubscriptionCreateQuery(data) {
    _classCallCheck(this, OnsiteSubscriptionCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>OnsiteSubscriptionCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteSubscriptionCreateQuery} obj Optional instance to populate.
   * @return {module:model/OnsiteSubscriptionCreateQuery} The populated <code>OnsiteSubscriptionCreateQuery</code> instance.
   */
  _createClass(OnsiteSubscriptionCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnsiteSubscriptionCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _OnsiteSubscriptionCreateQueryAsSubResource.OnsiteSubscriptionCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return OnsiteSubscriptionCreateQuery;
}(); /**
      * @member {module:model/OnsiteSubscriptionCreateQueryAsSubResource} data
      */
exports.OnsiteSubscriptionCreateQuery = OnsiteSubscriptionCreateQuery;
OnsiteSubscriptionCreateQuery.prototype.data = undefined;