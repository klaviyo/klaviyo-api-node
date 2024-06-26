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
import { StringEnum } from './stringEnum';
export class StringArrayOperatorFilter {
    'type': StringEnum | 'string';
    /**
    * Operators for string-in-array filters.
    */
    'operator': StringArrayOperatorFilter.OperatorEnum | 'in' | 'not-in';
    'value': Array<string>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "StringEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "StringArrayOperatorFilter.OperatorEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return StringArrayOperatorFilter.attributeTypeMap;
    }
}

export namespace StringArrayOperatorFilter {
    export enum OperatorEnum {
        In = <any> 'in',
        NotIn = <any> 'not-in'
    }
}
