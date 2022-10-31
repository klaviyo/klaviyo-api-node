"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnsiteProfileMetaIdentifiers = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OnsiteProfileMetaIdentifiers model module.
 * @module model/OnsiteProfileMetaIdentifiers
 * @version 2022-10-17
 */
var OnsiteProfileMetaIdentifiers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnsiteProfileMetaIdentifiers</code>.
   * @alias module:model/OnsiteProfileMetaIdentifiers
   * @class
   */
  function OnsiteProfileMetaIdentifiers() {
    _classCallCheck(this, OnsiteProfileMetaIdentifiers);
  }

  /**
   * Constructs a <code>OnsiteProfileMetaIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteProfileMetaIdentifiers} obj Optional instance to populate.
   * @return {module:model/OnsiteProfileMetaIdentifiers} The populated <code>OnsiteProfileMetaIdentifiers</code> instance.
   */
  _createClass(OnsiteProfileMetaIdentifiers, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnsiteProfileMetaIdentifiers();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
        if (data.hasOwnProperty('anonymous_id')) obj.anonymousId = _ApiClient.ApiClient.convertToType(data['anonymous_id'], 'String');
        if (data.hasOwnProperty('_kx')) obj.kx = _ApiClient.ApiClient.convertToType(data['_kx'], 'String');
      }
      return obj;
    }
  }]);
  return OnsiteProfileMetaIdentifiers;
}();
/**
 * @member {String} id
 */
exports.OnsiteProfileMetaIdentifiers = OnsiteProfileMetaIdentifiers;
OnsiteProfileMetaIdentifiers.prototype.id = undefined;

/**
 * @member {String} externalId
 */
OnsiteProfileMetaIdentifiers.prototype.externalId = undefined;

/**
 * @member {String} email
 */
OnsiteProfileMetaIdentifiers.prototype.email = undefined;

/**
 * @member {String} phoneNumber
 */
OnsiteProfileMetaIdentifiers.prototype.phoneNumber = undefined;

/**
 * @member {String} anonymousId
 */
OnsiteProfileMetaIdentifiers.prototype.anonymousId = undefined;

/**
 * @member {String} kx
 */
OnsiteProfileMetaIdentifiers.prototype.kx = undefined;