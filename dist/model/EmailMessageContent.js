"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailMessageContent = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The EmailMessageContent model module.
 * @module model/EmailMessageContent
 * @version 2022-10-17
 */var EmailMessageContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailMessageContent</code>.
   * @alias module:model/EmailMessageContent
   * @class
   * @param subject {String} 
   * @param previewText {String} 
   * @param fromEmail {String} 
   * @param fromName {String} 
   */
  function EmailMessageContent(subject, previewText, fromEmail, fromName) {
    _classCallCheck(this, EmailMessageContent);
    this.subject = subject;
    this.previewText = previewText;
    this.fromEmail = fromEmail;
    this.fromName = fromName;
  }

  /**
   * Constructs a <code>EmailMessageContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailMessageContent} obj Optional instance to populate.
   * @return {module:model/EmailMessageContent} The populated <code>EmailMessageContent</code> instance.
   */
  _createClass(EmailMessageContent, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailMessageContent();
        if (data.hasOwnProperty('subject')) obj.subject = _ApiClient.ApiClient.convertToType(data['subject'], 'String');
        if (data.hasOwnProperty('preview_text')) obj.previewText = _ApiClient.ApiClient.convertToType(data['preview_text'], 'String');
        if (data.hasOwnProperty('from_email')) obj.fromEmail = _ApiClient.ApiClient.convertToType(data['from_email'], 'String');
        if (data.hasOwnProperty('from_name')) obj.fromName = _ApiClient.ApiClient.convertToType(data['from_name'], 'String');
      }
      return obj;
    }
  }]);
  return EmailMessageContent;
}(); /**
      * @member {String} subject
      */
exports.EmailMessageContent = EmailMessageContent;
EmailMessageContent.prototype.subject = undefined;

/**
 * @member {String} previewText
 */
EmailMessageContent.prototype.previewText = undefined;

/**
 * @member {String} fromEmail
 */
EmailMessageContent.prototype.fromEmail = undefined;

/**
 * @member {String} fromName
 */
EmailMessageContent.prototype.fromName = undefined;

// Implement OneOfIncludedFlowMessagesAttributesContent interface: