"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedProfiles = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedProfilesAttributes = require("./IncludedProfilesAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedProfiles model module.
 * @module model/IncludedProfiles
 * @version 2022-10-17
 */var IncludedProfiles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedProfiles</code>.
   * @alias module:model/IncludedProfiles
   * @class
   * @param type {module:model/IncludedProfiles.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedProfilesAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedProfiles(type, id, attributes, links) {
    _classCallCheck(this, IncludedProfiles);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedProfiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedProfiles} obj Optional instance to populate.
   * @return {module:model/IncludedProfiles} The populated <code>IncludedProfiles</code> instance.
   */
  _createClass(IncludedProfiles, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedProfiles();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedProfilesAttributes.IncludedProfilesAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedProfiles;
}(); /**
      * Allowed values for the <code>type</code> property.
      * @enum {String}
      * @readonly
      */
exports.IncludedProfiles = IncludedProfiles;
IncludedProfiles.TypeEnum = {
  /**
   * value: "profile"
   * @const
   */
  profile: "profile"
};
/**
 * @member {module:model/IncludedProfiles.TypeEnum} type
 */
IncludedProfiles.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedProfiles.prototype.id = undefined;

/**
 * @member {module:model/IncludedProfilesAttributes} attributes
 */
IncludedProfiles.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedProfiles.prototype.links = undefined;