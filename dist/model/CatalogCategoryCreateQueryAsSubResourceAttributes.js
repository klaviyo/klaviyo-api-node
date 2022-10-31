"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogCategoryCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogCategoryCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
var CatalogCategoryCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogCategoryCreateQueryAsSubResourceAttributes
   * @class
   * @param externalId {String} 
   * @param name {String} 
   */
  function CatalogCategoryCreateQueryAsSubResourceAttributes(externalId, name) {
    _classCallCheck(this, CatalogCategoryCreateQueryAsSubResourceAttributes);
    this.externalId = externalId;
    this.name = name;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateQueryAsSubResourceAttributes} The populated <code>CatalogCategoryCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogCategoryCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('integration_type')) obj.integrationType = _ApiClient.ApiClient.convertToType(data['integration_type'], 'String');
        if (data.hasOwnProperty('catalog_type')) obj.catalogType = _ApiClient.ApiClient.convertToType(data['catalog_type'], 'String');
      }
      return obj;
    }
  }]);
  return CatalogCategoryCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} externalId
 */
exports.CatalogCategoryCreateQueryAsSubResourceAttributes = CatalogCategoryCreateQueryAsSubResourceAttributes;
CatalogCategoryCreateQueryAsSubResourceAttributes.prototype.externalId = undefined;

/**
 * @member {String} name
 */
CatalogCategoryCreateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * Allowed values for the <code>integrationType</code> property.
 * @enum {String}
 * @readonly
 */
CatalogCategoryCreateQueryAsSubResourceAttributes.IntegrationTypeEnum = {
  /**
   * value: "$custom"
   * @const
   */
  custom: "$custom"
};
/**
 * The integration type. Currently, this can only be set to $custom (and defaults to $custom if not included in the payload).
 * @member {module:model/CatalogCategoryCreateQueryAsSubResourceAttributes.IntegrationTypeEnum} integrationType
 */
CatalogCategoryCreateQueryAsSubResourceAttributes.prototype.integrationType = undefined;

/**
 * @member {String} catalogType
 */
CatalogCategoryCreateQueryAsSubResourceAttributes.prototype.catalogType = undefined;