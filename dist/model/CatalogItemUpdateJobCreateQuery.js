"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemUpdateJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemUpdateJobCreateQueryAsSubResource = require("./CatalogItemUpdateJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemUpdateJobCreateQuery model module.
 * @module model/CatalogItemUpdateJobCreateQuery
 * @version 2022-10-17
 */var CatalogItemUpdateJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemUpdateJobCreateQuery</code>.
   * @alias module:model/CatalogItemUpdateJobCreateQuery
   * @class
   * @param data {module:model/CatalogItemUpdateJobCreateQueryAsSubResource} 
   */
  function CatalogItemUpdateJobCreateQuery(data) {
    _classCallCheck(this, CatalogItemUpdateJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemUpdateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateJobCreateQuery} The populated <code>CatalogItemUpdateJobCreateQuery</code> instance.
   */
  _createClass(CatalogItemUpdateJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemUpdateJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogItemUpdateJobCreateQueryAsSubResource.CatalogItemUpdateJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogItemUpdateJobCreateQuery;
}(); /**
      * @member {module:model/CatalogItemUpdateJobCreateQueryAsSubResource} data
      */
exports.CatalogItemUpdateJobCreateQuery = CatalogItemUpdateJobCreateQuery;
CatalogItemUpdateJobCreateQuery.prototype.data = undefined;