"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V2TemplateRenderQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _V2TemplateRenderQueryAsSubResourceAttributes = require("./V2TemplateRenderQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The V2TemplateRenderQueryAsSubResource model module.
 * @module model/V2TemplateRenderQueryAsSubResource
 * @version 2022-10-17
 */
var V2TemplateRenderQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V2TemplateRenderQueryAsSubResource</code>.
   * @alias module:model/V2TemplateRenderQueryAsSubResource
   * @class
   * @param type {module:model/V2TemplateRenderQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/V2TemplateRenderQueryAsSubResourceAttributes} 
   */
  function V2TemplateRenderQueryAsSubResource(type, attributes) {
    _classCallCheck(this, V2TemplateRenderQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>V2TemplateRenderQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TemplateRenderQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/V2TemplateRenderQueryAsSubResource} The populated <code>V2TemplateRenderQueryAsSubResource</code> instance.
   */
  _createClass(V2TemplateRenderQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new V2TemplateRenderQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _V2TemplateRenderQueryAsSubResourceAttributes.V2TemplateRenderQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return V2TemplateRenderQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.V2TemplateRenderQueryAsSubResource = V2TemplateRenderQueryAsSubResource;
V2TemplateRenderQueryAsSubResource.TypeEnum = {
  /**
   * value: "template"
   * @const
   */
  template: "template"
};
/**
 * @member {module:model/V2TemplateRenderQueryAsSubResource.TypeEnum} type
 */
V2TemplateRenderQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/V2TemplateRenderQueryAsSubResourceAttributes} attributes
 */
V2TemplateRenderQueryAsSubResource.prototype.attributes = undefined;