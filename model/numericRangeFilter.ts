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
import { NumericEnum } from './numericEnum';
export class NumericRangeFilter {
    'type': NumericEnum | 'numeric';
    /**
    * Operators for numeric range filters.
    */
    'operator': NumericRangeFilter.OperatorEnum | 'between';
    'start': number;
    'end': number;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "NumericEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "NumericRangeFilter.OperatorEnum"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return NumericRangeFilter.attributeTypeMap;
    }
}

export namespace NumericRangeFilter {
    export enum OperatorEnum {
        Between = <any> 'between'
    }
}
