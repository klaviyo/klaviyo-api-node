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
export class WebFeedCreateQueryResourceObjectAttributes {
    /**
    * The name for this web feed
    */
    'name': string;
    /**
    * The URL of the web feed
    */
    'url': string;
    /**
    * The HTTP method for requesting the web feed
    */
    'requestMethod': WebFeedCreateQueryResourceObjectAttributes.RequestMethodEnum | 'get' | 'post';
    /**
    * The content-type of the web feed
    */
    'contentType': WebFeedCreateQueryResourceObjectAttributes.ContentTypeEnum | 'json' | 'xml';


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
            "type": "WebFeedCreateQueryResourceObjectAttributes.RequestMethodEnum"
        },
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "WebFeedCreateQueryResourceObjectAttributes.ContentTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return WebFeedCreateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

export namespace WebFeedCreateQueryResourceObjectAttributes {
    export enum RequestMethodEnum {
        Get = <any> 'get',
        Post = <any> 'post'
    }
    export enum ContentTypeEnum {
        Json = <any> 'json',
        Xml = <any> 'xml'
    }
}
