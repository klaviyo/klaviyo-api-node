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
import { LessThanEnum } from './lessThanEnum';
import { NumericEnum } from './numericEnum';
export class LessThanPositiveNumericFilter {
    'type': NumericEnum | 'numeric';
    'operator': LessThanEnum | 'less-than';
    'value': number;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "NumericEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "LessThanEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return LessThanPositiveNumericFilter.attributeTypeMap;
    }
}

export namespace LessThanPositiveNumericFilter {
}
