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
import { BooleanFilter } from './booleanFilter';
import { IsDoubleOptInEnum } from './isDoubleOptInEnum';
export class DoubleOptinFilter {
    'field': IsDoubleOptInEnum | 'is_double_opt_in';
    'filter': BooleanFilter;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "IsDoubleOptInEnum"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "BooleanFilter"
        }    ];

    static getAttributeTypeMap() {
        return DoubleOptinFilter.attributeTypeMap;
    }
}

export namespace DoubleOptinFilter {
}
