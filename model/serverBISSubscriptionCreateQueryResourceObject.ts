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
import { BackInStockSubscriptionEnum } from './backInStockSubscriptionEnum';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributes } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationships } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';

export class ServerBISSubscriptionCreateQueryResourceObject {
    'type': BackInStockSubscriptionEnum;
    'attributes': ServerBISSubscriptionCreateQueryResourceObjectAttributes;
    'relationships'?: ServerBISSubscriptionCreateQueryResourceObjectRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BackInStockSubscriptionEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "ServerBISSubscriptionCreateQueryResourceObjectAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "ServerBISSubscriptionCreateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return ServerBISSubscriptionCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace ServerBISSubscriptionCreateQueryResourceObject {
}