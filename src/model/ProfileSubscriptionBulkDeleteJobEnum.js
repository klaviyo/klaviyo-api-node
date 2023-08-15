/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-08-15
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
import {ApiClient} from '../ApiClient.js';

/**
 * Enum class ProfileSubscriptionBulkDeleteJobEnum.
 * @enum {String}
 * @readonly
 */
const ProfileSubscriptionBulkDeleteJobEnum = {
  /**
   * value: "profile-subscription-bulk-delete-job"
   * @const
   */
  profileSubscriptionBulkDeleteJob: "profile-subscription-bulk-delete-job",

  /**
   * Returns a <code>ProfileSubscriptionBulkDeleteJobEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/ProfileSubscriptionBulkDeleteJobEnum} The enum <code>ProfileSubscriptionBulkDeleteJobEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ProfileSubscriptionBulkDeleteJobEnum};