"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateCloneQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TemplateCloneQueryAsSubResourceAttributes model module.
 * @module model/TemplateCloneQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
var TemplateCloneQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateCloneQueryAsSubResourceAttributes</code>.
   * @alias module:model/TemplateCloneQueryAsSubResourceAttributes
   * @class
   */
  function TemplateCloneQueryAsSubResourceAttributes() {
    _classCallCheck(this, TemplateCloneQueryAsSubResourceAttributes);
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
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('return_fields')) obj.returnFields = _ApiClient.ApiClient.convertToType(data['return_fields'], ['String']);
      }
      return obj;
    }
  }]);
  return TemplateCloneQueryAsSubResourceAttributes;
}();
/**
 * @member {String} name
 */
exports.TemplateCloneQueryAsSubResourceAttributes = TemplateCloneQueryAsSubResourceAttributes;
TemplateCloneQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * @member {Array.<String>} returnFields
 */
TemplateCloneQueryAsSubResourceAttributes.prototype.returnFields = undefined;