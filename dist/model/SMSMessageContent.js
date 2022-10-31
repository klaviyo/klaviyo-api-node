"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SMSMessageContent = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SMSMessageContent model module.
 * @module model/SMSMessageContent
 * @version 2022-10-17
 */
var SMSMessageContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SMSMessageContent</code>.
   * @alias module:model/SMSMessageContent
   * @class
   * @param body {String} 
   * @param media {String} 
   */
  function SMSMessageContent(body, media) {
    _classCallCheck(this, SMSMessageContent);
    this.body = body;
    this.media = media;
  }

  /**
   * Constructs a <code>SMSMessageContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMSMessageContent} obj Optional instance to populate.
   * @return {module:model/SMSMessageContent} The populated <code>SMSMessageContent</code> instance.
   */
  _createClass(SMSMessageContent, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SMSMessageContent();
        if (data.hasOwnProperty('body')) obj.body = _ApiClient.ApiClient.convertToType(data['body'], 'String');
        if (data.hasOwnProperty('media')) obj.media = _ApiClient.ApiClient.convertToType(data['media'], 'String');
      }
      return obj;
    }
  }]);
  return SMSMessageContent;
}();
/**
 * @member {String} body
 */
exports.SMSMessageContent = SMSMessageContent;
SMSMessageContent.prototype.body = undefined;

/**
 * @member {String} media
 */
SMSMessageContent.prototype.media = undefined;

// Implement OneOfIncludedFlowMessagesAttributesContent interface: