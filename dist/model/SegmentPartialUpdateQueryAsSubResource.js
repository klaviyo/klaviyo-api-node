"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentPartialUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _SegmentPartialUpdateQueryAsSubResourceAttributes = require("./SegmentPartialUpdateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SegmentPartialUpdateQueryAsSubResource model module.
 * @module model/SegmentPartialUpdateQueryAsSubResource
 * @version 2023-02-22
 */
var SegmentPartialUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SegmentPartialUpdateQueryAsSubResource</code>.
   * @alias module:model/SegmentPartialUpdateQueryAsSubResource
   * @class
   * @param type {module:model/SegmentPartialUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/SegmentPartialUpdateQueryAsSubResourceAttributes} 
   */
  function SegmentPartialUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, SegmentPartialUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>SegmentPartialUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SegmentPartialUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/SegmentPartialUpdateQueryAsSubResource} The populated <code>SegmentPartialUpdateQueryAsSubResource</code> instance.
   */
  _createClass(SegmentPartialUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SegmentPartialUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _SegmentPartialUpdateQueryAsSubResourceAttributes.SegmentPartialUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return SegmentPartialUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.SegmentPartialUpdateQueryAsSubResource = SegmentPartialUpdateQueryAsSubResource;
SegmentPartialUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "segment"
   * @const
   */
  segment: "segment"
};
/**
 * @member {module:model/SegmentPartialUpdateQueryAsSubResource.TypeEnum} type
 */
SegmentPartialUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
SegmentPartialUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/SegmentPartialUpdateQueryAsSubResourceAttributes} attributes
 */
SegmentPartialUpdateQueryAsSubResource.prototype.attributes = undefined;