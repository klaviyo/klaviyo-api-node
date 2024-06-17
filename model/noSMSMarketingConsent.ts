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
import { NoSMSMarketingConsentConsentStatus } from './noSMSMarketingConsentConsentStatus';
import { SmsEnum } from './smsEnum';
export class NoSMSMarketingConsent {
    'channel': SmsEnum | 'sms';
    'canReceiveMarketing': NoSMSMarketingConsent.CanReceiveMarketingEnum | false;
    'consentStatus': NoSMSMarketingConsentConsentStatus;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "SmsEnum"
        },
        {
            "name": "canReceiveMarketing",
            "baseName": "can_receive_marketing",
            "type": "NoSMSMarketingConsent.CanReceiveMarketingEnum"
        },
        {
            "name": "consentStatus",
            "baseName": "consent_status",
            "type": "NoSMSMarketingConsentConsentStatus"
        }    ];

    static getAttributeTypeMap() {
        return NoSMSMarketingConsent.attributeTypeMap;
    }
}

export namespace NoSMSMarketingConsent {
    export enum CanReceiveMarketingEnum {
        False = <any> false
    }
}