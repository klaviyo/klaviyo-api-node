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

/**
 * The TagGroupUpdateQueryResourceObjectAttributes model module.
 * @module model/TagGroupUpdateQueryResourceObjectAttributes
 * @version 2023-02-22
 */
export class TagGroupUpdateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>TagGroupUpdateQueryResourceObjectAttributes</code>.
   * @alias module:model/TagGroupUpdateQueryResourceObjectAttributes
   * @class
   * @param name {String} The Tag Group name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>TagGroupUpdateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagGroupUpdateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/TagGroupUpdateQueryResourceObjectAttributes} The populated <code>TagGroupUpdateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagGroupUpdateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('return_fields'))
        obj.returnFields = ApiClient.convertToType(data['return_fields'], ['String']);
    }
    return obj;
  }
}

/**
 * The Tag Group name
 * @member {String} name
 */
TagGroupUpdateQueryResourceObjectAttributes.prototype.name = undefined;

/**
 * @member {Array.<String>} returnFields
 */
TagGroupUpdateQueryResourceObjectAttributes.prototype.returnFields = undefined;
