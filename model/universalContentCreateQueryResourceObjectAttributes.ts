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
import { TextBlock } from './textBlock';
export class UniversalContentCreateQueryResourceObjectAttributes {
    /**
    * The name for this universal content
    */
    'name': string;
    'definition': TextBlock;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "definition",
            "baseName": "definition",
            "type": "TextBlock"
        }    ];

    static getAttributeTypeMap() {
        return UniversalContentCreateQueryResourceObjectAttributes.attributeTypeMap;
    }
}
