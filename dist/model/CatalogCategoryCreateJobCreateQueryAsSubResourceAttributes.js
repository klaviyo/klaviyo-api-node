"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryCreateQueryAsSubResource = require("./CatalogCategoryCreateQueryAsSubResource.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
var CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param categories {Array.<module:model/CatalogCategoryCreateQueryAsSubResource>} 
   */
  function CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes(categories) {
    _classCallCheck(this, CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes);
    this.categories = categories;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('categories')) obj.categories = _ApiClient.ApiClient.convertToType(data['categories'], [_CatalogCategoryCreateQueryAsSubResource.CatalogCategoryCreateQueryAsSubResource]);
      }
      return obj;
    }
  }]);
  return CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes;
}();
/**
 * @member {Array.<module:model/CatalogCategoryCreateQueryAsSubResource>} categories
 */
exports.CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes = CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes;
CatalogCategoryCreateJobCreateQueryAsSubResourceAttributes.prototype.categories = undefined;