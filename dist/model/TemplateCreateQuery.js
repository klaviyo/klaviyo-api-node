"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _TemplateCreateQueryAsSubResource = require("./TemplateCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TemplateCreateQuery model module.
 * @module model/TemplateCreateQuery
 * @version 2022-10-17
 */
var TemplateCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateCreateQuery</code>.
   * @alias module:model/TemplateCreateQuery
   * @class
   * @param data {module:model/TemplateCreateQueryAsSubResource} 
   */
  function TemplateCreateQuery(data) {
    _classCallCheck(this, TemplateCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>TemplateCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateCreateQuery} obj Optional instance to populate.
   * @return {module:model/TemplateCreateQuery} The populated <code>TemplateCreateQuery</code> instance.
   */
  _createClass(TemplateCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _TemplateCreateQueryAsSubResource.TemplateCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return TemplateCreateQuery;
}();
/**
 * @member {module:model/TemplateCreateQueryAsSubResource} data
 */
exports.TemplateCreateQuery = TemplateCreateQuery;
TemplateCreateQuery.prototype.data = undefined;