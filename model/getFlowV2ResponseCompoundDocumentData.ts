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
import { FlowV2ResponseObjectResourceExtended } from './flowV2ResponseObjectResourceExtended';
import { FlowV2ResponseObjectResourceExtendedAttributes } from './flowV2ResponseObjectResourceExtendedAttributes';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';
export class GetFlowV2ResponseCompoundDocumentData extends FlowV2ResponseObjectResourceExtended {
    'relationships'?: GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetFlowV2ResponseCompoundDocumentData.attributeTypeMap);
    }
}

export namespace GetFlowV2ResponseCompoundDocumentData {
}