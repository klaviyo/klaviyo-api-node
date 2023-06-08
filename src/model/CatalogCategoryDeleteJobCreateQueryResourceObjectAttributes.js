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
import {CatalogCategoryDeleteQueryResourceObject} from './CatalogCategoryDeleteQueryResourceObject.js';

/**
 * The CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes model module.
 * @module model/CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes
 * @version 2023-02-22
 */
export class CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes</code>.
   * @alias module:model/CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes
   * @class
   * @param categories {Array.<module:model/CatalogCategoryDeleteQueryResourceObject>} Array of catalog categories to delete.
   */
  constructor(categories) {
    this.categories = categories;
  }

  /**
   * Constructs a <code>CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes} The populated <code>CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('categories'))
        obj.categories = ApiClient.convertToType(data['categories'], [CatalogCategoryDeleteQueryResourceObject]);
    }
    return obj;
  }
}

/**
 * Array of catalog categories to delete.
 * @member {Array.<module:model/CatalogCategoryDeleteQueryResourceObject>} categories
 */
CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes.prototype.categories = undefined;
