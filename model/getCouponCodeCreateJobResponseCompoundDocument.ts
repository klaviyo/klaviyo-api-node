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
import { CouponCodeResponseObjectResource } from './couponCodeResponseObjectResource';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';

export class GetCouponCodeCreateJobResponseCompoundDocument {
    'data': GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner;
    'included'?: Array<CouponCodeResponseObjectResource>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<CouponCodeResponseObjectResource>"
        }    ];

    static getAttributeTypeMap() {
        return GetCouponCodeCreateJobResponseCompoundDocument.attributeTypeMap;
    }
}
