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
import { UnpublishedEnum } from './unpublishedEnum';
export class ReviewStatusUnpublished {
    'value': UnpublishedEnum | 'unpublished';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "UnpublishedEnum"
        }    ];

    static getAttributeTypeMap() {
        return ReviewStatusUnpublished.attributeTypeMap;
    }
}

export namespace ReviewStatusUnpublished {
}
