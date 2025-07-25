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
import { FlowPushNotificationAdditionalFilters } from './flowPushNotificationAdditionalFilters';
import { FlowPushNotificationBadgeOptions } from './flowPushNotificationBadgeOptions';
export class FlowPushNotification {
    'title'?: string | null;
    'body': string;
    'sound'?: boolean = false;
    'badge'?: boolean = false;
    'badgeOptions'?: FlowPushNotificationBadgeOptions;
    /**
    * The id of an ImageAsset. If provided, this will take precedence over a dynamic_image.
    */
    'imageId'?: string | null;
    /**
    * A dynamic image asset to include in the push notification.
    */
    'dynamicImage'?: string | null;
    /**
    * See PushLinkAction in app.  This is not a flow action, but the literal action that should be taken when the push notification is tapped.
    */
    'onOpen'?: FlowPushNotification.OnOpenEnum | 'home' | 'link' = FlowPushNotification.OnOpenEnum.Home;
    'iosLink'?: string | null;
    'androidLink'?: string | null;
    'conversionMetricId'?: string | null;
    'smartSendingEnabled'?: boolean = true;
    'additionalFilters'?: FlowPushNotificationAdditionalFilters | null;
    'name'?: string | null;
    'id'?: string | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "sound",
            "baseName": "sound",
            "type": "boolean"
        },
        {
            "name": "badge",
            "baseName": "badge",
            "type": "boolean"
        },
        {
            "name": "badgeOptions",
            "baseName": "badge_options",
            "type": "FlowPushNotificationBadgeOptions"
        },
        {
            "name": "imageId",
            "baseName": "image_id",
            "type": "string"
        },
        {
            "name": "dynamicImage",
            "baseName": "dynamic_image",
            "type": "string"
        },
        {
            "name": "onOpen",
            "baseName": "on_open",
            "type": "FlowPushNotification.OnOpenEnum"
        },
        {
            "name": "iosLink",
            "baseName": "ios_link",
            "type": "string"
        },
        {
            "name": "androidLink",
            "baseName": "android_link",
            "type": "string"
        },
        {
            "name": "conversionMetricId",
            "baseName": "conversion_metric_id",
            "type": "string"
        },
        {
            "name": "smartSendingEnabled",
            "baseName": "smart_sending_enabled",
            "type": "boolean"
        },
        {
            "name": "additionalFilters",
            "baseName": "additional_filters",
            "type": "FlowPushNotificationAdditionalFilters"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FlowPushNotification.attributeTypeMap;
    }
}

export namespace FlowPushNotification {
    export enum OnOpenEnum {
        Home = <any> 'home',
        Link = <any> 'link'
    }
}
