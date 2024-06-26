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
import { HasPushMarketing } from './hasPushMarketing';
import { PushEnum } from './pushEnum';
export class HasPushMarketingConsent {
    'channel': PushEnum | 'push';
    'canReceiveMarketing': HasPushMarketingConsent.CanReceiveMarketingEnum | true;
    'consentStatus': HasPushMarketing;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "PushEnum"
        },
        {
            "name": "canReceiveMarketing",
            "baseName": "can_receive_marketing",
            "type": "HasPushMarketingConsent.CanReceiveMarketingEnum"
        },
        {
            "name": "consentStatus",
            "baseName": "consent_status",
            "type": "HasPushMarketing"
        }    ];

    static getAttributeTypeMap() {
        return HasPushMarketingConsent.attributeTypeMap;
    }
}

export namespace HasPushMarketingConsent {
    export enum CanReceiveMarketingEnum {
        True = <any> true
    }
}
