"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedSegmentsAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The IncludedSegmentsAttributes model module.
 * @module model/IncludedSegmentsAttributes
 * @version 2023-02-22
 */
var IncludedSegmentsAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedSegmentsAttributes</code>.
   * @alias module:model/IncludedSegmentsAttributes
   * @class
   */
  function IncludedSegmentsAttributes() {
    _classCallCheck(this, IncludedSegmentsAttributes);
  }

  /**
   * Constructs a <code>IncludedSegmentsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedSegmentsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedSegmentsAttributes} The populated <code>IncludedSegmentsAttributes</code> instance.
   */
  _createClass(IncludedSegmentsAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedSegmentsAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'Date');
      }
      return obj;
    }
  }]);
  return IncludedSegmentsAttributes;
}();
/**
 * A helpful name to label the segment 
 * @member {String} name
 */
exports.IncludedSegmentsAttributes = IncludedSegmentsAttributes;
IncludedSegmentsAttributes.prototype.name = undefined;

/**
 * Date and time when the segment was created, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
 * @member {Date} created
 */
IncludedSegmentsAttributes.prototype.created = undefined;

/**
 * Date and time when the segment was last updated, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
 * @member {Date} updated
 */
IncludedSegmentsAttributes.prototype.updated = undefined;