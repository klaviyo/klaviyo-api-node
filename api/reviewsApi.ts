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


const axios = require('axios');
import {AxiosRequestConfig, AxiosResponse} from "axios";
import { backOff, BackoffOptions } from 'exponential-backoff';
import FormData from 'form-data'

/* tslint:disable:no-unused-locals */
import { GetAccounts4XXResponse } from '../model/getAccounts4XXResponse';
import { GetReviewResponseDTO20240715CollectionCompoundDocument } from '../model/getReviewResponseDTO20240715CollectionCompoundDocument';
import { GetReviewResponseDTO20240715CompoundDocument } from '../model/getReviewResponseDTO20240715CompoundDocument';

import { ObjectSerializer } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryOptions, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class ReviewsApi {

    protected backoffOptions: BackoffOptions = new RetryOptions().options
    session: Session

    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    constructor(session: Session){
        this.session = session
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    /**
     * Get the review with the given ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `reviews:read`
     * @summary Get Review
     * @param id The ID of the review
     * @param fieldsEvent For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param fieldsReview For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param include For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#relationships
     */
    public async getReview (id: string, options: { fieldsEvent?: Array<'timestamp' | 'event_properties' | 'datetime' | 'uuid'>, fieldsReview?: Array<'email' | 'status' | 'verified' | 'review_type' | 'created' | 'updated' | 'images' | 'product' | 'product.url' | 'product.name' | 'product.image_url' | 'rating' | 'author' | 'content' | 'title' | 'smart_quote' | 'public_reply' | 'public_reply.content' | 'public_reply.author' | 'public_reply.updated'>, include?: Array<'events'>,  } = {}): Promise<{ response: AxiosResponse; body: GetReviewResponseDTO20240715CompoundDocument;  }> {

        const localVarPath = this.basePath + '/api/reviews/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getReview.');
        }

        if (options.fieldsEvent !== undefined) {
            localVarQueryParameters['fields[event]'] = ObjectSerializer.serialize(options.fieldsEvent, "Array<'timestamp' | 'event_properties' | 'datetime' | 'uuid'>");
        }

        if (options.fieldsReview !== undefined) {
            localVarQueryParameters['fields[review]'] = ObjectSerializer.serialize(options.fieldsReview, "Array<'email' | 'status' | 'verified' | 'review_type' | 'created' | 'updated' | 'images' | 'product' | 'product.url' | 'product.name' | 'product.image_url' | 'rating' | 'author' | 'content' | 'title' | 'smart_quote' | 'public_reply' | 'public_reply.content' | 'public_reply.author' | 'public_reply.updated'>");
        }

        if (options.include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(options.include, "Array<'events'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetReviewResponseDTO20240715CompoundDocument;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetReviewResponseDTO20240715CompoundDocument");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetReviewResponseDTO20240715CompoundDocument;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
    /**
     * Get all reviews.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `reviews:read`
     * @summary Get Reviews
     
     * @param fieldsEvent For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param fieldsReview For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param filter For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;created&#x60;: &#x60;greater-or-equal&#x60;, &#x60;less-or-equal&#x60;&lt;br&gt;&#x60;rating&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;, &#x60;greater-or-equal&#x60;, &#x60;less-or-equal&#x60;&lt;br&gt;&#x60;id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;item.id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;content&#x60;: &#x60;contains&#x60;&lt;br&gt;&#x60;status&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;review_type&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;verified&#x60;: &#x60;equals&#x60;* @param include For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#relationships* @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#pagination* @param pageSize Default: 20. Min: 1. Max: 100.* @param sort For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sorting
     */
    public async getReviews (options: { fieldsEvent?: Array<'timestamp' | 'event_properties' | 'datetime' | 'uuid'>, fieldsReview?: Array<'email' | 'status' | 'verified' | 'review_type' | 'created' | 'updated' | 'images' | 'product' | 'product.url' | 'product.name' | 'product.image_url' | 'rating' | 'author' | 'content' | 'title' | 'smart_quote' | 'public_reply' | 'public_reply.content' | 'public_reply.author' | 'public_reply.updated'>, filter?: string, include?: Array<'events'>, pageCursor?: string, pageSize?: number, sort?: 'created' | '-created' | 'rating' | '-rating' | 'updated' | '-updated',  } = {}): Promise<{ response: AxiosResponse; body: GetReviewResponseDTO20240715CollectionCompoundDocument;  }> {

        const localVarPath = this.basePath + '/api/reviews';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        if (options.fieldsEvent !== undefined) {
            localVarQueryParameters['fields[event]'] = ObjectSerializer.serialize(options.fieldsEvent, "Array<'timestamp' | 'event_properties' | 'datetime' | 'uuid'>");
        }

        if (options.fieldsReview !== undefined) {
            localVarQueryParameters['fields[review]'] = ObjectSerializer.serialize(options.fieldsReview, "Array<'email' | 'status' | 'verified' | 'review_type' | 'created' | 'updated' | 'images' | 'product' | 'product.url' | 'product.name' | 'product.image_url' | 'rating' | 'author' | 'content' | 'title' | 'smart_quote' | 'public_reply' | 'public_reply.content' | 'public_reply.author' | 'public_reply.updated'>");
        }

        if (options.filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(options.filter, "string");
        }

        if (options.include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(options.include, "Array<'events'>");
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page[cursor]'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        if (options.pageSize !== undefined) {
            localVarQueryParameters['page[size]'] = ObjectSerializer.serialize(options.pageSize, "number");
        }

        if (options.sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(options.sort, "'created' | '-created' | 'rating' | '-rating' | 'updated' | '-updated'");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetReviewResponseDTO20240715CollectionCompoundDocument;  }> => {
            try {
                const axiosResponse = await axios(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetReviewResponseDTO20240715CollectionCompoundDocument");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return backOff<{ response: AxiosResponse; body: GetReviewResponseDTO20240715CollectionCompoundDocument;  }>(
            () => {return request(config)},
            this.session.getRetryOptions()
        );
    }
}