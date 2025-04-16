# Klaviyo Typescript SDK

- SDK version: 18.0.0

- Revision: 2025-04-15

## Helpful Resources

- If you want to suggest code changes check out our [`CONTRIBUTING.md`](CONTRIBUTING.md) document.
- To learn about migration from our 5.x.x version check out the [`MIGRATION.md`](MIGRATION.md) file.
- Read version changes in [`CHANGELOG.md`](CHANGELOG.md).

### Other Klaviyo Resources

- [API Reference](https://developers.klaviyo.com/en/v2025-04-15/reference/)
- [API Guides](https://developers.klaviyo.com/en/v2025-04-15/docs)
- [Postman Workspace](https://www.postman.com/klaviyo/workspace/klaviyo-developers)

## Design & Approach

This SDK is a thin wrapper around our API. See our API Reference for full documentation on API behavior.

This SDK exactly mirrors the organization and naming convention of the above language-agnostic resources, with a few namespace changes to make it fit better with Typescript

## Organization

This SDK is organized into the following resources:

- AccountsApi
- CampaignsApi
- CatalogsApi
- CouponsApi
- DataPrivacyApi
- EventsApi
- FlowsApi
- FormsApi
- ImagesApi
- ListsApi
- MetricsApi
- ProfilesApi
- ReportingApi
- ReviewsApi
- SegmentsApi
- TagsApi
- TemplatesApi
- TrackingSettingsApi
- WebFeedsApi
- WebhooksApi

# Installation

## NPM

You can install this library using `npm`.

`npm install klaviyo-api@18.0.0`


## source code

*Alternatively*, you can also run this using this repo as source code, simply download this repo then connect to your app putting the path in your package.json or via `npm link`

path: add this line to your apps package.json

```Json
"klaviyo-api": "< path to downloaded source code >"
```

npm link:

run `npm link` in your local copy of this repo's directory

run `npm link <"path to this repo">` first in your consuming app's directory

Sample file:

If you want to test out the repo but don't have a consuming app, you can run our sample typescript file, make whatever edits you want to `sample.ts` in the `sample` folder and use
```
npm run sample --pk=<YOUR PRIVATE KEY HERE>
```

# Usage Example

### To instantiate an API wrapper using an API Key

```JavaScript
import { ApiKeySession, ProfilesApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)
```


### To call the `createProfile` operation:

```JavaScript
import {
  ApiKeySession,
  ProfileCreateQuery,
  ProfileEnum,
  ProfilesApi,
} from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)

let profile: ProfileCreateQuery = {
  data: {
  type: ProfileEnum.Profile,
  attributes: {
    email: "typescript_test_1@klaviyo-demo.com"
    }
  }
}


profilesApi.createProfile(profile).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
});

```

> [!IMPORTANT]
> In this SDK, properties in request and response bodies use `camelCase`, rather than `snake_case`, which is used by the API.
> For example, in the `createProfile` payload, you would supply `phoneNumber` instead of `phone_number`.

### Retry Options

Constructing an API object also has optional property `RetryWithExponentialBackoff`, which attempts retries on failed API calls with exponential backoff.

The default configs are:
- retryCodes: [429, 503, 504, 524]
- numRetries: 3
- maxInterval: 60

```Typescript
const retryWithExponentialBackoff: RetryWithExponentialBackoff = new RetryWithExponentialBackoff({ retryCodes: [429, 503, 504, 524], numRetries: 3, maxInterval: 60})
const session = new ApiKeySession("< YOUR API KEY HERE >", retryWithExponentialBackoff)
```

### Organizational Helpers

There is also an optional `Klaviyo` import that has all the Apis and Auth, if you prefer that method for organization.
```Typescript
import { Klaviyo } from 'klaviyo-api'

const profilesApi = new Klaviyo.ProfilesApi(new Klaviyo.Auth.ApiKeySession("< YOUR API KEY HERE >", retry))
````

### Inspecting Errors

Failed api calls throw an AxiosError.

The two most commonly useful error items are probably
    - `error.response.status`
    - `error.response.statusText`

Here is an example of logging those errors to the console

```Typescript
profilesApi.createProfile(profile).then(result => {
  console.log(result.body)
}).catch(error => {
  console.log(error.response.status)
  console.log(error.response.statusText)
});
```

### Uploading an image by file

The `ImageApi` exposes `uploadImageFromFile()`

```Typescript
import fs from 'fs'
import {ApiKeySession, ImageApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const imageApi = new ImagesApi(session)
imageApi.uploadImageFromFile(fs.createReadStream("./test_image.jpeg")).then(result => {
    console.log(result.body)
}).catch(error => {
  console.log(error)
}
```

### Global Api Key

If you only connect to one Klaviyo account you may find it useful to access preconfigured objects.

Set a global key, If you were using `ConfigWrapper` this also sets the GlobalApiKeySettings
```Typescript
import { GlobalApiKeySettings } from 'klaviyo-api'

new GlobalApiKeySettings("< YOUR API KEY HERE >")
```

Now you can use the shortened names `ProfilesApi` can be referenced with `Profiles`
```Typescript
import { Profiles, GlobalApiKeySettings } from 'klaviyo-api'

new GlobalApiKeySettings("< YOUR API KEY HERE >")

Profiles.getProfiles().then(result => {
  console.log(result.body)
}).catch(error => {
  console.log(error.response.status)
  console.log(error.response.statusText)
});
```

## Using OAuth to connect to multiple Klaviyo accounts.

For users creating integrations or managing multiple Klaviyo accounts, Klaviyo's OAuth authentication will make these tasks easier.

### Getting started with OAuth

First, configure an integration. If you haven't set up an integration, learn about it in this [guide](https://developers.klaviyo.com/en/v2025-04-15/docs/set_up_oauth)

### Making API Calls with OAuth
The `klaviyo-api` package can keep your `access token` up to date. If you have already developed a system for refreshing tokens or would like a more minimalist option, skip to [OAuthBasicSession](#oauthbasicsession)

#### TokenStorage
For the OAuthApi to be storage agnostic, this interface must be implemented for the `OAuthApi` to retrieve and save you `access` and `refresh` tokens.
Implement the `retrieve` and `save` functions outlined in the interface. If you need help getting started, check out the `storageHelpers.ts` in the [Klaviyo Example Typescript Integration](https://github.com/klaviyo-labs/node-integration-example)

Your implementation needs to include two methods:
1. `save` is called after creating a new `access token` via the authorization flow or after refreshing the `access token`.
    Your code needs to update (and insert if you are going to be using `createTokens()`) the new `access` or `refresh` token information into storage
    to keep track of which of your integration users' access information you are referencing, the `customerIdentifier` is a unique value to help with lookup later.
    ```typescript
    save(customerIdentifier: string, tokens: CreatedTokens): Promise<void> | void
    ```
2. `retrieve` leverages the `customerIdentifier` to look up the saved token information and returns it for the `OAuthApi` to use
    ```typescript
    retrieve(customerIdentifier: string): Promise<RetrievedTokens> | RetrievedTokens
    ```

```typescript
import { TokenStorage } from 'klaviyo-api';
class <Your Token Storage Class Name Here> implements TokenStorage
```

#### OAuthApi
This class holds the information about your specific integration. It takes three inputs:
1. `clientId` - This is the id of your integration. Retrieve it from your integration's settings page
2. `clientSecret` - This is the secret for your integration. The secret is generated upon the creation of your integration.
3. `tokenStorage` - This is an instance of your implementation of `TokenStorage` and is called automatically when creating and refreshing `access tokens`


```typescript
import { OAuthApi } from 'klaviyo-api';

const oauthApi = new OAuthApi("<client id>", "<client secret>", <instance of your TokenStorage implimentation>)
```

#### `OAuthSession`
To make an API call, you need to create an `OAuthSession` instance. This session object is the OAuth equivalent of `ApiKeySession` and is used similarly.

It takes two properties
1. `customerIdentifier` - This is how the session is going to grab a user's authentication information and let your implementation of `TokenStorage` know where to save any update `access token`
2. `oauthApi` - This is the instance of `OAuthApi` created above. It will dictate how the session `saves` and `retrieves` the `access tokens`
3. `retryWithExponentialBackoff` - OPTIONAL - the `RetryWithExponentialBackoff` instance outlines your desired exponential backoff configs, outlined in [Retry Options](#retry-options) above

```typescript
import { OAuthSession, ProfilesApi } from 'klaviyo-api';

const session = new OAuthSession(customerIdentifier, oauthApi)

//Pass the session into the API you want to use
const profileApi = new ProfilesApi(session)
```

#### `OAuthBasicSession`
If you don't want to deal with any of the helpers above or don't want `klaviyo-api` to refresh your tokens for you, this is the alternative.

The `OAuthBasicSession` takes up to two parameters
1. `accessToken` - The token is used in the API calls' authentication
3. `retryWithExponentialBackoff` - OPTIONAL - the `RetryWithExponentialBackoff` instance outlines your desired exponential backoff configs, outlined in [Retry Options](#retry-options) above

```typescript
import { OAuthBasicSession } from 'klaviyo-api';

const session = new OAuthBasicSession("<access token>")

//Pass the session into the API you want to use
const profileApi = new ProfilesApi(session)
```

Remember to check for `401` errors. A 401 means that your token is probably expired.

#### `KlaviyoTokenError`

If an error occurred during an API call, check the error type with `isKlaviyoTokenError`. The name property will reflect which step the error occurred, reflecting whether it happened during creating, refreshing, saving, or retrieving the `name` tokens. The `cause` property will hold the error object of whatever specific error occurred.

### Authorization Flow

Build The authorization flow in the same application as with the rest of your integrations business logic or separately.
There is no requirement that the authorization flow has to be backend and can be implemented entirely in a frontend application (in that case, you can ignore this section, as this repo shouldn't use this for frontend code)

To understand the authorization flow, there are two major resources to help:
1. [OAuth authorization guide](https://developers.klaviyo.com/en/v2025-04-15/docs/set_up_oauth#1-user-installs-your-integration)
2. [Node Integration Example](https://github.com/klaviyo-labs/node-integration-example)

If you implement your authorization flow on a node server, you can use these exposed helper functions.

#### OAuthApi

The OAuthApi class also exposes helpful Authorization flow utilities.

1. `generateAuthorizeUrl` - This helps correctly format the Klaviyo `/oauth/authorize` URL the application needs to redirect to so a user can approve your integration.
   1. `state` - This is the only way to identify which user just authorized your application (or failed to). `state` is passed back via query parameter to your `redirectUrl`.
   2. `scope` - The permissions the created `access tokens` will have. The user will be displayed these scopes during the authorization flow. For these permissions to work, also add them to your app settings in Klaviyo [here](www.klaviyo.com/oauth/client)
   3. `codeChallenge` - This is the value generated above by the `generateCode` function.
   4. `redirectUrl` - This is the URL that Klaviyo will redirect the user to once Authorization is completed (even if it is denied or has an error).
   Remember to whitelist this redirect URL in your integration's settings in Klaviyo.
   ```typescript
    import { OAuthApi } from 'klaviyo-api'

    const oauthApi = new OAuthApi("<client id>", "<client secret>", <TokenStorage implementation instance>)
    oauthApi.generateAuthorizeUrl(
      state, // It's suggested to use your internal identifier for the Klaviyo account that is authorizing
      scopes,
      codeChallenge,
      redirectUrl
    )
    ```
2. `createTokens` - Uses Klaviyo `/oauth/token/` endpoint to create `access` and `refresh` tokens
   1. `customerIdentifier` - This ID is NOT sent to Klaviyo's API. If the `/token` API call this method wraps is successful, the created tokens will be passed into your `save` method along with this `customerIdentifier`  in your implementation of `TokenStorage`.
   2. `codeVerifier` - The verifier code must match the challenge code in the authorized URL redirect.
   3. `authorizationCode`- A User approving your integration creates this temporary authorization code. Your specified redirect URL receives this under a `code` query parameter.
   4. `redirectUrl` - The endpoint set in `generateAuthorizeUrl`. Whitelist the URL in your application settings.

   ```typescript
    import { OAuthApi } from 'klaviyo-api'

    const oauthApi = new OAuthApi("<client id>", "<client secret>", <TokenStorage implementation instance>)
    await oauthApi.createTokens(
      customerIdentifier,
      codeVerifier,
      authorizationCode,
      redirectUrl
    )
   ```
3. `OAuthCallbackQueryParams` For typescript users, this object is an interface representing the possible query parameters sent to your redirect endpoint



#### Proof Key of Code Exchange (PKCE)

All the PKCE helper functions live within the `Pkce` namespace. Read about PKCE [here](https://developers.klaviyo.com/en/v2025-04-15/docs/set_up_oauth#pkce-and-code-challenges)

```typescript
import { Pkce } from 'klaviyo-api'
```

The `Pkce` namespace holds two different helper utilities
1. `generateCodes` - This method will create the `codeVerifier` and `codeChallenge` needed later in the authorization flow.

    ```typescript
    import { Pkce } from 'klaviyo-api'

    const pkceCodes = new Pkce.generateCodes()
    // the two codes can be accessed by
    const codeVerifier: string = pkceCodes.codeVerifier
    const codeChallenge: string = pkceCodes.codeChallenge
    ```

2. `CodeStorage` - This is an OPTIONAL interface to help keep your code organized, to relate a `customerIdentifier` to their generated PKCE code

    ```typescript
    import { Pkce } from 'klaviyo-api'
    class <Your Code Storage Class Here> implements Pkce.CodeStorage
    ```

## Optional Parameters and [JSON:API](https://jsonapi.org/) features

Here we will go over

- Pagination
- Page size
- Additional Fields
- Filtering
- Sparse Fields
- Sorting
- Relationships

### Quick rule

As a reminder, some optional parameters are named slightly differently from how you would make the call without the SDK docs;
the reason for this is that some query parameter names have variables that make for bad JavaScript names.
For example: `page[cursor]` becomes `pageCursor`. (In short: remove the non-allowed characters and append words with camelCase).

### Cursor based Pagination

All the endpoints that return a list of results use cursor-based pagination.

Obtain the cursor value from the call you want to get the next page for, then pass it under the `pageCursor` optional parameter. The page cursor looks like `WzE2NDA5OTUyMDAsICIzYzRjeXdGTndadyIsIHRydWVd`.

API call:

```
https://a.klaviyo.com/api/profiles/?page[cursor]=WzE2NTcyMTM4NjQsICIzc042NjRyeHo0ciIsIHRydWVd
```

SDK call:

```Typescript
import { ApiKeySession, ProfilesApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)

const profileList = await profilesApi.getProfiles({pageCursor: 'WzE2NTcyMTM4NjQsICIzc042NjRyeHo0ciIsIHRydWVd'})
```

You get the cursor for the `next` page from `body.link.next`. This returns the entire url of the next call,
but the SDK will accept the entire link and use only the relevant cursor, so no need to do any parsing of the `next` link on your end

Here is an example of getting the second next and passing in the page cursor:

```Typescript
import { ApiKeySession, ProfilesApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)

try {
    const profilesListFirstPage = await profilesApi.getProfiles()
    const nextPage = profilesListFirstPage.body.links.next
    const profileListSecondPage = await profilesApi.getProfiles({pageCursor: nextPage})
    console.log(profileListSecondPage.body)
} catch (e) {
    console.log(e)
}
```

There are more page cursors than just `next`: `first`, `last`, `next` and `prev`. Check the API Reference for all the paging params for a given endpoint.

### Page Size

Some endpoints allow you to set the page size by using the `pageSize` parameter.

API call:

```
https://a.klaviyo.com/api/profiles/?page[size]=20
```

SDK call:

```typescript
import { ApiKeySession, ProfilesApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)

const profileList = await profilesApi.getProfiles({pageSize: 20})
```

### Additional Fields

Additional fields are used to populate parts of the response that would be `null` otherwise.
For example, for the `getProfile`, endpoint you can pass in a request to get the predictive analytics of the profile. Using the `additionalFields` parameter does impact the rate limit of the endpoint in cases where the related resource is subject to a lower rate limit, so be sure to keep an eye on your usage.
API call:
```
https://a.klaviyo.com/api/profiles/01GDDKASAP8TKDDA2GRZDSVP4H/?additional-fields[profile]=predictive_analytics
```

SDK call:

```javascript
import { ApiKeySession, ProfilesApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)

const profileId = '01GDDKASAP8TKDDA2GRZDSVP4H'
const profile = await profilesApi.getProfile(profileId, {additionalFieldsProfile: ['predictive_analytics']})

// If your profile has enough information for predictive analytis it will populate
console.log(profile.body.data.attributes.predictiveAnalytics)
```

#### Filtering

You can filter responses by passing a string into the optional parameter `filter`. Note that when filtering by a property it will be snake_case instead of camelCase, ie. `metric_id`

Read more about formatting your filter strings in our [developer documentation](https://developers.klaviyo.com/en/v2025-04-15/docs/filtering_)

Here is an example of a filter string for results between two date times: `less-than(updated,2023-04-26T00:00:00Z),greater-than(updated,2023-04-19T00:00:00Z)`

Here is a code example to filter for profiles with the matching emails:

```
https://a.klaviyo.com/api/profiles/?filter=any(email,["henry.chan@klaviyo-demo.com","amanda.das@klaviyo-demo.com"]
```
SDK call:
```javascript
import { ApiKeySession, ProfilesApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)

const filter = 'any(email,["henry.chan@klaviyo-demo.com","amanda.das@klaviyo-demo.com"])'
const profileList = await profilesApi.getProfiles({filter})
```

To help create filters in the correct format, use the `FilterBuilder` class

```typescript
new FilterBuilder()
      .equals("email", "sm@klaviyo-demo.com")
      .build() // outputs equals(email,"sm@klaviyo-demo.com")
```

Complex filters can be build by adding additional filters to the builder before calling `build()`

```typescript
const date = new Date(2023, 7, 15, 12, 30, 0);
new FilterBuilder()
      .any("email", ["sarah.mason@klaviyo-demo.com", "sm@klaviyo-demo.com"])
      .greaterThan("created", date)
      .build();
// outputs any(email,["sarah.mason@klaviyo-demo.com","sm@klaviyo-demo.com"]),greater-than(created,2023-08-15T16:30:00.000Z)
```

### Sparse Fields

If you only want a specific subset of data from a specific query you can use sparse fields to request only the specific properties.
The SDK expands the optional sparse fields into their own option, where you can pass a list of the desired items to include.

To get a list of event properties the API call you would use is:
```
https://a.klaviyo.com/api/events/?fields[event]=event_properties
```

SDK call:

```javascript
import { ApiKeySession, EventsApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const eventsApi = new EventsApi(session)

const eventsList = await eventsApi.getEvents({fieldsEvent: ["event_properties"]})
```

### Sorting

Your can request the results of specific endpoints to be ordered by a given parameter. The direction of the sort can be reversed by adding a `-` in front of the sort key.
For example `datetime` will be ascending while `-datetime` will be descending.

If you are unsure about the available sort fields, refer to the API Reference page for the endpoint you are using.
For a comprehensive list that links to the documentation for each function check the Endpoints section [below](#endpoints).


API Call to get events sorted by oldest to newest datetime:
```
https://a.klaviyo.com/api/events/?sort=-datetime
```
SDK call:

```typescript
import { ApiKeySession, EventsApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const eventsApi = new EventsApi(session)

const events = await eventsApi.getEvents({sort: '-datetime'})
```

### Includes

You can add additional information to your API response via additional fields and the includes parameter.
This allows you to get information about two or more objects from a single API call.
Using the includes parameter often changes the rate limit of the endpoint so be sure to take note.

API call to get profile information and the information about the lists the profile is in:

```
https://a.klaviyo.com/api/profiles/01GDDKASAP8TKDDA2GRZDSVP4H/?include=lists
```

SDK call:

```Typescript
import { ApiKeySession, ProfilesApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)

const profileId = '01GDDKASAP8TKDDA2GRZDSVP4H'
const profile = await profilesApi.getProfile(profileId,{include:["lists"]})

// Profile information is accessed the same way with
console.log(profile.body.data)
// Lists related to the profile with be accessible via the included array
console.log(profile.body.included)
```

*Note about sparse fields and relationships:* you can also request only specific fields for the included object as well.

```Typescript
import { ApiKeySession, ProfilesApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)

const profileId = '01GDDKASAP8TKDDA2GRZDSVP4H'
// Use the fieldsLists property to request only the list name
const profile = await profilesApi.getProfile(profileId, {fieldsList: ['name'], include: ["lists"]})

// Profile information is accessed the same way with
console.log(profile.body.data)
// Lists related to the profile with be accessible via the included array
console.log(profile.body.included)
```

### Relationships

The Klaviyo API has a series of endpoints to expose the relationships between different Klaviyo Items. You can read more about relationships in [our documentation](https://developers.klaviyo.com/en/v2025-04-15/docs/relationships_).

Here are some use cases and their examples:

API call to get the list membership for a profile with the given profile ID:

```
https://a.klaviyo.com/api/profiles/01GDDKASAP8TKDDA2GRZDSVP4H/relationships/lists/
```

SDK call:

```Typescript
import { ApiKeySession, ProfilesApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const profilesApi = new ProfilesApi(session)

const profileId = '01GDDKASAP8TKDDA2GRZDSVP4H'
const profileRelationships = await profilesApi.getProfileRelationshipsLists(profileId)
```

For another example:

Get all campaigns associated with the given `tag_id`.

API call:

```
https://a.klaviyo.com/api/tags/9c8db7a0-5ab5-4e3c-9a37-a3224fd14382/relationships/campaigns/
```

SDK call:

```typescript
import { ApiKeySession, TagsApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const tagsApi = new TagsApi(session)

const tagId = '9c8db7a0-5ab5-4e3c-9a37-a3224fd14382'
const relatedCampagins = tagsApi.getTagRelationshipsCampaigns(tagId)
```
### Combining

You can use any combination of the features outlines above in conjunction with one another.

API call to get events associated with a specific metric, then return just the event properties sorted by oldest to newest datetime:

API call:
```
https://a.klaviyo.com/api/events/?fields[event]=event_properties&filter=equals(metric_id,"URDbLg")&sort=-datetime
```
SDK call:
```typescript
import { ApiKeySession, EventsApi } from 'klaviyo-api'

const session = new ApiKeySession("< YOUR API KEY HERE >")
const eventsApi = new EventsApi(session)

const metricId = 'URDbLg'
const filter = `equal(metric_id,"${metricId}")`
const events = await eventsApi.getEvents({fieldsEvent: ['event_properties'], sort: '-datetime', filter})
```

# Endpoints

## AccountsApi
_______________________________

[Get Account](https://developers.klaviyo.com/en/v2025-04-15/reference/get_account)

```typescript
AccountsApi.getAccount(id: string, options)
```
_______________________________

[Get Accounts](https://developers.klaviyo.com/en/v2025-04-15/reference/get_accounts)

```typescript
AccountsApi.getAccounts(options)
```
_______________________________
## CampaignsApi
_______________________________

[Assign Template to Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/assign_template_to_campaign_message)

```typescript
CampaignsApi.assignTemplateToCampaignMessage(campaignMessageAssignTemplateQuery: CampaignMessageAssignTemplateQuery)
```
##### Method alias:
```typescript
CampaignsApi.createCampaignMessageAssignTemplate(campaignMessageAssignTemplateQuery: CampaignMessageAssignTemplateQuery)
```
_______________________________

[Cancel Campaign Send](https://developers.klaviyo.com/en/v2025-04-15/reference/cancel_campaign_send)

```typescript
CampaignsApi.cancelCampaignSend(id: string, campaignSendJobPartialUpdateQuery: CampaignSendJobPartialUpdateQuery)
```
##### Method alias:
```typescript
CampaignsApi.updateCampaignSendJob(id: string, campaignSendJobPartialUpdateQuery: CampaignSendJobPartialUpdateQuery)
```
_______________________________

[Create Campaign](https://developers.klaviyo.com/en/v2025-04-15/reference/create_campaign)

```typescript
CampaignsApi.createCampaign(campaignCreateQuery: CampaignCreateQuery)
```
_______________________________

[Create Campaign Clone](https://developers.klaviyo.com/en/v2025-04-15/reference/create_campaign_clone)

```typescript
CampaignsApi.createCampaignClone(campaignCloneQuery: CampaignCloneQuery)
```
##### Method alias:
```typescript
CampaignsApi.cloneCampaign(campaignCloneQuery: CampaignCloneQuery)
```
_______________________________

[Delete Campaign](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_campaign)

```typescript
CampaignsApi.deleteCampaign(id: string)
```
_______________________________

[Get Campaign](https://developers.klaviyo.com/en/v2025-04-15/reference/get_campaign)

```typescript
CampaignsApi.getCampaign(id: string, options)
```
_______________________________

[Get Campaign for Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_campaign_for_campaign_message)

```typescript
CampaignsApi.getCampaignForCampaignMessage(id: string, options)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignMessageCampaign(id: string, options)
```
_______________________________

[Get Campaign ID for Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_campaign_id_for_campaign_message)

```typescript
CampaignsApi.getCampaignIdForCampaignMessage(id: string)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignMessageRelationshipsCampaign(id: string)
```
_______________________________

[Get Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_campaign_message)

```typescript
CampaignsApi.getCampaignMessage(id: string, options)
```
_______________________________

[Get Campaign Recipient Estimation](https://developers.klaviyo.com/en/v2025-04-15/reference/get_campaign_recipient_estimation)

```typescript
CampaignsApi.getCampaignRecipientEstimation(id: string, options)
```
_______________________________

[Get Campaign Recipient Estimation Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_campaign_recipient_estimation_job)

```typescript
CampaignsApi.getCampaignRecipientEstimationJob(id: string, options)
```
_______________________________

[Get Campaign Send Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_campaign_send_job)

```typescript
CampaignsApi.getCampaignSendJob(id: string, options)
```
_______________________________

[Get Campaigns](https://developers.klaviyo.com/en/v2025-04-15/reference/get_campaigns)

```typescript
CampaignsApi.getCampaigns(filter: string, options)
```
_______________________________

[Get Image for Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_image_for_campaign_message)

```typescript
CampaignsApi.getImageForCampaignMessage(id: string, options)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignMessageImage(id: string, options)
```
_______________________________

[Get Image ID for Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_image_id_for_campaign_message)

```typescript
CampaignsApi.getImageIdForCampaignMessage(id: string)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignMessageRelationshipsImage(id: string)
```
_______________________________

[Get Message IDs for Campaign](https://developers.klaviyo.com/en/v2025-04-15/reference/get_message_ids_for_campaign)

```typescript
CampaignsApi.getMessageIdsForCampaign(id: string)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignRelationshipsCampaignMessages(id: string)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignRelationshipsMessages(id: string)
```
_______________________________

[Get Messages for Campaign](https://developers.klaviyo.com/en/v2025-04-15/reference/get_messages_for_campaign)

```typescript
CampaignsApi.getMessagesForCampaign(id: string, options)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignCampaignMessages(id: string, options)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignMessages(id: string, options)
```
_______________________________

[Get Tag IDs for Campaign](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag_ids_for_campaign)

```typescript
CampaignsApi.getTagIdsForCampaign(id: string)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignRelationshipsTags(id: string)
```
_______________________________

[Get Tags for Campaign](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tags_for_campaign)

```typescript
CampaignsApi.getTagsForCampaign(id: string, options)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignTags(id: string, options)
```
_______________________________

[Get Template for Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_template_for_campaign_message)

```typescript
CampaignsApi.getTemplateForCampaignMessage(id: string, options)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignMessageTemplate(id: string, options)
```
_______________________________

[Get Template ID for Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_template_id_for_campaign_message)

```typescript
CampaignsApi.getTemplateIdForCampaignMessage(id: string)
```
##### Method alias:
```typescript
CampaignsApi.getCampaignMessageRelationshipsTemplate(id: string)
```
_______________________________

[Refresh Campaign Recipient Estimation](https://developers.klaviyo.com/en/v2025-04-15/reference/refresh_campaign_recipient_estimation)

```typescript
CampaignsApi.refreshCampaignRecipientEstimation(campaignRecipientEstimationJobCreateQuery: CampaignRecipientEstimationJobCreateQuery)
```
##### Method alias:
```typescript
CampaignsApi.createCampaignRecipientEstimationJob(campaignRecipientEstimationJobCreateQuery: CampaignRecipientEstimationJobCreateQuery)
```
_______________________________

[Send Campaign](https://developers.klaviyo.com/en/v2025-04-15/reference/send_campaign)

```typescript
CampaignsApi.sendCampaign(campaignSendJobCreateQuery: CampaignSendJobCreateQuery)
```
##### Method alias:
```typescript
CampaignsApi.createCampaignSendJob(campaignSendJobCreateQuery: CampaignSendJobCreateQuery)
```
_______________________________

[Update Campaign](https://developers.klaviyo.com/en/v2025-04-15/reference/update_campaign)

```typescript
CampaignsApi.updateCampaign(id: string, campaignPartialUpdateQuery: CampaignPartialUpdateQuery)
```
_______________________________

[Update Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/update_campaign_message)

```typescript
CampaignsApi.updateCampaignMessage(id: string, campaignMessagePartialUpdateQuery: CampaignMessagePartialUpdateQuery)
```
_______________________________

[Update Image for Campaign Message](https://developers.klaviyo.com/en/v2025-04-15/reference/update_image_for_campaign_message)

```typescript
CampaignsApi.updateImageForCampaignMessage(id: string, campaignMessageImageUpdateQuery: CampaignMessageImageUpdateQuery)
```
##### Method alias:
```typescript
CampaignsApi.updateCampaignMessageRelationshipsImage(id: string, campaignMessageImageUpdateQuery: CampaignMessageImageUpdateQuery)
```
_______________________________
## CatalogsApi
_______________________________

[Add Categories to Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/add_categories_to_catalog_item)

```typescript
CatalogsApi.addCategoriesToCatalogItem(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
##### Method alias:
```typescript
CatalogsApi.addCategoryToCatalogItem(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogItemRelationshipsCategory(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogItemRelationshipsCategories(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
_______________________________

[Add Items to Catalog Category](https://developers.klaviyo.com/en/v2025-04-15/reference/add_items_to_catalog_category)

```typescript
CatalogsApi.addItemsToCatalogCategory(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogCategoryRelationshipsItem(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogCategoryRelationshipsItems(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
_______________________________

[Bulk Create Catalog Categories](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_create_catalog_categories)

```typescript
CatalogsApi.bulkCreateCatalogCategories(catalogCategoryCreateJobCreateQuery: CatalogCategoryCreateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.spawnCreateCategoriesJob(catalogCategoryCreateJobCreateQuery: CatalogCategoryCreateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogCategoryBulkCreateJob(catalogCategoryCreateJobCreateQuery: CatalogCategoryCreateJobCreateQuery)
```
_______________________________

[Bulk Create Catalog Items](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_create_catalog_items)

```typescript
CatalogsApi.bulkCreateCatalogItems(catalogItemCreateJobCreateQuery: CatalogItemCreateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.spawnCreateItemsJob(catalogItemCreateJobCreateQuery: CatalogItemCreateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogItemBulkCreateJob(catalogItemCreateJobCreateQuery: CatalogItemCreateJobCreateQuery)
```
_______________________________

[Bulk Create Catalog Variants](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_create_catalog_variants)

```typescript
CatalogsApi.bulkCreateCatalogVariants(catalogVariantCreateJobCreateQuery: CatalogVariantCreateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.spawnCreateVariantsJob(catalogVariantCreateJobCreateQuery: CatalogVariantCreateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogVariantBulkCreateJob(catalogVariantCreateJobCreateQuery: CatalogVariantCreateJobCreateQuery)
```
_______________________________

[Bulk Delete Catalog Categories](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_delete_catalog_categories)

```typescript
CatalogsApi.bulkDeleteCatalogCategories(catalogCategoryDeleteJobCreateQuery: CatalogCategoryDeleteJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.spawnDeleteCategoriesJob(catalogCategoryDeleteJobCreateQuery: CatalogCategoryDeleteJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogCategoryBulkDeleteJob(catalogCategoryDeleteJobCreateQuery: CatalogCategoryDeleteJobCreateQuery)
```
_______________________________

[Bulk Delete Catalog Items](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_delete_catalog_items)

```typescript
CatalogsApi.bulkDeleteCatalogItems(catalogItemDeleteJobCreateQuery: CatalogItemDeleteJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.spawnDeleteItemsJob(catalogItemDeleteJobCreateQuery: CatalogItemDeleteJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogItemBulkDeleteJob(catalogItemDeleteJobCreateQuery: CatalogItemDeleteJobCreateQuery)
```
_______________________________

[Bulk Delete Catalog Variants](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_delete_catalog_variants)

```typescript
CatalogsApi.bulkDeleteCatalogVariants(catalogVariantDeleteJobCreateQuery: CatalogVariantDeleteJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.spawnDeleteVariantsJob(catalogVariantDeleteJobCreateQuery: CatalogVariantDeleteJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogVariantBulkDeleteJob(catalogVariantDeleteJobCreateQuery: CatalogVariantDeleteJobCreateQuery)
```
_______________________________

[Bulk Update Catalog Categories](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_update_catalog_categories)

```typescript
CatalogsApi.bulkUpdateCatalogCategories(catalogCategoryUpdateJobCreateQuery: CatalogCategoryUpdateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.spawnUpdateCategoriesJob(catalogCategoryUpdateJobCreateQuery: CatalogCategoryUpdateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogCategoryBulkUpdateJob(catalogCategoryUpdateJobCreateQuery: CatalogCategoryUpdateJobCreateQuery)
```
_______________________________

[Bulk Update Catalog Items](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_update_catalog_items)

```typescript
CatalogsApi.bulkUpdateCatalogItems(catalogItemUpdateJobCreateQuery: CatalogItemUpdateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.spawnUpdateItemsJob(catalogItemUpdateJobCreateQuery: CatalogItemUpdateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogItemBulkUpdateJob(catalogItemUpdateJobCreateQuery: CatalogItemUpdateJobCreateQuery)
```
_______________________________

[Bulk Update Catalog Variants](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_update_catalog_variants)

```typescript
CatalogsApi.bulkUpdateCatalogVariants(catalogVariantUpdateJobCreateQuery: CatalogVariantUpdateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.spawnUpdateVariantsJob(catalogVariantUpdateJobCreateQuery: CatalogVariantUpdateJobCreateQuery)
```
##### Method alias:
```typescript
CatalogsApi.createCatalogVariantBulkUpdateJob(catalogVariantUpdateJobCreateQuery: CatalogVariantUpdateJobCreateQuery)
```
_______________________________

[Create Back In Stock Subscription](https://developers.klaviyo.com/en/v2025-04-15/reference/create_back_in_stock_subscription)

```typescript
CatalogsApi.createBackInStockSubscription(serverBISSubscriptionCreateQuery: ServerBISSubscriptionCreateQuery)
```
_______________________________

[Create Catalog Category](https://developers.klaviyo.com/en/v2025-04-15/reference/create_catalog_category)

```typescript
CatalogsApi.createCatalogCategory(catalogCategoryCreateQuery: CatalogCategoryCreateQuery)
```
_______________________________

[Create Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/create_catalog_item)

```typescript
CatalogsApi.createCatalogItem(catalogItemCreateQuery: CatalogItemCreateQuery)
```
_______________________________

[Create Catalog Variant](https://developers.klaviyo.com/en/v2025-04-15/reference/create_catalog_variant)

```typescript
CatalogsApi.createCatalogVariant(catalogVariantCreateQuery: CatalogVariantCreateQuery)
```
_______________________________

[Delete Catalog Category](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_catalog_category)

```typescript
CatalogsApi.deleteCatalogCategory(id: string)
```
_______________________________

[Delete Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_catalog_item)

```typescript
CatalogsApi.deleteCatalogItem(id: string)
```
_______________________________

[Delete Catalog Variant](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_catalog_variant)

```typescript
CatalogsApi.deleteCatalogVariant(id: string)
```
_______________________________

[Get Bulk Create Catalog Items Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_create_catalog_items_job)

```typescript
CatalogsApi.getBulkCreateCatalogItemsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCreateItemsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemBulkCreateJob(jobId: string, options)
```
_______________________________

[Get Bulk Create Catalog Items Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_create_catalog_items_jobs)

```typescript
CatalogsApi.getBulkCreateCatalogItemsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCreateItemsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemBulkCreateJobs(options)
```
_______________________________

[Get Bulk Create Categories Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_create_categories_job)

```typescript
CatalogsApi.getBulkCreateCategoriesJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCreateCategoriesJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogCategoryBulkCreateJob(jobId: string, options)
```
_______________________________

[Get Bulk Create Categories Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_create_categories_jobs)

```typescript
CatalogsApi.getBulkCreateCategoriesJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCreateCategoriesJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogCategoryBulkCreateJobs(options)
```
_______________________________

[Get Bulk Create Variants Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_create_variants_job)

```typescript
CatalogsApi.getBulkCreateVariantsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCreateVariantsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogVariantBulkCreateJob(jobId: string, options)
```
_______________________________

[Get Bulk Create Variants Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_create_variants_jobs)

```typescript
CatalogsApi.getBulkCreateVariantsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCreateVariantsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogVariantBulkCreateJobs(options)
```
_______________________________

[Get Bulk Delete Catalog Items Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_delete_catalog_items_job)

```typescript
CatalogsApi.getBulkDeleteCatalogItemsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getDeleteItemsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemBulkDeleteJob(jobId: string, options)
```
_______________________________

[Get Bulk Delete Catalog Items Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_delete_catalog_items_jobs)

```typescript
CatalogsApi.getBulkDeleteCatalogItemsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getDeleteItemsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemBulkDeleteJobs(options)
```
_______________________________

[Get Bulk Delete Categories Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_delete_categories_job)

```typescript
CatalogsApi.getBulkDeleteCategoriesJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getDeleteCategoriesJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogCategoryBulkDeleteJob(jobId: string, options)
```
_______________________________

[Get Bulk Delete Categories Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_delete_categories_jobs)

```typescript
CatalogsApi.getBulkDeleteCategoriesJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getDeleteCategoriesJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogCategoryBulkDeleteJobs(options)
```
_______________________________

[Get Bulk Delete Variants Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_delete_variants_job)

```typescript
CatalogsApi.getBulkDeleteVariantsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getDeleteVariantsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogVariantBulkDeleteJob(jobId: string, options)
```
_______________________________

[Get Bulk Delete Variants Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_delete_variants_jobs)

```typescript
CatalogsApi.getBulkDeleteVariantsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getDeleteVariantsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogVariantBulkDeleteJobs(options)
```
_______________________________

[Get Bulk Update Catalog Items Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_update_catalog_items_job)

```typescript
CatalogsApi.getBulkUpdateCatalogItemsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getUpdateItemsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemBulkUpdateJob(jobId: string, options)
```
_______________________________

[Get Bulk Update Catalog Items Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_update_catalog_items_jobs)

```typescript
CatalogsApi.getBulkUpdateCatalogItemsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getUpdateItemsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemBulkUpdateJobs(options)
```
_______________________________

[Get Bulk Update Categories Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_update_categories_job)

```typescript
CatalogsApi.getBulkUpdateCategoriesJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getUpdateCategoriesJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogCategoryBulkUpdateJob(jobId: string, options)
```
_______________________________

[Get Bulk Update Categories Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_update_categories_jobs)

```typescript
CatalogsApi.getBulkUpdateCategoriesJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getUpdateCategoriesJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogCategoryBulkUpdateJobs(options)
```
_______________________________

[Get Bulk Update Variants Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_update_variants_job)

```typescript
CatalogsApi.getBulkUpdateVariantsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getUpdateVariantsJob(jobId: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogVariantBulkUpdateJob(jobId: string, options)
```
_______________________________

[Get Bulk Update Variants Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_update_variants_jobs)

```typescript
CatalogsApi.getBulkUpdateVariantsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getUpdateVariantsJobs(options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogVariantBulkUpdateJobs(options)
```
_______________________________

[Get Catalog Categories](https://developers.klaviyo.com/en/v2025-04-15/reference/get_catalog_categories)

```typescript
CatalogsApi.getCatalogCategories(options)
```
_______________________________

[Get Catalog Category](https://developers.klaviyo.com/en/v2025-04-15/reference/get_catalog_category)

```typescript
CatalogsApi.getCatalogCategory(id: string, options)
```
_______________________________

[Get Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/get_catalog_item)

```typescript
CatalogsApi.getCatalogItem(id: string, options)
```
_______________________________

[Get Catalog Items](https://developers.klaviyo.com/en/v2025-04-15/reference/get_catalog_items)

```typescript
CatalogsApi.getCatalogItems(options)
```
_______________________________

[Get Catalog Variant](https://developers.klaviyo.com/en/v2025-04-15/reference/get_catalog_variant)

```typescript
CatalogsApi.getCatalogVariant(id: string, options)
```
_______________________________

[Get Catalog Variants](https://developers.klaviyo.com/en/v2025-04-15/reference/get_catalog_variants)

```typescript
CatalogsApi.getCatalogVariants(options)
```
_______________________________

[Get Categories for Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/get_categories_for_catalog_item)

```typescript
CatalogsApi.getCategoriesForCatalogItem(id: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemCategories(id: string, options)
```
_______________________________

[Get Category IDs for Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/get_category_ids_for_catalog_item)

```typescript
CatalogsApi.getCategoryIdsForCatalogItem(id: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemRelationshipsCategories(id: string, options)
```
_______________________________

[Get Item IDs for Catalog Category](https://developers.klaviyo.com/en/v2025-04-15/reference/get_item_ids_for_catalog_category)

```typescript
CatalogsApi.getItemIdsForCatalogCategory(id: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogCategoryRelationshipsItems(id: string, options)
```
_______________________________

[Get Items for Catalog Category](https://developers.klaviyo.com/en/v2025-04-15/reference/get_items_for_catalog_category)

```typescript
CatalogsApi.getItemsForCatalogCategory(id: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogCategoryItems(id: string, options)
```
_______________________________

[Get Variant IDs for Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/get_variant_ids_for_catalog_item)

```typescript
CatalogsApi.getVariantIdsForCatalogItem(id: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemRelationshipsVariants(id: string, options)
```
_______________________________

[Get Variants for Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/get_variants_for_catalog_item)

```typescript
CatalogsApi.getVariantsForCatalogItem(id: string, options)
```
##### Method alias:
```typescript
CatalogsApi.getCatalogItemVariants(id: string, options)
```
_______________________________

[Remove Categories from Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/remove_categories_from_catalog_item)

```typescript
CatalogsApi.removeCategoriesFromCatalogItem(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
##### Method alias:
```typescript
CatalogsApi.deleteCatalogItemRelationshipsCategories(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
_______________________________

[Remove Items from Catalog Category](https://developers.klaviyo.com/en/v2025-04-15/reference/remove_items_from_catalog_category)

```typescript
CatalogsApi.removeItemsFromCatalogCategory(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
##### Method alias:
```typescript
CatalogsApi.deleteCatalogCategoryRelationshipsItems(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
_______________________________

[Update Catalog Category](https://developers.klaviyo.com/en/v2025-04-15/reference/update_catalog_category)

```typescript
CatalogsApi.updateCatalogCategory(id: string, catalogCategoryUpdateQuery: CatalogCategoryUpdateQuery)
```
_______________________________

[Update Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/update_catalog_item)

```typescript
CatalogsApi.updateCatalogItem(id: string, catalogItemUpdateQuery: CatalogItemUpdateQuery)
```
_______________________________

[Update Catalog Variant](https://developers.klaviyo.com/en/v2025-04-15/reference/update_catalog_variant)

```typescript
CatalogsApi.updateCatalogVariant(id: string, catalogVariantUpdateQuery: CatalogVariantUpdateQuery)
```
_______________________________

[Update Categories for Catalog Item](https://developers.klaviyo.com/en/v2025-04-15/reference/update_categories_for_catalog_item)

```typescript
CatalogsApi.updateCategoriesForCatalogItem(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
##### Method alias:
```typescript
CatalogsApi.updateCatalogItemRelationshipsCategories(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
_______________________________

[Update Items for Catalog Category](https://developers.klaviyo.com/en/v2025-04-15/reference/update_items_for_catalog_category)

```typescript
CatalogsApi.updateItemsForCatalogCategory(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
##### Method alias:
```typescript
CatalogsApi.updateCatalogCategoryRelationshipsItems(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
_______________________________
## CouponsApi
_______________________________

[Bulk Create Coupon Codes](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_create_coupon_codes)

```typescript
CouponsApi.bulkCreateCouponCodes(couponCodeCreateJobCreateQuery: CouponCodeCreateJobCreateQuery)
```
##### Method alias:
```typescript
CouponsApi.spawnCouponCodeBulkCreateJob(couponCodeCreateJobCreateQuery: CouponCodeCreateJobCreateQuery)
```
##### Method alias:
```typescript
CouponsApi.createCouponCodeBulkCreateJob(couponCodeCreateJobCreateQuery: CouponCodeCreateJobCreateQuery)
```
_______________________________

[Create Coupon](https://developers.klaviyo.com/en/v2025-04-15/reference/create_coupon)

```typescript
CouponsApi.createCoupon(couponCreateQuery: CouponCreateQuery)
```
_______________________________

[Create Coupon Code](https://developers.klaviyo.com/en/v2025-04-15/reference/create_coupon_code)

```typescript
CouponsApi.createCouponCode(couponCodeCreateQuery: CouponCodeCreateQuery)
```
_______________________________

[Delete Coupon](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_coupon)

```typescript
CouponsApi.deleteCoupon(id: string)
```
_______________________________

[Delete Coupon Code](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_coupon_code)

```typescript
CouponsApi.deleteCouponCode(id: string)
```
_______________________________

[Get Bulk Create Coupon Code Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_create_coupon_code_jobs)

```typescript
CouponsApi.getBulkCreateCouponCodeJobs(options)
```
##### Method alias:
```typescript
CouponsApi.getCouponCodeBulkCreateJobs(options)
```
_______________________________

[Get Bulk Create Coupon Codes Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_create_coupon_codes_job)

```typescript
CouponsApi.getBulkCreateCouponCodesJob(jobId: string, options)
```
##### Method alias:
```typescript
CouponsApi.getCouponCodeBulkCreateJob(jobId: string, options)
```
_______________________________

[Get Coupon](https://developers.klaviyo.com/en/v2025-04-15/reference/get_coupon)

```typescript
CouponsApi.getCoupon(id: string, options)
```
_______________________________

[Get Coupon Code](https://developers.klaviyo.com/en/v2025-04-15/reference/get_coupon_code)

```typescript
CouponsApi.getCouponCode(id: string, options)
```
_______________________________

[Get Coupon Code IDs for Coupon](https://developers.klaviyo.com/en/v2025-04-15/reference/get_coupon_code_ids_for_coupon)

```typescript
CouponsApi.getCouponCodeIdsForCoupon(id: string, options)
```
##### Method alias:
```typescript
CouponsApi.getCouponCodeRelationshipsCoupon(id: string, options)
```
##### Method alias:
```typescript
CouponsApi.getCodeIdsForCoupon(id: string, options)
```
##### Method alias:
```typescript
CouponsApi.getCouponRelationshipsCodes(id: string, options)
```
_______________________________

[Get Coupon Codes](https://developers.klaviyo.com/en/v2025-04-15/reference/get_coupon_codes)

```typescript
CouponsApi.getCouponCodes(filter: string, options)
```
_______________________________

[Get Coupon Codes for Coupon](https://developers.klaviyo.com/en/v2025-04-15/reference/get_coupon_codes_for_coupon)

```typescript
CouponsApi.getCouponCodesForCoupon(id: string, options)
```
##### Method alias:
```typescript
CouponsApi.getCouponCouponCodes(id: string, options)
```
##### Method alias:
```typescript
CouponsApi.getCodesForCoupon(id: string, options)
```
_______________________________

[Get Coupon For Coupon Code](https://developers.klaviyo.com/en/v2025-04-15/reference/get_coupon_for_coupon_code)

```typescript
CouponsApi.getCouponForCouponCode(id: string, options)
```
##### Method alias:
```typescript
CouponsApi.getCouponCodeCoupon(id: string, options)
```
_______________________________

[Get Coupon ID for Coupon Code](https://developers.klaviyo.com/en/v2025-04-15/reference/get_coupon_id_for_coupon_code)

```typescript
CouponsApi.getCouponIdForCouponCode(id: string)
```
##### Method alias:
```typescript
CouponsApi.getCouponRelationshipsCouponCodes(id: string)
```
_______________________________

[Get Coupons](https://developers.klaviyo.com/en/v2025-04-15/reference/get_coupons)

```typescript
CouponsApi.getCoupons(options)
```
_______________________________

[Update Coupon](https://developers.klaviyo.com/en/v2025-04-15/reference/update_coupon)

```typescript
CouponsApi.updateCoupon(id: string, couponUpdateQuery: CouponUpdateQuery)
```
_______________________________

[Update Coupon Code](https://developers.klaviyo.com/en/v2025-04-15/reference/update_coupon_code)

```typescript
CouponsApi.updateCouponCode(id: string, couponCodeUpdateQuery: CouponCodeUpdateQuery)
```
_______________________________
## DataPrivacyApi
_______________________________

[Request Profile Deletion](https://developers.klaviyo.com/en/v2025-04-15/reference/request_profile_deletion)

```typescript
DataPrivacyApi.requestProfileDeletion(dataPrivacyCreateDeletionJobQuery: DataPrivacyCreateDeletionJobQuery)
```
##### Method alias:
```typescript
DataPrivacyApi.createDataPrivacyDeletionJob(dataPrivacyCreateDeletionJobQuery: DataPrivacyCreateDeletionJobQuery)
```
_______________________________
## EventsApi
_______________________________

[Bulk Create Events](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_create_events)

```typescript
EventsApi.bulkCreateEvents(eventsBulkCreateJob: EventsBulkCreateJob)
```
##### Method alias:
```typescript
EventsApi.createEventBulkCreateJob(eventsBulkCreateJob: EventsBulkCreateJob)
```
_______________________________

[Create Event](https://developers.klaviyo.com/en/v2025-04-15/reference/create_event)

```typescript
EventsApi.createEvent(eventCreateQueryV2: EventCreateQueryV2)
```
_______________________________

[Get Event](https://developers.klaviyo.com/en/v2025-04-15/reference/get_event)

```typescript
EventsApi.getEvent(id: string, options)
```
_______________________________

[Get Events](https://developers.klaviyo.com/en/v2025-04-15/reference/get_events)

```typescript
EventsApi.getEvents(options)
```
_______________________________

[Get Metric for Event](https://developers.klaviyo.com/en/v2025-04-15/reference/get_metric_for_event)

```typescript
EventsApi.getMetricForEvent(id: string, options)
```
##### Method alias:
```typescript
EventsApi.getEventMetric(id: string, options)
```
_______________________________

[Get Metric ID for Event](https://developers.klaviyo.com/en/v2025-04-15/reference/get_metric_id_for_event)

```typescript
EventsApi.getMetricIdForEvent(id: string)
```
##### Method alias:
```typescript
EventsApi.getEventRelationshipsMetric(id: string)
```
_______________________________

[Get Profile for Event](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profile_for_event)

```typescript
EventsApi.getProfileForEvent(id: string, options)
```
##### Method alias:
```typescript
EventsApi.getEventProfile(id: string, options)
```
_______________________________

[Get Profile ID for Event](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profile_id_for_event)

```typescript
EventsApi.getProfileIdForEvent(id: string)
```
##### Method alias:
```typescript
EventsApi.getEventRelationshipsProfile(id: string)
```
_______________________________
## FlowsApi
_______________________________

[Create Flow](https://developers.klaviyo.com/en/v2025-04-15/reference/create_flow)

```typescript
FlowsApi.createFlow(flowCreateQuery: FlowCreateQuery, options)
```
_______________________________

[Delete Flow](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_flow)

```typescript
FlowsApi.deleteFlow(id: string)
```
_______________________________

[Get Action for Flow Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_action_for_flow_message)

```typescript
FlowsApi.getActionForFlowMessage(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getFlowMessageAction(id: string, options)
```
_______________________________

[Get Action ID for Flow Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_action_id_for_flow_message)

```typescript
FlowsApi.getActionIdForFlowMessage(id: string)
```
##### Method alias:
```typescript
FlowsApi.getFlowMessageRelationshipsAction(id: string)
```
_______________________________

[Get Action IDs for Flow](https://developers.klaviyo.com/en/v2025-04-15/reference/get_action_ids_for_flow)

```typescript
FlowsApi.getActionIdsForFlow(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getFlowRelationshipsFlowActions(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getFlowRelationshipsActions(id: string, options)
```
_______________________________

[Get Actions for Flow](https://developers.klaviyo.com/en/v2025-04-15/reference/get_actions_for_flow)

```typescript
FlowsApi.getActionsForFlow(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getFlowFlowActions(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getFlowActions(id: string, options)
```
_______________________________

[Get Flow](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flow)

```typescript
FlowsApi.getFlow(id: string, options)
```
_______________________________

[Get Flow Action](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flow_action)

```typescript
FlowsApi.getFlowAction(id: string, options)
```
_______________________________

[Get Messages For Flow Action](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flow_action_messages)

```typescript
FlowsApi.getFlowActionMessages(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getMessagesForFlowAction(id: string, options)
```
_______________________________

[Get Flow for Flow Action](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flow_for_flow_action)

```typescript
FlowsApi.getFlowForFlowAction(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getFlowActionFlow(id: string, options)
```
_______________________________

[Get Flow ID for Flow Action](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flow_id_for_flow_action)

```typescript
FlowsApi.getFlowIdForFlowAction(id: string)
```
##### Method alias:
```typescript
FlowsApi.getFlowActionRelationshipsFlow(id: string)
```
_______________________________

[Get Flow Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flow_message)

```typescript
FlowsApi.getFlowMessage(id: string, options)
```
_______________________________

[Get Flows](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flows)

```typescript
FlowsApi.getFlows(options)
```
_______________________________

[Get Message IDs for Flow Action](https://developers.klaviyo.com/en/v2025-04-15/reference/get_message_ids_for_flow_action)

```typescript
FlowsApi.getMessageIdsForFlowAction(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getFlowActionRelationshipsMessages(id: string, options)
```
_______________________________

[Get Tag IDs for Flow](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag_ids_for_flow)

```typescript
FlowsApi.getTagIdsForFlow(id: string)
```
##### Method alias:
```typescript
FlowsApi.getFlowRelationshipsTags(id: string)
```
_______________________________

[Get Tags for Flow](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tags_for_flow)

```typescript
FlowsApi.getTagsForFlow(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getFlowTags(id: string, options)
```
_______________________________

[Get Template for Flow Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_template_for_flow_message)

```typescript
FlowsApi.getTemplateForFlowMessage(id: string, options)
```
##### Method alias:
```typescript
FlowsApi.getFlowMessageTemplate(id: string, options)
```
_______________________________

[Get Template ID for Flow Message](https://developers.klaviyo.com/en/v2025-04-15/reference/get_template_id_for_flow_message)

```typescript
FlowsApi.getTemplateIdForFlowMessage(id: string)
```
##### Method alias:
```typescript
FlowsApi.getFlowMessageRelationshipsTemplate(id: string)
```
_______________________________

[Update Flow Status](https://developers.klaviyo.com/en/v2025-04-15/reference/update_flow)

```typescript
FlowsApi.updateFlow(id: string, flowUpdateQuery: FlowUpdateQuery)
```
_______________________________
## FormsApi
_______________________________

[Delete Form](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_form)

```typescript
FormsApi.deleteForm(id: string)
```
_______________________________

[Get Form](https://developers.klaviyo.com/en/v2025-04-15/reference/get_form)

```typescript
FormsApi.getForm(id: string, options)
```
_______________________________

[Get Form for Form Version](https://developers.klaviyo.com/en/v2025-04-15/reference/get_form_for_form_version)

```typescript
FormsApi.getFormForFormVersion(id: string, options)
```
##### Method alias:
```typescript
FormsApi.getFormVersionForm(id: string, options)
```
_______________________________

[Get Form ID for Form Version](https://developers.klaviyo.com/en/v2025-04-15/reference/get_form_id_for_form_version)

```typescript
FormsApi.getFormIdForFormVersion(id: string)
```
##### Method alias:
```typescript
FormsApi.getFormVersionRelationshipsForm(id: string)
```
_______________________________

[Get Form Version](https://developers.klaviyo.com/en/v2025-04-15/reference/get_form_version)

```typescript
FormsApi.getFormVersion(id: string, options)
```
_______________________________

[Get Forms](https://developers.klaviyo.com/en/v2025-04-15/reference/get_forms)

```typescript
FormsApi.getForms(options)
```
_______________________________

[Get Version IDs for Form](https://developers.klaviyo.com/en/v2025-04-15/reference/get_version_ids_for_form)

```typescript
FormsApi.getVersionIdsForForm(id: string, options)
```
##### Method alias:
```typescript
FormsApi.getFormRelationshipsFormVersions(id: string, options)
```
##### Method alias:
```typescript
FormsApi.getFormRelationshipsVersions(id: string, options)
```
_______________________________

[Get Versions for Form](https://developers.klaviyo.com/en/v2025-04-15/reference/get_versions_for_form)

```typescript
FormsApi.getVersionsForForm(id: string, options)
```
##### Method alias:
```typescript
FormsApi.getFormFormVersions(id: string, options)
```
##### Method alias:
```typescript
FormsApi.getFormVersions(id: string, options)
```
_______________________________
## ImagesApi
_______________________________

[Get Image](https://developers.klaviyo.com/en/v2025-04-15/reference/get_image)

```typescript
ImagesApi.getImage(id: string, options)
```
_______________________________

[Get Images](https://developers.klaviyo.com/en/v2025-04-15/reference/get_images)

```typescript
ImagesApi.getImages(options)
```
_______________________________

[Update Image](https://developers.klaviyo.com/en/v2025-04-15/reference/update_image)

```typescript
ImagesApi.updateImage(id: string, imagePartialUpdateQuery: ImagePartialUpdateQuery)
```
_______________________________

[Upload Image From File](https://developers.klaviyo.com/en/v2025-04-15/reference/upload_image_from_file)

```typescript
ImagesApi.uploadImageFromFile(file: RequestFile, )
```
##### Method alias:
```typescript
ImagesApi.createImageUpload(file: RequestFile, )
```
_______________________________

[Upload Image From URL](https://developers.klaviyo.com/en/v2025-04-15/reference/upload_image_from_url)

```typescript
ImagesApi.uploadImageFromUrl(imageCreateQuery: ImageCreateQuery)
```
##### Method alias:
```typescript
ImagesApi.createImage(imageCreateQuery: ImageCreateQuery)
```
_______________________________
## ListsApi
_______________________________

[Add Profiles to List](https://developers.klaviyo.com/en/v2025-04-15/reference/add_profiles_to_list)

```typescript
ListsApi.addProfilesToList(id: string, listMembersAddQuery: ListMembersAddQuery)
```
##### Method alias:
```typescript
ListsApi.createListRelationships(id: string, listMembersAddQuery: ListMembersAddQuery)
```
##### Method alias:
```typescript
ListsApi.createListRelationshipsProfile(id: string, listMembersAddQuery: ListMembersAddQuery)
```
##### Method alias:
```typescript
ListsApi.createListRelationshipsProfiles(id: string, listMembersAddQuery: ListMembersAddQuery)
```
_______________________________

[Create List](https://developers.klaviyo.com/en/v2025-04-15/reference/create_list)

```typescript
ListsApi.createList(listCreateQuery: ListCreateQuery)
```
_______________________________

[Delete List](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_list)

```typescript
ListsApi.deleteList(id: string)
```
_______________________________

[Get Flows Triggered by List](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flows_triggered_by_list)

```typescript
ListsApi.getFlowsTriggeredByList(id: string, options)
```
##### Method alias:
```typescript
ListsApi.getFlowTriggersForList(id: string, options)
```
##### Method alias:
```typescript
ListsApi.getListFlowTriggers(id: string, options)
```
_______________________________

[Get IDs for Flows Triggered by List](https://developers.klaviyo.com/en/v2025-04-15/reference/get_ids_for_flows_triggered_by_list)

```typescript
ListsApi.getIdsForFlowsTriggeredByList(id: string)
```
##### Method alias:
```typescript
ListsApi.getFlowTriggerIdsForList(id: string)
```
##### Method alias:
```typescript
ListsApi.getListRelationshipsFlowTriggers(id: string)
```
_______________________________

[Get List](https://developers.klaviyo.com/en/v2025-04-15/reference/get_list)

```typescript
ListsApi.getList(id: string, options)
```
_______________________________

[Get Lists](https://developers.klaviyo.com/en/v2025-04-15/reference/get_lists)

```typescript
ListsApi.getLists(options)
```
_______________________________

[Get Profile IDs for List](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profile_ids_for_list)

```typescript
ListsApi.getProfileIdsForList(id: string, options)
```
##### Method alias:
```typescript
ListsApi.getListRelationshipsProfiles(id: string, options)
```
_______________________________

[Get Profiles for List](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profiles_for_list)

```typescript
ListsApi.getProfilesForList(id: string, options)
```
##### Method alias:
```typescript
ListsApi.getListProfiles(id: string, options)
```
_______________________________

[Get Tag IDs for List](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag_ids_for_list)

```typescript
ListsApi.getTagIdsForList(id: string)
```
##### Method alias:
```typescript
ListsApi.getListRelationshipsTags(id: string)
```
_______________________________

[Get Tags for List](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tags_for_list)

```typescript
ListsApi.getTagsForList(id: string, options)
```
##### Method alias:
```typescript
ListsApi.getListTags(id: string, options)
```
_______________________________

[Remove Profiles from List](https://developers.klaviyo.com/en/v2025-04-15/reference/remove_profiles_from_list)

```typescript
ListsApi.removeProfilesFromList(id: string, listMembersDeleteQuery: ListMembersDeleteQuery)
```
##### Method alias:
```typescript
ListsApi.deleteListRelationships(id: string, listMembersDeleteQuery: ListMembersDeleteQuery)
```
##### Method alias:
```typescript
ListsApi.deleteListRelationshipsProfiles(id: string, listMembersDeleteQuery: ListMembersDeleteQuery)
```
_______________________________

[Update List](https://developers.klaviyo.com/en/v2025-04-15/reference/update_list)

```typescript
ListsApi.updateList(id: string, listPartialUpdateQuery: ListPartialUpdateQuery)
```
_______________________________
## MetricsApi
_______________________________

[Create Custom Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/create_custom_metric)

```typescript
MetricsApi.createCustomMetric(customMetricCreateQuery: CustomMetricCreateQuery)
```
_______________________________

[Delete Custom Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_custom_metric)

```typescript
MetricsApi.deleteCustomMetric(id: string)
```
_______________________________

[Get Custom Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/get_custom_metric)

```typescript
MetricsApi.getCustomMetric(id: string, options)
```
_______________________________

[Get Custom Metrics](https://developers.klaviyo.com/en/v2025-04-15/reference/get_custom_metrics)

```typescript
MetricsApi.getCustomMetrics(options)
```
_______________________________

[Get Flows Triggered by Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flows_triggered_by_metric)

```typescript
MetricsApi.getFlowsTriggeredByMetric(id: string, options)
```
##### Method alias:
```typescript
MetricsApi.getFlowTriggersForMetric(id: string, options)
```
##### Method alias:
```typescript
MetricsApi.getMetricFlowTriggers(id: string, options)
```
_______________________________

[Get IDs for Flows Triggered by Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/get_ids_for_flows_triggered_by_metric)

```typescript
MetricsApi.getIdsForFlowsTriggeredByMetric(id: string)
```
##### Method alias:
```typescript
MetricsApi.getFlowTriggerIdsForMetric(id: string)
```
##### Method alias:
```typescript
MetricsApi.getMetricRelationshipsFlowTriggers(id: string)
```
_______________________________

[Get Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/get_metric)

```typescript
MetricsApi.getMetric(id: string, options)
```
_______________________________

[Get Metric for Metric Property](https://developers.klaviyo.com/en/v2025-04-15/reference/get_metric_for_metric_property)

```typescript
MetricsApi.getMetricForMetricProperty(id: string, options)
```
##### Method alias:
```typescript
MetricsApi.getMetricPropertyMetric(id: string, options)
```
_______________________________

[Get Metric ID for Metric Property](https://developers.klaviyo.com/en/v2025-04-15/reference/get_metric_id_for_metric_property)

```typescript
MetricsApi.getMetricIdForMetricProperty(id: string)
```
##### Method alias:
```typescript
MetricsApi.getMetricPropertyRelationshipsMetric(id: string)
```
_______________________________

[Get Metric IDs for Custom Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/get_metric_ids_for_custom_metric)

```typescript
MetricsApi.getMetricIdsForCustomMetric(id: string)
```
##### Method alias:
```typescript
MetricsApi.getCustomMetricRelationshipsMetrics(id: string)
```
_______________________________

[Get Metric Property](https://developers.klaviyo.com/en/v2025-04-15/reference/get_metric_property)

```typescript
MetricsApi.getMetricProperty(id: string, options)
```
_______________________________

[Get Metrics](https://developers.klaviyo.com/en/v2025-04-15/reference/get_metrics)

```typescript
MetricsApi.getMetrics(options)
```
_______________________________

[Get Metrics for Custom Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/get_metrics_for_custom_metric)

```typescript
MetricsApi.getMetricsForCustomMetric(id: string, options)
```
##### Method alias:
```typescript
MetricsApi.getCustomMetricMetrics(id: string, options)
```
_______________________________

[Get Properties for Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/get_properties_for_metric)

```typescript
MetricsApi.getPropertiesForMetric(id: string, options)
```
##### Method alias:
```typescript
MetricsApi.getMetricMetricProperties(id: string, options)
```
##### Method alias:
```typescript
MetricsApi.getMetricProperties(id: string, options)
```
_______________________________

[Get Property IDs for Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/get_property_ids_for_metric)

```typescript
MetricsApi.getPropertyIdsForMetric(id: string)
```
##### Method alias:
```typescript
MetricsApi.getMetricRelationshipsMetricProperties(id: string)
```
##### Method alias:
```typescript
MetricsApi.getMetricRelationshipsProperties(id: string)
```
_______________________________

[Query Metric Aggregates](https://developers.klaviyo.com/en/v2025-04-15/reference/query_metric_aggregates)

```typescript
MetricsApi.queryMetricAggregates(metricAggregateQuery: MetricAggregateQuery)
```
##### Method alias:
```typescript
MetricsApi.createMetricAggregate(metricAggregateQuery: MetricAggregateQuery)
```
_______________________________

[Update Custom Metric](https://developers.klaviyo.com/en/v2025-04-15/reference/update_custom_metric)

```typescript
MetricsApi.updateCustomMetric(id: string, customMetricPartialUpdateQuery: CustomMetricPartialUpdateQuery)
```
_______________________________
## ProfilesApi
_______________________________

[Bulk Import Profiles](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_import_profiles)

```typescript
ProfilesApi.bulkImportProfiles(profileImportJobCreateQuery: ProfileImportJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.spawnBulkProfileImportJob(profileImportJobCreateQuery: ProfileImportJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.createProfileBulkImportJob(profileImportJobCreateQuery: ProfileImportJobCreateQuery)
```
_______________________________

[Bulk Subscribe Profiles](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_subscribe_profiles)

```typescript
ProfilesApi.bulkSubscribeProfiles(subscriptionCreateJobCreateQuery: SubscriptionCreateJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.subscribeProfiles(subscriptionCreateJobCreateQuery: SubscriptionCreateJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.createProfileSubscriptionBulkCreateJob(subscriptionCreateJobCreateQuery: SubscriptionCreateJobCreateQuery)
```
_______________________________

[Bulk Suppress Profiles](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_suppress_profiles)

```typescript
ProfilesApi.bulkSuppressProfiles(suppressionCreateJobCreateQuery: SuppressionCreateJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.suppressProfiles(suppressionCreateJobCreateQuery: SuppressionCreateJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.createProfileSuppressionBulkCreateJob(suppressionCreateJobCreateQuery: SuppressionCreateJobCreateQuery)
```
_______________________________

[Bulk Unsubscribe Profiles](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_unsubscribe_profiles)

```typescript
ProfilesApi.bulkUnsubscribeProfiles(subscriptionDeleteJobCreateQuery: SubscriptionDeleteJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.unsubscribeProfiles(subscriptionDeleteJobCreateQuery: SubscriptionDeleteJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.createProfileSubscriptionBulkDeleteJob(subscriptionDeleteJobCreateQuery: SubscriptionDeleteJobCreateQuery)
```
_______________________________

[Bulk Unsuppress Profiles](https://developers.klaviyo.com/en/v2025-04-15/reference/bulk_unsuppress_profiles)

```typescript
ProfilesApi.bulkUnsuppressProfiles(suppressionDeleteJobCreateQuery: SuppressionDeleteJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.unsuppressProfiles(suppressionDeleteJobCreateQuery: SuppressionDeleteJobCreateQuery)
```
##### Method alias:
```typescript
ProfilesApi.createProfileSuppressionBulkDeleteJob(suppressionDeleteJobCreateQuery: SuppressionDeleteJobCreateQuery)
```
_______________________________

[Create or Update Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/create_or_update_profile)

```typescript
ProfilesApi.createOrUpdateProfile(profileUpsertQuery: ProfileUpsertQuery, options)
```
##### Method alias:
```typescript
ProfilesApi.createProfileImport(profileUpsertQuery: ProfileUpsertQuery, options)
```
_______________________________

[Create Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/create_profile)

```typescript
ProfilesApi.createProfile(profileCreateQuery: ProfileCreateQuery, options)
```
_______________________________

[Create or Update Push Token](https://developers.klaviyo.com/en/v2025-04-15/reference/create_push_token)

```typescript
ProfilesApi.createPushToken(pushTokenCreateQuery: PushTokenCreateQuery)
```
_______________________________

[Delete Push Token](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_push_token)

```typescript
ProfilesApi.deletePushToken(id: string)
```
_______________________________

[Get Bulk Import Profiles Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_import_profiles_job)

```typescript
ProfilesApi.getBulkImportProfilesJob(jobId: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getBulkProfileImportJob(jobId: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileBulkImportJob(jobId: string, options)
```
_______________________________

[Get Bulk Import Profiles Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_import_profiles_jobs)

```typescript
ProfilesApi.getBulkImportProfilesJobs(options)
```
##### Method alias:
```typescript
ProfilesApi.getBulkProfileImportJobs(options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileBulkImportJobs(options)
```
_______________________________

[Get Bulk Suppress Profiles Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_suppress_profiles_job)

```typescript
ProfilesApi.getBulkSuppressProfilesJob(jobId: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileSuppressionBulkCreateJob(jobId: string, options)
```
_______________________________

[Get Bulk Suppress Profiles Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_suppress_profiles_jobs)

```typescript
ProfilesApi.getBulkSuppressProfilesJobs(options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileSuppressionBulkCreateJobs(options)
```
_______________________________

[Get Bulk Unsuppress Profiles Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_unsuppress_profiles_job)

```typescript
ProfilesApi.getBulkUnsuppressProfilesJob(jobId: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileSuppressionBulkDeleteJob(jobId: string, options)
```
_______________________________

[Get Bulk Unsuppress Profiles Jobs](https://developers.klaviyo.com/en/v2025-04-15/reference/get_bulk_unsuppress_profiles_jobs)

```typescript
ProfilesApi.getBulkUnsuppressProfilesJobs(options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileSuppressionBulkDeleteJobs(options)
```
_______________________________

[Get Errors for Bulk Import Profiles Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_errors_for_bulk_import_profiles_job)

```typescript
ProfilesApi.getErrorsForBulkImportProfilesJob(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getBulkProfileImportJobImportErrors(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getImportErrorsForProfileBulkImportJob(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileBulkImportJobImportErrors(id: string, options)
```
_______________________________

[Get List for Bulk Import Profiles Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_list_for_bulk_import_profiles_job)

```typescript
ProfilesApi.getListForBulkImportProfilesJob(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getBulkProfileImportJobLists(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getListsForProfileBulkImportJob(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileBulkImportJobLists(id: string, options)
```
_______________________________

[Get List IDs for Bulk Import Profiles Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_list_ids_for_bulk_import_profiles_job)

```typescript
ProfilesApi.getListIdsForBulkImportProfilesJob(id: string)
```
##### Method alias:
```typescript
ProfilesApi.getBulkProfileImportJobRelationshipsLists(id: string)
```
##### Method alias:
```typescript
ProfilesApi.getListIdsForProfileBulkImportJob(id: string)
```
##### Method alias:
```typescript
ProfilesApi.getProfileBulkImportJobRelationshipsLists(id: string)
```
_______________________________

[Get List IDs for Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/get_list_ids_for_profile)

```typescript
ProfilesApi.getListIdsForProfile(id: string)
```
##### Method alias:
```typescript
ProfilesApi.getProfileRelationshipsLists(id: string)
```
_______________________________

[Get Lists for Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/get_lists_for_profile)

```typescript
ProfilesApi.getListsForProfile(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileLists(id: string, options)
```
_______________________________

[Get Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profile)

```typescript
ProfilesApi.getProfile(id: string, options)
```
_______________________________

[Get Profile for Push Token](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profile_for_push_token)

```typescript
ProfilesApi.getProfileForPushToken(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getPushTokenProfile(id: string, options)
```
_______________________________

[Get Profile ID for Push Token](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profile_id_for_push_token)

```typescript
ProfilesApi.getProfileIdForPushToken(id: string)
```
##### Method alias:
```typescript
ProfilesApi.getPushTokenRelationshipsProfile(id: string)
```
_______________________________

[Get Profile IDs for Bulk Import Profiles Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profile_ids_for_bulk_import_profiles_job)

```typescript
ProfilesApi.getProfileIdsForBulkImportProfilesJob(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getBulkProfileImportJobRelationshipsProfiles(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileBulkImportJobRelationshipsProfiles(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileIdsForProfileBulkImportJob(id: string, options)
```
_______________________________

[Get Profiles](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profiles)

```typescript
ProfilesApi.getProfiles(options)
```
_______________________________

[Get Profiles for Bulk Import Profiles Job](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profiles_for_bulk_import_profiles_job)

```typescript
ProfilesApi.getProfilesForBulkImportProfilesJob(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getBulkProfileImportJobProfiles(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileBulkImportJobProfiles(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfilesForProfileBulkImportJob(id: string, options)
```
_______________________________

[Get Push Token](https://developers.klaviyo.com/en/v2025-04-15/reference/get_push_token)

```typescript
ProfilesApi.getPushToken(id: string, options)
```
_______________________________

[Get Push Token IDs for Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/get_push_token_ids_for_profile)

```typescript
ProfilesApi.getPushTokenIdsForProfile(id: string)
```
##### Method alias:
```typescript
ProfilesApi.getProfileRelationshipsPushTokens(id: string)
```
_______________________________

[Get Push Tokens](https://developers.klaviyo.com/en/v2025-04-15/reference/get_push_tokens)

```typescript
ProfilesApi.getPushTokens(options)
```
_______________________________

[Get Push Tokens for Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/get_push_tokens_for_profile)

```typescript
ProfilesApi.getPushTokensForProfile(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfilePushTokens(id: string, options)
```
_______________________________

[Get Segment IDs for Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/get_segment_ids_for_profile)

```typescript
ProfilesApi.getSegmentIdsForProfile(id: string)
```
##### Method alias:
```typescript
ProfilesApi.getProfileRelationshipsSegments(id: string)
```
_______________________________

[Get Segments for Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/get_segments_for_profile)

```typescript
ProfilesApi.getSegmentsForProfile(id: string, options)
```
##### Method alias:
```typescript
ProfilesApi.getProfileSegments(id: string, options)
```
_______________________________

[Merge Profiles](https://developers.klaviyo.com/en/v2025-04-15/reference/merge_profiles)

```typescript
ProfilesApi.mergeProfiles(profileMergeQuery: ProfileMergeQuery)
```
##### Method alias:
```typescript
ProfilesApi.createProfileMerge(profileMergeQuery: ProfileMergeQuery)
```
_______________________________

[Update Profile](https://developers.klaviyo.com/en/v2025-04-15/reference/update_profile)

```typescript
ProfilesApi.updateProfile(id: string, profilePartialUpdateQuery: ProfilePartialUpdateQuery, options)
```
_______________________________
## ReportingApi
_______________________________

[Query Campaign Values](https://developers.klaviyo.com/en/v2025-04-15/reference/query_campaign_values)

```typescript
ReportingApi.queryCampaignValues(campaignValuesRequestDTO: CampaignValuesRequestDTO, options)
```
##### Method alias:
```typescript
ReportingApi.createCampaignValueReport(campaignValuesRequestDTO: CampaignValuesRequestDTO, options)
```
##### Method alias:
```typescript
ReportingApi.createCampaignValuesReport(campaignValuesRequestDTO: CampaignValuesRequestDTO, options)
```
_______________________________

[Query Flow Series](https://developers.klaviyo.com/en/v2025-04-15/reference/query_flow_series)

```typescript
ReportingApi.queryFlowSeries(flowSeriesRequestDTO: FlowSeriesRequestDTO, options)
```
##### Method alias:
```typescript
ReportingApi.createFlowSeryReport(flowSeriesRequestDTO: FlowSeriesRequestDTO, options)
```
##### Method alias:
```typescript
ReportingApi.createFlowSeriesReport(flowSeriesRequestDTO: FlowSeriesRequestDTO, options)
```
_______________________________

[Query Flow Values](https://developers.klaviyo.com/en/v2025-04-15/reference/query_flow_values)

```typescript
ReportingApi.queryFlowValues(flowValuesRequestDTO: FlowValuesRequestDTO, options)
```
##### Method alias:
```typescript
ReportingApi.createFlowValueReport(flowValuesRequestDTO: FlowValuesRequestDTO, options)
```
##### Method alias:
```typescript
ReportingApi.createFlowValuesReport(flowValuesRequestDTO: FlowValuesRequestDTO, options)
```
_______________________________

[Query Form Series](https://developers.klaviyo.com/en/v2025-04-15/reference/query_form_series)

```typescript
ReportingApi.queryFormSeries(formSeriesRequestDTO: FormSeriesRequestDTO)
```
##### Method alias:
```typescript
ReportingApi.createFormSeryReport(formSeriesRequestDTO: FormSeriesRequestDTO)
```
##### Method alias:
```typescript
ReportingApi.createFormSeriesReport(formSeriesRequestDTO: FormSeriesRequestDTO)
```
_______________________________

[Query Form Values](https://developers.klaviyo.com/en/v2025-04-15/reference/query_form_values)

```typescript
ReportingApi.queryFormValues(formValuesRequestDTO: FormValuesRequestDTO)
```
##### Method alias:
```typescript
ReportingApi.createFormValueReport(formValuesRequestDTO: FormValuesRequestDTO)
```
##### Method alias:
```typescript
ReportingApi.createFormValuesReport(formValuesRequestDTO: FormValuesRequestDTO)
```
_______________________________

[Query Segment Series](https://developers.klaviyo.com/en/v2025-04-15/reference/query_segment_series)

```typescript
ReportingApi.querySegmentSeries(segmentSeriesRequestDTO: SegmentSeriesRequestDTO)
```
##### Method alias:
```typescript
ReportingApi.createSegmentSeryReport(segmentSeriesRequestDTO: SegmentSeriesRequestDTO)
```
##### Method alias:
```typescript
ReportingApi.createSegmentSeriesReport(segmentSeriesRequestDTO: SegmentSeriesRequestDTO)
```
_______________________________

[Query Segment Values](https://developers.klaviyo.com/en/v2025-04-15/reference/query_segment_values)

```typescript
ReportingApi.querySegmentValues(segmentValuesRequestDTO: SegmentValuesRequestDTO)
```
##### Method alias:
```typescript
ReportingApi.createSegmentValueReport(segmentValuesRequestDTO: SegmentValuesRequestDTO)
```
##### Method alias:
```typescript
ReportingApi.createSegmentValuesReport(segmentValuesRequestDTO: SegmentValuesRequestDTO)
```
_______________________________
## ReviewsApi
_______________________________

[Get Review](https://developers.klaviyo.com/en/v2025-04-15/reference/get_review)

```typescript
ReviewsApi.getReview(id: string, options)
```
_______________________________

[Get Reviews](https://developers.klaviyo.com/en/v2025-04-15/reference/get_reviews)

```typescript
ReviewsApi.getReviews(options)
```
_______________________________

[Update Review](https://developers.klaviyo.com/en/v2025-04-15/reference/update_review)

```typescript
ReviewsApi.updateReview(id: string, reviewPatchQuery: ReviewPatchQuery)
```
_______________________________
## SegmentsApi
_______________________________

[Create Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/create_segment)

```typescript
SegmentsApi.createSegment(segmentCreateQuery: SegmentCreateQuery)
```
_______________________________

[Delete Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_segment)

```typescript
SegmentsApi.deleteSegment(id: string)
```
_______________________________

[Get Flows Triggered by Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flows_triggered_by_segment)

```typescript
SegmentsApi.getFlowsTriggeredBySegment(id: string, options)
```
##### Method alias:
```typescript
SegmentsApi.getFlowTriggersForSegment(id: string, options)
```
##### Method alias:
```typescript
SegmentsApi.getSegmentFlowTriggers(id: string, options)
```
_______________________________

[Get IDs for Flows Triggered by Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/get_ids_for_flows_triggered_by_segment)

```typescript
SegmentsApi.getIdsForFlowsTriggeredBySegment(id: string)
```
##### Method alias:
```typescript
SegmentsApi.getFlowTriggerIdsForSegment(id: string)
```
##### Method alias:
```typescript
SegmentsApi.getSegmentRelationshipsFlowTriggers(id: string)
```
_______________________________

[Get Profile IDs for Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profile_ids_for_segment)

```typescript
SegmentsApi.getProfileIdsForSegment(id: string, options)
```
##### Method alias:
```typescript
SegmentsApi.getSegmentRelationshipsProfiles(id: string, options)
```
_______________________________

[Get Profiles for Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/get_profiles_for_segment)

```typescript
SegmentsApi.getProfilesForSegment(id: string, options)
```
##### Method alias:
```typescript
SegmentsApi.getSegmentProfiles(id: string, options)
```
_______________________________

[Get Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/get_segment)

```typescript
SegmentsApi.getSegment(id: string, options)
```
_______________________________

[Get Segments](https://developers.klaviyo.com/en/v2025-04-15/reference/get_segments)

```typescript
SegmentsApi.getSegments(options)
```
_______________________________

[Get Tag IDs for Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag_ids_for_segment)

```typescript
SegmentsApi.getTagIdsForSegment(id: string)
```
##### Method alias:
```typescript
SegmentsApi.getSegmentRelationshipsTags(id: string)
```
_______________________________

[Get Tags for Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tags_for_segment)

```typescript
SegmentsApi.getTagsForSegment(id: string, options)
```
##### Method alias:
```typescript
SegmentsApi.getSegmentTags(id: string, options)
```
_______________________________

[Update Segment](https://developers.klaviyo.com/en/v2025-04-15/reference/update_segment)

```typescript
SegmentsApi.updateSegment(id: string, segmentPartialUpdateQuery: SegmentPartialUpdateQuery)
```
_______________________________
## TagsApi
_______________________________

[Create Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/create_tag)

```typescript
TagsApi.createTag(tagCreateQuery: TagCreateQuery)
```
_______________________________

[Create Tag Group](https://developers.klaviyo.com/en/v2025-04-15/reference/create_tag_group)

```typescript
TagsApi.createTagGroup(tagGroupCreateQuery: TagGroupCreateQuery)
```
_______________________________

[Delete Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_tag)

```typescript
TagsApi.deleteTag(id: string)
```
_______________________________

[Delete Tag Group](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_tag_group)

```typescript
TagsApi.deleteTagGroup(id: string)
```
_______________________________

[Get Campaign IDs for Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/get_campaign_ids_for_tag)

```typescript
TagsApi.getCampaignIdsForTag(id: string)
```
##### Method alias:
```typescript
TagsApi.getTagRelationshipsCampaigns(id: string)
```
_______________________________

[Get Flow IDs for Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/get_flow_ids_for_tag)

```typescript
TagsApi.getFlowIdsForTag(id: string)
```
##### Method alias:
```typescript
TagsApi.getTagRelationshipsFlows(id: string)
```
_______________________________

[Get List IDs for Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/get_list_ids_for_tag)

```typescript
TagsApi.getListIdsForTag(id: string)
```
##### Method alias:
```typescript
TagsApi.getTagRelationshipsLists(id: string)
```
_______________________________

[Get Segment IDs for Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/get_segment_ids_for_tag)

```typescript
TagsApi.getSegmentIdsForTag(id: string)
```
##### Method alias:
```typescript
TagsApi.getTagRelationshipsSegments(id: string)
```
_______________________________

[Get Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag)

```typescript
TagsApi.getTag(id: string, options)
```
_______________________________

[Get Tag Group](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag_group)

```typescript
TagsApi.getTagGroup(id: string, options)
```
_______________________________

[Get Tag Group for Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag_group_for_tag)

```typescript
TagsApi.getTagGroupForTag(id: string, options)
```
##### Method alias:
```typescript
TagsApi.getTagTagGroup(id: string, options)
```
##### Method alias:
```typescript
TagsApi.getGroupForTag(id: string, options)
```
_______________________________

[Get Tag Group ID for Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag_group_id_for_tag)

```typescript
TagsApi.getTagGroupIdForTag(id: string)
```
##### Method alias:
```typescript
TagsApi.getTagRelationshipsTagGroup(id: string)
```
##### Method alias:
```typescript
TagsApi.getGroupIdForTag(id: string)
```
##### Method alias:
```typescript
TagsApi.getTagRelationshipsGroup(id: string)
```
_______________________________

[Get Tag Groups](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag_groups)

```typescript
TagsApi.getTagGroups(options)
```
_______________________________

[Get Tag IDs for Tag Group](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tag_ids_for_tag_group)

```typescript
TagsApi.getTagIdsForTagGroup(id: string)
```
##### Method alias:
```typescript
TagsApi.getTagGroupRelationshipsTags(id: string)
```
_______________________________

[Get Tags](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tags)

```typescript
TagsApi.getTags(options)
```
_______________________________

[Get Tags for Tag Group](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tags_for_tag_group)

```typescript
TagsApi.getTagsForTagGroup(id: string, options)
```
##### Method alias:
```typescript
TagsApi.getTagGroupTags(id: string, options)
```
_______________________________

[Remove Tag from Campaigns](https://developers.klaviyo.com/en/v2025-04-15/reference/remove_tag_from_campaigns)

```typescript
TagsApi.removeTagFromCampaigns(id: string, tagCampaignOp: TagCampaignOp)
```
##### Method alias:
```typescript
TagsApi.deleteTagRelationshipsCampaigns(id: string, tagCampaignOp: TagCampaignOp)
```
##### Method alias:
```typescript
TagsApi.removeCampaignsFromTag(id: string, tagCampaignOp: TagCampaignOp)
```
_______________________________

[Remove Tag from Flows](https://developers.klaviyo.com/en/v2025-04-15/reference/remove_tag_from_flows)

```typescript
TagsApi.removeTagFromFlows(id: string, tagFlowOp: TagFlowOp)
```
##### Method alias:
```typescript
TagsApi.deleteTagRelationshipsFlows(id: string, tagFlowOp: TagFlowOp)
```
##### Method alias:
```typescript
TagsApi.removeFlowsFromTag(id: string, tagFlowOp: TagFlowOp)
```
_______________________________

[Remove Tag from Lists](https://developers.klaviyo.com/en/v2025-04-15/reference/remove_tag_from_lists)

```typescript
TagsApi.removeTagFromLists(id: string, tagListOp: TagListOp)
```
##### Method alias:
```typescript
TagsApi.deleteTagRelationshipsLists(id: string, tagListOp: TagListOp)
```
##### Method alias:
```typescript
TagsApi.removeListsFromTag(id: string, tagListOp: TagListOp)
```
_______________________________

[Remove Tag from Segments](https://developers.klaviyo.com/en/v2025-04-15/reference/remove_tag_from_segments)

```typescript
TagsApi.removeTagFromSegments(id: string, tagSegmentOp: TagSegmentOp)
```
##### Method alias:
```typescript
TagsApi.deleteTagRelationshipsSegments(id: string, tagSegmentOp: TagSegmentOp)
```
##### Method alias:
```typescript
TagsApi.removeSegmentsFromTag(id: string, tagSegmentOp: TagSegmentOp)
```
_______________________________

[Tag Campaigns](https://developers.klaviyo.com/en/v2025-04-15/reference/tag_campaigns)

```typescript
TagsApi.tagCampaigns(id: string, tagCampaignOp: TagCampaignOp)
```
##### Method alias:
```typescript
TagsApi.createTagRelationshipsCampaign(id: string, tagCampaignOp: TagCampaignOp)
```
##### Method alias:
```typescript
TagsApi.addCampaignsToTag(id: string, tagCampaignOp: TagCampaignOp)
```
##### Method alias:
```typescript
TagsApi.createTagRelationshipsCampaigns(id: string, tagCampaignOp: TagCampaignOp)
```
_______________________________

[Tag Flows](https://developers.klaviyo.com/en/v2025-04-15/reference/tag_flows)

```typescript
TagsApi.tagFlows(id: string, tagFlowOp: TagFlowOp)
```
##### Method alias:
```typescript
TagsApi.createTagRelationshipsFlow(id: string, tagFlowOp: TagFlowOp)
```
##### Method alias:
```typescript
TagsApi.addFlowsToTag(id: string, tagFlowOp: TagFlowOp)
```
##### Method alias:
```typescript
TagsApi.createTagRelationshipsFlows(id: string, tagFlowOp: TagFlowOp)
```
_______________________________

[Tag Lists](https://developers.klaviyo.com/en/v2025-04-15/reference/tag_lists)

```typescript
TagsApi.tagLists(id: string, tagListOp: TagListOp)
```
##### Method alias:
```typescript
TagsApi.createTagRelationshipsList(id: string, tagListOp: TagListOp)
```
##### Method alias:
```typescript
TagsApi.addListsToTag(id: string, tagListOp: TagListOp)
```
##### Method alias:
```typescript
TagsApi.createTagRelationshipsLists(id: string, tagListOp: TagListOp)
```
_______________________________

[Tag Segments](https://developers.klaviyo.com/en/v2025-04-15/reference/tag_segments)

```typescript
TagsApi.tagSegments(id: string, tagSegmentOp: TagSegmentOp)
```
##### Method alias:
```typescript
TagsApi.createTagRelationshipsSegment(id: string, tagSegmentOp: TagSegmentOp)
```
##### Method alias:
```typescript
TagsApi.addSegmentsToTag(id: string, tagSegmentOp: TagSegmentOp)
```
##### Method alias:
```typescript
TagsApi.createTagRelationshipsSegments(id: string, tagSegmentOp: TagSegmentOp)
```
_______________________________

[Update Tag](https://developers.klaviyo.com/en/v2025-04-15/reference/update_tag)

```typescript
TagsApi.updateTag(id: string, tagUpdateQuery: TagUpdateQuery)
```
_______________________________

[Update Tag Group](https://developers.klaviyo.com/en/v2025-04-15/reference/update_tag_group)

```typescript
TagsApi.updateTagGroup(id: string, tagGroupUpdateQuery: TagGroupUpdateQuery)
```
_______________________________
## TemplatesApi
_______________________________

[Clone Template](https://developers.klaviyo.com/en/v2025-04-15/reference/clone_template)

```typescript
TemplatesApi.cloneTemplate(templateCloneQuery: TemplateCloneQuery)
```
##### Method alias:
```typescript
TemplatesApi.createTemplateClone(templateCloneQuery: TemplateCloneQuery)
```
_______________________________

[Create Template](https://developers.klaviyo.com/en/v2025-04-15/reference/create_template)

```typescript
TemplatesApi.createTemplate(templateCreateQuery: TemplateCreateQuery)
```
_______________________________

[Create Universal Content](https://developers.klaviyo.com/en/v2025-04-15/reference/create_universal_content)

```typescript
TemplatesApi.createUniversalContent(universalContentCreateQuery: UniversalContentCreateQuery)
```
##### Method alias:
```typescript
TemplatesApi.createTemplateUniversalContent(universalContentCreateQuery: UniversalContentCreateQuery)
```
_______________________________

[Delete Template](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_template)

```typescript
TemplatesApi.deleteTemplate(id: string)
```
_______________________________

[Delete Universal Content](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_universal_content)

```typescript
TemplatesApi.deleteUniversalContent(id: string)
```
##### Method alias:
```typescript
TemplatesApi.deleteTemplateUniversalContent(id: string)
```
_______________________________

[Get All Universal Content](https://developers.klaviyo.com/en/v2025-04-15/reference/get_all_universal_content)

```typescript
TemplatesApi.getAllUniversalContent(options)
```
##### Method alias:
```typescript
TemplatesApi.getTemplateUniversalContent(options)
```
_______________________________

[Get Template](https://developers.klaviyo.com/en/v2025-04-15/reference/get_template)

```typescript
TemplatesApi.getTemplate(id: string, options)
```
_______________________________

[Get Templates](https://developers.klaviyo.com/en/v2025-04-15/reference/get_templates)

```typescript
TemplatesApi.getTemplates(options)
```
_______________________________

[Get Universal Content](https://developers.klaviyo.com/en/v2025-04-15/reference/get_universal_content)

```typescript
TemplatesApi.getUniversalContent(id: string, options)
```
_______________________________

[Render Template](https://developers.klaviyo.com/en/v2025-04-15/reference/render_template)

```typescript
TemplatesApi.renderTemplate(templateRenderQuery: TemplateRenderQuery)
```
##### Method alias:
```typescript
TemplatesApi.createTemplateRender(templateRenderQuery: TemplateRenderQuery)
```
_______________________________

[Update Template](https://developers.klaviyo.com/en/v2025-04-15/reference/update_template)

```typescript
TemplatesApi.updateTemplate(id: string, templateUpdateQuery: TemplateUpdateQuery)
```
_______________________________

[Update Universal Content](https://developers.klaviyo.com/en/v2025-04-15/reference/update_universal_content)

```typescript
TemplatesApi.updateUniversalContent(id: string, universalContentPartialUpdateQuery: UniversalContentPartialUpdateQuery)
```
##### Method alias:
```typescript
TemplatesApi.updateTemplateUniversalContent(id: string, universalContentPartialUpdateQuery: UniversalContentPartialUpdateQuery)
```
_______________________________
## TrackingSettingsApi
_______________________________

[Get Tracking Setting](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tracking_setting)

```typescript
TrackingSettingsApi.getTrackingSetting(id: string, options)
```
_______________________________

[Get Tracking Settings](https://developers.klaviyo.com/en/v2025-04-15/reference/get_tracking_settings)

```typescript
TrackingSettingsApi.getTrackingSettings(options)
```
_______________________________

[Update Tracking Setting](https://developers.klaviyo.com/en/v2025-04-15/reference/update_tracking_setting)

```typescript
TrackingSettingsApi.updateTrackingSetting(id: string, trackingSettingPartialUpdateQuery: TrackingSettingPartialUpdateQuery)
```
_______________________________
## WebFeedsApi
_______________________________

[Create Web Feed](https://developers.klaviyo.com/en/v2025-04-15/reference/create_web_feed)

```typescript
WebFeedsApi.createWebFeed(webFeedCreateQuery: WebFeedCreateQuery)
```
_______________________________

[Delete Web Feed](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_web_feed)

```typescript
WebFeedsApi.deleteWebFeed(id: string)
```
_______________________________

[Get Web Feed](https://developers.klaviyo.com/en/v2025-04-15/reference/get_web_feed)

```typescript
WebFeedsApi.getWebFeed(id: string, options)
```
_______________________________

[Get Web Feeds](https://developers.klaviyo.com/en/v2025-04-15/reference/get_web_feeds)

```typescript
WebFeedsApi.getWebFeeds(options)
```
_______________________________

[Update Web Feed](https://developers.klaviyo.com/en/v2025-04-15/reference/update_web_feed)

```typescript
WebFeedsApi.updateWebFeed(id: string, webFeedPartialUpdateQuery: WebFeedPartialUpdateQuery)
```
_______________________________
## WebhooksApi
_______________________________

[Create Webhook](https://developers.klaviyo.com/en/v2025-04-15/reference/create_webhook)

```typescript
WebhooksApi.createWebhook(webhookCreateQuery: WebhookCreateQuery)
```
_______________________________

[Delete Webhook](https://developers.klaviyo.com/en/v2025-04-15/reference/delete_webhook)

```typescript
WebhooksApi.deleteWebhook(id: string)
```
_______________________________

[Get Webhook](https://developers.klaviyo.com/en/v2025-04-15/reference/get_webhook)

```typescript
WebhooksApi.getWebhook(id: string, options)
```
_______________________________

[Get Webhook Topic](https://developers.klaviyo.com/en/v2025-04-15/reference/get_webhook_topic)

```typescript
WebhooksApi.getWebhookTopic(id: string)
```
_______________________________

[Get Webhook Topics](https://developers.klaviyo.com/en/v2025-04-15/reference/get_webhook_topics)

```typescript
WebhooksApi.getWebhookTopics()
```
_______________________________

[Get Webhooks](https://developers.klaviyo.com/en/v2025-04-15/reference/get_webhooks)

```typescript
WebhooksApi.getWebhooks(options)
```
_______________________________

[Update Webhook](https://developers.klaviyo.com/en/v2025-04-15/reference/update_webhook)

```typescript
WebhooksApi.updateWebhook(id: string, webhookPartialUpdateQuery: WebhookPartialUpdateQuery)
```
_______________________________

# Appendix


## Refresher on catching exceptions:

```JavaScript

try {
    await YOUR_CALL_HERE
} catch (e) {
    console.log(e)
}
```

## Namespace

In the interest of making the SDK follow conventions, we made the following namespace changes *relative* to the language agnostic resources up top.

1. dashes `-` are removed in favor of camelCase
2. all other non-alphanumeric symbols, including spaces, are removed.

For example:
* `get-campaigns` becomes `getCampaigns`
* `Data Privacy` become `DataPrivacy`

## Parameters & Arguments

The parameters follow the same naming conventions as the resource groups and operations.

We stick to the following convention for parameters/arguments

2. All query and path params that are tagged as `required` in the docs are passed as positional args.
3. There is no need to pass in your private `apiKey` for any operations, as it is defined upon api instantiation; public key is still required where its used.