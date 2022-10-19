"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfProfileLocationLatitude = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OneOfProfileLocationLatitude model module.
 * @module model/OneOfProfileLocationLatitude
 * @version 2022-10-17
 */var OneOfProfileLocationLatitude = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfProfileLocationLatitude</code>.
   * @alias module:model/OneOfProfileLocationLatitude
   * @class
   */
  function OneOfProfileLocationLatitude() {
    _classCallCheck(this, OneOfProfileLocationLatitude);
  }

  /**
   * Constructs a <code>OneOfProfileLocationLatitude</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfProfileLocationLatitude} obj Optional instance to populate.
   * @return {module:model/OneOfProfileLocationLatitude} The populated <code>OneOfProfileLocationLatitude</code> instance.
   */
  _createClass(OneOfProfileLocationLatitude, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfProfileLocationLatitude();
      }
      return obj;
    }
  }]);
  return OneOfProfileLocationLatitude;
}();
exports.OneOfProfileLocationLatitude = OneOfProfileLocationLatitude;