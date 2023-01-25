/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-01-24
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
import {TagGroupCreateQueryAsSubResourceAttributes} from './TagGroupCreateQueryAsSubResourceAttributes.js';

/**
 * The TagGroupCreateQueryAsSubResource model module.
 * @module model/TagGroupCreateQueryAsSubResource
 * @version 2023-01-24
 */
export class TagGroupCreateQueryAsSubResource {
  /**
   * Constructs a new <code>TagGroupCreateQueryAsSubResource</code>.
   * @alias module:model/TagGroupCreateQueryAsSubResource
   * @class
   * @param type {module:model/TagGroupCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/TagGroupCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TagGroupCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TagGroupCreateQueryAsSubResource} The populated <code>TagGroupCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagGroupCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = TagGroupCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
TagGroupCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "tag-group"
   * @const
   */
  tagGroup: "tag-group"
};
/**
 * @member {module:model/TagGroupCreateQueryAsSubResource.TypeEnum} type
 */
TagGroupCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/TagGroupCreateQueryAsSubResourceAttributes} attributes
 */
TagGroupCreateQueryAsSubResource.prototype.attributes = undefined;
