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
import { PostSegmentSeriesResponseDTODataAttributes } from './postSegmentSeriesResponseDTODataAttributes';
import { SegmentSeriesReportEnum } from './segmentSeriesReportEnum';
export class PostSegmentSeriesResponseDTOData {
    'type': SegmentSeriesReportEnum | 'segment-series-report';
    'attributes': PostSegmentSeriesResponseDTODataAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SegmentSeriesReportEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PostSegmentSeriesResponseDTODataAttributes"
        }    ];

    static getAttributeTypeMap() {
        return PostSegmentSeriesResponseDTOData.attributeTypeMap;
    }
}

export namespace PostSegmentSeriesResponseDTOData {
}