"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemDeleteJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemDeleteQueryAsSubResource = require("./CatalogItemDeleteQueryAsSubResource.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CatalogItemDeleteJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogItemDeleteJobCreateQueryAsSubResourceAttributes
 * @version 2023-02-22
 */
var CatalogItemDeleteJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemDeleteJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogItemDeleteJobCreateQueryAsSubResourceAttributes
   * @class
   * @param items {Array.<module:model/CatalogItemDeleteQueryAsSubResource>} Array of catalog items to delete.
   */
  function CatalogItemDeleteJobCreateQueryAsSubResourceAttributes(items) {
    _classCallCheck(this, CatalogItemDeleteJobCreateQueryAsSubResourceAttributes);
    this.items = items;
  }

  /**
   * Constructs a <code>CatalogItemDeleteJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemDeleteJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogItemDeleteJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogItemDeleteJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogItemDeleteJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemDeleteJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('items')) obj.items = _ApiClient.ApiClient.convertToType(data['items'], [_CatalogItemDeleteQueryAsSubResource.CatalogItemDeleteQueryAsSubResource]);
      }
      return obj;
    }
  }]);
  return CatalogItemDeleteJobCreateQueryAsSubResourceAttributes;
}();
/**
 * Array of catalog items to delete.
 * @member {Array.<module:model/CatalogItemDeleteQueryAsSubResource>} items
 */
exports.CatalogItemDeleteJobCreateQueryAsSubResourceAttributes = CatalogItemDeleteJobCreateQueryAsSubResourceAttributes;
CatalogItemDeleteJobCreateQueryAsSubResourceAttributes.prototype.items = undefined;