# Changelog
All notable changes to this project will be documented in this file.

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