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
import { CollectionLinks } from './collectionLinks';
import { CouponResponseObjectResource } from './couponResponseObjectResource';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInner } from './getCouponCodeResponseCollectionCompoundDocumentDataInner';
export class GetCouponCodeResponseCollectionCompoundDocument {
    'data': Array<GetCouponCodeResponseCollectionCompoundDocumentDataInner>;
    'links'?: CollectionLinks;
    'included'?: Array<CouponResponseObjectResource>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetCouponCodeResponseCollectionCompoundDocumentDataInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "CollectionLinks"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<CouponResponseObjectResource>"
        }    ];

    static getAttributeTypeMap() {
        return GetCouponCodeResponseCollectionCompoundDocument.attributeTypeMap;
    }
}

