"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfIncludedFlowActionsAttributesTrackingOptions = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfIncludedFlowActionsAttributesTrackingOptions model module.
 * @module model/OneOfIncludedFlowActionsAttributesTrackingOptions
 * @version 2022-10-17
 */
var OneOfIncludedFlowActionsAttributesTrackingOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfIncludedFlowActionsAttributesTrackingOptions</code>.
   * @alias module:model/OneOfIncludedFlowActionsAttributesTrackingOptions
   * @class
   */
  function OneOfIncludedFlowActionsAttributesTrackingOptions() {
    _classCallCheck(this, OneOfIncludedFlowActionsAttributesTrackingOptions);
  }

  /**
   * Constructs a <code>OneOfIncludedFlowActionsAttributesTrackingOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfIncludedFlowActionsAttributesTrackingOptions} obj Optional instance to populate.
   * @return {module:model/OneOfIncludedFlowActionsAttributesTrackingOptions} The populated <code>OneOfIncludedFlowActionsAttributesTrackingOptions</code> instance.
   */
  _createClass(OneOfIncludedFlowActionsAttributesTrackingOptions, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfIncludedFlowActionsAttributesTrackingOptions();
      }
      return obj;
    }
  }]);
  return OneOfIncludedFlowActionsAttributesTrackingOptions;
}();
exports.OneOfIncludedFlowActionsAttributesTrackingOptions = OneOfIncludedFlowActionsAttributesTrackingOptions;