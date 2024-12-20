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
import { ListEnum } from './listEnum';
export class ListSetFilter {
    'type': ListEnum | 'list';
    /**
    * Operators for list contains set filters.
    */
    'operator': ListSetFilter.OperatorEnum | 'contains-all' | 'contains-any' | 'not-contains-all' | 'not-contains-any';
    'value': Array<string>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ListEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "ListSetFilter.OperatorEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ListSetFilter.attributeTypeMap;
    }
}

export namespace ListSetFilter {
    export enum OperatorEnum {
        ContainsAll = <any> 'contains-all',
        ContainsAny = <any> 'contains-any',
        NotContainsAll = <any> 'not-contains-all',
        NotContainsAny = <any> 'not-contains-any'
    }
}
