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
 * Enum class MetricAggregateEnum.
 * @enum {String}
 * @readonly
 */
const MetricAggregateEnum = {
  /**
   * value: "metric-aggregate"
   * @const
   */
  metricAggregate: "metric-aggregate",

  /**
   * Returns a <code>MetricAggregateEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/MetricAggregateEnum} The enum <code>MetricAggregateEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {MetricAggregateEnum};