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
export * from './formsApi';
import { FormsApi } from './formsApi';
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
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';

const axios = require('axios')
import {AxiosRequestConfig, AxiosResponse, AxiosHeaders, isAxiosError} from "axios";

export { RequestFile } from '../model/models';

const revision =  "2024-07-15";
const userAgent = "klaviyo-api-node/11.0.0";

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
    applyToRequest(requestOptions: AxiosRequestConfig): Promise<void> | void;
    getRetryOptions(): BackoffOptions
    refreshAndRetry(error: unknown, retried: boolean): Promise<boolean> | boolean;
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
            requestOptions.headers['User-Agent'] = userAgent
            requestOptions.headers['revision'] = revision
        }
    }

    getRetryOptions(): BackoffOptions {
        return this.retryOptions.options
    }

    refreshAndRetry(error: unknown, retried: boolean): boolean {
        return false
    }
}


export class GlobalApiKeySession implements Session {
    protected _apiKeyPrefix = "Klaviyo-API-Key"

    applyToRequest(requestOptions: AxiosRequestConfig): void {
        if (requestOptions && requestOptions.headers) {
            if (GlobalApiKeySettings.apiKey) {
                requestOptions.headers["Authorization"] = `${this._apiKeyPrefix} ${GlobalApiKeySettings.apiKey}`;
                requestOptions.headers['User-Agent'] = userAgent
                requestOptions.headers['revision'] = revision
            } else {
                throw Error ("No API Key set")
            }
        }
    }

    getRetryOptions(): BackoffOptions {
        return GlobalApiKeySettings.retryOptions.options
    }

    refreshAndRetry(error: unknown, retried: boolean): boolean {
        return false
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


export class OAuthSession implements Session {

    retryOptions: RetryOptions
    protected _prefix = "Bearer"

    constructor(protected customerIdentifier: string, protected oAuthApi: OAuthApi, retryOptions: RetryOptions = new RetryOptions()) {
        this.retryOptions = retryOptions
    }
    async applyToRequest(requestOptions: AxiosRequestConfig): Promise<void> {

        let tokens = await this.oAuthApi.tokenStorage.retrieve(this.customerIdentifier)
        if (tokens.expiresAt) {
            if ((tokens.expiresAt.getTime() - new Date().getTime()) < (30 * 1000)) {
                tokens = await this.oAuthApi.refreshTokens(this.customerIdentifier, tokens.refreshToken)
            }
        } else if (!tokens.accessToken){
            tokens = await this.oAuthApi.refreshTokens(this.customerIdentifier, tokens.refreshToken)
        }
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = `${this._prefix} ${tokens.accessToken}`;
            requestOptions.headers['User-Agent'] = userAgent
            requestOptions.headers['revision'] = revision
        }
    }

    getRetryOptions(): BackoffOptions {
        return this.retryOptions.options
    }

    async refreshAndRetry(error: unknown, retried: boolean): Promise<boolean> {
        if (!retried && isAxiosError(error) && error.response?.status === 401) {
            await this.oAuthApi.refreshTokens(this.customerIdentifier)
            return true
        }
        return false
    }
}

export class OAuthBasicSession implements Session {
    accessToken: string
    retryOptions: RetryOptions
    protected _prefix = "Bearer"

    constructor(accessToken: string, retryOptions: RetryOptions = new RetryOptions()) {
        this.accessToken = accessToken
        this.retryOptions = retryOptions
    }

    applyToRequest(requestOptions: AxiosRequestConfig): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = `${this._prefix} ${this.accessToken}`;
            requestOptions.headers['User-Agent'] = userAgent
            requestOptions.headers['revision'] = revision
        }
    }

    refreshAndRetry(error: unknown, retried: boolean): boolean {
        return false
    }

    getRetryOptions(): BackoffOptions {
        return this.retryOptions.options
    }
}

export enum KlaviyoErrorName {
    saveError = "SAVE_TOKEN_ERROR",
    createError = "CREATE_TOKEN_ERROR",
    retrieveError = "RETRIEVE_TOKEN_ERROR",
    refreshError = "REFRESH_TOKEN_ERROR"
}
export class KlaviyoTokenError extends Error {

    constructor(readonly name: KlaviyoErrorName, readonly message: string, readonly cause?: any) {
        super();
    }
}

export function isKlaviyoTokenError(error: any): error is KlaviyoTokenError {
    return (error as KlaviyoTokenError).name !== undefined && Object.values(KlaviyoErrorName).includes((error as KlaviyoTokenError).name);
}

export interface RetrievedTokens {
	accessToken: string,
	refreshToken: string,
    expiresAt?: Date
}
export interface CreatedTokens {
	accessToken: string,
	refreshToken: string,
    expiresAt: Date
}

export interface TokenStorage {

    retrieve(customerIdentifier: string): Promise<RetrievedTokens> | RetrievedTokens

    save(customerIdentifier: string, tokens: CreatedTokens): Promise<void> | void
}

interface TokenServerResponse {
    access_token: string,
    token_type: string,
    expires_in: number,
    refresh_token: string,
    scope: string
}

export class OAuthApi {

    protected authorizeUrl = "https://klaviyo.com/oauth/authorize"
    protected tokenUrl = "https://a.klaviyo.com/oauth/token"

    constructor(
        readonly clientId: string,
        readonly clientSecret: string,
        readonly tokenStorage: TokenStorage,
    ) {}

    generateAuthorizeUrl(
        state: string,
        scopes: string,
        codeChallenge: string,
        redirectUrl: string,
    ): string {
        const url: URL = new URL(this.authorizeUrl)
        let querystring
        try {
            querystring = require('node:querystring')
        } catch (e) {
            querystring = require('querystring')
        }

        const params = {
            response_type: "code",
            code_challenge_method: "S256",
            client_id: this.clientId,
            state: state,
            scope: scopes,
            redirect_uri: redirectUrl,
            code_challenge: codeChallenge,
        }
        url.search = querystring.encode(params)
        return url.toString()
    }

    async createTokens(
        customerIdentifier: string,
        codeVerifier: string,
        authorizationCode: string,
        redirectUrl: string
    ): Promise<CreatedTokens> {
        const requestBody = {
            "grant_type": "authorization_code",
            "code": authorizationCode,
            "code_verifier": codeVerifier,
            "redirect_uri": redirectUrl
        }

        const requestConfig: AxiosRequestConfig = {
            method: "POST",
            url: this.tokenUrl,
            headers: this.createHeaders(),
            data: requestBody,
        }
        const currentDate = new Date()
        let tokens: CreatedTokens;
        try {
            const axiosResponse: AxiosResponse<TokenServerResponse> = await axios(requestConfig)
            tokens = {
                accessToken: axiosResponse.data.access_token,
                refreshToken: axiosResponse.data.refresh_token,
                expiresAt: new Date(currentDate.getTime() + (axiosResponse.data.expires_in * 1000)),
            }
        } catch(error) {
            const message = this.populateErrorMessage(error, 'Failed to create token')
            throw new KlaviyoTokenError(KlaviyoErrorName.createError, message, error)
        }
        return this.saveToken(customerIdentifier, tokens)
    }

    async refreshTokens(
        customerIdentifier: string,
        refreshToken?: string
    ): Promise<CreatedTokens> {
        if (!refreshToken) {
            try {
                const tokens = await this.tokenStorage.retrieve(customerIdentifier)
                refreshToken = tokens.refreshToken
            } catch (error) {
                const message = this.populateErrorMessage(error, "Failed to get refresh token")
                throw new KlaviyoTokenError(KlaviyoErrorName.retrieveError, message, error)
            }
        }
        const requestBody = {
            "grant_type": "refresh_token",
            "refresh_token": refreshToken,
        }
        const requestConfig: AxiosRequestConfig = {
            method: "POST",
            url: this.tokenUrl,
            headers: this.createHeaders(),
            data: requestBody,
        }
        const currentDate = new Date()
        let tokens: CreatedTokens;
        try {
            const axiosResponse: AxiosResponse<TokenServerResponse> = await axios(requestConfig)
            tokens = {
                accessToken: axiosResponse.data.access_token,
                refreshToken: axiosResponse.data.refresh_token,
                expiresAt: new Date(currentDate.getTime() + (axiosResponse.data.expires_in * 1000)),
            }
        } catch(error) {
            const message = this.populateErrorMessage(error, 'Failed to refresh token')
            throw new KlaviyoTokenError(KlaviyoErrorName.refreshError, message, error);
        }
        return this.saveToken(customerIdentifier, tokens)
    }

    private createHeaders() {
        const headers = new AxiosHeaders()
        headers.set('content-type', 'application/x-www-form-urlencoded')
        const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')
        headers.set("Authorization", `Basic ${auth}`)
        headers.set("User-Agent", userAgent)
        return headers
    }

    private async saveToken(customerIdentifier: string, tokens: CreatedTokens): Promise<CreatedTokens> {
        try {
            await this.tokenStorage.save(customerIdentifier, tokens);
            return tokens;
        } catch(error) {
            const message = this.populateErrorMessage(error, 'Failed to save token')
            throw new KlaviyoTokenError(KlaviyoErrorName.saveError, message, error)
        }
    }

    private populateErrorMessage(error, defaultMessage: string ): string {
        let message = defaultMessage;
        if (isAxiosError(error) && error.response?.data?.error && typeof error.response?.data?.error === 'string') {
            message = error.response?.data?.error
        } else if (error && typeof error === 'object' && 'message' in error && error.message && typeof error.message === 'string') {message = error.message}
        return message
    }
}

export interface OAuthCallbackQueryParams {
 // authorization code used for getting the accessToken and refreshToken
  code?: string;
  state?: string;
  error?: string;
  error_description?: string;
}


export namespace Pkce {

    export interface Codes {
        codeVerifier: string
        codeChallenge: string
    }

    export function generateCodes() {
        let crypto;
        try {
          crypto = require('node:crypto');
        } catch (error) {
            crypto = require('crypto');
        }
        const base64URLEncode = (str) => {
            return str.toString('base64')
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=/g, '');
        }
        const verifier = base64URLEncode(crypto.randomBytes(32));

        const sha256 = (buffer) => {
            return crypto.createHash('sha256').update(buffer).digest();
        }
        const challenge = base64URLEncode(sha256(verifier));

        return {
            codeVerifier: verifier,
            codeChallenge: challenge
        }
    }

    export interface CodeStorage {

        retrieve(customerIdentifier: string): Promise<string>

        save(customerIdentifier: string, verifierCode: string ): Promise<void>

        remove(customerIdentifier: string): Promise<void>
    }

}


    export const Accounts = new AccountsApi(new GlobalApiKeySession())

    export const Campaigns = new CampaignsApi(new GlobalApiKeySession())

    export const Catalogs = new CatalogsApi(new GlobalApiKeySession())

    export const Coupons = new CouponsApi(new GlobalApiKeySession())

    export const DataPrivacy = new DataPrivacyApi(new GlobalApiKeySession())

    export const Events = new EventsApi(new GlobalApiKeySession())

    export const Flows = new FlowsApi(new GlobalApiKeySession())

    export const Forms = new FormsApi(new GlobalApiKeySession())

    export const Images = new ImagesApi(new GlobalApiKeySession())

    export const Lists = new ListsApi(new GlobalApiKeySession())

    export const Metrics = new MetricsApi(new GlobalApiKeySession())

    export const Profiles = new ProfilesApi(new GlobalApiKeySession())

    export const Reporting = new ReportingApi(new GlobalApiKeySession())

    export const Segments = new SegmentsApi(new GlobalApiKeySession())

    export const Tags = new TagsApi(new GlobalApiKeySession())

    export const Templates = new TemplatesApi(new GlobalApiKeySession())

    export const Webhooks = new WebhooksApi(new GlobalApiKeySession())


export const Auth = {
    ApiKeySession,
    GlobalApiKeySession,
    GlobalApiKeySettings,
    RetryOptions,
    OAuthApi,
    OAuthBasicSession,
    OAuthSession,
    Pkce,
}

export const Klaviyo = { Auth, AccountsApi, Accounts, CampaignsApi, Campaigns, CatalogsApi, Catalogs, CouponsApi, Coupons, DataPrivacyApi, DataPrivacy, EventsApi, Events, FlowsApi, Flows, FormsApi, Forms, ImagesApi, Images, ListsApi, Lists, MetricsApi, Metrics, ProfilesApi, Profiles, ReportingApi, Reporting, SegmentsApi, Segments, TagsApi, Tags, TemplatesApi, Templates, WebhooksApi, Webhooks };
