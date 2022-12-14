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
import {TemplateCloneQueryAsSubResourceAttributes} from './TemplateCloneQueryAsSubResourceAttributes.js';

/**
 * The TemplateCloneQueryAsSubResource model module.
 * @module model/TemplateCloneQueryAsSubResource
 * @version 2022-10-17
 */
export class TemplateCloneQueryAsSubResource {
  /**
   * Constructs a new <code>TemplateCloneQueryAsSubResource</code>.
   * @alias module:model/TemplateCloneQueryAsSubResource
   * @class
   * @param type {module:model/TemplateCloneQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/TemplateCloneQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TemplateCloneQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateCloneQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TemplateCloneQueryAsSubResource} The populated <code>TemplateCloneQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateCloneQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = TemplateCloneQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
TemplateCloneQueryAsSubResource.TypeEnum = {
  /**
   * value: "template"
   * @const
   */
  template: "template"
};
/**
 * @member {module:model/TemplateCloneQueryAsSubResource.TypeEnum} type
 */
TemplateCloneQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/TemplateCloneQueryAsSubResourceAttributes} attributes
 */
TemplateCloneQueryAsSubResource.prototype.attributes = undefined;

