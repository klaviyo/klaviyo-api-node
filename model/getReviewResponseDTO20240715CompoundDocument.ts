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
import { EventResponseObjectResource } from './eventResponseObjectResource';
import { GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner } from './getReviewResponseDTO20240715CollectionCompoundDocumentDataInner';
export class GetReviewResponseDTO20240715CompoundDocument {
    'data': GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner;
    'included'?: Array<EventResponseObjectResource>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<EventResponseObjectResource>"
        }    ];

    static getAttributeTypeMap() {
        return GetReviewResponseDTO20240715CompoundDocument.attributeTypeMap;
    }
}
