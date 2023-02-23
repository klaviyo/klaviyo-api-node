"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _TagUpdateQueryAsSubResourceAttributes = require("./TagUpdateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TagUpdateQueryAsSubResource model module.
 * @module model/TagUpdateQueryAsSubResource
 * @version 2023-02-22
 */
var TagUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagUpdateQueryAsSubResource</code>.
   * @alias module:model/TagUpdateQueryAsSubResource
   * @class
   * @param type {module:model/TagUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} The Tag ID
   * @param attributes {module:model/TagUpdateQueryAsSubResourceAttributes} 
   */
  function TagUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, TagUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TagUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TagUpdateQueryAsSubResource} The populated <code>TagUpdateQueryAsSubResource</code> instance.
   */
  _createClass(TagUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _TagUpdateQueryAsSubResourceAttributes.TagUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return TagUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.TagUpdateQueryAsSubResource = TagUpdateQueryAsSubResource;
TagUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "tag"
   * @const
   */
  tag: "tag"
};
/**
 * @member {module:model/TagUpdateQueryAsSubResource.TypeEnum} type
 */
TagUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * The Tag ID
 * @member {String} id
 */
TagUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/TagUpdateQueryAsSubResourceAttributes} attributes
 */
TagUpdateQueryAsSubResource.prototype.attributes = undefined;