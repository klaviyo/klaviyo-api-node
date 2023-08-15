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
import {CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData} from './CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData.js';

/**
 * The CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate model module.
 * @module model/CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate
 * @version 2023-08-15
 */
export class CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate {
  /**
   * Constructs a new <code>CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate</code>.
   * @alias module:model/CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate
   * @class
   * @param data {module:model/CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate} obj Optional instance to populate.
   * @return {module:model/CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate} The populated <code>CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate();
      if (data.hasOwnProperty('data'))
        obj.data = CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData} data
 */
CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate.prototype.data = undefined;
