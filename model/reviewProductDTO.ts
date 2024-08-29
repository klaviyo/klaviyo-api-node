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
export class ReviewProductDTO {
    /**
    * The URL of the product
    */
    'url': string;
    /**
    * The name of the product
    */
    'name': string;
    /**
    * The URL of the product image
    */
    'imageUrl': string | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "imageUrl",
            "baseName": "image_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReviewProductDTO.attributeTypeMap;
    }
}
