"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantCreateJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantCreateQueryAsSubResource = require("./CatalogVariantCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogVariantCreateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */var CatalogVariantCreateJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantCreateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param variants {Array.<module:model/CatalogVariantCreateQueryAsSubResource>} 
   */
  function CatalogVariantCreateJobCreateQueryAsSubResourceAttributes(variants) {
    _classCallCheck(this, CatalogVariantCreateJobCreateQueryAsSubResourceAttributes);
    this.variants = variants;
  }

  /**
   * Constructs a <code>CatalogVariantCreateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogVariantCreateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogVariantCreateJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantCreateJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('variants')) obj.variants = _ApiClient.ApiClient.convertToType(data['variants'], [_CatalogVariantCreateQueryAsSubResource.CatalogVariantCreateQueryAsSubResource]);
      }
      return obj;
    }
  }]);
  return CatalogVariantCreateJobCreateQueryAsSubResourceAttributes;
}(); /**
      * @member {Array.<module:model/CatalogVariantCreateQueryAsSubResource>} variants
      */
exports.CatalogVariantCreateJobCreateQueryAsSubResourceAttributes = CatalogVariantCreateJobCreateQueryAsSubResourceAttributes;
CatalogVariantCreateJobCreateQueryAsSubResourceAttributes.prototype.variants = undefined;