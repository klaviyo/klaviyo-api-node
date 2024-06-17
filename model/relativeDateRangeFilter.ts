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
export class RelativeDateRangeFilter {
    'type': DateEnum | 'date';
    /**
    * Operators for relative date range filters.  e.g. \"between 10 and 20 days ago\"
    */
    'operator': RelativeDateRangeFilter.OperatorEnum | 'between';
    'start': number;
    'end': number;
    /**
    * Units for relative date filters.
    */
    'unit': RelativeDateRangeFilter.UnitEnum | 'day' | 'hour' | 'week';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DateEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "RelativeDateRangeFilter.OperatorEnum"
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
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "RelativeDateRangeFilter.UnitEnum"
        }    ];

    static getAttributeTypeMap() {
        return RelativeDateRangeFilter.attributeTypeMap;
    }
}

export namespace RelativeDateRangeFilter {
    export enum OperatorEnum {
        Between = <any> 'between'
    }
    export enum UnitEnum {
        Day = <any> 'day',
        Hour = <any> 'hour',
        Week = <any> 'week'
    }
}