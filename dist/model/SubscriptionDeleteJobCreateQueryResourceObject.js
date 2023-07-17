"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionDeleteJobCreateQueryResourceObject = void 0;
var _ApiClient = require("../ApiClient.js");
var _ProfileSubscriptionBulkDeleteJobEnum = require("./ProfileSubscriptionBulkDeleteJobEnum.js");
var _SubscriptionDeleteJobCreateQueryResourceObjectAttributes = require("./SubscriptionDeleteJobCreateQueryResourceObjectAttributes.js");
var _SubscriptionDeleteJobCreateQueryResourceObjectRelationships = require("./SubscriptionDeleteJobCreateQueryResourceObjectRelationships.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Klaviyo API
                                                                                                                                                                                                                                                                                                                                                                                               * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2023-07-15
                                                                                                                                                                                                                                                                                                                                                                                               * Contact: developers@klaviyo.com
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.41
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The SubscriptionDeleteJobCreateQueryResourceObject model module.
 * @module model/SubscriptionDeleteJobCreateQueryResourceObject
 * @version 2023-07-15
 */
var SubscriptionDeleteJobCreateQueryResourceObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SubscriptionDeleteJobCreateQueryResourceObject</code>.
   * @alias module:model/SubscriptionDeleteJobCreateQueryResourceObject
   * @class
   * @param attributes {module:model/SubscriptionDeleteJobCreateQueryResourceObjectAttributes} 
   * @param type {module:model/ProfileSubscriptionBulkDeleteJobEnum} 
   */
  function SubscriptionDeleteJobCreateQueryResourceObject(attributes, type) {
    _classCallCheck(this, SubscriptionDeleteJobCreateQueryResourceObject);
    this.attributes = attributes;
    this.type = type;
  }

  /**
   * Constructs a <code>SubscriptionDeleteJobCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionDeleteJobCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/SubscriptionDeleteJobCreateQueryResourceObject} The populated <code>SubscriptionDeleteJobCreateQueryResourceObject</code> instance.
   */
  _createClass(SubscriptionDeleteJobCreateQueryResourceObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubscriptionDeleteJobCreateQueryResourceObject();
        if (data.hasOwnProperty('relationships')) obj.relationships = _SubscriptionDeleteJobCreateQueryResourceObjectRelationships.SubscriptionDeleteJobCreateQueryResourceObjectRelationships.constructFromObject(data['relationships']);
        if (data.hasOwnProperty('attributes')) obj.attributes = _SubscriptionDeleteJobCreateQueryResourceObjectAttributes.SubscriptionDeleteJobCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('type')) obj.type = _ProfileSubscriptionBulkDeleteJobEnum.ProfileSubscriptionBulkDeleteJobEnum.constructFromObject(data['type']);
      }
      return obj;
    }
  }]);
  return SubscriptionDeleteJobCreateQueryResourceObject;
}();
/**
 * @member {module:model/SubscriptionDeleteJobCreateQueryResourceObjectRelationships} relationships
 */
exports.SubscriptionDeleteJobCreateQueryResourceObject = SubscriptionDeleteJobCreateQueryResourceObject;
SubscriptionDeleteJobCreateQueryResourceObject.prototype.relationships = undefined;

/**
 * @member {module:model/SubscriptionDeleteJobCreateQueryResourceObjectAttributes} attributes
 */
SubscriptionDeleteJobCreateQueryResourceObject.prototype.attributes = undefined;

/**
 * @member {module:model/ProfileSubscriptionBulkDeleteJobEnum} type
 */
SubscriptionDeleteJobCreateQueryResourceObject.prototype.type = undefined;