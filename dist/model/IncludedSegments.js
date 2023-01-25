"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedSegments = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedListsAttributes = require("./IncludedListsAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The IncludedSegments model module.
 * @module model/IncludedSegments
 * @version 2023-01-24
 */
var IncludedSegments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedSegments</code>.
   * @alias module:model/IncludedSegments
   * @class
   * @param type {module:model/IncludedSegments.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedListsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedSegments(type, id, attributes, links) {
    _classCallCheck(this, IncludedSegments);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedSegments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedSegments} obj Optional instance to populate.
   * @return {module:model/IncludedSegments} The populated <code>IncludedSegments</code> instance.
   */
  _createClass(IncludedSegments, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedSegments();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedListsAttributes.IncludedListsAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedSegments;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.IncludedSegments = IncludedSegments;
IncludedSegments.TypeEnum = {
  /**
   * value: "segment"
   * @const
   */
  segment: "segment"
};
/**
 * @member {module:model/IncludedSegments.TypeEnum} type
 */
IncludedSegments.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedSegments.prototype.id = undefined;

/**
 * @member {module:model/IncludedListsAttributes} attributes
 */
IncludedSegments.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedSegments.prototype.links = undefined;