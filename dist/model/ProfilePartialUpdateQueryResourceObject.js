"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePartialUpdateQueryResourceObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _OnsiteProfileCreateQueryResourceObjectAttributes = require("./OnsiteProfileCreateQueryResourceObjectAttributes.js");
var _ProfileEnum = require("./ProfileEnum.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Klaviyo API
                                                                                                                                                                                                                                                                                                                                                                                               * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2023-02-22
                                                                                                                                                                                                                                                                                                                                                                                               * Contact: developers@klaviyo.com
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.41
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The ProfilePartialUpdateQueryResourceObject model module.
 * @module model/ProfilePartialUpdateQueryResourceObject
 * @version 2023-02-22
 */
var ProfilePartialUpdateQueryResourceObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProfilePartialUpdateQueryResourceObject</code>.
   * @alias module:model/ProfilePartialUpdateQueryResourceObject
   * @class
   * @param type {module:model/ProfileEnum} 
   * @param id {String} Primary key that uniquely identifies this profile. Generated by Klaviyo.
   * @param attributes {module:model/OnsiteProfileCreateQueryResourceObjectAttributes} 
   */
  function ProfilePartialUpdateQueryResourceObject(type, id, attributes) {
    _classCallCheck(this, ProfilePartialUpdateQueryResourceObject);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>ProfilePartialUpdateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfilePartialUpdateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/ProfilePartialUpdateQueryResourceObject} The populated <code>ProfilePartialUpdateQueryResourceObject</code> instance.
   */
  _createClass(ProfilePartialUpdateQueryResourceObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProfilePartialUpdateQueryResourceObject();
        if (data.hasOwnProperty('type')) obj.type = _ProfileEnum.ProfileEnum.constructFromObject(data['type']);
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _OnsiteProfileCreateQueryResourceObjectAttributes.OnsiteProfileCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return ProfilePartialUpdateQueryResourceObject;
}();
/**
 * @member {module:model/ProfileEnum} type
 */
exports.ProfilePartialUpdateQueryResourceObject = ProfilePartialUpdateQueryResourceObject;
ProfilePartialUpdateQueryResourceObject.prototype.type = undefined;

/**
 * Primary key that uniquely identifies this profile. Generated by Klaviyo.
 * @member {String} id
 */
ProfilePartialUpdateQueryResourceObject.prototype.id = undefined;

/**
 * @member {module:model/OnsiteProfileCreateQueryResourceObjectAttributes} attributes
 */
ProfilePartialUpdateQueryResourceObject.prototype.attributes = undefined;