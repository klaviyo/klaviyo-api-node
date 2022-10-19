"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantUpdateQueryAsSubResourceAttributes = require("./CatalogVariantUpdateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogVariantUpdateQueryAsSubResource model module.
 * @module model/CatalogVariantUpdateQueryAsSubResource
 * @version 2022-10-17
 */var CatalogVariantUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantUpdateQueryAsSubResource</code>.
   * @alias module:model/CatalogVariantUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogVariantUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/CatalogVariantUpdateQueryAsSubResourceAttributes} 
   */
  function CatalogVariantUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, CatalogVariantUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogVariantUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateQueryAsSubResource} The populated <code>CatalogVariantUpdateQueryAsSubResource</code> instance.
   */
  _createClass(CatalogVariantUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogVariantUpdateQueryAsSubResourceAttributes.CatalogVariantUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CatalogVariantUpdateQueryAsSubResource;
}(); /**
      * Allowed values for the <code>type</code> property.
      * @enum {String}
      * @readonly
      */
exports.CatalogVariantUpdateQueryAsSubResource = CatalogVariantUpdateQueryAsSubResource;
CatalogVariantUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-variant"
   * @const
   */
  catalogVariant: "catalog-variant"
};
/**
 * @member {module:model/CatalogVariantUpdateQueryAsSubResource.TypeEnum} type
 */
CatalogVariantUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
CatalogVariantUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CatalogVariantUpdateQueryAsSubResourceAttributes} attributes
 */
CatalogVariantUpdateQueryAsSubResource.prototype.attributes = undefined;