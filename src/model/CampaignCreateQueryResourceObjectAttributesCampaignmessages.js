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
import {CampaignMessageCreateQueryResourceObject} from './CampaignMessageCreateQueryResourceObject.js';

/**
 * The CampaignCreateQueryResourceObjectAttributesCampaignmessages model module.
 * @module model/CampaignCreateQueryResourceObjectAttributesCampaignmessages
 * @version 2023-08-15
 */
export class CampaignCreateQueryResourceObjectAttributesCampaignmessages {
  /**
   * Constructs a new <code>CampaignCreateQueryResourceObjectAttributesCampaignmessages</code>.
   * The message(s) associated with the campaign
   * @alias module:model/CampaignCreateQueryResourceObjectAttributesCampaignmessages
   * @class
   * @param data {Array.<module:model/CampaignMessageCreateQueryResourceObject>} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignCreateQueryResourceObjectAttributesCampaignmessages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCreateQueryResourceObjectAttributesCampaignmessages} obj Optional instance to populate.
   * @return {module:model/CampaignCreateQueryResourceObjectAttributesCampaignmessages} The populated <code>CampaignCreateQueryResourceObjectAttributesCampaignmessages</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignCreateQueryResourceObjectAttributesCampaignmessages();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CampaignMessageCreateQueryResourceObject]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CampaignMessageCreateQueryResourceObject>} data
 */
CampaignCreateQueryResourceObjectAttributesCampaignmessages.prototype.data = undefined;
