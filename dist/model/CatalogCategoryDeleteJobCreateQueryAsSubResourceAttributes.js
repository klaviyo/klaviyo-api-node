"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryDeleteQueryAsSubResource = require("./CatalogCategoryDeleteQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
var CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes
   * @class
   * @param categories {Array.<module:model/CatalogCategoryDeleteQueryAsSubResource>} 
   */
  function CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes(categories) {
    _classCallCheck(this, CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes);
    this.categories = categories;
  }

  /**
   * Constructs a <code>CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('categories')) obj.categories = _ApiClient.ApiClient.convertToType(data['categories'], [_CatalogCategoryDeleteQueryAsSubResource.CatalogCategoryDeleteQueryAsSubResource]);
      }
      return obj;
    }
  }]);
  return CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {Array.<module:model/CatalogCategoryDeleteQueryAsSubResource>} categories
 */
exports.CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes = CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes;
CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes.prototype.categories = undefined;