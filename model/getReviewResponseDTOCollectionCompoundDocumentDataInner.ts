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
import { GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';
import { ReviewEnum } from './reviewEnum';
import { ReviewResponseDTOObjectResource } from './reviewResponseDTOObjectResource';
import { ReviewResponseDTOObjectResourceAttributes } from './reviewResponseDTOObjectResourceAttributes';
export class GetReviewResponseDTOCollectionCompoundDocumentDataInner extends ReviewResponseDTOObjectResource {
    'relationships'?: GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetReviewResponseDTOCollectionCompoundDocumentDataInner.attributeTypeMap);
    }
}

export namespace GetReviewResponseDTOCollectionCompoundDocumentDataInner {
}