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
export class SMSTransactional {
    /**
    * Whether or not this profile is subscribed to receive transactional SMS.
    */
    'canReceiveSmsTransactional': boolean;
    /**
    * The consent status for SMS Transactional.
    */
    'consent': string;
    /**
    * The timestamp when consent was recorded or updated for Transactional SMS messaging , in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'consentTimestamp'?: Date | null;
    /**
    * The method by which the profile was subscribed to Transactional SMS messaging .
    */
    'method'?: string | null;
    /**
    * Additional details about the method which the profile was subscribed to Transactional SMS messaging. This may be empty if no details were provided.
    */
    'methodDetail'?: string | null = '';
    /**
    * The timestamp when the SMS consent record was last modified, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'lastUpdated'?: Date | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "canReceiveSmsTransactional",
            "baseName": "can_receive_sms_transactional",
            "type": "boolean"
        },
        {
            "name": "consent",
            "baseName": "consent",
            "type": "string"
        },
        {
            "name": "consentTimestamp",
            "baseName": "consent_timestamp",
            "type": "Date"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "methodDetail",
            "baseName": "method_detail",
            "type": "string"
        },
        {
            "name": "lastUpdated",
            "baseName": "last_updated",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return SMSTransactional.attributeTypeMap;
    }
}

