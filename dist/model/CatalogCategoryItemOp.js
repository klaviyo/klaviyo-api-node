"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryItemOp = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantCreateQueryAsSubResourceRelationshipsItemsData = require("./CatalogVariantCreateQueryAsSubResourceRelationshipsItemsData.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogCategoryItemOp model module.
 * @module model/CatalogCategoryItemOp
 * @version 2022-10-17
 */var CatalogCategoryItemOp = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryItemOp</code>.
   * @alias module:model/CatalogCategoryItemOp
   * @class
   * @param data {Array.<module:model/CatalogVariantCreateQueryAsSubResourceRelationshipsItemsData>} 
   */
  function CatalogCategoryItemOp(data) {
    _classCallCheck(this, CatalogCategoryItemOp);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryItemOp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryItemOp} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryItemOp} The populated <code>CatalogCategoryItemOp</code> instance.
   */
  _createClass(CatalogCategoryItemOp, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryItemOp();
        if (data.hasOwnProperty('data')) obj.data = _ApiClient.ApiClient.convertToType(data['data'], [_CatalogVariantCreateQueryAsSubResourceRelationshipsItemsData.CatalogVariantCreateQueryAsSubResourceRelationshipsItemsData]);
      }
      return obj;
    }
  }]);
  return CatalogCategoryItemOp;
}(); /**
      * @member {Array.<module:model/CatalogVariantCreateQueryAsSubResourceRelationshipsItemsData>} data
      */
exports.CatalogCategoryItemOp = CatalogCategoryItemOp;
CatalogCategoryItemOp.prototype.data = undefined;