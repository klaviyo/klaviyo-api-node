"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _EventCreateQueryAsSubResourceAttributes = require("./EventCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The EventCreateQueryAsSubResource model module.
 * @module model/EventCreateQueryAsSubResource
 * @version 2022-10-17
 */var EventCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventCreateQueryAsSubResource</code>.
   * @alias module:model/EventCreateQueryAsSubResource
   * @class
   * @param type {module:model/EventCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/EventCreateQueryAsSubResourceAttributes} 
   */
  function EventCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, EventCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>EventCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/EventCreateQueryAsSubResource} The populated <code>EventCreateQueryAsSubResource</code> instance.
   */
  _createClass(EventCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _EventCreateQueryAsSubResourceAttributes.EventCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return EventCreateQueryAsSubResource;
}(); /**
      * Allowed values for the <code>type</code> property.
      * @enum {String}
      * @readonly
      */
exports.EventCreateQueryAsSubResource = EventCreateQueryAsSubResource;
EventCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "event"
   * @const
   */
  event: "event"
};
/**
 * @member {module:model/EventCreateQueryAsSubResource.TypeEnum} type
 */
EventCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/EventCreateQueryAsSubResourceAttributes} attributes
 */
EventCreateQueryAsSubResource.prototype.attributes = undefined;