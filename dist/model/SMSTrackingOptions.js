"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SMSTrackingOptions = void 0;
var _ApiClient = require("../ApiClient.js");
var _UtmParamInfo = require("./UtmParamInfo.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SMSTrackingOptions model module.
 * @module model/SMSTrackingOptions
 * @version 2022-10-17
 */
var SMSTrackingOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SMSTrackingOptions</code>.
   * @alias module:model/SMSTrackingOptions
   * @class
   * @param addUtm {Boolean} 
   * @param utmParams {Array.<module:model/UtmParamInfo>} 
   */
  function SMSTrackingOptions(addUtm, utmParams) {
    _classCallCheck(this, SMSTrackingOptions);
    this.addUtm = addUtm;
    this.utmParams = utmParams;
  }

  /**
   * Constructs a <code>SMSTrackingOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMSTrackingOptions} obj Optional instance to populate.
   * @return {module:model/SMSTrackingOptions} The populated <code>SMSTrackingOptions</code> instance.
   */
  _createClass(SMSTrackingOptions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SMSTrackingOptions();
        if (data.hasOwnProperty('add_utm')) obj.addUtm = _ApiClient.ApiClient.convertToType(data['add_utm'], 'Boolean');
        if (data.hasOwnProperty('utm_params')) obj.utmParams = _ApiClient.ApiClient.convertToType(data['utm_params'], [_UtmParamInfo.UtmParamInfo]);
      }
      return obj;
    }
  }]);
  return SMSTrackingOptions;
}();
/**
 * @member {Boolean} addUtm
 */
exports.SMSTrackingOptions = SMSTrackingOptions;
SMSTrackingOptions.prototype.addUtm = undefined;

/**
 * @member {Array.<module:model/UtmParamInfo>} utmParams
 */
SMSTrackingOptions.prototype.utmParams = undefined;

// Implement OneOfIncludedFlowActionsAttributesTrackingOptions interface: