"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _TemplateUpdateQueryAsSubResource = require("./TemplateUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TemplateUpdateQuery model module.
 * @module model/TemplateUpdateQuery
 * @version 2022-10-17
 */var TemplateUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateUpdateQuery</code>.
   * @alias module:model/TemplateUpdateQuery
   * @class
   * @param data {module:model/TemplateUpdateQueryAsSubResource} 
   */
  function TemplateUpdateQuery(data) {
    _classCallCheck(this, TemplateUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>TemplateUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQuery} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQuery} The populated <code>TemplateUpdateQuery</code> instance.
   */
  _createClass(TemplateUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _TemplateUpdateQueryAsSubResource.TemplateUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return TemplateUpdateQuery;
}(); /**
      * @member {module:model/TemplateUpdateQueryAsSubResource} data
      */
exports.TemplateUpdateQuery = TemplateUpdateQuery;
TemplateUpdateQuery.prototype.data = undefined;