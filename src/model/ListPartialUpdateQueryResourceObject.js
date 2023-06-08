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
import {ListCreateQueryResourceObjectAttributes} from './ListCreateQueryResourceObjectAttributes.js';
import {ListEnum} from './ListEnum.js';

/**
 * The ListPartialUpdateQueryResourceObject model module.
 * @module model/ListPartialUpdateQueryResourceObject
 * @version 2023-02-22
 */
export class ListPartialUpdateQueryResourceObject {
  /**
   * Constructs a new <code>ListPartialUpdateQueryResourceObject</code>.
   * @alias module:model/ListPartialUpdateQueryResourceObject
   * @class
   * @param type {module:model/ListEnum} 
   * @param id {String} Primary key that uniquely identifies this list. Generated by Klaviyo.
   * @param attributes {module:model/ListCreateQueryResourceObjectAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>ListPartialUpdateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListPartialUpdateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/ListPartialUpdateQueryResourceObject} The populated <code>ListPartialUpdateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListPartialUpdateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = ListEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ListCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ListEnum} type
 */
ListPartialUpdateQueryResourceObject.prototype.type = undefined;

/**
 * Primary key that uniquely identifies this list. Generated by Klaviyo.
 * @member {String} id
 */
ListPartialUpdateQueryResourceObject.prototype.id = undefined;

/**
 * @member {module:model/ListCreateQueryResourceObjectAttributes} attributes
 */
ListPartialUpdateQueryResourceObject.prototype.attributes = undefined;
