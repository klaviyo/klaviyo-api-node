"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnsiteSubscriptionCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _OnsiteSubscriptionCreateQueryAsSubResourceAttributes = require("./OnsiteSubscriptionCreateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The OnsiteSubscriptionCreateQueryAsSubResource model module.
 * @module model/OnsiteSubscriptionCreateQueryAsSubResource
 * @version 2023-02-22
 */
var OnsiteSubscriptionCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnsiteSubscriptionCreateQueryAsSubResource</code>.
   * @alias module:model/OnsiteSubscriptionCreateQueryAsSubResource
   * @class
   * @param type {module:model/OnsiteSubscriptionCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes} 
   */
  function OnsiteSubscriptionCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, OnsiteSubscriptionCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>OnsiteSubscriptionCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteSubscriptionCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/OnsiteSubscriptionCreateQueryAsSubResource} The populated <code>OnsiteSubscriptionCreateQueryAsSubResource</code> instance.
   */
  _createClass(OnsiteSubscriptionCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnsiteSubscriptionCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _OnsiteSubscriptionCreateQueryAsSubResourceAttributes.OnsiteSubscriptionCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return OnsiteSubscriptionCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.OnsiteSubscriptionCreateQueryAsSubResource = OnsiteSubscriptionCreateQueryAsSubResource;
OnsiteSubscriptionCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "subscription"
   * @const
   */
  subscription: "subscription"
};
/**
 * @member {module:model/OnsiteSubscriptionCreateQueryAsSubResource.TypeEnum} type
 */
OnsiteSubscriptionCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/OnsiteSubscriptionCreateQueryAsSubResourceAttributes} attributes
 */
OnsiteSubscriptionCreateQueryAsSubResource.prototype.attributes = undefined;