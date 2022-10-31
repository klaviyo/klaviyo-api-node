"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryUpdateQueryAsSubResourceAttributes = require("./CatalogCategoryUpdateQueryAsSubResourceAttributes.js");
var _CatalogVariantCreateQueryAsSubResourceRelationships = require("./CatalogVariantCreateQueryAsSubResourceRelationships.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogCategoryUpdateQueryAsSubResource model module.
 * @module model/CatalogCategoryUpdateQueryAsSubResource
 * @version 2022-10-17
 */
var CatalogCategoryUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryUpdateQueryAsSubResource</code>.
   * @alias module:model/CatalogCategoryUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogCategoryUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/CatalogCategoryUpdateQueryAsSubResourceAttributes} 
   */
  function CatalogCategoryUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, CatalogCategoryUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogCategoryUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryUpdateQueryAsSubResource} The populated <code>CatalogCategoryUpdateQueryAsSubResource</code> instance.
   */
  _createClass(CatalogCategoryUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogCategoryUpdateQueryAsSubResourceAttributes.CatalogCategoryUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('relationships')) obj.relationships = _CatalogVariantCreateQueryAsSubResourceRelationships.CatalogVariantCreateQueryAsSubResourceRelationships.constructFromObject(data['relationships']);
      }
      return obj;
    }
  }]);
  return CatalogCategoryUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CatalogCategoryUpdateQueryAsSubResource = CatalogCategoryUpdateQueryAsSubResource;
CatalogCategoryUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-category"
   * @const
   */
  catalogCategory: "catalog-category"
};
/**
 * @member {module:model/CatalogCategoryUpdateQueryAsSubResource.TypeEnum} type
 */
CatalogCategoryUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
CatalogCategoryUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CatalogCategoryUpdateQueryAsSubResourceAttributes} attributes
 */
CatalogCategoryUpdateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceRelationships} relationships
 */
CatalogCategoryUpdateQueryAsSubResource.prototype.relationships = undefined;