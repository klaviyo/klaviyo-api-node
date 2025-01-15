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
export class FlowV2ResponseObjectResourceAttributes {
    'name'?: string | null;
    'status'?: string | null;
    'archived'?: boolean | null;
    'created'?: Date | null;
    'updated'?: Date | null;
    /**
    * Corresponds to the object which triggered the flow.
    */
    'triggerType'?: FlowV2ResponseObjectResourceAttributes.TriggerTypeEnum | 'Added to List' | 'Date Based' | 'Low Inventory' | 'Metric' | 'Price Drop' | 'Unconfigured' | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        },
        {
            "name": "triggerType",
            "baseName": "trigger_type",
            "type": "FlowV2ResponseObjectResourceAttributes.TriggerTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return FlowV2ResponseObjectResourceAttributes.attributeTypeMap;
    }
}

export namespace FlowV2ResponseObjectResourceAttributes {
    export enum TriggerTypeEnum {
        AddedToList = <any> 'Added to List',
        DateBased = <any> 'Date Based',
        LowInventory = <any> 'Low Inventory',
        Metric = <any> 'Metric',
        PriceDrop = <any> 'Price Drop',
        Unconfigured = <any> 'Unconfigured'
    }
}