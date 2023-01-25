"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignCloneQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CampaignCloneQueryAsSubResourceAttributes model module.
 * @module model/CampaignCloneQueryAsSubResourceAttributes
 * @version 2023-01-24
 */
var CampaignCloneQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignCloneQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignCloneQueryAsSubResourceAttributes
   * @class
   * @param id {String} The campaign ID to be cloned
   */
  function CampaignCloneQueryAsSubResourceAttributes(id) {
    _classCallCheck(this, CampaignCloneQueryAsSubResourceAttributes);
    this.id = id;
  }

  /**
   * Constructs a <code>CampaignCloneQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCloneQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignCloneQueryAsSubResourceAttributes} The populated <code>CampaignCloneQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CampaignCloneQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignCloneQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('new_name')) obj.newName = _ApiClient.ApiClient.convertToType(data['new_name'], 'String');
      }
      return obj;
    }
  }]);
  return CampaignCloneQueryAsSubResourceAttributes;
}();
/**
 * The campaign ID to be cloned
 * @member {String} id
 */
exports.CampaignCloneQueryAsSubResourceAttributes = CampaignCloneQueryAsSubResourceAttributes;
CampaignCloneQueryAsSubResourceAttributes.prototype.id = undefined;

/**
 * The name for the new cloned campaign
 * @member {String} newName
 */
CampaignCloneQueryAsSubResourceAttributes.prototype.newName = undefined;