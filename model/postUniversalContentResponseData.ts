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
import { ObjectLinks } from './objectLinks';
import { TemplateUniversalContentEnum } from './templateUniversalContentEnum';
import { UniversalContentResponseObjectResourceAttributes } from './universalContentResponseObjectResourceAttributes';
export class PostUniversalContentResponseData {
    'type': TemplateUniversalContentEnum | 'template-universal-content';
    /**
    * The ID of the universal content
    */
    'id': string;
    'attributes': UniversalContentResponseObjectResourceAttributes;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TemplateUniversalContentEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "UniversalContentResponseObjectResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostUniversalContentResponseData.attributeTypeMap;
    }
}

export namespace PostUniversalContentResponseData {
}