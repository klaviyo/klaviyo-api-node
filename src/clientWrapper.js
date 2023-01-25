import { backOff } from "exponential-backoff";

import {CatalogsApi} from './api/CatalogsApi.js';
import {ClientApi} from './api/ClientApi.js';
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

const RETRY_CODES = [429, 503, 504]
const RETRY_MAX_ATTEMPTS_DEFAULT = 3
const TIME_MULTIPLE_DEFAULT = 5
const STARTING_DELAY_DEFAULT = 500

let RETRY_MAX_ATTEMPTS = RETRY_MAX_ATTEMPTS_DEFAULT
let TIME_MULTIPLE = TIME_MULTIPLE_DEFAULT
let STARTING_DELAY = STARTING_DELAY_DEFAULT

const RETRY_OPT_NAME = 'numOfAttempts'
const TIME_MULTIPLE_OPT_NAME = 'timeMultiple'
const STARTING_DELAY_OPT_NAME =  'startingDelay'

const wrapObj = (api) => {

    Object.getOwnPropertyNames(api.prototype).forEach( functName => {

        if (!functName.match(/constructor/)) {
            api.prototype[functName] = wrapFunction(api.prototype[functName])
        }
    })

    return new api()
}

const wrapFunction = (funct) => {
    return (...args) => {
        return backOff(() => funct(...args), {
            jitter: "full",
            numOfAttempts: RETRY_MAX_ATTEMPTS,
            timeMultiple: TIME_MULTIPLE,
            startingDelay: STARTING_DELAY,
            retry: res => {
                return RETRY_CODES.includes(res.status)
            }
        })
    }
}

/**
   * ConfigWrapper - used to configure the auth key and adjust the backOff params
   * @param {string} authKey The authentication key
   * @param {Object} opts Optional parameters, to set the backOff params
   * @return {ApiClient#instance} a instance of {@link  module:ApiClient}
   * */
const ConfigWrapper = (authKey, opts = {}) => {
    let defaultClient = ApiClient.instance;
    // Configure API key authorization: ApiKeyAuth
    let ApiKeyAuth = defaultClient.authentications['Klaviyo-API-Key'];
    ApiKeyAuth.apiKey = authKey
    ApiKeyAuth.apiKeyPrefix = "Klaviyo-API-Key"

    if (opts[RETRY_OPT_NAME]) {
        RETRY_MAX_ATTEMPTS = opts[RETRY_OPT_NAME]
    }
    if (opts[TIME_MULTIPLE_OPT_NAME]) {
        TIME_MULTIPLE = opts[TIME_MULTIPLE_OPT_NAME]
    }
    if (opts[STARTING_DELAY_OPT_NAME]) {
        STARTING_DELAY = opts[STARTING_DELAY_OPT_NAME]
    }
    return defaultClient
}

const Catalogs = wrapObj(CatalogsApi)
const Client = wrapObj(ClientApi)
const DataPrivacy = wrapObj(DataPrivacyApi)
const Events = wrapObj(EventsApi)
const Flows = wrapObj(FlowsApi)
const Lists = wrapObj(ListsApi)
const Metrics = wrapObj(MetricsApi)
const Profiles = wrapObj(ProfilesApi)
const Segments = wrapObj(SegmentsApi)
const Tags = wrapObj(TagsApi)
const Templates = wrapObj(TemplatesApi)

export {
    Catalogs,
    Client,
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