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
import { ProfileSuppressionBulkDeleteJobEnum } from './profileSuppressionBulkDeleteJobEnum';
import { SuppressionDeleteJobCreateQueryResourceObjectAttributes } from './suppressionDeleteJobCreateQueryResourceObjectAttributes';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationships } from './suppressionDeleteJobCreateQueryResourceObjectRelationships';
export class SuppressionDeleteJobCreateQueryResourceObject {
    'type': ProfileSuppressionBulkDeleteJobEnum | 'profile-suppression-bulk-delete-job';
    'attributes': SuppressionDeleteJobCreateQueryResourceObjectAttributes;
    'relationships'?: SuppressionDeleteJobCreateQueryResourceObjectRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfileSuppressionBulkDeleteJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SuppressionDeleteJobCreateQueryResourceObjectAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SuppressionDeleteJobCreateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return SuppressionDeleteJobCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace SuppressionDeleteJobCreateQueryResourceObject {
}
