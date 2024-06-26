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
import { GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction';
import { GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate } from './getFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
export class GetFlowMessageResponseCompoundDocumentDataAllOfRelationships {
    'flowAction'?: GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction;
    'template'?: GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "flowAction",
            "baseName": "flow-action",
            "type": "GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsFlowAction"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "GetFlowMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate"
        }    ];

    static getAttributeTypeMap() {
        return GetFlowMessageResponseCompoundDocumentDataAllOfRelationships.attributeTypeMap;
    }
}

