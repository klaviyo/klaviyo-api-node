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
import {CatalogVariantUpdateQueryAsSubResource} from './CatalogVariantUpdateQueryAsSubResource.js';

/**
 * The CatalogVariantUpdateQuery model module.
 * @module model/CatalogVariantUpdateQuery
 * @version 2022-10-17
 */
export class CatalogVariantUpdateQuery {
  /**
   * Constructs a new <code>CatalogVariantUpdateQuery</code>.
   * @alias module:model/CatalogVariantUpdateQuery
   * @class
   * @param data {module:model/CatalogVariantUpdateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantUpdateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogVariantUpdateQuery} The populated <code>CatalogVariantUpdateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantUpdateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CatalogVariantUpdateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogVariantUpdateQueryAsSubResource} data
 */
CatalogVariantUpdateQuery.prototype.data = undefined;

