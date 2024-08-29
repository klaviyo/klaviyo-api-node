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
import { BlockEnum } from './blockEnum';
import { HorizontalRuleEnum } from './horizontalRuleEnum';
export class HorizontalRuleBlock {
    'contentType': BlockEnum | 'block';
    'type': HorizontalRuleEnum | 'horizontal_rule';
    'data': string | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "BlockEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "HorizontalRuleEnum"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return HorizontalRuleBlock.attributeTypeMap;
    }
}

export namespace HorizontalRuleBlock {
}