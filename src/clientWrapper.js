import { backOff } from "exponential-backoff";

import {AccountsApi} from './api/AccountsApi.js';
import {CampaignsApi} from './api/CampaignsApi.js';
import {CatalogsApi} from './api/CatalogsApi.js';
import {DataPrivacyApi} from './api/DataPrivacyApi.js';
import {EventsApi} from './api/EventsApi.js';
import {FlowsApi} from './api/FlowsApi.js';
import {ListsApi} from './api/ListsApi.js';
import {MetricsApi} from './api/MetricsApi.js';
import {ProfilesApi} from './api/ProfilesApi.js';
import {SegmentsApi} from './api/SegmentsApi.js';
import {TagsApi} from './api/TagsApi.js';
import {TemplatesApi} from './api/TemplatesApi.js';

import {ApiClient} from './ApiClient.js';

const RETRY_OPT_NAME = 'numOfAttempts'
const TIME_MULTIPLE_OPT_NAME = 'timeMultiple'
const STARTING_DELAY_OPT_NAME =  'startingDelay'


/**
   * ConfigWrapper - used to configure the auth key and adjust the backOff params
   * @param {string} authKey The authentication key
   * @param {Object} opts Optional parameters, to set the backOff params
   * @return {ApiClient#instance} a instance of {@link  module:ApiClient}
   * */
const ConfigWrapper = (authKey, opts = {}) => {
    let defaultClient
    if (ApiClient.instance.authentications['Klaviyo-API-Key'].apiKey) {
        defaultClient = new ApiClient()
    } else {
        defaultClient = ApiClient.instance;
    }    // Configure API key authorization: ApiKeyAuth
    let ApiKeyAuth = defaultClient.authentications['Klaviyo-API-Key'];
    ApiKeyAuth.apiKey = authKey
    ApiKeyAuth.apiKeyPrefix = "Klaviyo-API-Key"

    if (opts[RETRY_OPT_NAME]) {
        defaultClient.RETRY_MAX_ATTEMPTS = opts[RETRY_OPT_NAME]
    }
    if (opts[TIME_MULTIPLE_OPT_NAME]) {
        defaultClient.TIME_MULTIPLE = opts[TIME_MULTIPLE_OPT_NAME]
    }
    if (opts[STARTING_DELAY_OPT_NAME]) {
        defaultClient.STARTING_DELAY = opts[STARTING_DELAY_OPT_NAME]
    }
    return defaultClient
}

const Accounts = new AccountsApi()
const Campaigns = new CampaignsApi()
const Catalogs = new CatalogsApi()
const DataPrivacy = new DataPrivacyApi()
const Events = new EventsApi()
const Flows = new FlowsApi()
const Lists = new ListsApi()
const Metrics = new MetricsApi()
const Profiles = new ProfilesApi()
const Segments = new SegmentsApi()
const Tags = new TagsApi()
const Templates = new TemplatesApi()

export {
    Accounts,
    Campaigns,
    Catalogs,
    DataPrivacy,
    Events,
    Flows,
    Lists,
    Metrics,
    Profiles,
    Segments,
    Tags,
    Templates,
ConfigWrapper
}