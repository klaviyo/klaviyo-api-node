"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemCreateQueryAsSubResourceRelationships = require("./CatalogItemCreateQueryAsSubResourceRelationships.js");
var _CatalogItemUpdateQueryAsSubResourceAttributes = require("./CatalogItemUpdateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogItemUpdateQueryAsSubResource model module.
 * @module model/CatalogItemUpdateQueryAsSubResource
 * @version 2022-10-17
 */
var CatalogItemUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemUpdateQueryAsSubResource</code>.
   * @alias module:model/CatalogItemUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/CatalogItemUpdateQueryAsSubResourceAttributes} 
   */
  function CatalogItemUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, CatalogItemUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogItemUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateQueryAsSubResource} The populated <code>CatalogItemUpdateQueryAsSubResource</code> instance.
   */
  _createClass(CatalogItemUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogItemUpdateQueryAsSubResourceAttributes.CatalogItemUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('relationships')) obj.relationships = _CatalogItemCreateQueryAsSubResourceRelationships.CatalogItemCreateQueryAsSubResourceRelationships.constructFromObject(data['relationships']);
      }
      return obj;
    }
  }]);
  return CatalogItemUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CatalogItemUpdateQueryAsSubResource = CatalogItemUpdateQueryAsSubResource;
CatalogItemUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item"
   * @const
   */
  catalogItem: "catalog-item"
};
/**
 * @member {module:model/CatalogItemUpdateQueryAsSubResource.TypeEnum} type
 */
CatalogItemUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
CatalogItemUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CatalogItemUpdateQueryAsSubResourceAttributes} attributes
 */
CatalogItemUpdateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogItemCreateQueryAsSubResourceRelationships} relationships
 */
CatalogItemUpdateQueryAsSubResource.prototype.relationships = undefined;