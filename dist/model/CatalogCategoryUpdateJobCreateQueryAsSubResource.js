"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryUpdateJobCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes = require("./CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogCategoryUpdateJobCreateQueryAsSubResource model module.
 * @module model/CatalogCategoryUpdateJobCreateQueryAsSubResource
 * @version 2022-10-17
 */var CatalogCategoryUpdateJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryUpdateJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogCategoryUpdateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogCategoryUpdateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes} 
   */
  function CatalogCategoryUpdateJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CatalogCategoryUpdateJobCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogCategoryUpdateJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryUpdateJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryUpdateJobCreateQueryAsSubResource} The populated <code>CatalogCategoryUpdateJobCreateQueryAsSubResource</code> instance.
   */
  _createClass(CatalogCategoryUpdateJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryUpdateJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes.CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CatalogCategoryUpdateJobCreateQueryAsSubResource;
}(); /**
      * Allowed values for the <code>type</code> property.
      * @enum {String}
      * @readonly
      */
exports.CatalogCategoryUpdateJobCreateQueryAsSubResource = CatalogCategoryUpdateJobCreateQueryAsSubResource;
CatalogCategoryUpdateJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-category-bulk-update-job"
   * @const
   */
  catalogCategoryBulkUpdateJob: "catalog-category-bulk-update-job"
};
/**
 * @member {module:model/CatalogCategoryUpdateJobCreateQueryAsSubResource.TypeEnum} type
 */
CatalogCategoryUpdateJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogCategoryUpdateJobCreateQueryAsSubResourceAttributes} attributes
 */
CatalogCategoryUpdateJobCreateQueryAsSubResource.prototype.attributes = undefined;