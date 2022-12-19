"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscriptionCreateJobCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes = require("./UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The UnsubscriptionCreateJobCreateQueryAsSubResource model module.
 * @module model/UnsubscriptionCreateJobCreateQueryAsSubResource
 * @version 2022-10-17
 */
var UnsubscriptionCreateJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnsubscriptionCreateJobCreateQueryAsSubResource</code>.
   * @alias module:model/UnsubscriptionCreateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes} 
   */
  function UnsubscriptionCreateJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, UnsubscriptionCreateJobCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>UnsubscriptionCreateJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource} The populated <code>UnsubscriptionCreateJobCreateQueryAsSubResource</code> instance.
   */
  _createClass(UnsubscriptionCreateJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnsubscriptionCreateJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes.UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return UnsubscriptionCreateJobCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.UnsubscriptionCreateJobCreateQueryAsSubResource = UnsubscriptionCreateJobCreateQueryAsSubResource;
UnsubscriptionCreateJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile-unsubscription-bulk-create-job"
   * @const
   */
  profileUnsubscriptionBulkCreateJob: "profile-unsubscription-bulk-create-job"
};
/**
 * @member {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource.TypeEnum} type
 */
UnsubscriptionCreateJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes} attributes
 */
UnsubscriptionCreateJobCreateQueryAsSubResource.prototype.attributes = undefined;