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
import { SMSMarketing } from './sMSMarketing';

export class SMSChannel {
    'marketing'?: SMSMarketing;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "marketing",
            "baseName": "marketing",
            "type": "SMSMarketing"
        }    ];

    static getAttributeTypeMap() {
        return SMSChannel.attributeTypeMap;
    }
}
