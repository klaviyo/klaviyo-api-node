/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-10-17
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';

/**
 * The CatalogVariantUpdateQueryAsSubResourceAttributes model module.
 * @module model/CatalogVariantUpdateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
export class CatalogVariantUpdateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>CatalogVariantUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogVariantUpdateQueryAsSubResourceAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CatalogVariantUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateQueryAsSubResourceAttributes} The populated <code>CatalogVariantUpdateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantUpdateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('inventory_policy'))
        obj.inventoryPolicy = ApiClient.convertToType(data['inventory_policy'], 'Number');
      if (data.hasOwnProperty('inventory_quantity'))
        obj.inventoryQuantity = ApiClient.convertToType(data['inventory_quantity'], 'Number');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('image_full_url'))
        obj.imageFullUrl = ApiClient.convertToType(data['image_full_url'], 'String');
      if (data.hasOwnProperty('image_thumbnail_url'))
        obj.imageThumbnailUrl = ApiClient.convertToType(data['image_thumbnail_url'], 'String');
      if (data.hasOwnProperty('images'))
        obj.images = ApiClient.convertToType(data['images'], ['String']);
      if (data.hasOwnProperty('custom_metadata'))
        obj.customMetadata = ApiClient.convertToType(data['custom_metadata'], Object);
      if (data.hasOwnProperty('published'))
        obj.published = ApiClient.convertToType(data['published'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} title
 */
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

