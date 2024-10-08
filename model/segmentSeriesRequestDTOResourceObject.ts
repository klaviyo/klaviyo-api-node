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
import { SegmentSeriesReportEnum } from './segmentSeriesReportEnum';
import { SegmentSeriesRequestDTOResourceObjectAttributes } from './segmentSeriesRequestDTOResourceObjectAttributes';
export class SegmentSeriesRequestDTOResourceObject {
    'type': SegmentSeriesReportEnum | 'segment-series-report';
    'attributes': SegmentSeriesRequestDTOResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SegmentSeriesReportEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SegmentSeriesRequestDTOResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return SegmentSeriesRequestDTOResourceObject.attributeTypeMap;
    }
}

export namespace SegmentSeriesRequestDTOResourceObject {
}
