"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedCategoriesAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedCategoriesAttributes model module.
 * @module model/IncludedCategoriesAttributes
 * @version 2022-10-17
 */
var IncludedCategoriesAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedCategoriesAttributes</code>.
   * @alias module:model/IncludedCategoriesAttributes
   * @class
   */
  function IncludedCategoriesAttributes() {
    _classCallCheck(this, IncludedCategoriesAttributes);
  }

  /**
   * Constructs a <code>IncludedCategoriesAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedCategoriesAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedCategoriesAttributes} The populated <code>IncludedCategoriesAttributes</code> instance.
   */
  _createClass(IncludedCategoriesAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedCategoriesAttributes();
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'Date');
      }
      return obj;
    }
  }]);
  return IncludedCategoriesAttributes;
}();
/**
 * @member {String} externalId
 */
exports.IncludedCategoriesAttributes = IncludedCategoriesAttributes;
IncludedCategoriesAttributes.prototype.externalId = undefined;

/**
 * @member {String} name
 */
IncludedCategoriesAttributes.prototype.name = undefined;

/**
 * @member {Date} updated
 */
IncludedCategoriesAttributes.prototype.updated = undefined;