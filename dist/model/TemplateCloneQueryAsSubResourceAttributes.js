"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateCloneQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TemplateCloneQueryAsSubResourceAttributes model module.
 * @module model/TemplateCloneQueryAsSubResourceAttributes
 * @version 2023-01-24
 */
var TemplateCloneQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateCloneQueryAsSubResourceAttributes</code>.
   * @alias module:model/TemplateCloneQueryAsSubResourceAttributes
   * @class
   * @param id {String} The ID of template to be cloned
   */
  function TemplateCloneQueryAsSubResourceAttributes(id) {
    _classCallCheck(this, TemplateCloneQueryAsSubResourceAttributes);
    this.id = id;
  }

  /**
   * Constructs a <code>TemplateCloneQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateCloneQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/TemplateCloneQueryAsSubResourceAttributes} The populated <code>TemplateCloneQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(TemplateCloneQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateCloneQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('return_fields')) obj.returnFields = _ApiClient.ApiClient.convertToType(data['return_fields'], ['String']);
      }
      return obj;
    }
  }]);
  return TemplateCloneQueryAsSubResourceAttributes;
}();
/**
 * The ID of template to be cloned
 * @member {String} id
 */
exports.TemplateCloneQueryAsSubResourceAttributes = TemplateCloneQueryAsSubResourceAttributes;
TemplateCloneQueryAsSubResourceAttributes.prototype.id = undefined;

/**
 * The name of the template
 * @member {String} name
 */
TemplateCloneQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * Any subset of TemplateResponse fields
 * @member {Array.<String>} returnFields
 */
TemplateCloneQueryAsSubResourceAttributes.prototype.returnFields = undefined;