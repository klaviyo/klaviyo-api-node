import {BackoffOptions} from "exponential-backoff";
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './campaignsApi';
import { CampaignsApi } from './campaignsApi';
export * from './catalogsApi';
import { CatalogsApi } from './catalogsApi';
export * from './couponsApi';
import { CouponsApi } from './couponsApi';
export * from './dataPrivacyApi';
import { DataPrivacyApi } from './dataPrivacyApi';
export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './flowsApi';
import { FlowsApi } from './flowsApi';
export * from './imagesApi';
import { ImagesApi } from './imagesApi';
export * from './listsApi';
import { ListsApi } from './listsApi';
export * from './metricsApi';
import { MetricsApi } from './metricsApi';
export * from './profilesApi';
import { ProfilesApi } from './profilesApi';
export * from './reportingApi';
import { ReportingApi } from './reportingApi';
export * from './segmentsApi';
import { SegmentsApi } from './segmentsApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './templatesApi';
import { TemplatesApi } from './templatesApi';

import {AxiosRequestConfig} from "axios/index";

export { RequestFile } from '../model/models';

export enum KlaviyoApiKey {
    KeyName = "Klaviyo-API-Key"
}

export class RetryOptions {

    options: BackoffOptions

    constructor (options: {numOfAttempts?: number, timeMultiple?: number, startingDelay?: number} = {} ) {
        const RETRY_CODES: Array<number> = [429, 503, 504]
        let numOfAttempts = 3
        let timeMultiple = 5
        let startingDelay = 500

        if (options['numOfAttempts']){
            numOfAttempts = <number>options['numOfAttempts']
        }
        if (options['timeMultiple']){
            startingDelay = <number>options['startingDelay']
        }
        if (options['numOfAttempts']){
            startingDelay = <number>options['startingDelay']
        }

        this.options = {
            numOfAttempts,
            timeMultiple,
            startingDelay,
            retry: res => {
                return RETRY_CODES.includes(res.status)
            }
        }
    }

    get backOffOptions(): BackoffOptions {
        return this.options
    }

    set backOffOptions(backoffOptions: BackoffOptions) {
        this.options = backoffOptions
    }
}

export function queryParamPreProcessor(queryParams: any): void {
    if (queryParams['page[cursor]'] && queryParams['page[cursor]'].includes("https://")) {
        const params = new URLSearchParams(decodeURI(queryParams['page[cursor]'].split('?')[1]))
        queryParams['page[cursor]'] = params.get('page[cursor]')
    }
    for (const key in queryParams) {
        let value = queryParams[key]
        if ( Array.isArray(value) ) {
            queryParams[key] = value.join()
        }
    }
}

export class GlobalApiKeySettings {
    static apiKey: string
    static retryOptions: RetryOptions = new RetryOptions()

    constructor(apiKey: string, retryOptions?: RetryOptions) {
        GlobalApiKeySettings.apiKey = apiKey
        if (retryOptions) {
            GlobalApiKeySettings.retryOptions = retryOptions
        }
    }
}

export interface Session {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: AxiosRequestConfig): Promise<void> | void;
    getRetryOptions(): BackoffOptions
}

export class ApiKeySession implements Session {
    retryOptions: RetryOptions
    public apiKey: string
    protected _apiKeyPrefix = "Klaviyo-API-Key"

    constructor(apiKey: string, retryOptions?: RetryOptions) {
        this.apiKey = apiKey
        if (retryOptions) {
            this.retryOptions = retryOptions
        } else {
            this.retryOptions = new RetryOptions()
        }
    }

    applyToRequest(requestOptions: AxiosRequestConfig): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = `${this._apiKeyPrefix} ${this.apiKey}`;
        }
    }

    getRetryOptions(): BackoffOptions {
        return this.retryOptions.options
    }
}


export class GlobalApiKeySession implements Session {
    protected _apiKeyPrefix = "Klaviyo-API-Key"

    applyToRequest(requestOptions: AxiosRequestConfig): void {
        if (requestOptions && requestOptions.headers) {
            if (GlobalApiKeySettings.apiKey) {
                requestOptions.headers["Authorization"] = `${this._apiKeyPrefix} ${GlobalApiKeySettings.apiKey}`;
            } else {
                throw Error ("No API Key set")
            }
        }
    }

    getRetryOptions(): BackoffOptions {
        return GlobalApiKeySettings.retryOptions.options
    }
}

export function ConfigWrapper(apiKey: string, opts: {numOfAttempts?: number, timeMultiple?: number, startingDelay?: number} = {}): ApiKeySession {

    const retryOptions = new RetryOptions(opts)
    if (opts) {
        GlobalApiKeySettings.retryOptions = retryOptions
    }
    GlobalApiKeySettings.apiKey = apiKey
    return new ApiKeySession(apiKey, retryOptions)
}


    export const Accounts = new AccountsApi(new GlobalApiKeySession())

    export const Campaigns = new CampaignsApi(new GlobalApiKeySession())

    export const Catalogs = new CatalogsApi(new GlobalApiKeySession())

    export const Coupons = new CouponsApi(new GlobalApiKeySession())

    export const DataPrivacy = new DataPrivacyApi(new GlobalApiKeySession())

    export const Events = new EventsApi(new GlobalApiKeySession())

    export const Flows = new FlowsApi(new GlobalApiKeySession())

    export const Images = new ImagesApi(new GlobalApiKeySession())

    export const Lists = new ListsApi(new GlobalApiKeySession())

    export const Metrics = new MetricsApi(new GlobalApiKeySession())

    export const Profiles = new ProfilesApi(new GlobalApiKeySession())

    export const Reporting = new ReportingApi(new GlobalApiKeySession())

    export const Segments = new SegmentsApi(new GlobalApiKeySession())

    export const Tags = new TagsApi(new GlobalApiKeySession())

    export const Templates = new TemplatesApi(new GlobalApiKeySession())


export const Auth = { ApiKeySession, GlobalApiKeySession, GlobalApiKeySettings}

export const Klaviyo = { Auth, AccountsApi, Accounts, CampaignsApi, Campaigns, CatalogsApi, Catalogs, CouponsApi, Coupons, DataPrivacyApi, DataPrivacy, EventsApi, Events, FlowsApi, Flows, ImagesApi, Images, ListsApi, Lists, MetricsApi, Metrics, ProfilesApi, Profiles, ReportingApi, Reporting, SegmentsApi, Segments, TagsApi, Tags, TemplatesApi, Templates };
