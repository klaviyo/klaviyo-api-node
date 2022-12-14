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
import {ProfileCreateQueryAsSubResourceAttributes} from './ProfileCreateQueryAsSubResourceAttributes.js';

/**
 * The ProfilePartialUpdateQueryAsSubResource model module.
 * @module model/ProfilePartialUpdateQueryAsSubResource
 * @version 2022-10-17
 */
export class ProfilePartialUpdateQueryAsSubResource {
  /**
   * Constructs a new <code>ProfilePartialUpdateQueryAsSubResource</code>.
   * @alias module:model/ProfilePartialUpdateQueryAsSubResource
   * @class
   * @param type {module:model/ProfilePartialUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/ProfileCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>ProfilePartialUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfilePartialUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/ProfilePartialUpdateQueryAsSubResource} The populated <code>ProfilePartialUpdateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProfilePartialUpdateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ProfileCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ProfilePartialUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile"
   * @const
   */
  profile: "profile"
};
/**
 * @member {module:model/ProfilePartialUpdateQueryAsSubResource.TypeEnum} type
 */
ProfilePartialUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
ProfilePartialUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/ProfileCreateQueryAsSubResourceAttributes} attributes
 */
ProfilePartialUpdateQueryAsSubResource.prototype.attributes = undefined;

