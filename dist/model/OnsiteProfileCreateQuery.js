"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnsiteProfileCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _OnsiteProfileCreateQueryAsSubResource = require("./OnsiteProfileCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OnsiteProfileCreateQuery model module.
 * @module model/OnsiteProfileCreateQuery
 * @version 2022-10-17
 */var OnsiteProfileCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnsiteProfileCreateQuery</code>.
   * @alias module:model/OnsiteProfileCreateQuery
   * @class
   * @param data {module:model/OnsiteProfileCreateQueryAsSubResource} 
   */
  function OnsiteProfileCreateQuery(data) {
    _classCallCheck(this, OnsiteProfileCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>OnsiteProfileCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteProfileCreateQuery} obj Optional instance to populate.
   * @return {module:model/OnsiteProfileCreateQuery} The populated <code>OnsiteProfileCreateQuery</code> instance.
   */
  _createClass(OnsiteProfileCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnsiteProfileCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _OnsiteProfileCreateQueryAsSubResource.OnsiteProfileCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return OnsiteProfileCreateQuery;
}(); /**
      * @member {module:model/OnsiteProfileCreateQueryAsSubResource} data
      */
exports.OnsiteProfileCreateQuery = OnsiteProfileCreateQuery;
OnsiteProfileCreateQuery.prototype.data = undefined;