"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateUpdateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TemplateUpdateQueryAsSubResourceAttributes model module.
 * @module model/TemplateUpdateQueryAsSubResourceAttributes
 * @version 2023-01-24
 */
var TemplateUpdateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/TemplateUpdateQueryAsSubResourceAttributes
   * @class
   */
  function TemplateUpdateQueryAsSubResourceAttributes() {
    _classCallCheck(this, TemplateUpdateQueryAsSubResourceAttributes);
  }

  /**
   * Constructs a <code>TemplateUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQueryAsSubResourceAttributes} The populated <code>TemplateUpdateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(TemplateUpdateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateUpdateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('html')) obj.html = _ApiClient.ApiClient.convertToType(data['html'], 'String');
        if (data.hasOwnProperty('text')) obj.text = _ApiClient.ApiClient.convertToType(data['text'], 'String');
        if (data.hasOwnProperty('return_fields')) obj.returnFields = _ApiClient.ApiClient.convertToType(data['return_fields'], ['String']);
      }
      return obj;
    }
  }]);
  return TemplateUpdateQueryAsSubResourceAttributes;
}();
/**
 * The name of the template
 * @member {String} name
 */
exports.TemplateUpdateQueryAsSubResourceAttributes = TemplateUpdateQueryAsSubResourceAttributes;
TemplateUpdateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * The HTML of the template
 * @member {String} html
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.html = undefined;

/**
 * The plaintext of the template
 * @member {String} text
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.text = undefined;

/**
 * Provide fields to limit the returned data
 * @member {Array.<String>} returnFields
 */
TemplateUpdateQueryAsSubResourceAttributes.prototype.returnFields = undefined;