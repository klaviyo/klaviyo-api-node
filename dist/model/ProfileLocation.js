"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileLocation = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProfileLocation model module.
 * @module model/ProfileLocation
 * @version 2022-10-17
 */
var ProfileLocation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProfileLocation</code>.
   * @alias module:model/ProfileLocation
   * @class
   */
  function ProfileLocation() {
    _classCallCheck(this, ProfileLocation);
  }

  /**
   * Constructs a <code>ProfileLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileLocation} obj Optional instance to populate.
   * @return {module:model/ProfileLocation} The populated <code>ProfileLocation</code> instance.
   */
  _createClass(ProfileLocation, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProfileLocation();
        if (data.hasOwnProperty('address1')) obj.address1 = _ApiClient.ApiClient.convertToType(data['address1'], 'String');
        if (data.hasOwnProperty('address2')) obj.address2 = _ApiClient.ApiClient.convertToType(data['address2'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('country')) obj.country = _ApiClient.ApiClient.convertToType(data['country'], 'String');
        if (data.hasOwnProperty('latitude')) obj.latitude = _ApiClient.ApiClient.convertToType(data['latitude'], Object);
        if (data.hasOwnProperty('longitude')) obj.longitude = _ApiClient.ApiClient.convertToType(data['longitude'], Object);
        if (data.hasOwnProperty('region')) obj.region = _ApiClient.ApiClient.convertToType(data['region'], 'String');
        if (data.hasOwnProperty('zip')) obj.zip = _ApiClient.ApiClient.convertToType(data['zip'], 'String');
        if (data.hasOwnProperty('timezone')) obj.timezone = _ApiClient.ApiClient.convertToType(data['timezone'], 'String');
      }
      return obj;
    }
  }]);
  return ProfileLocation;
}();
/**
 * @member {String} address1
 */
exports.ProfileLocation = ProfileLocation;
ProfileLocation.prototype.address1 = undefined;

/**
 * @member {String} address2
 */
ProfileLocation.prototype.address2 = undefined;

/**
 * @member {String} city
 */
ProfileLocation.prototype.city = undefined;

/**
 * @member {String} country
 */
ProfileLocation.prototype.country = undefined;

/**
 * @member {Object} latitude
 */
ProfileLocation.prototype.latitude = undefined;

/**
 * @member {Object} longitude
 */
ProfileLocation.prototype.longitude = undefined;

/**
 * @member {String} region
 */
ProfileLocation.prototype.region = undefined;

/**
 * @member {String} zip
 */
ProfileLocation.prototype.zip = undefined;

/**
 * @member {String} timezone
 */
ProfileLocation.prototype.timezone = undefined;