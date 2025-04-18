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
import { ButtonEnum } from './buttonEnum';
export class ButtonBlock {
    'contentType': BlockEnum | 'block';
    'type': ButtonEnum | 'button';
    'data': any | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "BlockEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ButtonEnum"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return ButtonBlock.attributeTypeMap;
    }
}

export namespace ButtonBlock {
}
