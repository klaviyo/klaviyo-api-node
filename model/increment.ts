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
import { IncrementOneEnum } from './incrementOneEnum';
export class Increment {
    'badgeConfig': IncrementOneEnum | 'increment_one';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "badgeConfig",
            "baseName": "badge_config",
            "type": "IncrementOneEnum"
        }    ];

    static getAttributeTypeMap() {
        return Increment.attributeTypeMap;
    }
}

export namespace Increment {
}
