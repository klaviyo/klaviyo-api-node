"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedMetrics = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedMetricsAttributes = require("./IncludedMetricsAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedMetrics model module.
 * @module model/IncludedMetrics
 * @version 2022-10-17
 */var IncludedMetrics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedMetrics</code>.
   * @alias module:model/IncludedMetrics
   * @class
   * @param type {module:model/IncludedMetrics.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedMetricsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedMetrics(type, id, attributes, links) {
    _classCallCheck(this, IncludedMetrics);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedMetrics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedMetrics} obj Optional instance to populate.
   * @return {module:model/IncludedMetrics} The populated <code>IncludedMetrics</code> instance.
   */
  _createClass(IncludedMetrics, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedMetrics();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedMetricsAttributes.IncludedMetricsAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedMetrics;
}(); /**
      * Allowed values for the <code>type</code> property.
      * @enum {String}
      * @readonly
      */
exports.IncludedMetrics = IncludedMetrics;
IncludedMetrics.TypeEnum = {
  /**
   * value: "metric"
   * @const
   */
  metric: "metric"
};
/**
 * @member {module:model/IncludedMetrics.TypeEnum} type
 */
IncludedMetrics.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedMetrics.prototype.id = undefined;

/**
 * @member {module:model/IncludedMetricsAttributes} attributes
 */
IncludedMetrics.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedMetrics.prototype.links = undefined;