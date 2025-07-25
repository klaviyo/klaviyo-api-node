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
import { CustomMetricEnum } from './customMetricEnum';
import { CustomMetricResponseObjectResource } from './customMetricResponseObjectResource';
import { CustomMetricResponseObjectResourceAttributes } from './customMetricResponseObjectResourceAttributes';
import { GetCustomMetricResponseDataAllOfRelationships } from './getCustomMetricResponseDataAllOfRelationships';
import { ObjectLinks } from './objectLinks';
export class GetCustomMetricResponseData extends CustomMetricResponseObjectResource {
    'relationships'?: GetCustomMetricResponseDataAllOfRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetCustomMetricResponseDataAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetCustomMetricResponseData.attributeTypeMap);
    }
}

export namespace GetCustomMetricResponseData {
}
