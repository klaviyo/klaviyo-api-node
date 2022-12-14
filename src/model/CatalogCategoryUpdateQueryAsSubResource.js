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
import {CatalogCategoryUpdateQueryAsSubResourceAttributes} from './CatalogCategoryUpdateQueryAsSubResourceAttributes.js';
import {CatalogVariantCreateQueryAsSubResourceRelationships} from './CatalogVariantCreateQueryAsSubResourceRelationships.js';

/**
 * The CatalogCategoryUpdateQueryAsSubResource model module.
 * @module model/CatalogCategoryUpdateQueryAsSubResource
 * @version 2022-10-17
 */
export class CatalogCategoryUpdateQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogCategoryUpdateQueryAsSubResource</code>.
   * @alias module:model/CatalogCategoryUpdateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogCategoryUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/CatalogCategoryUpdateQueryAsSubResourceAttributes} 
   */
  constructor(type, id, attributes) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogCategoryUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryUpdateQueryAsSubResource} The populated <code>CatalogCategoryUpdateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogCategoryUpdateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogCategoryUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('relationships'))
        obj.relationships = CatalogVariantCreateQueryAsSubResourceRelationships.constructFromObject(data['relationships']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogCategoryUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-category"
   * @const
   */
  catalogCategory: "catalog-category"
};
/**
 * @member {module:model/CatalogCategoryUpdateQueryAsSubResource.TypeEnum} type
 */
CatalogCategoryUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
CatalogCategoryUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/CatalogCategoryUpdateQueryAsSubResourceAttributes} attributes
 */
CatalogCategoryUpdateQueryAsSubResource.prototype.attributes = undefined;

/**
 * @member {module:model/CatalogVariantCreateQueryAsSubResourceRelationships} relationships
 */
CatalogCategoryUpdateQueryAsSubResource.prototype.relationships = undefined;

