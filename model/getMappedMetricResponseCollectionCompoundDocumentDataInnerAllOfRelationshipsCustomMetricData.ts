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
import { CustomMetricEnum } from './customMetricEnum';
export class GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData {
    'type': CustomMetricEnum | 'custom-metric';
    /**
    * The ID of the custom metric for this mapping.
    */
    'id': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CustomMetricEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData.attributeTypeMap;
    }
}

export namespace GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData {
}
