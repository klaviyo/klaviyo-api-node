"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileSuppressionBulkCreateJobEnum = void 0;
var _ApiClient = require("../ApiClient.js");
/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-02-22
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */

/**
 * Enum class ProfileSuppressionBulkCreateJobEnum.
 * @enum {String}
 * @readonly
 */
var ProfileSuppressionBulkCreateJobEnum = {
  /**
   * value: "profile-suppression-bulk-create-job"
   * @const
   */
  profileSuppressionBulkCreateJob: "profile-suppression-bulk-create-job",
  /**
   * Returns a <code>ProfileSuppressionBulkCreateJobEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/ProfileSuppressionBulkCreateJobEnum} The enum <code>ProfileSuppressionBulkCreateJobEnum</code> value.
   */
  constructFromObject: function constructFromObject(object) {
    return object;
  }
};
exports.ProfileSuppressionBulkCreateJobEnum = ProfileSuppressionBulkCreateJobEnum;