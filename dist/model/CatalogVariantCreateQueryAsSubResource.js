"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantCreateQueryAsSubResourceAttributes = require("./CatalogVariantCreateQueryAsSubResourceAttributes.js");
var _CatalogVariantCreateQueryAsSubResourceRelationships = require("./CatalogVariantCreateQueryAsSubResourceRelationships.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogVariantCreateQueryAsSubResource model module.
 * @module model/CatalogVariantCreateQueryAsSubResource
 * @version 2023-02-22
 */
var CatalogVariantCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogVariantCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogVariantCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogVariantCreateQueryAsSubResourceAttributes} 
   */
  function CatalogVariantCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CatalogVariantCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogVariantCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQueryAsSubResource} The populated <code>CatalogVariantCreateQueryAsSubResource</code> instance.
   */
  _createClass(CatalogVariantCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogVariantCreateQueryAsSubResourceAttributes.CatalogVariantCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('relationships')) obj.relationships = _CatalogVariantCreateQueryAsSubResourceRelationships.CatalogVariantCreateQueryAsSubResourceRelationships.constructFromObject(data['relationships']);
      }
      return obj;
    }
  }]);
  return CatalogVariantCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CatalogVariantCreateQueryAsSubResource = CatalogVariantCreateQueryAsSubResource;
CatalogVariantCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-variant"
   * @const
   */
  catalogVariant: "catalog-variant"
};
/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResource.TypeEnum} type
 */
CatalogVariantCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceAttributes} attributes
 */
CatalogVariantCreateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceRelationships} relationships
 */
CatalogVariantCreateQueryAsSubResource.prototype.relationships = undefined;