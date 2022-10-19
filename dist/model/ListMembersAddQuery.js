"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListMembersAddQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _ListMembersAddQueryData = require("./ListMembersAddQueryData.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListMembersAddQuery model module.
 * @module model/ListMembersAddQuery
 * @version 2022-10-17
 */var ListMembersAddQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMembersAddQuery</code>.
   * @alias module:model/ListMembersAddQuery
   * @class
   * @param data {Array.<module:model/ListMembersAddQueryData>} 
   */
  function ListMembersAddQuery(data) {
    _classCallCheck(this, ListMembersAddQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>ListMembersAddQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListMembersAddQuery} obj Optional instance to populate.
   * @return {module:model/ListMembersAddQuery} The populated <code>ListMembersAddQuery</code> instance.
   */
  _createClass(ListMembersAddQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMembersAddQuery();
        if (data.hasOwnProperty('data')) obj.data = _ApiClient.ApiClient.convertToType(data['data'], [_ListMembersAddQueryData.ListMembersAddQueryData]);
      }
      return obj;
    }
  }]);
  return ListMembersAddQuery;
}(); /**
      * @member {Array.<module:model/ListMembersAddQueryData>} data
      */
exports.ListMembersAddQuery = ListMembersAddQuery;
ListMembersAddQuery.prototype.data = undefined;