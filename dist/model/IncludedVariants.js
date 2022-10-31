"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedVariants = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedVariantsAttributes = require("./IncludedVariantsAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedVariants model module.
 * @module model/IncludedVariants
 * @version 2022-10-17
 */
var IncludedVariants = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedVariants</code>.
   * @alias module:model/IncludedVariants
   * @class
   * @param type {module:model/IncludedVariants.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedVariantsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedVariants(type, id, attributes, links) {
    _classCallCheck(this, IncludedVariants);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedVariants</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedVariants} obj Optional instance to populate.
   * @return {module:model/IncludedVariants} The populated <code>IncludedVariants</code> instance.
   */
  _createClass(IncludedVariants, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedVariants();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedVariantsAttributes.IncludedVariantsAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedVariants;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.IncludedVariants = IncludedVariants;
IncludedVariants.TypeEnum = {
  /**
   * value: "catalog-variant"
   * @const
   */
  catalogVariant: "catalog-variant"
};
/**
 * @member {module:model/IncludedVariants.TypeEnum} type
 */
IncludedVariants.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedVariants.prototype.id = undefined;

/**
 * @member {module:model/IncludedVariantsAttributes} attributes
 */
IncludedVariants.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedVariants.prototype.links = undefined;