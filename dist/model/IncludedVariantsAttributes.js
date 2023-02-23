"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedVariantsAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The IncludedVariantsAttributes model module.
 * @module model/IncludedVariantsAttributes
 * @version 2023-02-22
 */
var IncludedVariantsAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedVariantsAttributes</code>.
   * @alias module:model/IncludedVariantsAttributes
   * @class
   */
  function IncludedVariantsAttributes() {
    _classCallCheck(this, IncludedVariantsAttributes);
  }

  /**
   * Constructs a <code>IncludedVariantsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedVariantsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedVariantsAttributes} The populated <code>IncludedVariantsAttributes</code> instance.
   */
  _createClass(IncludedVariantsAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedVariantsAttributes();
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('sku')) obj.sku = _ApiClient.ApiClient.convertToType(data['sku'], 'String');
        if (data.hasOwnProperty('inventory_policy')) obj.inventoryPolicy = _ApiClient.ApiClient.convertToType(data['inventory_policy'], 'Number');
        if (data.hasOwnProperty('inventory_quantity')) obj.inventoryQuantity = _ApiClient.ApiClient.convertToType(data['inventory_quantity'], 'Number');
        if (data.hasOwnProperty('price')) obj.price = _ApiClient.ApiClient.convertToType(data['price'], 'Number');
        if (data.hasOwnProperty('url')) obj.url = _ApiClient.ApiClient.convertToType(data['url'], 'String');
        if (data.hasOwnProperty('image_full_url')) obj.imageFullUrl = _ApiClient.ApiClient.convertToType(data['image_full_url'], 'String');
        if (data.hasOwnProperty('image_thumbnail_url')) obj.imageThumbnailUrl = _ApiClient.ApiClient.convertToType(data['image_thumbnail_url'], 'String');
        if (data.hasOwnProperty('images')) obj.images = _ApiClient.ApiClient.convertToType(data['images'], ['String']);
        if (data.hasOwnProperty('custom_metadata')) obj.customMetadata = _ApiClient.ApiClient.convertToType(data['custom_metadata'], Object);
        if (data.hasOwnProperty('published')) obj.published = _ApiClient.ApiClient.convertToType(data['published'], 'Boolean');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'Date');
      }
      return obj;
    }
  }]);
  return IncludedVariantsAttributes;
}();
/**
 * The ID of the catalog item variant in an external system.
 * @member {String} externalId
 */
exports.IncludedVariantsAttributes = IncludedVariantsAttributes;
IncludedVariantsAttributes.prototype.externalId = undefined;

/**
 * The title of the catalog item variant.
 * @member {String} title
 */
IncludedVariantsAttributes.prototype.title = undefined;

/**
 * A description of the catalog item variant.
 * @member {String} description
 */
IncludedVariantsAttributes.prototype.description = undefined;

/**
 * The SKU of the catalog item variant.
 * @member {String} sku
 */
IncludedVariantsAttributes.prototype.sku = undefined;

/**
 * Allowed values for the <code>inventoryPolicy</code> property.
 * @enum {Number}
 * @readonly
 */
IncludedVariantsAttributes.InventoryPolicyEnum = {
  /**
   * value: 0
   * @const
   */
  _0: 0,
  /**
   * value: 1
   * @const
   */
  _1: 1,
  /**
   * value: 2
   * @const
   */
  _2: 2
};
/**
 * This field controls the visibility of this catalog item variant in product feeds/blocks. This field supports the following values: `1`: a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock. `0` or `2`: a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity. 
 * @member {module:model/IncludedVariantsAttributes.InventoryPolicyEnum} inventoryPolicy
 */
IncludedVariantsAttributes.prototype.inventoryPolicy = undefined;

/**
 * The quantity of the catalog item variant currently in stock.
 * @member {Number} inventoryQuantity
 */
IncludedVariantsAttributes.prototype.inventoryQuantity = undefined;

/**
 * This field can be used to set the price on the catalog item variant, which is what gets displayed for the item variant when included in emails. For most price-update use cases, you will also want to update the `price` on any parent items using the [Update Catalog Item Endpoint](https://developers.klaviyo.com/en/reference/update_catalog_item).
 * @member {Number} price
 */
IncludedVariantsAttributes.prototype.price = undefined;

/**
 * URL pointing to the location of the catalog item variant on your website.
 * @member {String} url
 */
IncludedVariantsAttributes.prototype.url = undefined;

/**
 * URL pointing to the location of a full image of the catalog item variant.
 * @member {String} imageFullUrl
 */
IncludedVariantsAttributes.prototype.imageFullUrl = undefined;

/**
 * URL pointing to the location of an image thumbnail of the catalog item variant.
 * @member {String} imageThumbnailUrl
 */
IncludedVariantsAttributes.prototype.imageThumbnailUrl = undefined;

/**
 * List of URLs pointing to the locations of images of the catalog item variant.
 * @member {Array.<String>} images
 */
IncludedVariantsAttributes.prototype.images = undefined;

/**
 * Flat JSON blob to provide custom metadata about the catalog item variant. May not exceed 100kb.
 * @member {Object} customMetadata
 */
IncludedVariantsAttributes.prototype.customMetadata = undefined;

/**
 * Boolean value indicating whether the catalog item variant is published.
 * @member {Boolean} published
 */
IncludedVariantsAttributes.prototype.published = undefined;

/**
 * Date and time when the catalog item  variant was created, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
 * @member {Date} created
 */
IncludedVariantsAttributes.prototype.created = undefined;

/**
 * Date and time when the catalog item variant was last updated, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
 * @member {Date} updated
 */
IncludedVariantsAttributes.prototype.updated = undefined;