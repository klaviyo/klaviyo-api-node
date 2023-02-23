"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UTMParamsSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The UTMParamsSubObject model module.
 * @module model/UTMParamsSubObject
 * @version 2023-02-22
 */
var UTMParamsSubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UTMParamsSubObject</code>.
   * @alias module:model/UTMParamsSubObject
   * @class
   * @param name {String} Name of the UTM param
   * @param value {String} Value of the UTM param. Can be templated data.
   */
  function UTMParamsSubObject(name, value) {
    _classCallCheck(this, UTMParamsSubObject);
    this.name = name;
    this.value = value;
  }

  /**
   * Constructs a <code>UTMParamsSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UTMParamsSubObject} obj Optional instance to populate.
   * @return {module:model/UTMParamsSubObject} The populated <code>UTMParamsSubObject</code> instance.
   */
  _createClass(UTMParamsSubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UTMParamsSubObject();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'String');
      }
      return obj;
    }
  }]);
  return UTMParamsSubObject;
}();
/**
 * Name of the UTM param
 * @member {String} name
 */
exports.UTMParamsSubObject = UTMParamsSubObject;
UTMParamsSubObject.prototype.name = undefined;

/**
 * Value of the UTM param. Can be templated data.
 * @member {String} value
 */
UTMParamsSubObject.prototype.value = undefined;