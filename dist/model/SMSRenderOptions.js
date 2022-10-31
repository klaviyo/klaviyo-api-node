"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SMSRenderOptions = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SMSRenderOptions model module.
 * @module model/SMSRenderOptions
 * @version 2022-10-17
 */
var SMSRenderOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SMSRenderOptions</code>.
   * @alias module:model/SMSRenderOptions
   * @class
   * @param shortenLinks {Boolean} 
   * @param addOrgPrefix {Boolean} 
   * @param addInfoLink {Boolean} 
   * @param addOptOutLanguage {Boolean} 
   */
  function SMSRenderOptions(shortenLinks, addOrgPrefix, addInfoLink, addOptOutLanguage) {
    _classCallCheck(this, SMSRenderOptions);
    this.shortenLinks = shortenLinks;
    this.addOrgPrefix = addOrgPrefix;
    this.addInfoLink = addInfoLink;
    this.addOptOutLanguage = addOptOutLanguage;
  }

  /**
   * Constructs a <code>SMSRenderOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMSRenderOptions} obj Optional instance to populate.
   * @return {module:model/SMSRenderOptions} The populated <code>SMSRenderOptions</code> instance.
   */
  _createClass(SMSRenderOptions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SMSRenderOptions();
        if (data.hasOwnProperty('shorten_links')) obj.shortenLinks = _ApiClient.ApiClient.convertToType(data['shorten_links'], 'Boolean');
        if (data.hasOwnProperty('add_org_prefix')) obj.addOrgPrefix = _ApiClient.ApiClient.convertToType(data['add_org_prefix'], 'Boolean');
        if (data.hasOwnProperty('add_info_link')) obj.addInfoLink = _ApiClient.ApiClient.convertToType(data['add_info_link'], 'Boolean');
        if (data.hasOwnProperty('add_opt_out_language')) obj.addOptOutLanguage = _ApiClient.ApiClient.convertToType(data['add_opt_out_language'], 'Boolean');
      }
      return obj;
    }
  }]);
  return SMSRenderOptions;
}();
/**
 * @member {Boolean} shortenLinks
 */
exports.SMSRenderOptions = SMSRenderOptions;
SMSRenderOptions.prototype.shortenLinks = undefined;

/**
 * @member {Boolean} addOrgPrefix
 */
SMSRenderOptions.prototype.addOrgPrefix = undefined;

/**
 * @member {Boolean} addInfoLink
 */
SMSRenderOptions.prototype.addInfoLink = undefined;

/**
 * @member {Boolean} addOptOutLanguage
 */
SMSRenderOptions.prototype.addOptOutLanguage = undefined;