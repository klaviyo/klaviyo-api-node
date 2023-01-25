"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryDeleteJobCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes = require("./CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogCategoryDeleteJobCreateQueryAsSubResource model module.
 * @module model/CatalogCategoryDeleteJobCreateQueryAsSubResource
 * @version 2023-01-24
 */
var CatalogCategoryDeleteJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryDeleteJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes} 
   */
  function CatalogCategoryDeleteJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CatalogCategoryDeleteJobCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogCategoryDeleteJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource} The populated <code>CatalogCategoryDeleteJobCreateQueryAsSubResource</code> instance.
   */
  _createClass(CatalogCategoryDeleteJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryDeleteJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes.CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CatalogCategoryDeleteJobCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CatalogCategoryDeleteJobCreateQueryAsSubResource = CatalogCategoryDeleteJobCreateQueryAsSubResource;
CatalogCategoryDeleteJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-category-bulk-delete-job"
   * @const
   */
  catalogCategoryBulkDeleteJob: "catalog-category-bulk-delete-job"
};
/**
 * @member {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResource.TypeEnum} type
 */
CatalogCategoryDeleteJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogCategoryDeleteJobCreateQueryAsSubResourceAttributes} attributes
 */
CatalogCategoryDeleteJobCreateQueryAsSubResource.prototype.attributes = undefined;