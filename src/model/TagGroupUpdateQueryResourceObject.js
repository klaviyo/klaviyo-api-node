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
import {TagGroupEnum} from './TagGroupEnum.js';
import {TagGroupUpdateQueryResourceObjectAttributes} from './TagGroupUpdateQueryResourceObjectAttributes.js';

/**
 * The TagGroupUpdateQueryResourceObject model module.
 * @module model/TagGroupUpdateQueryResourceObject
 * @version 2023-02-22
 */
export class TagGroupUpdateQueryResourceObject {
  /**
   * Constructs a new <code>TagGroupUpdateQueryResourceObject</code>.
   * @alias module:model/TagGroupUpdateQueryResourceObject
   * @class
   * @param type {module:model/TagGroupEnum} 
   * @param id {String} The Tag Group ID
   * @param attributes {module:model/TagGroupUpdateQueryResourceObjectAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TagGroupUpdateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupUpdateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/TagGroupUpdateQueryResourceObject} The populated <code>TagGroupUpdateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagGroupUpdateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = TagGroupEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = TagGroupUpdateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TagGroupEnum} type
 */
TagGroupUpdateQueryResourceObject.prototype.type = undefined;

/**
 * The Tag Group ID
 * @member {String} id
 */
TagGroupUpdateQueryResourceObject.prototype.id = undefined;

/**
 * @member {module:model/TagGroupUpdateQueryResourceObjectAttributes} attributes
 */
TagGroupUpdateQueryResourceObject.prototype.attributes = undefined;
