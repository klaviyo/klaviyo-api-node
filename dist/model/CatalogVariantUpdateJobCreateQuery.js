"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantUpdateJobCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantUpdateJobCreateQueryAsSubResource = require("./CatalogVariantUpdateJobCreateQueryAsSubResource.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogVariantUpdateJobCreateQuery model module.
 * @module model/CatalogVariantUpdateJobCreateQuery
 * @version 2022-10-17
 */
var CatalogVariantUpdateJobCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantUpdateJobCreateQuery</code>.
   * @alias module:model/CatalogVariantUpdateJobCreateQuery
   * @class
   * @param data {module:model/CatalogVariantUpdateJobCreateQueryAsSubResource} 
   */
  function CatalogVariantUpdateJobCreateQuery(data) {
    _classCallCheck(this, CatalogVariantUpdateJobCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantUpdateJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateJobCreateQuery} The populated <code>CatalogVariantUpdateJobCreateQuery</code> instance.
   */
  _createClass(CatalogVariantUpdateJobCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantUpdateJobCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogVariantUpdateJobCreateQueryAsSubResource.CatalogVariantUpdateJobCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogVariantUpdateJobCreateQuery;
}();
/**
 * @member {module:model/CatalogVariantUpdateJobCreateQueryAsSubResource} data
 */
exports.CatalogVariantUpdateJobCreateQuery = CatalogVariantUpdateJobCreateQuery;
CatalogVariantUpdateJobCreateQuery.prototype.data = undefined;