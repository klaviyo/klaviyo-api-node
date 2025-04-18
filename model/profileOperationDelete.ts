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
export class ProfileOperationDelete {
    /**
    * The type of operation to perform on a profile property.
    */
    'operator': ProfileOperationDelete.OperatorEnum | 'delete';
    'propertyKey': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "ProfileOperationDelete.OperatorEnum"
        },
        {
            "name": "propertyKey",
            "baseName": "property_key",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProfileOperationDelete.attributeTypeMap;
    }
}

export namespace ProfileOperationDelete {
    export enum OperatorEnum {
        Delete = <any> 'delete'
    }
}
