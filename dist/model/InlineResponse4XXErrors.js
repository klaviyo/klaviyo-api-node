"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse4XXErrors = void 0;
var _ApiClient = require("../ApiClient.js");
var _InlineResponse4XXSource = require("./InlineResponse4XXSource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InlineResponse4XXErrors model module.
 * @module model/InlineResponse4XXErrors
 * @version 2022-10-17
 */var InlineResponse4XXErrors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4XXErrors</code>.
   * @alias module:model/InlineResponse4XXErrors
   * @class
   * @param id {String} 
   * @param code {String} 
   * @param title {String} 
   * @param detail {String} 
   */
  function InlineResponse4XXErrors(id, code, title, detail) {
    _classCallCheck(this, InlineResponse4XXErrors);
    this.id = id;
    this.code = code;
    this.title = title;
    this.detail = detail;
  }

  /**
   * Constructs a <code>InlineResponse4XXErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4XXErrors} obj Optional instance to populate.
   * @return {module:model/InlineResponse4XXErrors} The populated <code>InlineResponse4XXErrors</code> instance.
   */
  _createClass(InlineResponse4XXErrors, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4XXErrors();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('detail')) obj.detail = _ApiClient.ApiClient.convertToType(data['detail'], 'String');
        if (data.hasOwnProperty('source')) obj.source = _InlineResponse4XXSource.InlineResponse4XXSource.constructFromObject(data['source']);
      }
      return obj;
    }
  }]);
  return InlineResponse4XXErrors;
}(); /**
      * @member {String} id
      */
exports.InlineResponse4XXErrors = InlineResponse4XXErrors;
InlineResponse4XXErrors.prototype.id = undefined;

/**
 * @member {String} code
 */
InlineResponse4XXErrors.prototype.code = undefined;

/**
 * @member {String} title
 */
InlineResponse4XXErrors.prototype.title = undefined;

/**
 * @member {String} detail
 */
InlineResponse4XXErrors.prototype.detail = undefined;

/**
 * @member {module:model/InlineResponse4XXSource} source
 */
InlineResponse4XXErrors.prototype.source = undefined;