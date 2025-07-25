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
import { DataSourceCreateQueryResourceObjectAttributes } from './dataSourceCreateQueryResourceObjectAttributes';
import { DataSourceEnum } from './dataSourceEnum';
export class DataSourceCreateQueryResourceObject {
    'type': DataSourceEnum | 'data-source';
    'attributes': DataSourceCreateQueryResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DataSourceEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "DataSourceCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return DataSourceCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace DataSourceCreateQueryResourceObject {
}
