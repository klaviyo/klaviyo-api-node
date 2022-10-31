"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedFlows = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedFlowsAttributes = require("./IncludedFlowsAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedFlows model module.
 * @module model/IncludedFlows
 * @version 2022-10-17
 */
var IncludedFlows = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedFlows</code>.
   * @alias module:model/IncludedFlows
   * @class
   * @param type {module:model/IncludedFlows.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedFlowsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedFlows(type, id, attributes, links) {
    _classCallCheck(this, IncludedFlows);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedFlows</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlows} obj Optional instance to populate.
   * @return {module:model/IncludedFlows} The populated <code>IncludedFlows</code> instance.
   */
  _createClass(IncludedFlows, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedFlows();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedFlowsAttributes.IncludedFlowsAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedFlows;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.IncludedFlows = IncludedFlows;
IncludedFlows.TypeEnum = {
  /**
   * value: "flow"
   * @const
   */
  flow: "flow"
};
/**
 * @member {module:model/IncludedFlows.TypeEnum} type
 */
IncludedFlows.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedFlows.prototype.id = undefined;

/**
 * @member {module:model/IncludedFlowsAttributes} attributes
 */
IncludedFlows.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedFlows.prototype.links = undefined;