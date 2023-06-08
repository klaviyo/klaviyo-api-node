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
import {ProfileCreateQueryResourceObjectAttributes} from './ProfileCreateQueryResourceObjectAttributes.js';
import {ProfileEnum} from './ProfileEnum.js';

/**
 * The ProfileCreateQueryResourceObject model module.
 * @module model/ProfileCreateQueryResourceObject
 * @version 2023-02-22
 */
export class ProfileCreateQueryResourceObject {
  /**
   * Constructs a new <code>ProfileCreateQueryResourceObject</code>.
   * @alias module:model/ProfileCreateQueryResourceObject
   * @class
   * @param type {module:model/ProfileEnum} 
   * @param attributes {module:model/ProfileCreateQueryResourceObjectAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>ProfileCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/ProfileCreateQueryResourceObject} The populated <code>ProfileCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfileCreateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = ProfileEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ProfileCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ProfileEnum} type
 */
ProfileCreateQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/ProfileCreateQueryResourceObjectAttributes} attributes
 */
ProfileCreateQueryResourceObject.prototype.attributes = undefined;
