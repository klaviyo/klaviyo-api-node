"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedVariantsAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedVariantsAttributes model module.
 * @module model/IncludedVariantsAttributes
 * @version 2022-10-17
 */var IncludedVariantsAttributes = /*#__PURE__*/function () {
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
}(); /**
      * @member {String} externalId
      */
exports.IncludedVariantsAttributes = IncludedVariantsAttributes;
IncludedVariantsAttributes.prototype.externalId = undefined;

/**
 * @member {String} title
 */
IncludedVariantsAttributes.prototype.title = undefined;

/**
 * @member {String} description
 */
IncludedVariantsAttributes.prototype.description = undefined;

/**
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
 * A field that controls product visibility in product feeds/blocks. This field has two options:     DENY (1): a product will not appear in dynamic product recommendation feeds and blocks if it is out of stock.     CONTINUE (2): a product can appear in dynamic product recommendation feeds and blocks regardless of inventory quantity.     UNKNOWN (0): the behavior will be the same as if it were set to 2 [Default]
 * @member {module:model/IncludedVariantsAttributes.InventoryPolicyEnum} inventoryPolicy
 */
IncludedVariantsAttributes.prototype.inventoryPolicy = undefined;

/**
 * @member {Number} inventoryQuantity
 */
IncludedVariantsAttributes.prototype.inventoryQuantity = undefined;

/**
 * @member {Number} price
 */
IncludedVariantsAttributes.prototype.price = undefined;

/**
 * @member {String} url
 */
IncludedVariantsAttributes.prototype.url = undefined;

/**
 * @member {String} imageFullUrl
 */
IncludedVariantsAttributes.prototype.imageFullUrl = undefined;

/**
 * @member {String} imageThumbnailUrl
 */
IncludedVariantsAttributes.prototype.imageThumbnailUrl = undefined;

/**
 * @member {Array.<String>} images
 */
IncludedVariantsAttributes.prototype.images = undefined;

/**
 * @member {Object} customMetadata
 */
IncludedVariantsAttributes.prototype.customMetadata = undefined;

/**
 * @member {Boolean} published
 */
IncludedVariantsAttributes.prototype.published = undefined;

/**
 * @member {Date} created
 */
IncludedVariantsAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedVariantsAttributes.prototype.updated = undefined;