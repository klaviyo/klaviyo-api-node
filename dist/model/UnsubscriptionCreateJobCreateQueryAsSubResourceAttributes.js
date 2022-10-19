"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */var UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param listId {String} 
   */
  function UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes(listId) {
    _classCallCheck(this, UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes);
    this.listId = listId;
  }

  /**
   * Constructs a <code>UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes} The populated <code>UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('list_id')) obj.listId = _ApiClient.ApiClient.convertToType(data['list_id'], 'String');
        if (data.hasOwnProperty('emails')) obj.emails = _ApiClient.ApiClient.convertToType(data['emails'], ['String']);
        if (data.hasOwnProperty('phone_numbers')) obj.phoneNumbers = _ApiClient.ApiClient.convertToType(data['phone_numbers'], ['String']);
      }
      return obj;
    }
  }]);
  return UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes;
}(); /**
      * @member {String} listId
      */
exports.UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes = UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes;
UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.listId = undefined;

/**
 * @member {Array.<String>} emails
 */
UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.emails = undefined;

/**
 * @member {Array.<String>} phoneNumbers
 */
UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes.prototype.phoneNumbers = undefined;