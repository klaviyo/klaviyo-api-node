"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantUpdateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogVariantUpdateQueryAsSubResourceAttributes model module.
 * @module model/CatalogVariantUpdateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
var CatalogVariantUpdateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogVariantUpdateQueryAsSubResourceAttributes
   * @class
   */
  function CatalogVariantUpdateQueryAsSubResourceAttributes() {
    _classCallCheck(this, CatalogVariantUpdateQueryAsSubResourceAttributes);
  }

  /**
   * Constructs a <code>CatalogVariantUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateQueryAsSubResourceAttributes} The populated <code>CatalogVariantUpdateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogVariantUpdateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantUpdateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('inventory_policy')) obj.inventoryPolicy = _ApiClient.ApiClient.convertToType(data['inventory_policy'], 'Number');
        if (data.hasOwnProperty('inventory_quantity')) obj.inventoryQuantity = _ApiClient.ApiClient.convertToType(data['inventory_quantity'], 'Number');
        if (data.hasOwnProperty('price')) obj.price = _ApiClient.ApiClient.convertToType(data['price'], 'Number');
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
  return CatalogVariantUpdateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} title
 */
exports.CatalogVariantUpdateQueryAsSubResourceAttributes = CatalogVariantUpdateQueryAsSubResourceAttributes;
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.title = undefined;

/**
 * @member {String} description
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.description = undefined;

/**
 * Allowed values for the <code>inventoryPolicy</code> property.
 * @enum {Number}
 * @readonly
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.InventoryPolicyEnum = {
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
 * A field that controls product visibility in product feeds/blocks. This field has two options:     DENY (1): a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock.     CONTINUE (2): a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.     UNKNOWN (0): the behavior will be the same as if it were set to 2 [Default]
 * @member {module:model/CatalogVariantUpdateQueryAsSubResourceAttributes.InventoryPolicyEnum} inventoryPolicy
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.inventoryPolicy = undefined;

/**
 * @member {Number} inventoryQuantity
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.inventoryQuantity = undefined;

/**
 * @member {Number} price
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.price = undefined;

/**
 * @member {String} url
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.url = undefined;

/**
 * @member {String} imageFullUrl
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.imageFullUrl = undefined;

/**
 * @member {String} imageThumbnailUrl
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.imageThumbnailUrl = undefined;

/**
 * @member {Array.<String>} images
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.images = undefined;

/**
 * @member {Object} customMetadata
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.customMetadata = undefined;

/**
 * @member {Boolean} published
 */
CatalogVariantUpdateQueryAsSubResourceAttributes.prototype.published = undefined;