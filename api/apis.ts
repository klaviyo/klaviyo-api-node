import {BackoffOptions} from "exponential-backoff";
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './campaignsApi';
import { CampaignsApi } from './campaignsApi';
export * from './catalogsApi';
import { CatalogsApi } from './catalogsApi';
export * from './dataPrivacyApi';
import { DataPrivacyApi } from './dataPrivacyApi';
export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './flowsApi';
import { FlowsApi } from './flowsApi';
export * from './listsApi';
import { ListsApi } from './listsApi';
export * from './metricsApi';
import { MetricsApi } from './metricsApi';
export * from './profilesApi';
import { ProfilesApi } from './profilesApi';
export * from './segmentsApi';
import { SegmentsApi } from './segmentsApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './templatesApi';
import { TemplatesApi } from './templatesApi';

import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

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

export class ApiClient {
    apiKey: string
    retryOptions: RetryOptions
    static instance: ApiClient

    constructor(apiKey: string, retryOptions: RetryOptions) {
        this.apiKey = apiKey
        this.retryOptions = retryOptions
    }
}

export function ConfigWrapper(apiKey: string, opts: {numOfAttempts?: number, timeMultiple?: number, startingDelay?: number} = {}): ApiClient {

    const backoffOptions = new RetryOptions(opts)
    const apiClient = new ApiClient(apiKey, backoffOptions)
    ApiClient.instance = apiClient
    return apiClient
}


    export const Accounts = new AccountsApi("")

    export const Campaigns = new CampaignsApi("")

    export const Catalogs = new CatalogsApi("")

    export const DataPrivacy = new DataPrivacyApi("")

    export const Events = new EventsApi("")

    export const Flows = new FlowsApi("")

    export const Lists = new ListsApi("")

    export const Metrics = new MetricsApi("")

    export const Profiles = new ProfilesApi("")

    export const Segments = new SegmentsApi("")

    export const Tags = new TagsApi("")

    export const Templates = new TemplatesApi("")


export const Klaviyo = { AccountsApi, Accounts, CampaignsApi, Campaigns, CatalogsApi, Catalogs, DataPrivacyApi, DataPrivacy, EventsApi, Events, FlowsApi, Flows, ListsApi, Lists, MetricsApi, Metrics, ProfilesApi, Profiles, SegmentsApi, Segments, TagsApi, Tags, TemplatesApi, Templates };
