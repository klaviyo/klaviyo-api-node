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
import { PriorityEnum } from './priorityEnum';
import { ProfilePredictiveAnalyticsChannelAffinityPriorityFilter } from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
import { ProfilePredictiveAnalyticsEnum } from './profilePredictiveAnalyticsEnum';
export class ProfilePredictiveAnalyticsChannelAffinityPriorityCondition {
    'type': ProfilePredictiveAnalyticsEnum | 'profile-predictive-analytics';
    /**
    * Possible dimension for channel affinity criterion.
    */
    'dimension': ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.DimensionEnum | 'channel_affinity';
    'measurement': PriorityEnum | 'priority';
    /**
    * Possible channels in a channel affinity definition.
    */
    'predictedChannel': ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.PredictedChannelEnum | 'email' | 'push' | 'sms';
    'filter': ProfilePredictiveAnalyticsChannelAffinityPriorityFilter;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfilePredictiveAnalyticsEnum"
        },
        {
            "name": "dimension",
            "baseName": "dimension",
            "type": "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.DimensionEnum"
        },
        {
            "name": "measurement",
            "baseName": "measurement",
            "type": "PriorityEnum"
        },
        {
            "name": "predictedChannel",
            "baseName": "predicted_channel",
            "type": "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.PredictedChannelEnum"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ProfilePredictiveAnalyticsChannelAffinityPriorityFilter"
        }    ];

    static getAttributeTypeMap() {
        return ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.attributeTypeMap;
    }
}

export namespace ProfilePredictiveAnalyticsChannelAffinityPriorityCondition {
    export enum DimensionEnum {
        ChannelAffinity = <any> 'channel_affinity'
    }
    export enum PredictedChannelEnum {
        Email = <any> 'email',
        Push = <any> 'push',
        Sms = <any> 'sms'
    }
}
