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
import { GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';
import { WebhookEnum } from './webhookEnum';
import { WebhookResponseObjectResourceAttributes } from './webhookResponseObjectResourceAttributes';
export class PostWebhookResponseData {
    'type': WebhookEnum | 'webhook';
    /**
    * The ID of the webhook.
    */
    'id': string;
    'attributes': WebhookResponseObjectResourceAttributes;
    'relationships'?: GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "WebhookEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "WebhookResponseObjectResourceAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostWebhookResponseData.attributeTypeMap;
    }
}

export namespace PostWebhookResponseData {
}
