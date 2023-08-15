/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-08-15
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
import {CatalogVariantCreateQueryResourceObject} from './CatalogVariantCreateQueryResourceObject.js';

/**
 * The CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants model module.
 * @module model/CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants
 * @version 2023-08-15
 */
export class CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants {
  /**
   * Constructs a new <code>CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants</code>.
   * Array of catalog variants to create.
   * @alias module:model/CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants
   * @class
   * @param data {Array.<module:model/CatalogVariantCreateQueryResourceObject>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants} The populated <code>CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CatalogVariantCreateQueryResourceObject]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CatalogVariantCreateQueryResourceObject>} data
 */
CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants.prototype.data = undefined;
