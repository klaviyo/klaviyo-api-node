"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantDeleteJobCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes = require("./CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogVariantDeleteJobCreateQueryAsSubResource model module.
 * @module model/CatalogVariantDeleteJobCreateQueryAsSubResource
 * @version 2023-02-22
 */
var CatalogVariantDeleteJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantDeleteJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogVariantDeleteJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogVariantDeleteJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes} 
   */
  function CatalogVariantDeleteJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CatalogVariantDeleteJobCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogVariantDeleteJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantDeleteJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogVariantDeleteJobCreateQueryAsSubResource} The populated <code>CatalogVariantDeleteJobCreateQueryAsSubResource</code> instance.
   */
  _createClass(CatalogVariantDeleteJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantDeleteJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes.CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CatalogVariantDeleteJobCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CatalogVariantDeleteJobCreateQueryAsSubResource = CatalogVariantDeleteJobCreateQueryAsSubResource;
CatalogVariantDeleteJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-variant-bulk-delete-job"
   * @const
   */
  catalogVariantBulkDeleteJob: "catalog-variant-bulk-delete-job"
};
/**
 * @member {module:model/CatalogVariantDeleteJobCreateQueryAsSubResource.TypeEnum} type
 */
CatalogVariantDeleteJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogVariantDeleteJobCreateQueryAsSubResourceAttributes} attributes
 */
CatalogVariantDeleteJobCreateQueryAsSubResource.prototype.attributes = undefined;