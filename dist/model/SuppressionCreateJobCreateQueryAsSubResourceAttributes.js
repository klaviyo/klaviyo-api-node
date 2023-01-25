"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuppressionCreateJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _Suppression = require("./Suppression.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SuppressionCreateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/SuppressionCreateJobCreateQueryAsSubResourceAttributes
 * @version 2023-01-24
 */
var SuppressionCreateJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuppressionCreateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param suppressions {Array.<module:model/Suppression>} One or more suppressions to be created.
   */
  function SuppressionCreateJobCreateQueryAsSubResourceAttributes(suppressions) {
    _classCallCheck(this, SuppressionCreateJobCreateQueryAsSubResourceAttributes);
    this.suppressions = suppressions;
  }

  /**
   * Constructs a <code>SuppressionCreateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} The populated <code>SuppressionCreateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(SuppressionCreateJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuppressionCreateJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('suppressions')) obj.suppressions = _ApiClient.ApiClient.convertToType(data['suppressions'], [_Suppression.Suppression]);
      }
      return obj;
    }
  }]);
  return SuppressionCreateJobCreateQueryAsSubResourceAttributes;
}();
/**
 * One or more suppressions to be created.
 * @member {Array.<module:model/Suppression>} suppressions
 */
exports.SuppressionCreateJobCreateQueryAsSubResourceAttributes = SuppressionCreateJobCreateQueryAsSubResourceAttributes;
SuppressionCreateJobCreateQueryAsSubResourceAttributes.prototype.suppressions = undefined;