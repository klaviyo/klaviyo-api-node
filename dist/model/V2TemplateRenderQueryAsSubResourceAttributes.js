"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V2TemplateRenderQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The V2TemplateRenderQueryAsSubResourceAttributes model module.
 * @module model/V2TemplateRenderQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
var V2TemplateRenderQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V2TemplateRenderQueryAsSubResourceAttributes</code>.
   * @alias module:model/V2TemplateRenderQueryAsSubResourceAttributes
   * @class
   * @param context {Object} 
   */
  function V2TemplateRenderQueryAsSubResourceAttributes(context) {
    _classCallCheck(this, V2TemplateRenderQueryAsSubResourceAttributes);
    this.context = context;
  }

  /**
   * Constructs a <code>V2TemplateRenderQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TemplateRenderQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/V2TemplateRenderQueryAsSubResourceAttributes} The populated <code>V2TemplateRenderQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(V2TemplateRenderQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new V2TemplateRenderQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('context')) obj.context = _ApiClient.ApiClient.convertToType(data['context'], Object);
        if (data.hasOwnProperty('return_fields')) obj.returnFields = _ApiClient.ApiClient.convertToType(data['return_fields'], ['String']);
      }
      return obj;
    }
  }]);
  return V2TemplateRenderQueryAsSubResourceAttributes;
}();
/**
 * @member {Object} context
 */
exports.V2TemplateRenderQueryAsSubResourceAttributes = V2TemplateRenderQueryAsSubResourceAttributes;
V2TemplateRenderQueryAsSubResourceAttributes.prototype.context = undefined;

/**
 * @member {Array.<String>} returnFields
 */
V2TemplateRenderQueryAsSubResourceAttributes.prototype.returnFields = undefined;