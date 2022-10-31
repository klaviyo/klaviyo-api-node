"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedFlowActionsAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _SMSRenderOptions = require("./SMSRenderOptions.js");
var _SendOptions = require("./SendOptions.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedFlowActionsAttributes model module.
 * @module model/IncludedFlowActionsAttributes
 * @version 2022-10-17
 */
var IncludedFlowActionsAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedFlowActionsAttributes</code>.
   * @alias module:model/IncludedFlowActionsAttributes
   * @class
   */
  function IncludedFlowActionsAttributes() {
    _classCallCheck(this, IncludedFlowActionsAttributes);
  }

  /**
   * Constructs a <code>IncludedFlowActionsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlowActionsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedFlowActionsAttributes} The populated <code>IncludedFlowActionsAttributes</code> instance.
   */
  _createClass(IncludedFlowActionsAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedFlowActionsAttributes();
        if (data.hasOwnProperty('action_type')) obj.actionType = _ApiClient.ApiClient.convertToType(data['action_type'], 'String');
        if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'Date');
        if (data.hasOwnProperty('settings')) obj.settings = _ApiClient.ApiClient.convertToType(data['settings'], Object);
        if (data.hasOwnProperty('tracking_options')) obj.trackingOptions = _ApiClient.ApiClient.convertToType(data['tracking_options'], Object);
        if (data.hasOwnProperty('send_options')) obj.sendOptions = _SendOptions.SendOptions.constructFromObject(data['send_options']);
        if (data.hasOwnProperty('render_options')) obj.renderOptions = _SMSRenderOptions.SMSRenderOptions.constructFromObject(data['render_options']);
      }
      return obj;
    }
  }]);
  return IncludedFlowActionsAttributes;
}();
/**
 * @member {String} actionType
 */
exports.IncludedFlowActionsAttributes = IncludedFlowActionsAttributes;
IncludedFlowActionsAttributes.prototype.actionType = undefined;

/**
 * @member {String} status
 */
IncludedFlowActionsAttributes.prototype.status = undefined;

/**
 * @member {Date} created
 */
IncludedFlowActionsAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedFlowActionsAttributes.prototype.updated = undefined;

/**
 * @member {Object} settings
 */
IncludedFlowActionsAttributes.prototype.settings = undefined;

/**
 * @member {Object} trackingOptions
 */
IncludedFlowActionsAttributes.prototype.trackingOptions = undefined;

/**
 * @member {module:model/SendOptions} sendOptions
 */
IncludedFlowActionsAttributes.prototype.sendOptions = undefined;

/**
 * @member {module:model/SMSRenderOptions} renderOptions
 */
IncludedFlowActionsAttributes.prototype.renderOptions = undefined;