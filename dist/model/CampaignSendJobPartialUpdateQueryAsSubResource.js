"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignSendJobPartialUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignSendJobPartialUpdateQueryAsSubResourceAttributes = require("./CampaignSendJobPartialUpdateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CampaignSendJobPartialUpdateQueryAsSubResource model module.
 * @module model/CampaignSendJobPartialUpdateQueryAsSubResource
 * @version 2023-01-24
 */
var CampaignSendJobPartialUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSendJobPartialUpdateQueryAsSubResource</code>.
   * @alias module:model/CampaignSendJobPartialUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CampaignSendJobPartialUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} The ID of the currently sending campaign to cancel or revert
   * @param attributes {module:model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes} 
   */
  function CampaignSendJobPartialUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, CampaignSendJobPartialUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignSendJobPartialUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSendJobPartialUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CampaignSendJobPartialUpdateQueryAsSubResource} The populated <code>CampaignSendJobPartialUpdateQueryAsSubResource</code> instance.
   */
  _createClass(CampaignSendJobPartialUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSendJobPartialUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CampaignSendJobPartialUpdateQueryAsSubResourceAttributes.CampaignSendJobPartialUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CampaignSendJobPartialUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CampaignSendJobPartialUpdateQueryAsSubResource = CampaignSendJobPartialUpdateQueryAsSubResource;
CampaignSendJobPartialUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "campaign-send-job"
   * @const
   */
  campaignSendJob: "campaign-send-job"
};
/**
 * @member {module:model/CampaignSendJobPartialUpdateQueryAsSubResource.TypeEnum} type
 */
CampaignSendJobPartialUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * The ID of the currently sending campaign to cancel or revert
 * @member {String} id
 */
CampaignSendJobPartialUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CampaignSendJobPartialUpdateQueryAsSubResourceAttributes} attributes
 */
CampaignSendJobPartialUpdateQueryAsSubResource.prototype.attributes = undefined;