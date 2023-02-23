"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantUpdateQueryAsSubResource = require("./CatalogVariantUpdateQueryAsSubResource.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogVariantUpdateQuery model module.
 * @module model/CatalogVariantUpdateQuery
 * @version 2023-02-22
 */
var CatalogVariantUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantUpdateQuery</code>.
   * @alias module:model/CatalogVariantUpdateQuery
   * @class
   * @param data {module:model/CatalogVariantUpdateQueryAsSubResource} 
   */
  function CatalogVariantUpdateQuery(data) {
    _classCallCheck(this, CatalogVariantUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateQuery} The populated <code>CatalogVariantUpdateQuery</code> instance.
   */
  _createClass(CatalogVariantUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogVariantUpdateQueryAsSubResource.CatalogVariantUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogVariantUpdateQuery;
}();
/**
 * @member {module:model/CatalogVariantUpdateQueryAsSubResource} data
 */
exports.CatalogVariantUpdateQuery = CatalogVariantUpdateQuery;
CatalogVariantUpdateQuery.prototype.data = undefined;