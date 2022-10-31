"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedItemsAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedItemsAttributes model module.
 * @module model/IncludedItemsAttributes
 * @version 2022-10-17
 */
var IncludedItemsAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedItemsAttributes</code>.
   * @alias module:model/IncludedItemsAttributes
   * @class
   */
  function IncludedItemsAttributes() {
    _classCallCheck(this, IncludedItemsAttributes);
  }

  /**
   * Constructs a <code>IncludedItemsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedItemsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedItemsAttributes} The populated <code>IncludedItemsAttributes</code> instance.
   */
  _createClass(IncludedItemsAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedItemsAttributes();
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
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
  return IncludedItemsAttributes;
}();
/**
 * @member {String} externalId
 */
exports.IncludedItemsAttributes = IncludedItemsAttributes;
IncludedItemsAttributes.prototype.externalId = undefined;

/**
 * @member {String} title
 */
IncludedItemsAttributes.prototype.title = undefined;

/**
 * @member {String} description
 */
IncludedItemsAttributes.prototype.description = undefined;

/**
 * @member {String} url
 */
IncludedItemsAttributes.prototype.url = undefined;

/**
 * @member {String} imageFullUrl
 */
IncludedItemsAttributes.prototype.imageFullUrl = undefined;

/**
 * @member {String} imageThumbnailUrl
 */
IncludedItemsAttributes.prototype.imageThumbnailUrl = undefined;

/**
 * @member {Array.<String>} images
 */
IncludedItemsAttributes.prototype.images = undefined;

/**
 * @member {Object} customMetadata
 */
IncludedItemsAttributes.prototype.customMetadata = undefined;

/**
 * @member {Boolean} published
 */
IncludedItemsAttributes.prototype.published = undefined;

/**
 * @member {Date} created
 */
IncludedItemsAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedItemsAttributes.prototype.updated = undefined;