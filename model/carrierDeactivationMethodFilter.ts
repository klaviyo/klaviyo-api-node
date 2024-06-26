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
import { CarrierDeactivationEnum } from './carrierDeactivationEnum';
import { MethodEnum } from './methodEnum';
export class CarrierDeactivationMethodFilter {
    'field': MethodEnum | 'method';
    'method': CarrierDeactivationEnum | 'carrier_deactivation';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "MethodEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "CarrierDeactivationEnum"
        }    ];

    static getAttributeTypeMap() {
        return CarrierDeactivationMethodFilter.attributeTypeMap;
    }
}

export namespace CarrierDeactivationMethodFilter {
}
