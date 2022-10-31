"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantDeleteJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantDeleteJobCreateQueryAsSubResource = require("./CatalogVariantDeleteJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogVariantDeleteJobCreateQuery model module.
 * @module model/CatalogVariantDeleteJobCreateQuery
 * @version 2022-10-17
 */
var CatalogVariantDeleteJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantDeleteJobCreateQuery</code>.
   * @alias module:model/CatalogVariantDeleteJobCreateQuery
   * @class
   * @param data {module:model/CatalogVariantDeleteJobCreateQueryAsSubResource} 
   */
  function CatalogVariantDeleteJobCreateQuery(data) {
    _classCallCheck(this, CatalogVariantDeleteJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantDeleteJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantDeleteJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogVariantDeleteJobCreateQuery} The populated <code>CatalogVariantDeleteJobCreateQuery</code> instance.
   */
  _createClass(CatalogVariantDeleteJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantDeleteJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogVariantDeleteJobCreateQueryAsSubResource.CatalogVariantDeleteJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogVariantDeleteJobCreateQuery;
}();
/**
 * @member {module:model/CatalogVariantDeleteJobCreateQueryAsSubResource} data
 */
exports.CatalogVariantDeleteJobCreateQuery = CatalogVariantDeleteJobCreateQuery;
CatalogVariantDeleteJobCreateQuery.prototype.data = undefined;