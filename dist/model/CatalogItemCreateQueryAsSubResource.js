"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemCreateQueryAsSubResourceAttributes = require("./CatalogItemCreateQueryAsSubResourceAttributes.js");
var _CatalogItemCreateQueryAsSubResourceRelationships = require("./CatalogItemCreateQueryAsSubResourceRelationships.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemCreateQueryAsSubResource model module.
 * @module model/CatalogItemCreateQueryAsSubResource
 * @version 2022-10-17
 */var CatalogItemCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogItemCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogItemCreateQueryAsSubResourceAttributes} 
   */
  function CatalogItemCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CatalogItemCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogItemCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQueryAsSubResource} The populated <code>CatalogItemCreateQueryAsSubResource</code> instance.
   */
  _createClass(CatalogItemCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogItemCreateQueryAsSubResourceAttributes.CatalogItemCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('relationships')) obj.relationships = _CatalogItemCreateQueryAsSubResourceRelationships.CatalogItemCreateQueryAsSubResourceRelationships.constructFromObject(data['relationships']);
      }
      return obj;
    }
  }]);
  return CatalogItemCreateQueryAsSubResource;
}(); /**
      * Allowed values for the <code>type</code> property.
      * @enum {String}
      * @readonly
      */
exports.CatalogItemCreateQueryAsSubResource = CatalogItemCreateQueryAsSubResource;
CatalogItemCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item"
   * @const
   */
  catalogItem: "catalog-item"
};
/**
 * @member {module:model/CatalogItemCreateQueryAsSubResource.TypeEnum} type
 */
CatalogItemCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogItemCreateQueryAsSubResourceAttributes} attributes
 */
CatalogItemCreateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogItemCreateQueryAsSubResourceRelationships} relationships
 */
CatalogItemCreateQueryAsSubResource.prototype.relationships = undefined;