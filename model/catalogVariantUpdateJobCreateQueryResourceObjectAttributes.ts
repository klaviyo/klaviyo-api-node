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
import { CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';

export class CatalogVariantUpdateJobCreateQueryResourceObjectAttributes {
    'variants': CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "variants",
            "baseName": "variants",
            "type": "CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants"
        }    ];

    static getAttributeTypeMap() {
        return CatalogVariantUpdateJobCreateQueryResourceObjectAttributes.attributeTypeMap;
    }
}
