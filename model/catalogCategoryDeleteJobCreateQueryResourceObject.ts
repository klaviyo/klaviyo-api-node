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
import { CatalogCategoryBulkDeleteJobEnum } from './catalogCategoryBulkDeleteJobEnum';
import { CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributes';

export class CatalogCategoryDeleteJobCreateQueryResourceObject {
    'type': CatalogCategoryBulkDeleteJobEnum;
    'attributes': CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogCategoryBulkDeleteJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return CatalogCategoryDeleteJobCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CatalogCategoryDeleteJobCreateQueryResourceObject {
}