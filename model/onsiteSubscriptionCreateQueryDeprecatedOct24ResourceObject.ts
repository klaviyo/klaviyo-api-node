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
import { OnsiteSubscriptionCreateQueryDeprecatedOct24ResourceObjectAttributes } from './onsiteSubscriptionCreateQueryDeprecatedOct24ResourceObjectAttributes';
import { OnsiteSubscriptionCreateQueryDeprecatedOct24ResourceObjectRelationships } from './onsiteSubscriptionCreateQueryDeprecatedOct24ResourceObjectRelationships';
import { SubscriptionEnum } from './subscriptionEnum';
export class OnsiteSubscriptionCreateQueryDeprecatedOct24ResourceObject {
    'type': SubscriptionEnum | 'subscription';
    'attributes': OnsiteSubscriptionCreateQueryDeprecatedOct24ResourceObjectAttributes;
    'relationships'?: OnsiteSubscriptionCreateQueryDeprecatedOct24ResourceObjectRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "OnsiteSubscriptionCreateQueryDeprecatedOct24ResourceObjectAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "OnsiteSubscriptionCreateQueryDeprecatedOct24ResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return OnsiteSubscriptionCreateQueryDeprecatedOct24ResourceObject.attributeTypeMap;
    }
}

export namespace OnsiteSubscriptionCreateQueryDeprecatedOct24ResourceObject {
}
