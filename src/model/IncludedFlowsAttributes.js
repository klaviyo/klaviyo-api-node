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

/**
 * The IncludedFlowsAttributes model module.
 * @module model/IncludedFlowsAttributes
 * @version 2022-10-17
 */
export class IncludedFlowsAttributes {
  /**
   * Constructs a new <code>IncludedFlowsAttributes</code>.
   * @alias module:model/IncludedFlowsAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IncludedFlowsAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedFlowsAttributes} obj Optional instance to populate.
   * @return {module:model/IncludedFlowsAttributes} The populated <code>IncludedFlowsAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IncludedFlowsAttributes();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('archived'))
        obj.archived = ApiClient.convertToType(data['archived'], 'Boolean');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
      if (data.hasOwnProperty('trigger_type'))
        obj.triggerType = ApiClient.convertToType(data['trigger_type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
IncludedFlowsAttributes.prototype.name = undefined;

/**
 * @member {String} status
 */
IncludedFlowsAttributes.prototype.status = undefined;

/**
 * @member {Boolean} archived
 */
IncludedFlowsAttributes.prototype.archived = undefined;

/**
 * @member {Date} created
 */
IncludedFlowsAttributes.prototype.created = undefined;

/**
 * @member {Date} updated
 */
IncludedFlowsAttributes.prototype.updated = undefined;

/**
 * @member {String} triggerType
 */
IncludedFlowsAttributes.prototype.triggerType = undefined;

