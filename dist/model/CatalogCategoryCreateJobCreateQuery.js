"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryCreateJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryCreateJobCreateQueryAsSubResource = require("./CatalogCategoryCreateJobCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogCategoryCreateJobCreateQuery model module.
 * @module model/CatalogCategoryCreateJobCreateQuery
 * @version 2022-10-17
 */
var CatalogCategoryCreateJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryCreateJobCreateQuery</code>.
   * @alias module:model/CatalogCategoryCreateJobCreateQuery
   * @class
   * @param data {module:model/CatalogCategoryCreateJobCreateQueryAsSubResource} 
   */
  function CatalogCategoryCreateJobCreateQuery(data) {
    _classCallCheck(this, CatalogCategoryCreateJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateJobCreateQuery} The populated <code>CatalogCategoryCreateJobCreateQuery</code> instance.
   */
  _createClass(CatalogCategoryCreateJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryCreateJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogCategoryCreateJobCreateQueryAsSubResource.CatalogCategoryCreateJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogCategoryCreateJobCreateQuery;
}();
/**
 * @member {module:model/CatalogCategoryCreateJobCreateQueryAsSubResource} data
 */
exports.CatalogCategoryCreateJobCreateQuery = CatalogCategoryCreateJobCreateQuery;
CatalogCategoryCreateJobCreateQuery.prototype.data = undefined;