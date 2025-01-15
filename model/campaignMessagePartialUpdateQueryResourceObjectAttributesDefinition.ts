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
import { EmailMessageDefinition } from './emailMessageDefinition';
import { MobilePushContentUpdate } from './mobilePushContentUpdate';
import { MobilePushEnum } from './mobilePushEnum';
import { MobilePushMessageStandardDefinitionUpdate } from './mobilePushMessageStandardDefinitionUpdate';
import { MobilePushOptions } from './mobilePushOptions';
import { RenderOptions } from './renderOptions';
import { SMSMessageDefinitionCreate } from './sMSMessageDefinitionCreate';
import { StandardEnum } from './standardEnum';
export type CampaignMessagePartialUpdateQueryResourceObjectAttributesDefinition = EmailMessageDefinition | SMSMessageDefinitionCreate | MobilePushMessageStandardDefinitionUpdate;