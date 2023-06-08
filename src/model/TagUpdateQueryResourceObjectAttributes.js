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
 * The TagUpdateQueryResourceObjectAttributes model module.
 * @module model/TagUpdateQueryResourceObjectAttributes
 * @version 2023-02-22
 */
export class TagUpdateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>TagUpdateQueryResourceObjectAttributes</code>.
   * @alias module:model/TagUpdateQueryResourceObjectAttributes
   * @class
   * @param name {String} The Tag name
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>TagUpdateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagUpdateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/TagUpdateQueryResourceObjectAttributes} The populated <code>TagUpdateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TagUpdateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * The Tag name
 * @member {String} name
 */
TagUpdateQueryResourceObjectAttributes.prototype.name = undefined;
