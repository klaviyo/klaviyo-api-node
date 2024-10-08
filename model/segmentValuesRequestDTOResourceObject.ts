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
import { SegmentValuesReportEnum } from './segmentValuesReportEnum';
import { SegmentValuesRequestDTOResourceObjectAttributes } from './segmentValuesRequestDTOResourceObjectAttributes';
export class SegmentValuesRequestDTOResourceObject {
    'type': SegmentValuesReportEnum | 'segment-values-report';
    'attributes': SegmentValuesRequestDTOResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SegmentValuesReportEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SegmentValuesRequestDTOResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return SegmentValuesRequestDTOResourceObject.attributeTypeMap;
    }
}

export namespace SegmentValuesRequestDTOResourceObject {
}
