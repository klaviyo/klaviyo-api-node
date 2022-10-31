"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsuppressionCreateJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _UnsuppressionCreateJobCreateQueryAsSubResource = require("./UnsuppressionCreateJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The UnsuppressionCreateJobCreateQuery model module.
 * @module model/UnsuppressionCreateJobCreateQuery
 * @version 2022-10-17
 */
var UnsuppressionCreateJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnsuppressionCreateJobCreateQuery</code>.
   * @alias module:model/UnsuppressionCreateJobCreateQuery
   * @class
   * @param data {module:model/UnsuppressionCreateJobCreateQueryAsSubResource} 
   */
  function UnsuppressionCreateJobCreateQuery(data) {
    _classCallCheck(this, UnsuppressionCreateJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>UnsuppressionCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsuppressionCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/UnsuppressionCreateJobCreateQuery} The populated <code>UnsuppressionCreateJobCreateQuery</code> instance.
   */
  _createClass(UnsuppressionCreateJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnsuppressionCreateJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _UnsuppressionCreateJobCreateQueryAsSubResource.UnsuppressionCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return UnsuppressionCreateJobCreateQuery;
}();
/**
 * @member {module:model/UnsuppressionCreateJobCreateQueryAsSubResource} data
 */
exports.UnsuppressionCreateJobCreateQuery = UnsuppressionCreateJobCreateQuery;
UnsuppressionCreateJobCreateQuery.prototype.data = undefined;