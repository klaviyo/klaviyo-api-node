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
export class EmailContent {
    /**
    * The subject of the message
    */
    'subject'?: string | null;
    /**
    * Preview text associated with the message
    */
    'previewText'?: string | null;
    /**
    * The email the message should be sent from
    */
    'fromEmail'?: string | null;
    /**
    * The label associated with the from_email
    */
    'fromLabel'?: string | null;
    /**
    * Optional Reply-To email address
    */
    'replyToEmail'?: string | null;
    /**
    * Optional CC email address
    */
    'ccEmail'?: string | null;
    /**
    * Optional BCC email address
    */
    'bccEmail'?: string | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "previewText",
            "baseName": "preview_text",
            "type": "string"
        },
        {
            "name": "fromEmail",
            "baseName": "from_email",
            "type": "string"
        },
        {
            "name": "fromLabel",
            "baseName": "from_label",
            "type": "string"
        },
        {
            "name": "replyToEmail",
            "baseName": "reply_to_email",
            "type": "string"
        },
        {
            "name": "ccEmail",
            "baseName": "cc_email",
            "type": "string"
        },
        {
            "name": "bccEmail",
            "baseName": "bcc_email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EmailContent.attributeTypeMap;
    }
}
