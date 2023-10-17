# Changelog
All notable changes to this project will be documented in this file.

## [7.0.0-beta.1] - revision 2023-10-15

### Added

- OAuth Support
  - `OAuthApi` - Holds integration configuration and outlines how the SDK will interact with your application access and refresh token storage
  - `OAuthSession` - Makes API calls using OAuth and automatically updates `access tokens` when needed
  - `OAuthBasicSession` - Makes API calls with OAuth with no automatic updating

  Learn how to use OAuth in the [README](README.md) and in the sample [application](https://github.com/klaviyo-labs/node-integration-example)

## [7.0.0] - revision 2023-10-15

### Added

- Support for returning list suppressions via the [/profiles endpoint](https://developers.klaviyo.com/en/reference/get_profiles)

  Rules for suppression [filtering](https://developers.klaviyo.com/en/docs/filtering_):  

  - You may not mix-and-match list and global filters  
  - You may only specify a single date filter  
  - You may or may not specify a reason  
  - You must specify a list_id to filter on any list suppression properties

  Examples:

  ```
  {filter: 'greater-than(subscriptions.email.marketing.suppression.timestamp,2023-03-01T01:00:00Z)'}
  {filter: 'greater-than(subscriptions.email.marketing.list_suppressions.timestamp,2023-03-01T01:00:00Z),equals(subscriptions.email.marketing.list_suppressions.list_id,”LIST_ID”')
  {filter: 'greater-than(subscriptions.email.marketing.suppression.timestamp,2023-03-01T01:00:00Z),equals(subscriptions.email.marketing.suppression.reason,"user_suppressed"')
  ```
- Optionally retrieve subscription status on:
  - `getListProfiles`
  - `getSegmentProfiles`
  - `getEventProfile`
  
  Use `{additionalFieldsProfile: ['subscriptions']}` on these endpoints to include subscription information.

### Changed

- Subscription object not returned by default on Get Profile / Get Profiles

  The subscription object is no longer returned by default with get profile(s) requests. However, it can be included by adding  `?additional-fields[profile]=subscriptions` to the request. This change will allow us to provide a more performant experience when making requests to `GetProfiles` without including the subscriptions object.

- Profile Subscription Fields Renamed

  In the interest of providing more clarity and information on the subscription object, we have renamed several fields, and added several as well. This will provide more context on a contact's subscriptions and consent, as well as boolean fields to see who you can or cannot message.

  For SMSMarketing:

  - `timestamp` is now `consentTimestamp`
  - `lastUpdated` is a new field that mirrors `consenTimestamp`
  - `canReceiveSmsMarketing` is a new field which is `True` if the profile is consented for SMS 

  For EmailMarketing:

  - `timestamp` is now `consentTimestamp`
  - `canReceiveEmailMarketing` is True if the profile does not have a global suppression
  - `suppressions` is now `suppression`
  - `lastUpdated` is a new field that is the most recent of all the dates on the object

## [6.0.1] - revision 2023-09-15
### Fixed
- `Relationship` and its child attributes were incorrectly marked as optional for the following endpoints
  - `createBackInStockSubscription`
  - `createCampaignMessageAssignTemplate`
  - `spawnCreateVariantsJob`
  - `createCatalogVariant`
  - `spawnCouponCodeBulkCreateJob`
  - `createCouponCode`
  - `mergeProfiles`
  - `subscribeProfiles`
- Removed unused dependencies from `package.json` that were requiring a higher node version than necessary

## [6.0.0] - revision 2023-09-15
### Added

- Typescript Support
  - Types - This is a complete rework of our node sdk to add native type support in package

- `Images` API
  - We now support the following operations to work with images:
    - `get_image`
    - `get_images`
    - `update_image`
    - `upload_image_from_file` - You can use `fs.createReadStream` to pass the file into the function
    - `upload_image_from_url`
- `Coupons` API
  - We now support CRUD operations for both Coupons and Coupon Codes
  - Check out [Coupons API guide](https://developers.klaviyo.com/en/docs/use_klaviyos_coupons_api) for more information.
- Additional filtering/sorting option for Lists and Segments: `joined_group_at`
- New profile merge endpoint: `ProfilesApi.mergeProfiles`
- Increased the maximum page size limit for List and Segment Profile Relationship Endpoints to 1000

### Changed

- Authentication - Changes were made to make way for upcomming OAuth support
  - Now use `ApiKeySession` object to pass in the authentication into an api constructor. The readme has plenty of examples.
  - `ConfigWrapper` should still work it now just updates the `GlobalApiKeyConfig` and creates an `ApiKeySession` instance

## [5.1.0] - revision 2023-08-15
### Added
- Flow Message Templates
  - You can now retrieve the templates associated with flow messages using `Flows.getFlowMessageTemplate()` or `Flows.getFlowMessageRelationshipsTemplate()` . You’re also able to include the template HTML for a flow message using `Flows.getFlowMessage(FLOW_MESSAGE_ID, {include: ['template']})`. 
- Create or Update Push Tokens
  - We have added an endpoint to create push tokens, `Profiles.createPushToken()`.  This endpoint can be used to migrate profiles and their push tokens from another platform to Klaviyo. If you’re looking to register push tokens from users’ devices, please use our mobile SDKs.

## [5.0.0] - revision 2023-07-15
### Added
- Back-In-stock APIs
  - We have added support for subscribing profiles to back-in-stock notifications, for both email and SMS, using the new [create_back_in_stock_subscription](./README.md#create-back-in-stock-subscription) endpoint.  
- New functionality to Campaigns API
  - CRUD support for SMS campaigns is now available
  - You can now also retrieve all messages for a campaign to determine performance data on campaigns where you're running A/B tests
    - To support this functionality, we introduced a relationship between [campaigns and campaign messages](./README.md#get-campaign-relationships-campaign-messages), and between [campaign messages and templates](./README.md#get-campaign-message-relationships-template)


### Changed
- Relationship Standardization
  - **Note**: this is a major refactor, affecting commonly used endpoints like `createEvents`. We highly recommend reading our [migration guide](https://developers.klaviyo.com/en/docs/migrate_to_2023_07_15_relationships) 
  - We are making a number of changes across endpoints to standardize how we handle [relationships](https://developers.klaviyo.com/en/docs/relationships_) in our APIs and leverage consistently typed objects across endpoints. For example, you can create a profile in our APIs in the same shape, regardless of whether you're calling the profiles endpoint or the events endpoint.
  - The changes include:
    - Updating 1:1 relationships to use singular tense and an object (instead of plural and an array) 
      - example: for [get_flow_action](./README.md#get-flow-action), if you want to use the `include` param, you would set `include=` to `"flow"` (instead of `"flows"`)
    - Moving related object IDs from the attributes payload to relationships
      - example: The format for the [body](https://developers.klaviyo.com/en/reference/create_tag) of [create_tag](./README.md#create-tag) has changed, with `tag_group_id` previously at `data.attributes.tag_group_id` being removed and replaced by a `data` object containing `type`+`id` and located at `data.relationships.tag-group.data`.
    - Specifying a relationship between two Klaviyo objects to allow for improved consistency and greater interoperability across endpoints 
      - example: for [create_event](./README.md#create-event), you can now create/update a profile for an event in the same way you would when using the profiles API directly
  - NOTE: The examples for the above relationship changes are illustrative, not comprehensive. For a complete list of ALL the endpoints that have changed and exactly how, please refer to our latest [API Changelog](https://developers.klaviyo.com/en/docs/changelog_#revision-2023-07-15)
- For [get_campaigns](./README.md#get-campaigns) endpoint, `filter` param is now required, to, at minimum, filter on `messages.channel`


### Removed
- We removed the `company_id` from the response for [get_template](./README.md#get-template) and [get_templates](./README.md#get-templates). If you need to obtain the company ID / public API key for an account, please use the [Accounts API](./README.md#accounts).- We removed the `company_id` from the response for [get_template](./README.md#get-template) and [get_templates](./README.md#get-templates). If you need to obtain the company ID / public API key for an account, please use the [Accounts API](./README.md#accounts).

## [4.0.0] - revision 2023-06-15
### Added
- Accounts API is now available, this will allow you to access information about the Klaviyo account associated with your API key.
  - `getAccounts`
  - `getAccount`
  
**Note:** You will need to generate a new API key with either the `Accounts` scope enabled or `Full Access` to use these endpoints.

### Changed
- `createProfile` - opts parameter removed because there are no optional query parameter that can be passed to the endpoint

### Removed
- All `client` endpoints - While you could potentially get this repo to work for frontend and use only these client endpoints, it is bad practice to use client-side endpoints on the server side. In addition, developers found the inclusion of the client-side endpoints in our SDKs generally confusing.
  - `createClientEvent`
  - `createClientProfile`
  - `createClientSubscription`

Klaviyo has the much lighter weight `klaviyo.js` wrapper that we recommend for client-side use [which you can read about here.](https://developers.klaviyo.com/en/docs/introduction_to_the_klaviyo_object)

In addition, you can [make client-side API calls](https://developers.klaviyo.com/en/reference/create_client_event) outright if desired.

## [3.0.0] - revision 2023-02-22
### Added
- Profiles API now returns predictive analytics when calling `getProfile` and `getProfiles` by passing in `additionalFieldsProfile = ["predictive_analytics"]`.

  ```javascript
  const response = await Profiles.getProfiles({additionalFieldsProfile: ["predictive_analytics"]})
  ```

### Changed
- Relationship endpoints that were previously grouped together are now split into related-resource-specific endpoints.

### Migration Guide
- To migrate to this latest version, all calls to relationship endpoints need to be updated, as in the following example:
  - `getCampaignRelationships(campaignId, "tags")` will become `getCampaignRelationshipsTags(campaignId)`.

## [2.1.1] - revision 2023-02-22
### Changes 
- Multi-store
  - ConfigWrappers passed into the api wrappers now works as intended
- PageSize is now added as an optional param to the following endpoints
  - Segments
    - getSegmentProfiles
  - Profiles
    - getProfiles
  - Lists
    - getListProfiles

## [2.1.0] - revision 2023-02-22

### Added
- Campaigns (which were previously in our Beta API/SDKs)

### Changes
- Flows
    - Pagination changed from page offset to cursor

## [2.0.0] - revision 2023-01-24

- Added the following endpoints (which were previously in our Beta APIg/SDKs):
  - Data Privacy
  - All Tags endpoints, as well as the following related resource-specific endpoints:
    - Get Flow Tags
    - Get List Tags
    - Get Segment Tags
- Reworked the response object from returned by SDK methods
  - instead of only returning the response payload, the status code and headers are now also returned
  - The API response payload is now nested under `body` within the API response returned by SDK methods. You can get the `id` of the returned resource by calling `response.body.data.id` instead of `response.data.id` from previous releases. You can get response headers and status with `response.headers` and `response.status` respectively.

## [1.0.2] - revision: 2022-10-19 (update: 2022-12-19)

### Changes
- fix `babel/cli` location in `package.json` to be in devDependencies
- when passing pageCursor the returned link.next url will be automatically parsed for the page cursor

## [1.0.0] - revision: 2022-10-19

### Added
- Initial release

### Changes
- Naming changes from beta:
    - Package name: klaviyo-sdk-beta → klaviyo-api
    - Some functions have changed name
- New resources and endpoints: 
    - See [API Changelog](https://developers.klaviyo.com/en/docs/changelog_) for full details