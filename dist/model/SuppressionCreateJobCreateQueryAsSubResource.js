"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuppressionCreateJobCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _SuppressionCreateJobCreateQueryAsSubResourceAttributes = require("./SuppressionCreateJobCreateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The SuppressionCreateJobCreateQueryAsSubResource model module.
 * @module model/SuppressionCreateJobCreateQueryAsSubResource
 * @version 2022-10-17
 */
var SuppressionCreateJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SuppressionCreateJobCreateQueryAsSubResource</code>.
   * @alias module:model/SuppressionCreateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/SuppressionCreateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} 
   */
  function SuppressionCreateJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, SuppressionCreateJobCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>SuppressionCreateJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuppressionCreateJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/SuppressionCreateJobCreateQueryAsSubResource} The populated <code>SuppressionCreateJobCreateQueryAsSubResource</code> instance.
   */
  _createClass(SuppressionCreateJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuppressionCreateJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _SuppressionCreateJobCreateQueryAsSubResourceAttributes.SuppressionCreateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return SuppressionCreateJobCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.SuppressionCreateJobCreateQueryAsSubResource = SuppressionCreateJobCreateQueryAsSubResource;
SuppressionCreateJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile-suppression-bulk-create-job"
   * @const
   */
  profileSuppressionBulkCreateJob: "profile-suppression-bulk-create-job"
};
/**
 * @member {module:model/SuppressionCreateJobCreateQueryAsSubResource.TypeEnum} type
 */
SuppressionCreateJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} attributes
 */
SuppressionCreateJobCreateQueryAsSubResource.prototype.attributes = undefined;