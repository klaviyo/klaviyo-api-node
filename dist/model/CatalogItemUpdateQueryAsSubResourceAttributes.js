"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemUpdateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogItemUpdateQueryAsSubResourceAttributes model module.
 * @module model/CatalogItemUpdateQueryAsSubResourceAttributes
 * @version 2023-02-22
 */
var CatalogItemUpdateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogItemUpdateQueryAsSubResourceAttributes
   * @class
   */
  function CatalogItemUpdateQueryAsSubResourceAttributes() {
    _classCallCheck(this, CatalogItemUpdateQueryAsSubResourceAttributes);
  }

  /**
   * Constructs a <code>CatalogItemUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateQueryAsSubResourceAttributes} The populated <code>CatalogItemUpdateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogItemUpdateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemUpdateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('price')) obj.price = _ApiClient.ApiClient.convertToType(data['price'], 'Number');
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
  return CatalogItemUpdateQueryAsSubResourceAttributes;
}();
/**
 * The title of the catalog item.
 * @member {String} title
 */
exports.CatalogItemUpdateQueryAsSubResourceAttributes = CatalogItemUpdateQueryAsSubResourceAttributes;
CatalogItemUpdateQueryAsSubResourceAttributes.prototype.title = undefined;

/**
 * This field can be used to set the price on the catalog item, which is what gets displayed for the item when included in emails. For most price-update use cases, you will also want to update the `price` on any child variants, using the [Update Catalog Variant Endpoint](https://developers.klaviyo.com/en/reference/update_catalog_variant).
 * @member {Number} price
 */
CatalogItemUpdateQueryAsSubResourceAttributes.prototype.price = undefined;

/**
 * A description of the catalog item.
 * @member {String} description
 */
CatalogItemUpdateQueryAsSubResourceAttributes.prototype.description = undefined;

/**
 * URL pointing to the location of the catalog item on your website.
 * @member {String} url
 */
CatalogItemUpdateQueryAsSubResourceAttributes.prototype.url = undefined;

/**
 * URL pointing to the location of a full image of the catalog item.
 * @member {String} imageFullUrl
 */
CatalogItemUpdateQueryAsSubResourceAttributes.prototype.imageFullUrl = undefined;

/**
 * URL pointing to the location of an image thumbnail of the catalog item
 * @member {String} imageThumbnailUrl
 */
CatalogItemUpdateQueryAsSubResourceAttributes.prototype.imageThumbnailUrl = undefined;

/**
 * List of URLs pointing to the locations of images of the catalog item.
 * @member {Array.<String>} images
 */
CatalogItemUpdateQueryAsSubResourceAttributes.prototype.images = undefined;

/**
 * Flat JSON blob to provide custom metadata about the catalog item. May not exceed 100kb.
 * @member {Object} customMetadata
 */
CatalogItemUpdateQueryAsSubResourceAttributes.prototype.customMetadata = undefined;

/**
 * Boolean value indicating whether the catalog item is published.
 * @member {Boolean} published
 */
CatalogItemUpdateQueryAsSubResourceAttributes.prototype.published = undefined;