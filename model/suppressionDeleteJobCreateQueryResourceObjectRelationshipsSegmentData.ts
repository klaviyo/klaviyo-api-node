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
import { SegmentEnum } from './segmentEnum';
export class SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData {
    'type': SegmentEnum | 'segment';
    /**
    * The segment to pull the profiles to remove suppressions from
    */
    'id': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SegmentEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData.attributeTypeMap;
    }
}

export namespace SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData {
}