"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListPartialUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _ListPartialUpdateQueryAsSubResource = require("./ListPartialUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListPartialUpdateQuery model module.
 * @module model/ListPartialUpdateQuery
 * @version 2022-10-17
 */var ListPartialUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListPartialUpdateQuery</code>.
   * @alias module:model/ListPartialUpdateQuery
   * @class
   * @param data {module:model/ListPartialUpdateQueryAsSubResource} 
   */
  function ListPartialUpdateQuery(data) {
    _classCallCheck(this, ListPartialUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>ListPartialUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListPartialUpdateQuery} obj Optional instance to populate.
   * @return {module:model/ListPartialUpdateQuery} The populated <code>ListPartialUpdateQuery</code> instance.
   */
  _createClass(ListPartialUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListPartialUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _ListPartialUpdateQueryAsSubResource.ListPartialUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return ListPartialUpdateQuery;
}(); /**
      * @member {module:model/ListPartialUpdateQueryAsSubResource} data
      */
exports.ListPartialUpdateQuery = ListPartialUpdateQuery;
ListPartialUpdateQuery.prototype.data = undefined;