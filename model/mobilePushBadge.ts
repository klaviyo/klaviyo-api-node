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
export class MobilePushBadge {
    /**
    * Whether to display a badge on the app icon
    */
    'display': MobilePushBadge.DisplayEnum | true;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "display",
            "baseName": "display",
            "type": "MobilePushBadge.DisplayEnum"
        }    ];

    static getAttributeTypeMap() {
        return MobilePushBadge.attributeTypeMap;
    }
}

export namespace MobilePushBadge {
    export enum DisplayEnum {
        True = <any> true
    }
}