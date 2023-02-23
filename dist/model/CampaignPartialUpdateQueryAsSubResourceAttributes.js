"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignPartialUpdateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _AudiencesSubObject = require("./AudiencesSubObject.js");
var _SendOptionsSubObject = require("./SendOptionsSubObject.js");
var _SendStrategySubObject = require("./SendStrategySubObject.js");
var _TrackingOptionsSubObject = require("./TrackingOptionsSubObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CampaignPartialUpdateQueryAsSubResourceAttributes model module.
 * @module model/CampaignPartialUpdateQueryAsSubResourceAttributes
 * @version 2023-02-22
 */
var CampaignPartialUpdateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignPartialUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CampaignPartialUpdateQueryAsSubResourceAttributes
   * @class
   */
  function CampaignPartialUpdateQueryAsSubResourceAttributes() {
    _classCallCheck(this, CampaignPartialUpdateQueryAsSubResourceAttributes);
  }

  /**
   * Constructs a <code>CampaignPartialUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignPartialUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignPartialUpdateQueryAsSubResourceAttributes} The populated <code>CampaignPartialUpdateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CampaignPartialUpdateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignPartialUpdateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('audiences')) obj.audiences = _AudiencesSubObject.AudiencesSubObject.constructFromObject(data['audiences']);
        if (data.hasOwnProperty('send_options')) obj.sendOptions = _SendOptionsSubObject.SendOptionsSubObject.constructFromObject(data['send_options']);
        if (data.hasOwnProperty('tracking_options')) obj.trackingOptions = _TrackingOptionsSubObject.TrackingOptionsSubObject.constructFromObject(data['tracking_options']);
        if (data.hasOwnProperty('send_strategy')) obj.sendStrategy = _SendStrategySubObject.SendStrategySubObject.constructFromObject(data['send_strategy']);
      }
      return obj;
    }
  }]);
  return CampaignPartialUpdateQueryAsSubResourceAttributes;
}();
/**
 * The campaign name
 * @member {String} name
 */
exports.CampaignPartialUpdateQueryAsSubResourceAttributes = CampaignPartialUpdateQueryAsSubResourceAttributes;
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.name = undefined;

/**
 * @member {module:model/AudiencesSubObject} audiences
 */
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.audiences = undefined;

/**
 * @member {module:model/SendOptionsSubObject} sendOptions
 */
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.sendOptions = undefined;

/**
 * @member {module:model/TrackingOptionsSubObject} trackingOptions
 */
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.trackingOptions = undefined;

/**
 * @member {module:model/SendStrategySubObject} sendStrategy
 */
CampaignPartialUpdateQueryAsSubResourceAttributes.prototype.sendStrategy = undefined;