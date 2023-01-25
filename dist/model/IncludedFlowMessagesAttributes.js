"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedFlowMessagesAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The IncludedFlowMessagesAttributes model module.
 * @module model/IncludedFlowMessagesAttributes
 * @version 2023-01-24
 */
var IncludedFlowMessagesAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedFlowMessagesAttributes</code>.
   * @alias module:model/IncludedFlowMessagesAttributes
   * @class
   * @param name {String} 
   * @param channel {String} 
   * @param content {Object} 
   */
  function IncludedFlowMessagesAttributes(name, channel, content) {
    _classCallCheck(this, IncludedFlowMessagesAttributes);
    this.name = name;
    this.channel = channel;
    this.content = content;
  }

  /**
   * Constructs a <code>IncludedFlowMessagesAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlowMessagesAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedFlowMessagesAttributes} The populated <code>IncludedFlowMessagesAttributes</code> instance.
   */
  _createClass(IncludedFlowMessagesAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedFlowMessagesAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('channel')) obj.channel = _ApiClient.ApiClient.convertToType(data['channel'], 'String');
        if (data.hasOwnProperty('content')) obj.content = _ApiClient.ApiClient.convertToType(data['content'], Object);
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'Date');
      }
      return obj;
    }
  }]);
  return IncludedFlowMessagesAttributes;
}();
/**
 * @member {String} name
 */
exports.IncludedFlowMessagesAttributes = IncludedFlowMessagesAttributes;
IncludedFlowMessagesAttributes.prototype.name = undefined;

/**
 * @member {String} channel
 */
IncludedFlowMessagesAttributes.prototype.channel = undefined;

/**
 * @member {Object} content
 */
IncludedFlowMessagesAttributes.prototype.content = undefined;

/**
 * @member {Date} created
 */
IncludedFlowMessagesAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedFlowMessagesAttributes.prototype.updated = undefined;