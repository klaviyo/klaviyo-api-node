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
import { CollectionLinks } from './collectionLinks';
import { GetCampaignMessageResponseCompoundDocumentData } from './getCampaignMessageResponseCompoundDocumentData';
import { GetCampaignMessageResponseCompoundDocumentIncludedInner } from './getCampaignMessageResponseCompoundDocumentIncludedInner';

export class GetCampaignMessageResponseCollectionCompoundDocument {
    'data': Array<GetCampaignMessageResponseCompoundDocumentData>;
    'links': CollectionLinks;
    'included'?: Array<GetCampaignMessageResponseCompoundDocumentIncludedInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetCampaignMessageResponseCompoundDocumentData>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "CollectionLinks"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<GetCampaignMessageResponseCompoundDocumentIncludedInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetCampaignMessageResponseCollectionCompoundDocument.attributeTypeMap;
    }
}
