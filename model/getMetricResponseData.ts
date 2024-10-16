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
import { GetMetricResponseDataAllOfRelationships } from './getMetricResponseDataAllOfRelationships';
import { MetricEnum } from './metricEnum';
import { MetricResponseObjectResource } from './metricResponseObjectResource';
import { MetricResponseObjectResourceAttributes } from './metricResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';
export class GetMetricResponseData extends MetricResponseObjectResource {
    'relationships'?: GetMetricResponseDataAllOfRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetMetricResponseDataAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetMetricResponseData.attributeTypeMap);
    }
}

export namespace GetMetricResponseData {
}
