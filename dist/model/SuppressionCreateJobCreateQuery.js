"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuppressionCreateJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _SuppressionCreateJobCreateQueryAsSubResource = require("./SuppressionCreateJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SuppressionCreateJobCreateQuery model module.
 * @module model/SuppressionCreateJobCreateQuery
 * @version 2022-10-17
 */
var SuppressionCreateJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuppressionCreateJobCreateQuery</code>.
   * @alias module:model/SuppressionCreateJobCreateQuery
   * @class
   * @param data {module:model/SuppressionCreateJobCreateQueryAsSubResource} 
   */
  function SuppressionCreateJobCreateQuery(data) {
    _classCallCheck(this, SuppressionCreateJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>SuppressionCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuppressionCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/SuppressionCreateJobCreateQuery} The populated <code>SuppressionCreateJobCreateQuery</code> instance.
   */
  _createClass(SuppressionCreateJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuppressionCreateJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _SuppressionCreateJobCreateQueryAsSubResource.SuppressionCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return SuppressionCreateJobCreateQuery;
}();
/**
 * @member {module:model/SuppressionCreateJobCreateQueryAsSubResource} data
 */
exports.SuppressionCreateJobCreateQuery = SuppressionCreateJobCreateQuery;
SuppressionCreateJobCreateQuery.prototype.data = undefined;