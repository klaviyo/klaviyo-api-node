"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnsiteProfileCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _OnsiteProfileMeta = require("./OnsiteProfileMeta.js");
var _ProfileCreateQueryAsSubResourceAttributes = require("./ProfileCreateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The OnsiteProfileCreateQueryAsSubResource model module.
 * @module model/OnsiteProfileCreateQueryAsSubResource
 * @version 2023-01-24
 */
var OnsiteProfileCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnsiteProfileCreateQueryAsSubResource</code>.
   * @alias module:model/OnsiteProfileCreateQueryAsSubResource
   * @class
   * @param type {module:model/OnsiteProfileCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/ProfileCreateQueryAsSubResourceAttributes} 
   */
  function OnsiteProfileCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, OnsiteProfileCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>OnsiteProfileCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteProfileCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/OnsiteProfileCreateQueryAsSubResource} The populated <code>OnsiteProfileCreateQueryAsSubResource</code> instance.
   */
  _createClass(OnsiteProfileCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnsiteProfileCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _ProfileCreateQueryAsSubResourceAttributes.ProfileCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('meta')) obj.meta = _OnsiteProfileMeta.OnsiteProfileMeta.constructFromObject(data['meta']);
      }
      return obj;
    }
  }]);
  return OnsiteProfileCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.OnsiteProfileCreateQueryAsSubResource = OnsiteProfileCreateQueryAsSubResource;
OnsiteProfileCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile"
   * @const
   */
  profile: "profile"
};
/**
 * @member {module:model/OnsiteProfileCreateQueryAsSubResource.TypeEnum} type
 */
OnsiteProfileCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/ProfileCreateQueryAsSubResourceAttributes} attributes
 */
OnsiteProfileCreateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/OnsiteProfileMeta} meta
 */
OnsiteProfileCreateQueryAsSubResource.prototype.meta = undefined;