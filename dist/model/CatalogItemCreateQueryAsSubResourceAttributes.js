"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogItemCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogItemCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
var CatalogItemCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogItemCreateQueryAsSubResourceAttributes
   * @class
   * @param externalId {String} 
   * @param title {String} 
   * @param description {String} 
   * @param url {String} 
   */
  function CatalogItemCreateQueryAsSubResourceAttributes(externalId, title, description, url) {
    _classCallCheck(this, CatalogItemCreateQueryAsSubResourceAttributes);
    this.externalId = externalId;
    this.title = title;
    this.description = description;
    this.url = url;
  }

  /**
   * Constructs a <code>CatalogItemCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQueryAsSubResourceAttributes} The populated <code>CatalogItemCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogItemCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('integration_type')) obj.integrationType = _ApiClient.ApiClient.convertToType(data['integration_type'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('catalog_type')) obj.catalogType = _ApiClient.ApiClient.convertToType(data['catalog_type'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('url')) obj.url = _ApiClient.ApiClient.convertToType(data['url'], 'String');
        if (data.hasOwnProperty('image_full_url')) obj.imageFullUrl = _ApiClient.ApiClient.convertToType(data['image_full_url'], 'String');
        if (data.hasOwnProperty('image_thumbnail_url')) obj.imageThumbnailUrl = _ApiClient.ApiClient.convertToType(data['image_thumbnail_url'], 'String');
        if (data.hasOwnProperty('images')) obj.images = _ApiClient.ApiClient.convertToType(data['images'], ['String']);
        if (data.hasOwnProperty('custom_metadata')) obj.customMetadata = _ApiClient.ApiClient.convertToType(data['custom_metadata'], Object);
        if (data.hasOwnProperty('published')) obj.published = _ApiClient.ApiClient.convertToType(data['published'], 'Boolean');
      }
      return obj;
    }
  }]);
  return CatalogItemCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} externalId
 */
exports.CatalogItemCreateQueryAsSubResourceAttributes = CatalogItemCreateQueryAsSubResourceAttributes;
CatalogItemCreateQueryAsSubResourceAttributes.prototype.externalId = undefined;

/**
 * Allowed values for the <code>integrationType</code> property.
 * @enum {String}
 * @readonly
 */
CatalogItemCreateQueryAsSubResourceAttributes.IntegrationTypeEnum = {
  /**
   * value: "$custom"
   * @const
   */
  custom: "$custom"
};
/**
 * The integration type. Currently, this can only be set to $custom (and defaults to $custom if not included in the payload).
 * @member {module:model/CatalogItemCreateQueryAsSubResourceAttributes.IntegrationTypeEnum} integrationType
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.integrationType = undefined;

/**
 * @member {String} title
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.title = undefined;

/**
 * @member {String} catalogType
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.catalogType = undefined;

/**
 * @member {String} description
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.description = undefined;

/**
 * @member {String} url
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.url = undefined;

/**
 * @member {String} imageFullUrl
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.imageFullUrl = undefined;

/**
 * @member {String} imageThumbnailUrl
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.imageThumbnailUrl = undefined;

/**
 * @member {Array.<String>} images
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.images = undefined;

/**
 * @member {Object} customMetadata
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.customMetadata = undefined;

/**
 * @member {Boolean} published
 */
CatalogItemCreateQueryAsSubResourceAttributes.prototype.published = undefined;