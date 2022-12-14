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
import {ListMembersAddQueryData} from './ListMembersAddQueryData.js';

/**
 * The ListMembersDeleteQuery model module.
 * @module model/ListMembersDeleteQuery
 * @version 2022-10-17
 */
export class ListMembersDeleteQuery {
  /**
   * Constructs a new <code>ListMembersDeleteQuery</code>.
   * @alias module:model/ListMembersDeleteQuery
   * @class
   * @param data {Array.<module:model/ListMembersAddQueryData>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>ListMembersDeleteQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListMembersDeleteQuery} obj Optional instance to populate.
   * @return {module:model/ListMembersDeleteQuery} The populated <code>ListMembersDeleteQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListMembersDeleteQuery();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [ListMembersAddQueryData]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ListMembersAddQueryData>} data
 */
ListMembersDeleteQuery.prototype.data = undefined;

