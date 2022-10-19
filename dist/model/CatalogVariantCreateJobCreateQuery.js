"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantCreateJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantCreateJobCreateQueryAsSubResource = require("./CatalogVariantCreateJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogVariantCreateJobCreateQuery model module.
 * @module model/CatalogVariantCreateJobCreateQuery
 * @version 2022-10-17
 */var CatalogVariantCreateJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantCreateJobCreateQuery</code>.
   * @alias module:model/CatalogVariantCreateJobCreateQuery
   * @class
   * @param data {module:model/CatalogVariantCreateJobCreateQueryAsSubResource} 
   */
  function CatalogVariantCreateJobCreateQuery(data) {
    _classCallCheck(this, CatalogVariantCreateJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateJobCreateQuery} The populated <code>CatalogVariantCreateJobCreateQuery</code> instance.
   */
  _createClass(CatalogVariantCreateJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantCreateJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogVariantCreateJobCreateQueryAsSubResource.CatalogVariantCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogVariantCreateJobCreateQuery;
}(); /**
      * @member {module:model/CatalogVariantCreateJobCreateQueryAsSubResource} data
      */
exports.CatalogVariantCreateJobCreateQuery = CatalogVariantCreateJobCreateQuery;
CatalogVariantCreateJobCreateQuery.prototype.data = undefined;