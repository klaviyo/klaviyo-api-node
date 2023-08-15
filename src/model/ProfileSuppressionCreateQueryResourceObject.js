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
import {ProfileEnum} from './ProfileEnum.js';
import {ProfileSuppressionCreateQueryResourceObjectAttributes} from './ProfileSuppressionCreateQueryResourceObjectAttributes.js';

/**
 * The ProfileSuppressionCreateQueryResourceObject model module.
 * @module model/ProfileSuppressionCreateQueryResourceObject
 * @version 2023-08-15
 */
export class ProfileSuppressionCreateQueryResourceObject {
  /**
   * Constructs a new <code>ProfileSuppressionCreateQueryResourceObject</code>.
   * @alias module:model/ProfileSuppressionCreateQueryResourceObject
   * @class
   * @param type {module:model/ProfileEnum} 
   * @param attributes {module:model/ProfileSuppressionCreateQueryResourceObjectAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>ProfileSuppressionCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileSuppressionCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/ProfileSuppressionCreateQueryResourceObject} The populated <code>ProfileSuppressionCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfileSuppressionCreateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = ProfileEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ProfileSuppressionCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ProfileEnum} type
 */
ProfileSuppressionCreateQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/ProfileSuppressionCreateQueryResourceObjectAttributes} attributes
 */
ProfileSuppressionCreateQueryResourceObject.prototype.attributes = undefined;
