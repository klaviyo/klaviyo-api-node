"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantCreateQueryResourceObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantCreateQueryResourceObjectAttributes = require("./CatalogVariantCreateQueryResourceObjectAttributes.js");
var _CatalogVariantCreateQueryResourceObjectRelationships = require("./CatalogVariantCreateQueryResourceObjectRelationships.js");
var _CatalogVariantEnum = require("./CatalogVariantEnum.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Klaviyo API
                                                                                                                                                                                                                                                                                                                                                                                               * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2023-02-22
                                                                                                                                                                                                                                                                                                                                                                                               * Contact: developers@klaviyo.com
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.41
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The CatalogVariantCreateQueryResourceObject model module.
 * @module model/CatalogVariantCreateQueryResourceObject
 * @version 2023-02-22
 */
var CatalogVariantCreateQueryResourceObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantCreateQueryResourceObject</code>.
   * @alias module:model/CatalogVariantCreateQueryResourceObject
   * @class
   * @param type {module:model/CatalogVariantEnum} 
   * @param attributes {module:model/CatalogVariantCreateQueryResourceObjectAttributes} 
   */
  function CatalogVariantCreateQueryResourceObject(type, attributes) {
    _classCallCheck(this, CatalogVariantCreateQueryResourceObject);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogVariantCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateQueryResourceObject} The populated <code>CatalogVariantCreateQueryResourceObject</code> instance.
   */
  _createClass(CatalogVariantCreateQueryResourceObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantCreateQueryResourceObject();
        if (data.hasOwnProperty('type')) obj.type = _CatalogVariantEnum.CatalogVariantEnum.constructFromObject(data['type']);
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogVariantCreateQueryResourceObjectAttributes.CatalogVariantCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('relationships')) obj.relationships = _CatalogVariantCreateQueryResourceObjectRelationships.CatalogVariantCreateQueryResourceObjectRelationships.constructFromObject(data['relationships']);
      }
      return obj;
    }
  }]);
  return CatalogVariantCreateQueryResourceObject;
}();
/**
 * @member {module:model/CatalogVariantEnum} type
 */
exports.CatalogVariantCreateQueryResourceObject = CatalogVariantCreateQueryResourceObject;
CatalogVariantCreateQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/CatalogVariantCreateQueryResourceObjectAttributes} attributes
 */
CatalogVariantCreateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogVariantCreateQueryResourceObjectRelationships} relationships
 */
CatalogVariantCreateQueryResourceObject.prototype.relationships = undefined;