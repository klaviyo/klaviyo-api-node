"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlowUpdateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FlowUpdateQueryAsSubResourceAttributes model module.
 * @module model/FlowUpdateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */var FlowUpdateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FlowUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/FlowUpdateQueryAsSubResourceAttributes
   * @class
   * @param status {String} 
   */
  function FlowUpdateQueryAsSubResourceAttributes(status) {
    _classCallCheck(this, FlowUpdateQueryAsSubResourceAttributes);
    this.status = status;
  }

  /**
   * Constructs a <code>FlowUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlowUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/FlowUpdateQueryAsSubResourceAttributes} The populated <code>FlowUpdateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(FlowUpdateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FlowUpdateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
      }
      return obj;
    }
  }]);
  return FlowUpdateQueryAsSubResourceAttributes;
}(); /**
      * @member {String} status
      */
exports.FlowUpdateQueryAsSubResourceAttributes = FlowUpdateQueryAsSubResourceAttributes;
FlowUpdateQueryAsSubResourceAttributes.prototype.status = undefined;