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
import { PostBulkProfileSuppressionsCreateJobResponseData } from './postBulkProfileSuppressionsCreateJobResponseData';
export class PostBulkProfileSuppressionsCreateJobResponse {
    'data': PostBulkProfileSuppressionsCreateJobResponseData;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "PostBulkProfileSuppressionsCreateJobResponseData"
        }    ];

    static getAttributeTypeMap() {
        return PostBulkProfileSuppressionsCreateJobResponse.attributeTypeMap;
    }
}

