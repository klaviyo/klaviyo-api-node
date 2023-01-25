/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2023-01-24
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient.js";

/**
* DataPrivacy service.
* @module api/DataPrivacyApi
* @version 2023-01-24
*/
export class DataPrivacyApi {
    apiClient

    /**
    * Constructs a new DataPrivacyApi. 
    * @alias module:api/DataPrivacyApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Request Profile Deletion
     * Request a deletion for the profiles corresponding to one of the following identifiers: &#x60;email&#x60;, &#x60;phone_number&#x60;, or &#x60;profile_id&#x60;. If multiple identifiers are provided, we will return an error. All profiles that match the provided identifier will be deleted.         The deletion occurs asynchronously; however, once it has completed, the deleted profile will appear on the [Deleted Profiles page](https://www.klaviyo.com/account/deleted).         For more information on the deletion process, please refer to our [Help Center docs on how to handle GDPR and CCPA deletion requests](https://help.klaviyo.com/hc/en-us/articles/360004217631-How-to-Handle-GDPR-Requests#record-gdpr-and-ccpa%20%20-deletion-requests2).&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;  **Scopes:** &#x60;Data Privacy Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    requestProfileDeletion = async (body) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling requestProfileDeletion");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/data-privacy-deletion-jobs/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return {
              body: response_and_data.data,
              headers: response_and_data.response.headers,
              status: response_and_data.response.status,
          };
      });
    }

}