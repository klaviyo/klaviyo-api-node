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
 * The CatalogCategoryUpdateQueryResourceObjectAttributes model module.
 * @module model/CatalogCategoryUpdateQueryResourceObjectAttributes
 * @version 2023-02-22
 */
export class CatalogCategoryUpdateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CatalogCategoryUpdateQueryResourceObjectAttributes</code>.
   * @alias module:model/CatalogCategoryUpdateQueryResourceObjectAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CatalogCategoryUpdateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryUpdateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryUpdateQueryResourceObjectAttributes} The populated <code>CatalogCategoryUpdateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryUpdateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the catalog category.
 * @member {String} name
 */
CatalogCategoryUpdateQueryResourceObjectAttributes.prototype.name = undefined;
