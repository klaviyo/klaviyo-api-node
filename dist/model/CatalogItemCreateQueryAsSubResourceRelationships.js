"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemCreateQueryAsSubResourceRelationships = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemCreateQueryAsSubResourceRelationshipsCategories = require("./CatalogItemCreateQueryAsSubResourceRelationshipsCategories.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemCreateQueryAsSubResourceRelationships model module.
 * @module model/CatalogItemCreateQueryAsSubResourceRelationships
 * @version 2022-10-17
 */
var CatalogItemCreateQueryAsSubResourceRelationships = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemCreateQueryAsSubResourceRelationships</code>.
   * @alias module:model/CatalogItemCreateQueryAsSubResourceRelationships
   * @class
   */
  function CatalogItemCreateQueryAsSubResourceRelationships() {
    _classCallCheck(this, CatalogItemCreateQueryAsSubResourceRelationships);
  }

  /**
   * Constructs a <code>CatalogItemCreateQueryAsSubResourceRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQueryAsSubResourceRelationships} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQueryAsSubResourceRelationships} The populated <code>CatalogItemCreateQueryAsSubResourceRelationships</code> instance.
   */
  _createClass(CatalogItemCreateQueryAsSubResourceRelationships, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemCreateQueryAsSubResourceRelationships();
        if (data.hasOwnProperty('categories')) obj.categories = _CatalogItemCreateQueryAsSubResourceRelationshipsCategories.CatalogItemCreateQueryAsSubResourceRelationshipsCategories.constructFromObject(data['categories']);
      }
      return obj;
    }
  }]);
  return CatalogItemCreateQueryAsSubResourceRelationships;
}();
/**
 * @member {module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategories} categories
 */
exports.CatalogItemCreateQueryAsSubResourceRelationships = CatalogItemCreateQueryAsSubResourceRelationships;
CatalogItemCreateQueryAsSubResourceRelationships.prototype.categories = undefined;