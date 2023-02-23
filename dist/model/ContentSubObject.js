"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentSubObject = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ContentSubObject model module.
 * @module model/ContentSubObject
 * @version 2023-02-22
 */
var ContentSubObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContentSubObject</code>.
   * @alias module:model/ContentSubObject
   * @class
   */
  function ContentSubObject() {
    _classCallCheck(this, ContentSubObject);
  }

  /**
   * Constructs a <code>ContentSubObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentSubObject} obj Optional instance to populate.
   * @return {module:model/ContentSubObject} The populated <code>ContentSubObject</code> instance.
   */
  _createClass(ContentSubObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContentSubObject();
        if (data.hasOwnProperty('subject')) obj.subject = _ApiClient.ApiClient.convertToType(data['subject'], 'String');
        if (data.hasOwnProperty('preview_text')) obj.previewText = _ApiClient.ApiClient.convertToType(data['preview_text'], 'String');
        if (data.hasOwnProperty('from_email')) obj.fromEmail = _ApiClient.ApiClient.convertToType(data['from_email'], 'String');
        if (data.hasOwnProperty('from_label')) obj.fromLabel = _ApiClient.ApiClient.convertToType(data['from_label'], 'String');
        if (data.hasOwnProperty('template_id')) obj.templateId = _ApiClient.ApiClient.convertToType(data['template_id'], 'String');
        if (data.hasOwnProperty('template_name')) obj.templateName = _ApiClient.ApiClient.convertToType(data['template_name'], 'String');
      }
      return obj;
    }
  }]);
  return ContentSubObject;
}();
/**
 * The subject of the message
 * @member {String} subject
 */
exports.ContentSubObject = ContentSubObject;
ContentSubObject.prototype.subject = undefined;

/**
 * Preview text associated with the message
 * @member {String} previewText
 */
ContentSubObject.prototype.previewText = undefined;

/**
 * The email the message should be sent from
 * @member {String} fromEmail
 */
ContentSubObject.prototype.fromEmail = undefined;

/**
 * The label associated with the from_email
 * @member {String} fromLabel
 */
ContentSubObject.prototype.fromLabel = undefined;

/**
 * The ID of the template associated to the message
 * @member {String} templateId
 */
ContentSubObject.prototype.templateId = undefined;

/**
 * The name of the template associated to the message
 * @member {String} templateName
 */
ContentSubObject.prototype.templateName = undefined;