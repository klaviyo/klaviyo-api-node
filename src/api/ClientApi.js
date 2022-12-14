/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-10-17
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
* Client service.
* @module api/ClientApi
* @version 2022-10-17
*/
export class ClientApi {
    apiClient

    /**
    * Constructs a new ClientApi. 
    * @alias module:api/ClientApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Create Client Event
     * Create a new event to track a profile&#x27;s activity. This endpoint is specifically designed to be called from publicly-browseable, client-side environments only. To create [events] from server-based applications, please use [POST /api/events](https://developers.klaviyo.com/en/v2022-10-17/reference/create_event)&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Events Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body Event to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} companyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createClientEvent = async (body, companyId) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createClientEvent");
      }
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createClientEvent");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'company_id': companyId
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/client/events/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Create Client Profile
     * Create and update properties about a profile without tracking an associated event. This endpoint is specifically designed to be called from publicly-browseable, client-side environments only. To create profiles from server applications (e.g. custom server-side scripts / applications), please use [POST /api/profiles](https://developers.klaviyo.com/en/reference/create_profile)&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;350/s&#x60;&lt;br&gt;Steady: &#x60;3500/m&#x60;  **Scopes:** &#x60;Profiles Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} companyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createClientProfile = async (body, companyId) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createClientProfile");
      }
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createClientProfile");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'company_id': companyId
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/client/profiles/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Create Client Subscription
     * Create a new subscription for the given list ID and channel:  * Email &#x60;email&#x60; * SMS &#x60;phone_number&#x60;  This endpoint is specifically designed to be called from publicly-browseable, client-side environments only. To create subscriptions from server-based applications, please use [POST /api/profile-subscription-bulk-create-jobs](https://developers.klaviyo.com/en/reference/subscribe_profiles)&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;100/s&#x60;&lt;br&gt;Steady: &#x60;100/m&#x60;  **Scopes:** &#x60;Subscriptions Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body Creates a subscription and consent records for Email and or SMS channels based on the provided email and phone_number attributes respectively. One of either email or phone_number must be provided. To create a subscription and consent record for only one channel but still include the other channel as a profile property the consent channel can be provided as a top level attribute and the other channel can be included in the properties object.
     * @param {<&vendorExtensions.x-jsdoc-type>} companyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createClientSubscription = async (body, companyId) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createClientSubscription");
      }
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling createClientSubscription");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'company_id': companyId
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = Object;

      return this.apiClient.callApi(
        '/client/subscriptions/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

}