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
import { CampaignValuesReportEnum } from './campaignValuesReportEnum';
import { ObjectLinks } from './objectLinks';
import { PostCampaignValuesResponseDTODataAttributes } from './postCampaignValuesResponseDTODataAttributes';
import { PostCampaignValuesResponseDTODataRelationships } from './postCampaignValuesResponseDTODataRelationships';
export class PostCampaignValuesResponseDTOData {
    'type': CampaignValuesReportEnum | 'campaign-values-report';
    'attributes': PostCampaignValuesResponseDTODataAttributes;
    'relationships'?: PostCampaignValuesResponseDTODataRelationships;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CampaignValuesReportEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PostCampaignValuesResponseDTODataAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "PostCampaignValuesResponseDTODataRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostCampaignValuesResponseDTOData.attributeTypeMap;
    }
}

export namespace PostCampaignValuesResponseDTOData {
}