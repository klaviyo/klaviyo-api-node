# Changelog
All notable changes to this project will be documented in this file.

## [19.0.0] - revision 2025-07-15
### Added
#### Mapped Metrics API

- Use the [Mapped Metrics API](https://developers.klaviyo.com/en/reference/get_mapped_metrics) to retrieve some or all mapped metrics in your Klaviyo account, or [update](https://developers.klaviyo.com/en/reference/update_mapped_metric) a mapped metric.
- Get the [metric](https://developers.klaviyo.com/en/reference/get_metric_for_mapped_metric), [custom metric](https://developers.klaviyo.com/en/reference/get_custom_metric_for_mapped_metric), or associated metric IDs for a given mapped metric.

#### Custom Objects API

- Use the [Custom Objects API](https://developers.klaviyo.com/en/reference/custom_objects_api_overview) to ingest data records from other third-party sources into Klaviyo and retrieve all available data sources for an account.
- Use ingested data records to create [custom objects](https://help.klaviyo.com/hc/en-us/articles/35105337172123) in a Klaviyo account.

## [18.0.0] - revision 2025-04-15
### Added
#### Web Feeds API

- Create, retrieve, update, and/or delete web feeds via the [Web Feeds API](https://developers.klaviyo.com/en/reference/web_feeds_api_overview).
- Create universal content blocks referencing these web feeds with our [Universal Content API](https://developers.klaviyo.com/en/reference/universal_content_api_overview).

#### Custom Metrics API

- Create, retrieve, update, and/or delete custom metrics via the [Custom Metrics API](https://developers.klaviyo.com/en/reference/custom_metrics_api_overview).
- Report on custom metric conversions in our Campaign and Flow [Reporting APIs](https://developers.klaviyo.com/en/reference/reporting_api_overview) (set the custom metric ID as the `conversion_metric_id`).

> 🚧
>
> Standard accounts can only have 1 custom metric. Upgrade to Klaviyo's [Advanced KDP](https://www.klaviyo.com/products/advanced-cdp) or [Marketing Analytics](https://www.klaviyo.com/solutions/analytics) plan to create up to 50 custom metrics. To learn more about these plans, visit our [billing guide](https://help.klaviyo.com/hc/en-us/articles/115000976672).

#### Get and Delete Push Token APIs

- Retrieve and/or delete a given push token via [Get Push Token](https://developers.klaviyo.com/en/reference/get_push_token) and [Delete Push Token APIs](https://developers.klaviyo.com/en/reference/delete_push_token).
- [Include](https://developers.klaviyo.com/en/docs/relationships_#the-include-query-parameter) push tokens on `GET /api/profiles`.
- We've added relationship endpoints for both profiles and push tokens:
  - Retrieve push tokens associated with a profile (`GET /api/profiles/{ID}/push-tokens`).
  - Get IDs for push tokens associated with a profile (`GET /api/profiles/{ID}/relationships/push-tokens`).
  - Retrieve the profile associated with a push token (`GET /api/push-tokens/{ID}/profile`).
  - Get ID for the profile associated with a push token (`GET /api/push-tokens/{ID}/relationships/profile`).

### Changed
#### Campaigns API endpoints updated to support options for push notification badges

- Badge count settings are supported on the "campaign-message" resource for push messages.
  - The following options for incrementing badge count have been added to the Campaigns API: `increment_one` (increment by 1), `set_count` (increment by a given value), and `set_property` (increment by profile property).

#### Optional AMP MIME-type field for Templates API

- We've added support for creating and updating AMP versions of an email template through an optional `amp` field (under `attributes`) in our Create and Update Template APIs.
- This field requires AMP Email to be enabled. Refer to our [AMP Email setup guide](https://developers.klaviyo.com/en/docs/send_amp_emails_in_klaviyo) for more information.

## [17.0.0] - revision 2025-01-15
### Changed
- ISO strings are now accepted for date fields
- **Breaking:** Renamed classes
  - `BaseEventCreateQueryResourceObject` -> `BaseEventCreateQueryBulkEntryResourceObject`
  - `BaseEventCreateQueryResourceObjectAttributes` -> `BaseEventCreateQueryBulkEntryResourceObjectAttributes`
  - `EmailTrackingOptions` -> `CampaignsEmailTrackingOptions` OR `FlowEmailTrackingOptions`
  - `ProfileMetricCondition` -> `SegmentsProfileMetricCondition` OR `FlowsProfileMetricCondition`
  - `SMSTrackingOptions` -> `FlowsSMSTrackingOptions` OR `CampaignsSMSTrackingOptions`
- **Breaking:** Removed classes
  - `UnionConditionGroup`
  - `UnionConditionGroupConditionsInner`
  - `UnionFilter`
  - `UnionPositiveNumericFilter`
  - `UnionPositiveNumericFilterOperator`
  - `ProfileMetricConditionTimeframeFilter`

## [16.0.0] - revision 2025-01-15
### Added
- Get and Update Reviews APIs
  - Retrieve all reviews with `ReviewsApi.getReviews` or return a review with a specified ID using the `ReviewsApi.getReview` endpoint.
  - Manage your reviews programmatically with the `ReviewsApi.updateReview` endpoint, which allows you to change the status of a review, such as to reject or approve it. This endpoint modifies the moderation status of a review based on the provided review ID and status.
- Get and Create Flows APIs
  - Return a flow with the given flow ID using the `FlowsApi.getFlow` endpoint.
  - Create a new flow with the `FlowsApi.createFlow` endpoint.
- Campaigns API
  - Manage the images for your campaigns with a new set of endpoints for the `Campaigns` API, including: `getImageForCampaignMessage`, `getImageIdForCampaignMessage`, and `updateImageForCampaignMessage`.
### Changed
- **Breaking:** Subscription endpoints required field
  - Calls to `ProfilesApi.bulkSubscribeProfiles` and `ProfilesApi.unsubscribeProfiles` now require the `subscriptions` field, which grants or revokes consent for the indicated message types on the specified channels, such as email or sms.
- **Breaking:** Campaigns API push notification support
  - The Campaigns API now supports the push notification channel.
  - Support for push notifications includes **significant changes** to the following endpoints: `getCampaigns`, `getCampaign`, `createCampaign`, `updateCampaign`, `createCampaignClone`, `getMessagesForCampaign`, `getCampaignMessage`, `updateCampaignMessage`, `getCampaignForCampaignMessage`, `getCampaignIdForCampaignMessage`.
  - We recommend that you review the [Campaigns API Overview](https://developers.klaviyo.com/en/reference/campaigns_api_overview) for more detailed information about changes to the structure and responses of these endpoints.
- **Breaking:** Pagination updates
  - The `FlowsApi.getMessagesForFlowAction` and `FlowsApi.getActionIdForFlowMessage` endpoints have been updated from offset pagination to cursor pagination.
- Create Template API
  - The `TemplatesApi.createTemplate` endpoint now supports the creation of hybrid templates when `editorType` is `USER_DRAGGABLE` and hybrid template HTML is included.
- Profiles API
  - The following server-side APIs have been updated to an enhanced identity resolution processor to better follow the Klaviyo identity resolution identifier priority order.
    - `ProfilesApi.createProfile`
    - `ProfilesApi.updateProfile`
- **Breaking:** Renamed models
  - `AudiencesSubObject` -> `Audiences`
  - `GetCampaignTagRelationshipListResponseCollection` -> `GetCampaignTagsRelationshipsResponseCollection`
  - `GetCatalogCategoryItemListResponseCollection` -> `GetCatalogCategoryItemsRelationshipsResponseCollection`
  - `GetCatalogCategoryItemListResponseCollectionDataInner` -> `GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner`
  - `GetCatalogItemCategoryListResponseCollection` -> `GetCatalogItemCategoriesRelationshipsResponseCollection`
  - `GetCatalogItemCategoryListResponseCollectionDataInner` -> `GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner`
  - `GetCouponRelationshipCouponCodesListResponseCollection` -> `GetCouponCodesRelationshipsResponseCollection`
  - `GetCouponRelationshipCouponCodesListResponseCollectionDataInner` -> `GetCouponCodesRelationshipsResponseCollectionDataInner`
  - `GetEventMetricRelationshipResponseData` -> `GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData`
  - `GetFlowResponseCompoundDocument` -> `GetFlowResponseCompoundDocument`
  - `GetFlowTagRelationshipListResponseCollection` -> `GetFlowTagsRelationshipsResponseCollection`
  - `GetFormFormVersionRelationshipsResponseCollection` -> `GetFormVersionsRelationshipsResponseCollection`
  - `GetListRelationshipsResponseCollection` -> `GetListProfilesRelationshipsResponseCollection`
  - `GetListTagRelationshipListResponseCollection` -> `GetListTagsRelationshipsResponseCollection`
  - `GetProfileImportJobProfileRelationshipsResponseCollection` -> `GetProfileBulkImportJobProfilesRelationshipsResponseCollection`
  - `GetProfileListRelationshipsResponseCollection` -> `GetProfileListsRelationshipsResponseCollection`
  - `GetProfileSegmentRelationshipsResponseCollection` -> `GetProfileSegmentsRelationshipsResponseCollection`
  - `GetReviewResponseDTO20240715CollectionCompoundDocument` -> `GetReviewResponseDTOCollectionCompoundDocument`
  - `GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner` -> `GetReviewResponseDTOCollectionCompoundDocumentDataInner`
  - `GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationships` -> `GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships`
  - `GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationshipsEvents` -> `GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents`
  - `GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner` -> `GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner`
  - `GetReviewResponseDTO20240715CompoundDocument` -> `GetReviewResponseDTOCompoundDocument`
  - `GetReviewResponseDTO20240715CompoundDocument` -> `GetReviewResponseDTOCompoundDocument`
  - `GetSegmentTagRelationshipListResponseCollection` -> `GetSegmentTagsRelationshipsResponseCollection`
  - `ReviewResponseDTO20240715ObjectResource` -> `ReviewResponseDTOObjectResource`
  - `ReviewResponseDTO20240715ObjectResourceAttributes` -> `ReviewResponseDTOObjectResourceAttributes`

## [15.0.0] - revision 2024-10-15
### Added
- Transactional SMS Content
  - Collect transactional-only SMS consent separately from general marketing consent with the Profiles APIs. This can enable customers to choose the types of texts they wish to receive: transactional, promotional, or both. Use the transactional field with Bulk Subscribe Profiles or Bulk Unsubscribe Profiles to set consent status. Review current transactional consent status with Get Profiles.
### Changed
- **Breaking:** Renamed models:
  - `GetCampaignMessagesRelationshipListResponseCollection` -> `GetCampaignMessagesRelationshipsResponseCollection`
  - `GetCampaignMessagesRelationshipListResponseCollectionDataInner` -> `GetCampaignMessagesRelationshipsResponseCollectionDataInner`
  - `GetTagGroupTagRelationshipsResponseCollection` -> `GetTagGroupTagsRelationshipsResponseCollection`
  - `GetTagGroupTagRelationshipsResponseCollectionDataInner` -> `GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner`
  - `GetTagTagGroupRelationshipsResponse` -> `GetTagGroupRelationshipResponse`
  - `GetTagTagGroupRelationshipsResponseData` -> `GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData`
  - `GetCouponCodeRelationshipCouponResponse` -> `GetCouponCodeCouponRelationshipResponse`
  - `GetCouponCodeRelationshipCouponResponseData` -> `GetCouponCodeCouponRelationshipResponseData`
  - `GetFlowMessageFlowActionRelationshipResponse` -> `GetFlowMessageActionRelationshipResponse`
  - `GetMetricPropertyRelationshipMetricResponse` -> `GetMetricPropertyMetricRelationshipResponse`
  - `GetMetricPropertyRelationshipMetricResponseData` -> `GetEventMetricRelationshipResponseData`
  - `GetMetricRelationshipMetricPropertyResponseCollection` -> `GetMetricPropertiesRelationshipsResponseCollection`
  - `GetMetricRelationshipMetricPropertyResponseCollectionDataInner` -> `GetMetricPropertiesRelationshipsResponseCollectionDataInner`
  - `GetProfileImportJobListRelationshipsResponseCollection` -> `GetProfileBulkImportJobListsRelationshipsResponseCollection`

## [14.0.0] - 2024-10-15
### Changed
- **Breaking:** Providing `RetryWithExponentialBackoff` class for smart retries to replace the `RetryOptions` wrapper around the `exponential-backoff` package
- **Breaking:** renamed several models:
  - `GetCampaignMessageTemplateRelationshipListResponse` -> `GetCampaignMessageTemplateRelationshipResponse`
  - `GetListFlowTriggersRelationshipResponseCollection` -> `GetListFlowTriggersRelationshipsResponseCollection`
  - `GetMetricFlowTriggersRelationshipResponseCollection` -> `GetMetricFlowTriggersRelationshipsResponseCollection`
  - `PostListCreateResponseDataRelationshipsFlowTriggers` -> `GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers`
  - `GetMetricFlowTriggersRelationshipResponseCollectionDataInner` -> `GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner`
### Fixed
- Fixed `flow-triggers` relationships missing the `data` property

## [13.0.0] - revision 2024-10-15
### Added
- Universal Content API
  - Read, update, and delete universal content
  - For more information, see our [Universal Content API overview](https://developers.klaviyo.com/en/reference/universal_content_api_overview)
- Form Reporting API
  - Query form performance
  - For more information, see our [Reporting API overview](https://developers.klaviyo.com/en/reference/reporting_api_overview#forms)
- Segment Reporting API
  - Query segment growth data
  - For more information, see our [Reporting API overview](https://developers.klaviyo.com/en/reference/reporting_api_overview#segments)
- Reviews API
  - Get and list reviews
  - For more information, see our [Reviews API overview](https://developers.klaviyo.com/en/reference/reviews_api_overview)
- Tracking Settings API
  - Read and update the Tracking Settings for an account (Account -> Settings -> UTM Tracking in UI)
  - For more information, see our [Tracking Settings API documentation](https://developers.klaviyo.com/en/reference/get_tracking_settings)
- Metric Properties API
  - Access the properties for a given metric (e.g. "Placed Order")
  - For more information, see our [Metric Properties API documentation](https://developers.klaviyo.com/en/reference/get_metric_property)
- Suppress/Unsuppress profile job APIs
  - Monitor the status of jobs created by Suppress Profiles and Unsuppress Profiles requests
  - For more information, see our [Suppress Profiles Job API documentation](https://developers.klaviyo.com/en/reference/get_bulk_suppress_profiles_job)

### Changed
- `ProfilesApi.createOrUpdateProfile` has been updated to an enhanced identity resolution processor to better follow the Klaviyo identity resolution identifier priority order
- Added support for `$locale` property for `ProfilesApi`
- Numerous methods have been renamed as part of a large renaming effort - the old methods are now deprecated aliases

## [12.0.1] - revision 2024-07-15
### Fixed
- Fixed NPM package issue

## [12.0.0] - revision 2024-07-15
### Added
- Added several method aliases based on previous operation IDs
### Fixed
- **Breaking**
	- Removed incorrect `links` property from several DTO classes

## [11.0.0] - revision 2024-07-15

### Added

 - Forms API
  - New `FormsApi` class with methods to get forms, form versions and relationships.
 - Webhooks API
  - New `WebooksApi` class containing CRUD operations for webhooks.
 - FilterBuilder class
   - New class to help build filters in the correct format for endpoints that use them.
   - See the README for more information and usage examples.

### Changed
 - `ProfilesApi.subscribe()`
  - added `historicalImport` flag for importing historically consented profiles can now be optionally supplied in the payload for the Subscribe Profiles endpoint.
  - When using this flag, a `consentedAt` date must be provided and must be in the past.


## [10.1.0] - revision 2024-06-15

### Added
  - Segments Api
    - New create segment endpoint `SegmentsApi.createSegment()`.
    - New delete segment endpoint `SegementsApi.deleteSegment()`.
    - Updated existing segments endpoints to include the segment definition
    - For more information, see our [Segments API overview](https://developers.klaviyo.com/en/reference/segments_api_overview).

  - Flows Api
    - New delete flows endpoint `FlowsApi.deleteFlow()`

## [10.0.0] - revision 2024-05-15

### Added

  - Bulk Create Events API
	  - We have added support for creating events in bulk via the `EventsApi.bulkCreateEvents` method
    - Create multiple events for new and existing profiles and/or update profile properties in a single API call. For more information, see our [Events API overview](https://developers.klaviyo.com/en/reference/events_api_overview).

### Changed

  - Accounts Api
	- `AccountsApi.getAccounts` and `AccountsApi.getAccount` have been updated to return the account's locale, e.g. "en-US".

  - **Breaking** Subscribe API Synchronous Validation Improved
	- To provide better feedback for handling SMS subscriptions, we’ve added improved validation behavior to `ProfilesApi.subscribeProfiles` method. In prior revisions, such requests may appear as 202s but will fail to update SMS consent. To handle this issue, 400 validation errors are returned for the following cases
	  1. If a profile is subscribed to SMS marketing and [age-gating is enabled](https://help.klaviyo.com/hc/en-us/articles/4408311712667) but age_gated_date_of_birth is not provided, or the DOB does not meet the region's requirements.
      2. If the account does not have a sending number in the phone number’s region.
      3. If the phone number is in a region not supported by Klaviyo.
      4. If consented_at is set and the list or global setting is double opt-in.

## [9.0.0] - revision 2024-02-15

### Changed

- OAuth support has been moved to GA, view the [building a new integration guide](https://developers.klaviyo.com/en/docs/build_your_integration) for more information.

## [8.0.0] - revision 2024-02-15

### Added: 

- New `ReportingApi` allows you to request campaign and flow performance data that you can view in the Klaviyo UI.

- `campaignValuesQuery`
  - Request campaign analytics data, for example, a campaign performance report on the open rate over the past 30 days.

- `flowValuesQuery`
  - Request flow analytics data, for example, a flow performance report on the revenue per recipient value over the past 3 months.

- `flowSeriesQuery`
  - Fetch flow series data for a specific interval and timeframe, for example, a flow performance report on weekly click rates  over the past 12 months.


- New `ProfilesApi` endpoint allows you to create or update a profile with a set of profile attributes.

  - `createOrUpdateProfile`
    - This endpoint operates synchronously and offers an upsert pattern similar to the [v1/v2 Identify API](https://developers.klaviyo.com/en/docs/apis_comparison_chart).

### Changed:
	
- Removed the $attribution field from event_properties in get_event and  get_events (breaking change).
	
  - To include this data in your request, add include=attributions to your request.


## [7.2.0] - revision 2023-12-15

### Added

- New Endpoints: Bulk Profile Imports:
    - `Profiles.spawnBulkProfileImportJob`
    - `Profiles.getBulkProfileImportJob`
    - `Profiles.getBulkProfileImportJobs`
    - `Profiles.getBulkProfileImportJobLists`
    - `Profiles.getBulkProfileImportJobProfiles`
    - `Profiles.getBulkProfileImportJobImportErrors`
    - `Profiles.getBulkProfileImportJobRelationshipsProfiles`
    - `Profiles.getBulkProfileImportJobRelationshipsLists`
  
### Changed

- The `relationships` field of Profiles.subscribeProfiles payload is now optional. (see [subscribeProfiles reference](https://developers.klaviyo.com/en/reference/subscribe_profiles) for details).

## [7.1.0] - revision 2023-10-15

### Changed

  - Creating objects can now take the type as a string as well as an enum
    ```typescript
    let profile: ProfileCreateQuery = {
      data: {
        type:  'profile',
        attributes: {
          email: "typescript_literals_test@klaviyo-demo.com"
        }
      }
    }
    ```
  - Endpoints with multiple included properties will now deserialize both included objects correctly
    - i.e. `eventsApi.getEvent("${EVENT_ID}", {include: ['metric', 'profile']})`
  - Models that were supposed to support two primitive types but were serializing incorrectly now support one but work correctly
    - i.e. `updateProfile`'s `unset` value now takes a list of strings and serializes correctly. 

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
