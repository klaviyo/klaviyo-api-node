"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCreateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _ProfileLocation = require("./ProfileLocation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProfileCreateQueryAsSubResourceAttributes model module.
 * @module model/ProfileCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */var ProfileCreateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProfileCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/ProfileCreateQueryAsSubResourceAttributes
   * @class
   */
  function ProfileCreateQueryAsSubResourceAttributes() {
    _classCallCheck(this, ProfileCreateQueryAsSubResourceAttributes);
  }

  /**
   * Constructs a <code>ProfileCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/ProfileCreateQueryAsSubResourceAttributes} The populated <code>ProfileCreateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(ProfileCreateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProfileCreateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('anonymous_id')) obj.anonymousId = _ApiClient.ApiClient.convertToType(data['anonymous_id'], 'String');
        if (data.hasOwnProperty('first_name')) obj.firstName = _ApiClient.ApiClient.convertToType(data['first_name'], 'String');
        if (data.hasOwnProperty('last_name')) obj.lastName = _ApiClient.ApiClient.convertToType(data['last_name'], 'String');
        if (data.hasOwnProperty('organization')) obj.organization = _ApiClient.ApiClient.convertToType(data['organization'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('image')) obj.image = _ApiClient.ApiClient.convertToType(data['image'], 'String');
        if (data.hasOwnProperty('location')) obj.location = _ProfileLocation.ProfileLocation.constructFromObject(data['location']);
        if (data.hasOwnProperty('properties')) obj.properties = _ApiClient.ApiClient.convertToType(data['properties'], Object);
      }
      return obj;
    }
  }]);
  return ProfileCreateQueryAsSubResourceAttributes;
}(); /**
      * @member {String} email
      */
exports.ProfileCreateQueryAsSubResourceAttributes = ProfileCreateQueryAsSubResourceAttributes;
ProfileCreateQueryAsSubResourceAttributes.prototype.email = undefined;

/**
 * @member {String} phoneNumber
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.phoneNumber = undefined;

/**
 * @member {String} externalId
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.externalId = undefined;

/**
 * @member {String} anonymousId
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.anonymousId = undefined;

/**
 * @member {String} firstName
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.lastName = undefined;

/**
 * @member {String} organization
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.organization = undefined;

/**
 * @member {String} title
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.title = undefined;

/**
 * @member {String} image
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.image = undefined;

/**
 * @member {module:model/ProfileLocation} location
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.location = undefined;

/**
 * @member {Object} properties
 */
ProfileCreateQueryAsSubResourceAttributes.prototype.properties = undefined;