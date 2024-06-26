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
import { IntegrationEnum } from './integrationEnum';
import { MethodEnum } from './methodEnum';
import { ShopifyIntegrationFilter } from './shopifyIntegrationFilter';
export class ShopifyIntegrationMethodFilter {
    'field': MethodEnum | 'method';
    'method': IntegrationEnum | 'integration';
    'filter': ShopifyIntegrationFilter;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "MethodEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "IntegrationEnum"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ShopifyIntegrationFilter"
        }    ];

    static getAttributeTypeMap() {
        return ShopifyIntegrationMethodFilter.attributeTypeMap;
    }
}

export namespace ShopifyIntegrationMethodFilter {
}
