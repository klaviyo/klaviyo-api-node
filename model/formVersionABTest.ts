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
export class FormVersionABTest {
    /**
    * This is the name of the AB test variation.
    */
    'variationName': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "variationName",
            "baseName": "variation_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FormVersionABTest.attributeTypeMap;
    }
}

