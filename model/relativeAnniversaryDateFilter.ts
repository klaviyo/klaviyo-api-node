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
export class RelativeAnniversaryDateFilter {
    'type': DateEnum | 'date';
    /**
    * Operators for relative date filters.  e.g. \"anniversary in the last 10 days\"
    */
    'operator': RelativeAnniversaryDateFilter.OperatorEnum | 'anniversary-last' | 'anniversary-next';
    /**
    * Units for relative date filters.
    */
    'unit': RelativeAnniversaryDateFilter.UnitEnum | 'day' | 'hour' | 'week';
    'quantity': number;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DateEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "RelativeAnniversaryDateFilter.OperatorEnum"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "RelativeAnniversaryDateFilter.UnitEnum"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return RelativeAnniversaryDateFilter.attributeTypeMap;
    }
}

export namespace RelativeAnniversaryDateFilter {
    export enum OperatorEnum {
        Last = <any> 'anniversary-last',
        Next = <any> 'anniversary-next'
    }
    export enum UnitEnum {
        Day = <any> 'day',
        Hour = <any> 'hour',
        Week = <any> 'week'
    }
}