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
import {ContentSubObject} from './ContentSubObject.js';

/**
 * The CampaignMessagePartialUpdateQueryResourceObjectAttributes model module.
 * @module model/CampaignMessagePartialUpdateQueryResourceObjectAttributes
 * @version 2023-02-22
 */
export class CampaignMessagePartialUpdateQueryResourceObjectAttributes {
  /**
   * Constructs a new <code>CampaignMessagePartialUpdateQueryResourceObjectAttributes</code>.
   * @alias module:model/CampaignMessagePartialUpdateQueryResourceObjectAttributes
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CampaignMessagePartialUpdateQueryResourceObjectAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignMessagePartialUpdateQueryResourceObjectAttributes} obj Optional instance to populate.
   * @return {module:model/CampaignMessagePartialUpdateQueryResourceObjectAttributes} The populated <code>CampaignMessagePartialUpdateQueryResourceObjectAttributes</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignMessagePartialUpdateQueryResourceObjectAttributes();
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ContentSubObject.constructFromObject(data['content']);
    }
    return obj;
  }
}

/**
 * The label or name on the message
 * @member {String} label
 */
CampaignMessagePartialUpdateQueryResourceObjectAttributes.prototype.label = undefined;

/**
 * @member {module:model/ContentSubObject} content
 */
CampaignMessagePartialUpdateQueryResourceObjectAttributes.prototype.content = undefined;
