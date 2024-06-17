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
import { FlowSeriesReportEnum } from './flowSeriesReportEnum';
import { ObjectLinks } from './objectLinks';
import { PostFlowSeriesResponseDTODataAttributes } from './postFlowSeriesResponseDTODataAttributes';
import { PostFlowValuesResponseDTODataRelationships } from './postFlowValuesResponseDTODataRelationships';
export class PostFlowSeriesResponseDTOData {
    'type': FlowSeriesReportEnum | 'flow-series-report';
    'attributes': PostFlowSeriesResponseDTODataAttributes;
    'relationships'?: PostFlowValuesResponseDTODataRelationships;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FlowSeriesReportEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PostFlowSeriesResponseDTODataAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "PostFlowValuesResponseDTODataRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostFlowSeriesResponseDTOData.attributeTypeMap;
    }
}

export namespace PostFlowSeriesResponseDTOData {
}