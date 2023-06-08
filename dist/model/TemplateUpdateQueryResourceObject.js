"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateUpdateQueryResourceObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _TemplateEnum = require("./TemplateEnum.js");
var _TemplateUpdateQueryResourceObjectAttributes = require("./TemplateUpdateQueryResourceObjectAttributes.js");
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
 * The TemplateUpdateQueryResourceObject model module.
 * @module model/TemplateUpdateQueryResourceObject
 * @version 2023-02-22
 */
var TemplateUpdateQueryResourceObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateUpdateQueryResourceObject</code>.
   * @alias module:model/TemplateUpdateQueryResourceObject
   * @class
   * @param type {module:model/TemplateEnum} 
   * @param id {String} The ID of template
   * @param attributes {module:model/TemplateUpdateQueryResourceObjectAttributes} 
   */
  function TemplateUpdateQueryResourceObject(type, id, attributes) {
    _classCallCheck(this, TemplateUpdateQueryResourceObject);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TemplateUpdateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQueryResourceObject} The populated <code>TemplateUpdateQueryResourceObject</code> instance.
   */
  _createClass(TemplateUpdateQueryResourceObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateUpdateQueryResourceObject();
        if (data.hasOwnProperty('type')) obj.type = _TemplateEnum.TemplateEnum.constructFromObject(data['type']);
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _TemplateUpdateQueryResourceObjectAttributes.TemplateUpdateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return TemplateUpdateQueryResourceObject;
}();
/**
 * @member {module:model/TemplateEnum} type
 */
exports.TemplateUpdateQueryResourceObject = TemplateUpdateQueryResourceObject;
TemplateUpdateQueryResourceObject.prototype.type = undefined;

/**
 * The ID of template
 * @member {String} id
 */
TemplateUpdateQueryResourceObject.prototype.id = undefined;

/**
 * @member {module:model/TemplateUpdateQueryResourceObjectAttributes} attributes
 */
TemplateUpdateQueryResourceObject.prototype.attributes = undefined;