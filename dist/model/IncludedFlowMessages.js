"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedFlowMessages = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedFlowMessagesAttributes = require("./IncludedFlowMessagesAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedFlowMessages model module.
 * @module model/IncludedFlowMessages
 * @version 2022-10-17
 */var IncludedFlowMessages = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedFlowMessages</code>.
   * @alias module:model/IncludedFlowMessages
   * @class
   * @param type {module:model/IncludedFlowMessages.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedFlowMessagesAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedFlowMessages(type, id, attributes, links) {
    _classCallCheck(this, IncludedFlowMessages);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedFlowMessages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlowMessages} obj Optional instance to populate.
   * @return {module:model/IncludedFlowMessages} The populated <code>IncludedFlowMessages</code> instance.
   */
  _createClass(IncludedFlowMessages, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedFlowMessages();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedFlowMessagesAttributes.IncludedFlowMessagesAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedFlowMessages;
}(); /**
      * Allowed values for the <code>type</code> property.
      * @enum {String}
      * @readonly
      */
exports.IncludedFlowMessages = IncludedFlowMessages;
IncludedFlowMessages.TypeEnum = {
  /**
   * value: "flow-message"
   * @const
   */
  flowMessage: "flow-message"
};
/**
 * @member {module:model/IncludedFlowMessages.TypeEnum} type
 */
IncludedFlowMessages.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedFlowMessages.prototype.id = undefined;

/**
 * @member {module:model/IncludedFlowMessagesAttributes} attributes
 */
IncludedFlowMessages.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedFlowMessages.prototype.links = undefined;