"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogJobErrorPayload = void 0;
var _ApiClient = require("../ApiClient.js");
var _ErrorSource = require("./ErrorSource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogJobErrorPayload model module.
 * @module model/CatalogJobErrorPayload
 * @version 2022-10-17
 */
var CatalogJobErrorPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogJobErrorPayload</code>.
   * @alias module:model/CatalogJobErrorPayload
   * @class
   * @param id {String} 
   * @param code {String} 
   * @param title {String} 
   * @param detail {String} 
   * @param source {module:model/ErrorSource} 
   */
  function CatalogJobErrorPayload(id, code, title, detail, source) {
    _classCallCheck(this, CatalogJobErrorPayload);
    this.id = id;
    this.code = code;
    this.title = title;
    this.detail = detail;
    this.source = source;
  }

  /**
   * Constructs a <code>CatalogJobErrorPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogJobErrorPayload} obj Optional instance to populate.
   * @return {module:model/CatalogJobErrorPayload} The populated <code>CatalogJobErrorPayload</code> instance.
   */
  _createClass(CatalogJobErrorPayload, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogJobErrorPayload();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('detail')) obj.detail = _ApiClient.ApiClient.convertToType(data['detail'], 'String');
        if (data.hasOwnProperty('source')) obj.source = _ErrorSource.ErrorSource.constructFromObject(data['source']);
      }
      return obj;
    }
  }]);
  return CatalogJobErrorPayload;
}();
/**
 * @member {String} id
 */
exports.CatalogJobErrorPayload = CatalogJobErrorPayload;
CatalogJobErrorPayload.prototype.id = undefined;

/**
 * @member {String} code
 */
CatalogJobErrorPayload.prototype.code = undefined;

/**
 * @member {String} title
 */
CatalogJobErrorPayload.prototype.title = undefined;

/**
 * @member {String} detail
 */
CatalogJobErrorPayload.prototype.detail = undefined;

/**
 * @member {module:model/ErrorSource} source
 */
CatalogJobErrorPayload.prototype.source = undefined;