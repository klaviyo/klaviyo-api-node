/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationships } from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
import { CampaignMessageEnum } from './campaignMessageEnum';

export class CampaignMessageAssignTemplateQueryResourceObject {
    'type': CampaignMessageEnum;
    /**
    * The message ID to be assigned to
    */
    'id': string;
    'relationships'?: CampaignMessageAssignTemplateQueryResourceObjectRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CampaignMessageEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "CampaignMessageAssignTemplateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return CampaignMessageAssignTemplateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CampaignMessageAssignTemplateQueryResourceObject {
}