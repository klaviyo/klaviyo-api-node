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
import { GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner } from './getReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner';
import { RelationshipLinks } from './relationshipLinks';
export class GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationshipsEvents {
    'data'?: Array<GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner>;
    'links'?: RelationshipLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "RelationshipLinks"
        }    ];

    static getAttributeTypeMap() {
        return GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationshipsEvents.attributeTypeMap;
    }
}
