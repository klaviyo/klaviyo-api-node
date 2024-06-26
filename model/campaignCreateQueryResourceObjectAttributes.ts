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
import { AudiencesSubObject } from './audiencesSubObject';
import { CampaignCreateQueryResourceObjectAttributesCampaignMessages } from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
import { CampaignCreateQueryResourceObjectAttributesSendOptions } from './campaignCreateQueryResourceObjectAttributesSendOptions';
import { CampaignCreateQueryResourceObjectAttributesTrackingOptions } from './campaignCreateQueryResourceObjectAttributesTrackingOptions';
import { SendStrategySubObject } from './sendStrategySubObject';
export class CampaignCreateQueryResourceObjectAttributes {
    /**
    * The campaign name
    */
    'name': string;
    'audiences': AudiencesSubObject;
    'sendStrategy'?: SendStrategySubObject;
    'sendOptions'?: CampaignCreateQueryResourceObjectAttributesSendOptions | null;
    'trackingOptions'?: CampaignCreateQueryResourceObjectAttributesTrackingOptions | null;
    'campaignMessages': CampaignCreateQueryResourceObjectAttributesCampaignMessages;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "audiences",
            "baseName": "audiences",
            "type": "AudiencesSubObject"
        },
        {
            "name": "sendStrategy",
            "baseName": "send_strategy",
            "type": "SendStrategySubObject"
        },
        {
            "name": "sendOptions",
            "baseName": "send_options",
            "type": "CampaignCreateQueryResourceObjectAttributesSendOptions"
        },
        {
            "name": "trackingOptions",
            "baseName": "tracking_options",
            "type": "CampaignCreateQueryResourceObjectAttributesTrackingOptions"
        },
        {
            "name": "campaignMessages",
            "baseName": "campaign-messages",
            "type": "CampaignCreateQueryResourceObjectAttributesCampaignMessages"
        }    ];

    static getAttributeTypeMap() {
        return CampaignCreateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

