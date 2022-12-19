"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedMetricsAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The IncludedMetricsAttributes model module.
 * @module model/IncludedMetricsAttributes
 * @version 2022-10-17
 */
var IncludedMetricsAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedMetricsAttributes</code>.
   * @alias module:model/IncludedMetricsAttributes
   * @class
   */
  function IncludedMetricsAttributes() {
    _classCallCheck(this, IncludedMetricsAttributes);
  }

  /**
   * Constructs a <code>IncludedMetricsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedMetricsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedMetricsAttributes} The populated <code>IncludedMetricsAttributes</code> instance.
   */
  _createClass(IncludedMetricsAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedMetricsAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'String');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'String');
        if (data.hasOwnProperty('integration')) obj.integration = _ApiClient.ApiClient.convertToType(data['integration'], Object);
      }
      return obj;
    }
  }]);
  return IncludedMetricsAttributes;
}();
/**
 * @member {String} name
 */
exports.IncludedMetricsAttributes = IncludedMetricsAttributes;
IncludedMetricsAttributes.prototype.name = undefined;

/**
 * @member {String} created
 */
IncludedMetricsAttributes.prototype.created = undefined;

/**
 * @member {String} updated
 */
IncludedMetricsAttributes.prototype.updated = undefined;

/**
 * @member {Object} integration
 */
IncludedMetricsAttributes.prototype.integration = undefined;