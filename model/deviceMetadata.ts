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
export class DeviceMetadata {
    /**
    * Relatively stable ID for the device. Will update on app uninstall and reinstall
    */
    'deviceId'?: string | null;
    /**
    * The name of the SDK used to create the push token.
    */
    'klaviyoSdk'?: DeviceMetadata.KlaviyoSdkEnum | 'android' | 'flutter_community' | 'react_native' | 'swift' | null;
    /**
    * The version of the SDK used to create the push token
    */
    'sdkVersion'?: string | null;
    /**
    * The model of the device
    */
    'deviceModel'?: string | null;
    /**
    * The name of the operating system on the device.
    */
    'osName'?: DeviceMetadata.OsNameEnum | 'android' | 'ios' | 'ipados' | 'macos' | 'tvos' | null;
    /**
    * The version of the operating system on the device
    */
    'osVersion'?: string | null;
    /**
    * The manufacturer of the device
    */
    'manufacturer'?: string | null;
    /**
    * The name of the app that created the push token
    */
    'appName'?: string | null;
    /**
    * The version of the app that created the push token
    */
    'appVersion'?: string | null;
    /**
    * The build of the app that created the push token
    */
    'appBuild'?: string | null;
    /**
    * The ID of the app that created the push token
    */
    'appId'?: string | null;
    /**
    * The environment in which the push token was created
    */
    'environment'?: DeviceMetadata.EnvironmentEnum | 'debug' | 'release' | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deviceId",
            "baseName": "device_id",
            "type": "string"
        },
        {
            "name": "klaviyoSdk",
            "baseName": "klaviyo_sdk",
            "type": "DeviceMetadata.KlaviyoSdkEnum"
        },
        {
            "name": "sdkVersion",
            "baseName": "sdk_version",
            "type": "string"
        },
        {
            "name": "deviceModel",
            "baseName": "device_model",
            "type": "string"
        },
        {
            "name": "osName",
            "baseName": "os_name",
            "type": "DeviceMetadata.OsNameEnum"
        },
        {
            "name": "osVersion",
            "baseName": "os_version",
            "type": "string"
        },
        {
            "name": "manufacturer",
            "baseName": "manufacturer",
            "type": "string"
        },
        {
            "name": "appName",
            "baseName": "app_name",
            "type": "string"
        },
        {
            "name": "appVersion",
            "baseName": "app_version",
            "type": "string"
        },
        {
            "name": "appBuild",
            "baseName": "app_build",
            "type": "string"
        },
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "string"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "DeviceMetadata.EnvironmentEnum"
        }    ];

    static getAttributeTypeMap() {
        return DeviceMetadata.attributeTypeMap;
    }
}

export namespace DeviceMetadata {
    export enum KlaviyoSdkEnum {
        Android = <any> 'android',
        FlutterCommunity = <any> 'flutter_community',
        ReactNative = <any> 'react_native',
        Swift = <any> 'swift'
    }
    export enum OsNameEnum {
        Android = <any> 'android',
        Ios = <any> 'ios',
        Ipados = <any> 'ipados',
        Macos = <any> 'macos',
        Tvos = <any> 'tvos'
    }
    export enum EnvironmentEnum {
        Debug = <any> 'debug',
        Release = <any> 'release'
    }
}
