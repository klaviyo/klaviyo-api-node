"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedProfile = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedProfilesAttributes = require("./IncludedProfilesAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedProfile model module.
 * @module model/IncludedProfile
 * @version 2022-10-17
 */var IncludedProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedProfile</code>.
   * @alias module:model/IncludedProfile
   * @class
   * @param type {module:model/IncludedProfile.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedProfilesAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedProfile(type, id, attributes, links) {
    _classCallCheck(this, IncludedProfile);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedProfile} obj Optional instance to populate.
   * @return {module:model/IncludedProfile} The populated <code>IncludedProfile</code> instance.
   */
  _createClass(IncludedProfile, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedProfile();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedProfilesAttributes.IncludedProfilesAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedProfile;
}(); /**
      * Allowed values for the <code>type</code> property.
      * @enum {String}
      * @readonly
      */
exports.IncludedProfile = IncludedProfile;
IncludedProfile.TypeEnum = {
  /**
   * value: "profile"
   * @const
   */
  profile: "profile"
};
/**
 * @member {module:model/IncludedProfile.TypeEnum} type
 */
IncludedProfile.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedProfile.prototype.id = undefined;

/**
 * @member {module:model/IncludedProfilesAttributes} attributes
 */
IncludedProfile.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedProfile.prototype.links = undefined;