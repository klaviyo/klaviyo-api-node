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
import { EventResponseObjectResource } from './eventResponseObjectResource';
import { GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner } from './getReviewResponseDTO20240715CollectionCompoundDocumentDataInner';
export class GetReviewResponseDTO20240715CollectionCompoundDocument {
    'data': Array<GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner>;
    'links'?: CollectionLinks;
    'included'?: Array<EventResponseObjectResource>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "CollectionLinks"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<EventResponseObjectResource>"
        }    ];

    static getAttributeTypeMap() {
        return GetReviewResponseDTO20240715CollectionCompoundDocument.attributeTypeMap;
    }
}
