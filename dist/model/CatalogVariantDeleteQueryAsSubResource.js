"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantDeleteQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogVariantDeleteQueryAsSubResource model module.
 * @module model/CatalogVariantDeleteQueryAsSubResource
 * @version 2022-10-17
 */
var CatalogVariantDeleteQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantDeleteQueryAsSubResource</code>.
   * @alias module:model/CatalogVariantDeleteQueryAsSubResource
   * @class
   * @param type {module:model/CatalogVariantDeleteQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   */
  function CatalogVariantDeleteQueryAsSubResource(type, id) {
    _classCallCheck(this, CatalogVariantDeleteQueryAsSubResource);
    this.type = type;
    this.id = id;
  }

  /**
   * Constructs a <code>CatalogVariantDeleteQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantDeleteQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogVariantDeleteQueryAsSubResource} The populated <code>CatalogVariantDeleteQueryAsSubResource</code> instance.
   */
  _createClass(CatalogVariantDeleteQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantDeleteQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
      }
      return obj;
    }
  }]);
  return CatalogVariantDeleteQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CatalogVariantDeleteQueryAsSubResource = CatalogVariantDeleteQueryAsSubResource;
CatalogVariantDeleteQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-variant"
   * @const
   */
  catalogVariant: "catalog-variant"
};
/**
 * @member {module:model/CatalogVariantDeleteQueryAsSubResource.TypeEnum} type
 */
CatalogVariantDeleteQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
CatalogVariantDeleteQueryAsSubResource.prototype.id = undefined;