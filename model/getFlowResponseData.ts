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
import { FlowEnum } from './flowEnum';
import { FlowResponseObjectResource } from './flowResponseObjectResource';
import { FlowResponseObjectResourceAttributes } from './flowResponseObjectResourceAttributes';
import { GetFlowResponseDataAllOfRelationships } from './getFlowResponseDataAllOfRelationships';
import { ObjectLinks } from './objectLinks';
export class GetFlowResponseData extends FlowResponseObjectResource {
    'relationships'?: GetFlowResponseDataAllOfRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetFlowResponseDataAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetFlowResponseData.attributeTypeMap);
    }
}

export namespace GetFlowResponseData {
}
