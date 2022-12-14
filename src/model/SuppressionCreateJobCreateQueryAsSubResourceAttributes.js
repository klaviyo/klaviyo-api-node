/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-10-17
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {Suppression} from './Suppression.js';

/**
 * The SuppressionCreateJobCreateQueryAsSubResourceAttributes model module.
 * @module model/SuppressionCreateJobCreateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
export class SuppressionCreateJobCreateQueryAsSubResourceAttributes {
  /**
   * Constructs a new <code>SuppressionCreateJobCreateQueryAsSubResourceAttributes</code>.
   * @alias module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes
   * @class
   * @param suppressions {Array.<module:model/Suppression>} 
   */
  constructor(suppressions) {
    this.suppressions = suppressions;
  }

  /**
   * Constructs a <code>SuppressionCreateJobCreateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} The populated <code>SuppressionCreateJobCreateQueryAsSubResourceAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SuppressionCreateJobCreateQueryAsSubResourceAttributes();
      if (data.hasOwnProperty('suppressions'))
        obj.suppressions = ApiClient.convertToType(data['suppressions'], [Suppression]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Suppression>} suppressions
 */
SuppressionCreateJobCreateQueryAsSubResourceAttributes.prototype.suppressions = undefined;

