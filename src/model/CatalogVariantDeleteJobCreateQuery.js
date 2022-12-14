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
import {CatalogVariantDeleteJobCreateQueryAsSubResource} from './CatalogVariantDeleteJobCreateQueryAsSubResource.js';

/**
 * The CatalogVariantDeleteJobCreateQuery model module.
 * @module model/CatalogVariantDeleteJobCreateQuery
 * @version 2022-10-17
 */
export class CatalogVariantDeleteJobCreateQuery {
  /**
   * Constructs a new <code>CatalogVariantDeleteJobCreateQuery</code>.
   * @alias module:model/CatalogVariantDeleteJobCreateQuery
   * @class
   * @param data {module:model/CatalogVariantDeleteJobCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantDeleteJobCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantDeleteJobCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogVariantDeleteJobCreateQuery} The populated <code>CatalogVariantDeleteJobCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantDeleteJobCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = CatalogVariantDeleteJobCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CatalogVariantDeleteJobCreateQueryAsSubResource} data
 */
CatalogVariantDeleteJobCreateQuery.prototype.data = undefined;

