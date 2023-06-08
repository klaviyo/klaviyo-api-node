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
import {CampaignRecipientEstimationJobCreateQueryResourceObjectAttributes} from './CampaignRecipientEstimationJobCreateQueryResourceObjectAttributes.js';
import {CampaignRecipientEstimationJobEnum} from './CampaignRecipientEstimationJobEnum.js';

/**
 * The CampaignRecipientEstimationJobCreateQueryResourceObject model module.
 * @module model/CampaignRecipientEstimationJobCreateQueryResourceObject
 * @version 2023-02-22
 */
export class CampaignRecipientEstimationJobCreateQueryResourceObject {
  /**
   * Constructs a new <code>CampaignRecipientEstimationJobCreateQueryResourceObject</code>.
   * @alias module:model/CampaignRecipientEstimationJobCreateQueryResourceObject
   * @class
   * @param type {module:model/CampaignRecipientEstimationJobEnum} 
   * @param attributes {module:model/CampaignRecipientEstimationJobCreateQueryResourceObjectAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CampaignRecipientEstimationJobCreateQueryResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignRecipientEstimationJobCreateQueryResourceObject} obj Optional instance to populate.
   * @return {module:model/CampaignRecipientEstimationJobCreateQueryResourceObject} The populated <code>CampaignRecipientEstimationJobCreateQueryResourceObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignRecipientEstimationJobCreateQueryResourceObject();
      if (data.hasOwnProperty('type'))
        obj.type = CampaignRecipientEstimationJobEnum.constructFromObject(data['type']);
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CampaignRecipientEstimationJobCreateQueryResourceObjectAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignRecipientEstimationJobEnum} type
 */
CampaignRecipientEstimationJobCreateQueryResourceObject.prototype.type = undefined;

/**
 * @member {module:model/CampaignRecipientEstimationJobCreateQueryResourceObjectAttributes} attributes
 */
CampaignRecipientEstimationJobCreateQueryResourceObject.prototype.attributes = undefined;
