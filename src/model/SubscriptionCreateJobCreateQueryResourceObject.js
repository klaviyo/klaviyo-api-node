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
import {ApiClient} from '../ApiClient.js';
import {ProfileSubscriptionBulkCreateJobEnum} from './ProfileSubscriptionBulkCreateJobEnum.js';
import {SubscriptionCreateJobCreateQueryResourceObjectAttributes} from './SubscriptionCreateJobCreateQueryResourceObjectAttributes.js';

/**
 * The SubscriptionCreateJobCreateQueryResourceObject model module.
 * @module model/SubscriptionCreateJobCreateQueryResourceObject
 * @version 2023-02-22
 */
export class SubscriptionCreateJobCreateQueryResourceObject {
  /**
   * Constructs a new <code>SubscriptionCreateJobCreateQueryResourceObject</code>.
   * @alias module:model/SubscriptionCreateJobCreateQueryResourceObject
   * @class
   * @param type {module:model/ProfileSubscriptionBulkCreateJobEnum} 
   * @param attributes {module:model/SubscriptionCreateJobCreateQueryResourceObjectAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>SubscriptionCreateJobCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionCreateJobCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/SubscriptionCreateJobCreateQueryResourceObject} The populated <code>SubscriptionCreateJobCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionCreateJobCreateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = ProfileSubscriptionBulkCreateJobEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = SubscriptionCreateJobCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ProfileSubscriptionBulkCreateJobEnum} type
 */
SubscriptionCreateJobCreateQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/SubscriptionCreateJobCreateQueryResourceObjectAttributes} attributes
 */
SubscriptionCreateJobCreateQueryResourceObject.prototype.attributes = undefined;
