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
import {DataPrivacyCreateDeletionJobQueryResourceObjectAttributes} from './DataPrivacyCreateDeletionJobQueryResourceObjectAttributes.js';
import {DataPrivacyDeletionJobEnum} from './DataPrivacyDeletionJobEnum.js';

/**
 * The DataPrivacyCreateDeletionJobQueryResourceObject model module.
 * @module model/DataPrivacyCreateDeletionJobQueryResourceObject
 * @version 2023-02-22
 */
export class DataPrivacyCreateDeletionJobQueryResourceObject {
  /**
   * Constructs a new <code>DataPrivacyCreateDeletionJobQueryResourceObject</code>.
   * @alias module:model/DataPrivacyCreateDeletionJobQueryResourceObject
   * @class
   * @param type {module:model/DataPrivacyDeletionJobEnum} 
   * @param attributes {module:model/DataPrivacyCreateDeletionJobQueryResourceObjectAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>DataPrivacyCreateDeletionJobQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataPrivacyCreateDeletionJobQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/DataPrivacyCreateDeletionJobQueryResourceObject} The populated <code>DataPrivacyCreateDeletionJobQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DataPrivacyCreateDeletionJobQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = DataPrivacyDeletionJobEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = DataPrivacyCreateDeletionJobQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DataPrivacyDeletionJobEnum} type
 */
DataPrivacyCreateDeletionJobQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/DataPrivacyCreateDeletionJobQueryResourceObjectAttributes} attributes
 */
DataPrivacyCreateDeletionJobQueryResourceObject.prototype.attributes = undefined;
