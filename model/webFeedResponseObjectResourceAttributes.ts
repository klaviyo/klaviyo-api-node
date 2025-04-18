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
export class WebFeedResponseObjectResourceAttributes {
    /**
    * The name of this web feed
    */
    'name': string;
    /**
    * The URL of the web feed
    */
    'url': string;
    /**
    * The HTTP method for requesting the web feed
    */
    'requestMethod': WebFeedResponseObjectResourceAttributes.RequestMethodEnum | 'get' | 'post';
    /**
    * The content-type of the web feed
    */
    'contentType': WebFeedResponseObjectResourceAttributes.ContentTypeEnum | 'json' | 'xml';
    /**
    * Date and time when the web feed was created, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
    */
    'created': Date;
    /**
    * Date and time when the web feed was updated, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
    */
    'updated': Date;
    /**
    * The cache status of this web feed if it exists
    */
    'status'?: WebFeedResponseObjectResourceAttributes.StatusEnum | 'critical_nightly_refresh_timeout' | 'disabled' | 'ok' | 'warning_nightly_refresh_timeout' | 'warning_periodic_refresh_timeout' | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "requestMethod",
            "baseName": "request_method",
            "type": "WebFeedResponseObjectResourceAttributes.RequestMethodEnum"
        },
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "WebFeedResponseObjectResourceAttributes.ContentTypeEnum"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "WebFeedResponseObjectResourceAttributes.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return WebFeedResponseObjectResourceAttributes.attributeTypeMap;
    }
}

export namespace WebFeedResponseObjectResourceAttributes {
    export enum RequestMethodEnum {
        Get = <any> 'get',
        Post = <any> 'post'
    }
    export enum ContentTypeEnum {
        Json = <any> 'json',
        Xml = <any> 'xml'
    }
    export enum StatusEnum {
        CriticalNightlyRefreshTimeout = <any> 'critical_nightly_refresh_timeout',
        Disabled = <any> 'disabled',
        Ok = <any> 'ok',
        WarningNightlyRefreshTimeout = <any> 'warning_nightly_refresh_timeout',
        WarningPeriodicRefreshTimeout = <any> 'warning_periodic_refresh_timeout'
    }
}
