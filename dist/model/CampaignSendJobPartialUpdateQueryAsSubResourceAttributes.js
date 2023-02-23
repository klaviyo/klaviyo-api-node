"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignSendJobPartialUpdateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CampaignSendJobPartialUpdateQueryAsSubResourceAttributes model module.
 * @module model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes
 * @version 2023-02-22
 */
var CampaignSendJobPartialUpdateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSendJobPartialUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes
   * @class
   * @param action {String} The action you would like to take with this send job from among 'cancel' and 'revert'
   */
  function CampaignSendJobPartialUpdateQueryAsSubResourceAttributes(action) {
    _classCallCheck(this, CampaignSendJobPartialUpdateQueryAsSubResourceAttributes);
    this.action = action;
  }

  /**
   * Constructs a <code>CampaignSendJobPartialUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes} The populated <code>CampaignSendJobPartialUpdateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CampaignSendJobPartialUpdateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSendJobPartialUpdateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('action')) obj.action = _ApiClient.ApiClient.convertToType(data['action'], 'String');
      }
      return obj;
    }
  }]);
  return CampaignSendJobPartialUpdateQueryAsSubResourceAttributes;
}();
/**
 * The action you would like to take with this send job from among 'cancel' and 'revert'
 * @member {String} action
 */
exports.CampaignSendJobPartialUpdateQueryAsSubResourceAttributes = CampaignSendJobPartialUpdateQueryAsSubResourceAttributes;
CampaignSendJobPartialUpdateQueryAsSubResourceAttributes.prototype.action = undefined;