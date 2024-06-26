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
import { DateEnum } from './dateEnum';
export class StaticDateRangeFilter {
    'type': DateEnum | 'date';
    /**
    * Operators for static date range filters.  E.g. \"between 2023-01-01 and 2023-02-01\"
    */
    'operator': StaticDateRangeFilter.OperatorEnum | 'between-static';
    'start': Date;
    'end': Date;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DateEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "StaticDateRangeFilter.OperatorEnum"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "Date"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return StaticDateRangeFilter.attributeTypeMap;
    }
}

export namespace StaticDateRangeFilter {
    export enum OperatorEnum {
        BetweenStatic = <any> 'between-static'
    }
}
