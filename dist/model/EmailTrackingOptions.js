"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailTrackingOptions = void 0;
var _ApiClient = require("../ApiClient.js");
var _UtmParamInfo = require("./UtmParamInfo.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The EmailTrackingOptions model module.
 * @module model/EmailTrackingOptions
 * @version 2023-02-22
 */
var EmailTrackingOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailTrackingOptions</code>.
   * @alias module:model/EmailTrackingOptions
   * @class
   * @param addUtm {Boolean} 
   * @param utmParams {Array.<module:model/UtmParamInfo>} 
   * @param isTrackingOpens {Boolean} 
   * @param isTrackingClicks {Boolean} 
   */
  function EmailTrackingOptions(addUtm, utmParams, isTrackingOpens, isTrackingClicks) {
    _classCallCheck(this, EmailTrackingOptions);
    this.addUtm = addUtm;
    this.utmParams = utmParams;
    this.isTrackingOpens = isTrackingOpens;
    this.isTrackingClicks = isTrackingClicks;
  }

  /**
   * Constructs a <code>EmailTrackingOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailTrackingOptions} obj Optional instance to populate.
   * @return {module:model/EmailTrackingOptions} The populated <code>EmailTrackingOptions</code> instance.
   */
  _createClass(EmailTrackingOptions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailTrackingOptions();
        if (data.hasOwnProperty('add_utm')) obj.addUtm = _ApiClient.ApiClient.convertToType(data['add_utm'], 'Boolean');
        if (data.hasOwnProperty('utm_params')) obj.utmParams = _ApiClient.ApiClient.convertToType(data['utm_params'], [_UtmParamInfo.UtmParamInfo]);
        if (data.hasOwnProperty('is_tracking_opens')) obj.isTrackingOpens = _ApiClient.ApiClient.convertToType(data['is_tracking_opens'], 'Boolean');
        if (data.hasOwnProperty('is_tracking_clicks')) obj.isTrackingClicks = _ApiClient.ApiClient.convertToType(data['is_tracking_clicks'], 'Boolean');
      }
      return obj;
    }
  }]);
  return EmailTrackingOptions;
}();
/**
 * @member {Boolean} addUtm
 */
exports.EmailTrackingOptions = EmailTrackingOptions;
EmailTrackingOptions.prototype.addUtm = undefined;

/**
 * @member {Array.<module:model/UtmParamInfo>} utmParams
 */
EmailTrackingOptions.prototype.utmParams = undefined;

/**
 * @member {Boolean} isTrackingOpens
 */
EmailTrackingOptions.prototype.isTrackingOpens = undefined;

/**
 * @member {Boolean} isTrackingClicks
 */
EmailTrackingOptions.prototype.isTrackingClicks = undefined;

// Implement OneOfIncludedFlowActionsAttributesTrackingOptions interface: