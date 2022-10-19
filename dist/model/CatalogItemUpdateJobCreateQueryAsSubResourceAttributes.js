"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemUpdateJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemUpdateQueryAsSubResource = require("./CatalogItemUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemUpdateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */var CatalogItemUpdateJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemUpdateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param items {Array.<module:model/CatalogItemUpdateQueryAsSubResource>} 
   */
  function CatalogItemUpdateJobCreateQueryAsSubResourceAttributes(items) {
    _classCallCheck(this, CatalogItemUpdateJobCreateQueryAsSubResourceAttributes);
    this.items = items;
  }

  /**
   * Constructs a <code>CatalogItemUpdateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateJobCreateQueryAsSubResourceAttributes} The populated <code>CatalogItemUpdateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogItemUpdateJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemUpdateJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('items')) obj.items = _ApiClient.ApiClient.convertToType(data['items'], [_CatalogItemUpdateQueryAsSubResource.CatalogItemUpdateQueryAsSubResource]);
      }
      return obj;
    }
  }]);
  return CatalogItemUpdateJobCreateQueryAsSubResourceAttributes;
}(); /**
      * @member {Array.<module:model/CatalogItemUpdateQueryAsSubResource>} items
      */
exports.CatalogItemUpdateJobCreateQueryAsSubResourceAttributes = CatalogItemUpdateJobCreateQueryAsSubResourceAttributes;
CatalogItemUpdateJobCreateQueryAsSubResourceAttributes.prototype.items = undefined;