"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedProfilesAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
var _ProfileLocation = require("./ProfileLocation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The IncludedProfilesAttributes model module.
 * @module model/IncludedProfilesAttributes
 * @version 2023-02-22
 */
var IncludedProfilesAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedProfilesAttributes</code>.
   * @alias module:model/IncludedProfilesAttributes
   * @class
   */
  function IncludedProfilesAttributes() {
    _classCallCheck(this, IncludedProfilesAttributes);
  }

  /**
   * Constructs a <code>IncludedProfilesAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedProfilesAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedProfilesAttributes} The populated <code>IncludedProfilesAttributes</code> instance.
   */
  _createClass(IncludedProfilesAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedProfilesAttributes();
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
        if (data.hasOwnProperty('external_id')) obj.externalId = _ApiClient.ApiClient.convertToType(data['external_id'], 'String');
        if (data.hasOwnProperty('anonymous_id')) obj.anonymousId = _ApiClient.ApiClient.convertToType(data['anonymous_id'], 'String');
        if (data.hasOwnProperty('first_name')) obj.firstName = _ApiClient.ApiClient.convertToType(data['first_name'], 'String');
        if (data.hasOwnProperty('last_name')) obj.lastName = _ApiClient.ApiClient.convertToType(data['last_name'], 'String');
        if (data.hasOwnProperty('organization')) obj.organization = _ApiClient.ApiClient.convertToType(data['organization'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('image')) obj.image = _ApiClient.ApiClient.convertToType(data['image'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'Date');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'Date');
        if (data.hasOwnProperty('last_event_date')) obj.lastEventDate = _ApiClient.ApiClient.convertToType(data['last_event_date'], 'Date');
        if (data.hasOwnProperty('location')) obj.location = _ProfileLocation.ProfileLocation.constructFromObject(data['location']);
        if (data.hasOwnProperty('properties')) obj.properties = _ApiClient.ApiClient.convertToType(data['properties'], Object);
      }
      return obj;
    }
  }]);
  return IncludedProfilesAttributes;
}();
/**
 * Individual's email address
 * @member {String} email
 */
exports.IncludedProfilesAttributes = IncludedProfilesAttributes;
IncludedProfilesAttributes.prototype.email = undefined;

/**
 * Individual's phone number in E.164 format
 * @member {String} phoneNumber
 */
IncludedProfilesAttributes.prototype.phoneNumber = undefined;

/**
 * A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
 * @member {String} externalId
 */
IncludedProfilesAttributes.prototype.externalId = undefined;

/**
 * @member {String} anonymousId
 */
IncludedProfilesAttributes.prototype.anonymousId = undefined;

/**
 * Individual's first name
 * @member {String} firstName
 */
IncludedProfilesAttributes.prototype.firstName = undefined;

/**
 * Individual's last name
 * @member {String} lastName
 */
IncludedProfilesAttributes.prototype.lastName = undefined;

/**
 * Name of the company or organization within the company for whom the individual works
 * @member {String} organization
 */
IncludedProfilesAttributes.prototype.organization = undefined;

/**
 * Individual's job title
 * @member {String} title
 */
IncludedProfilesAttributes.prototype.title = undefined;

/**
 * URL pointing to the location of a profile image
 * @member {String} image
 */
IncludedProfilesAttributes.prototype.image = undefined;

/**
 * Date and time when the profile was created, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
 * @member {Date} created
 */
IncludedProfilesAttributes.prototype.created = undefined;

/**
 * Date and time when the profile was last updated, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
 * @member {Date} updated
 */
IncludedProfilesAttributes.prototype.updated = undefined;

/**
 * Date and time of the most recent event the triggered an update to the profile, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
 * @member {Date} lastEventDate
 */
IncludedProfilesAttributes.prototype.lastEventDate = undefined;

/**
 * @member {module:model/ProfileLocation} location
 */
IncludedProfilesAttributes.prototype.location = undefined;

/**
 * An object containing key/value pairs for any custom properties assigned to this profile
 * @member {Object} properties
 */
IncludedProfilesAttributes.prototype.properties = undefined;