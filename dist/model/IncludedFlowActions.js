"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedFlowActions = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedFlowActionsAttributes = require("./IncludedFlowActionsAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedFlowActions model module.
 * @module model/IncludedFlowActions
 * @version 2022-10-17
 */var IncludedFlowActions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedFlowActions</code>.
   * @alias module:model/IncludedFlowActions
   * @class
   * @param type {module:model/IncludedFlowActions.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedFlowActionsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedFlowActions(type, id, attributes, links) {
    _classCallCheck(this, IncludedFlowActions);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedFlowActions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlowActions} obj Optional instance to populate.
   * @return {module:model/IncludedFlowActions} The populated <code>IncludedFlowActions</code> instance.
   */
  _createClass(IncludedFlowActions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedFlowActions();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedFlowActionsAttributes.IncludedFlowActionsAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedFlowActions;
}(); /**
      * Allowed values for the <code>type</code> property.
      * @enum {String}
      * @readonly
      */
exports.IncludedFlowActions = IncludedFlowActions;
IncludedFlowActions.TypeEnum = {
  /**
   * value: "flow-action"
   * @const
   */
  flowAction: "flow-action"
};
/**
 * @member {module:model/IncludedFlowActions.TypeEnum} type
 */
IncludedFlowActions.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedFlowActions.prototype.id = undefined;

/**
 * @member {module:model/IncludedFlowActionsAttributes} attributes
 */
IncludedFlowActions.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedFlowActions.prototype.links = undefined;