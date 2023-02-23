"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignRecipientEstimationJobCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CampaignRecipientEstimationJobCreateQueryAsSubResourceAttributes = require("./CampaignRecipientEstimationJobCreateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CampaignRecipientEstimationJobCreateQueryAsSubResource model module.
 * @module model/CampaignRecipientEstimationJobCreateQueryAsSubResource
 * @version 2023-02-22
 */
var CampaignRecipientEstimationJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignRecipientEstimationJobCreateQueryAsSubResource</code>.
   * @alias module:model/CampaignRecipientEstimationJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CampaignRecipientEstimationJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CampaignRecipientEstimationJobCreateQueryAsSubResourceAttributes} 
   */
  function CampaignRecipientEstimationJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CampaignRecipientEstimationJobCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignRecipientEstimationJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignRecipientEstimationJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CampaignRecipientEstimationJobCreateQueryAsSubResource} The populated <code>CampaignRecipientEstimationJobCreateQueryAsSubResource</code> instance.
   */
  _createClass(CampaignRecipientEstimationJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignRecipientEstimationJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CampaignRecipientEstimationJobCreateQueryAsSubResourceAttributes.CampaignRecipientEstimationJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CampaignRecipientEstimationJobCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CampaignRecipientEstimationJobCreateQueryAsSubResource = CampaignRecipientEstimationJobCreateQueryAsSubResource;
CampaignRecipientEstimationJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "campaign-recipient-estimation-job"
   * @const
   */
  campaignRecipientEstimationJob: "campaign-recipient-estimation-job"
};
/**
 * @member {module:model/CampaignRecipientEstimationJobCreateQueryAsSubResource.TypeEnum} type
 */
CampaignRecipientEstimationJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CampaignRecipientEstimationJobCreateQueryAsSubResourceAttributes} attributes
 */
CampaignRecipientEstimationJobCreateQueryAsSubResource.prototype.attributes = undefined;