"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V2TemplateRenderQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The V2TemplateRenderQueryAsSubResource model module.
 * @module model/V2TemplateRenderQueryAsSubResource
 * @version 2023-01-24
 */
var V2TemplateRenderQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V2TemplateRenderQueryAsSubResource</code>.
   * @alias module:model/V2TemplateRenderQueryAsSubResource
   * @class
   * @param id {Object} The ID of MessageTemplate
   */
  function V2TemplateRenderQueryAsSubResource(id) {
    _classCallCheck(this, V2TemplateRenderQueryAsSubResource);
    this.id = id;
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
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], Object);
      }
      return obj;
    }
  }]);
  return V2TemplateRenderQueryAsSubResource;
}();
/**
 * The ID of MessageTemplate
 * @member {Object} id
 */
exports.V2TemplateRenderQueryAsSubResource = V2TemplateRenderQueryAsSubResource;
V2TemplateRenderQueryAsSubResource.prototype.id = undefined;