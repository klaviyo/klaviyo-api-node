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
 * The MetricCreateQuery model module.
 * @module model/MetricCreateQuery
 * @version 2022-10-17
 */
export class MetricCreateQuery {
  /**
   * Constructs a new <code>MetricCreateQuery</code>.
   * @alias module:model/MetricCreateQuery
   * @class
   * @param name {String} 
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>MetricCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricCreateQuery} obj Optional instance to populate.
   * @return {module:model/MetricCreateQuery} The populated <code>MetricCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MetricCreateQuery();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('service'))
        obj.service = ApiClient.convertToType(data['service'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
MetricCreateQuery.prototype.name = undefined;

/**
 * @member {String} service
 */
MetricCreateQuery.prototype.service = undefined;

