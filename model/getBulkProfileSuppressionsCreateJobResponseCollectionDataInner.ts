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
import { BulkProfileSuppressionsCreateJobResponseObjectResource } from './bulkProfileSuppressionsCreateJobResponseObjectResource';
import { BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes } from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
import { GetProfileResponseDataAllOfRelationships } from './getProfileResponseDataAllOfRelationships';
import { ObjectLinks } from './objectLinks';
import { ProfileSuppressionBulkCreateJobEnum } from './profileSuppressionBulkCreateJobEnum';
export class GetBulkProfileSuppressionsCreateJobResponseCollectionDataInner extends BulkProfileSuppressionsCreateJobResponseObjectResource {
    'relationships'?: GetProfileResponseDataAllOfRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetProfileResponseDataAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetBulkProfileSuppressionsCreateJobResponseCollectionDataInner.attributeTypeMap);
    }
}

export namespace GetBulkProfileSuppressionsCreateJobResponseCollectionDataInner {
}