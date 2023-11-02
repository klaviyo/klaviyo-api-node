# Klaviyo Typescript SDK

- SDK version: 7.1.0-beta.1

- Revision: 2023-10-15

## Helpful Resources

- If you want to suggest code changes check out our [`CONTRIBUTING.md`](CONTRIBUTING.md) document.
- To learn about migration from our 5.x.x version check out the [`MIGRATION.md`](MIGRATION.md) file.
- Read version changes in [`CHANGELOG.md`](CHANGELOG.md).

### Other Klaviyo Resources

- [API Reference](https://developers.klaviyo.com/en/v2023-10-15/reference/)
- [API Guides](https://developers.klaviyo.com/en/v2023-10-15/docs)
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
- ImagesApi
- ListsApi
- MetricsApi
- ProfilesApi
- SegmentsApi
- TagsApi
- TemplatesApi

# Installation

## NPM

You can install this library using `npm`.

`npm install klaviyo-api@7.1.0-beta.1`


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

### Retry Options

Constructing an API object also has optional property `RetryOptions`, this acts as a light wrapper with some different defaults around the `exponential-backoff` library

you can override
    - maxRetryAttempts
    - timeMultiple
    - startingDelay

```Typescript
const retryOptions: RetryOptions = new RetryOptions(3, 5, 500)
const session = new ApiKeySession("< YOUR API KEY HERE >", retryOptions)
```

if you have used exponential backoff before you can bypass the all the settings by just setting the options with a `BackoffOptions` object
```Typescript
const retryOptions: RetryOptions = new RetryOptions()
retryOptions.options = { "BUILD YOUR OWN BackoffOptions object here" }
```

### Organizational Helpers

There is also an optional `Klaviyo` import that has all the Apis and Auth, if you prefer that method for organization.
```Typescript
import { Klaviyo } from 'klaviyo-api'

const profilesApi = new Klaviyo.ProfilesApi(new Klaviyo.Auth.ApiKeySession("< YOUR API KEY HERE >", retryOptions))
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

First, configure an integration. If you haven't set up an integration, learn about it in this [guide](https://help.klaviyo.com/hc/en-us/articles/18819413031067#h_01HACEKGF2DBDMGJ4JG6TV4AMN)

### Making API Calls with OAuth
The `klaviyo-api` package can keep your `access token` up to date. If you have already developed a system for refreshing tokens or would like a more minimalist option, skip to [OAuthBasicSession](#oauthbasicsession)

#### TokenStorage
For the OAuthApi to be storage agnostic, this interface must be implemented for the `OAuthApi` to retrieve and save you `access` and `refresh` tokens.
Implement the `retrieve` and `save` functions outlined in the interface. If you need help getting started, check out the `storageHelpers.ts` in the [Klaviyo Example Typescript Integration](https://github.com/klaviyo-labs/node-integration-example)

Your implementation needs to include two methods:
1. `save` is called after creating a new `access token` via the authorization flow or after refreshing the `access token`.
    Your code needs to update (and insert if you are going to be using `createTokens()`) the new `access` or `refresh` token information into storage
    to keep track of which of your integration users' access information you are referencing, the `customerIdentifer` is a unique value to help with lookup later.
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
3. `retryOptions` - OPTIONAL - the `RetryOptions` instance outlines your desired exponential backoff retry options, outlined in [Retry Options](#retry-options) above

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
2. `retryOptions` - OPTIONAL - the `RetryOptions` instance outlines your desired exponential backoff retry options, outlined in [Retry Options](#retry-options) above

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
1. [OAuth authorization guide](https://help.klaviyo.com/hc/en-us/articles/18819413031067)
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

All the PKCE helper functions live within the `Pkce` namespace. Read about PKCE [here](https://help.klaviyo.com/hc/en-us/articles/18819413031067#h_01HACEKGF3AZ2KFGVPSSZNR5QW)

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

const profileList = await profilesApi.getProfiles({pageCursor: nextPage})
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

Read more about formatting your filter strings in our [developer documentation](https://developers.klaviyo.com/en/v2023-10-15/docs/filtering_)

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

The Klaviyo API has a series of endpoints to expose the relationships between different Klaviyo Items. You can read more about relationships in [our documentation](https://developers.klaviyo.com/en/v2023-10-15/docs/relationships_).

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

[Get Account](https://developers.klaviyo.com/en/v2023-10-15/reference/get_account)

```typescript
AccountsApi.getAccount(id: string, options)
```
_______________________________

[Get Accounts](https://developers.klaviyo.com/en/v2023-10-15/reference/get_accounts)

```typescript
AccountsApi.getAccounts(options)
```
_______________________________
## CampaignsApi
_______________________________

[Create Campaign](https://developers.klaviyo.com/en/v2023-10-15/reference/create_campaign)

```typescript
CampaignsApi.createCampaign(campaignCreateQuery: CampaignCreateQuery)
```
_______________________________

[Create Campaign Clone](https://developers.klaviyo.com/en/v2023-10-15/reference/create_campaign_clone)

```typescript
CampaignsApi.createCampaignClone(campaignCloneQuery: CampaignCloneQuery)
```
_______________________________

[Assign Campaign Message Template](https://developers.klaviyo.com/en/v2023-10-15/reference/create_campaign_message_assign_template)

```typescript
CampaignsApi.createCampaignMessageAssignTemplate(campaignMessageAssignTemplateQuery: CampaignMessageAssignTemplateQuery)
```
_______________________________

[Create Campaign Recipient Estimation Job](https://developers.klaviyo.com/en/v2023-10-15/reference/create_campaign_recipient_estimation_job)

```typescript
CampaignsApi.createCampaignRecipientEstimationJob(campaignRecipientEstimationJobCreateQuery: CampaignRecipientEstimationJobCreateQuery)
```
_______________________________

[Create Campaign Send Job](https://developers.klaviyo.com/en/v2023-10-15/reference/create_campaign_send_job)

```typescript
CampaignsApi.createCampaignSendJob(campaignSendJobCreateQuery: CampaignSendJobCreateQuery)
```
_______________________________

[Delete Campaign](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_campaign)

```typescript
CampaignsApi.deleteCampaign(id: string)
```
_______________________________

[Get Campaign](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign)

```typescript
CampaignsApi.getCampaign(id: string, options)
```
_______________________________

[Get Campaign Campaign Messages](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_campaign_messages)

```typescript
CampaignsApi.getCampaignCampaignMessages(id: string, options)
```
_______________________________

[Get Campaign Message](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_message)

```typescript
CampaignsApi.getCampaignMessage(id: string, options)
```
_______________________________

[Get Campaign Message Campaign](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_message_campaign)

```typescript
CampaignsApi.getCampaignMessageCampaign(id: string, options)
```
_______________________________

[Get Campaign Message Relationships Campaign](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_message_relationships_campaign)

```typescript
CampaignsApi.getCampaignMessageRelationshipsCampaign(id: string)
```
_______________________________

[Get Campaign Message Relationships Template](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_message_relationships_template)

```typescript
CampaignsApi.getCampaignMessageRelationshipsTemplate(id: string)
```
_______________________________

[Get Campaign Message Template](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_message_template)

```typescript
CampaignsApi.getCampaignMessageTemplate(id: string, options)
```
_______________________________

[Get Campaign Recipient Estimation](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_recipient_estimation)

```typescript
CampaignsApi.getCampaignRecipientEstimation(id: string, options)
```
_______________________________

[Get Campaign Recipient Estimation Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_recipient_estimation_job)

```typescript
CampaignsApi.getCampaignRecipientEstimationJob(id: string, options)
```
_______________________________

[Get Campaign Relationships Campaign Messages](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_relationships_campaign_messages)

```typescript
CampaignsApi.getCampaignRelationshipsCampaignMessages(id: string)
```
_______________________________

[Get Campaign Relationships Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_relationships_tags)

```typescript
CampaignsApi.getCampaignRelationshipsTags(id: string)
```
_______________________________

[Get Campaign Send Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_send_job)

```typescript
CampaignsApi.getCampaignSendJob(id: string, options)
```
_______________________________

[Get Campaign Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaign_tags)

```typescript
CampaignsApi.getCampaignTags(id: string, options)
```
_______________________________

[Get Campaigns](https://developers.klaviyo.com/en/v2023-10-15/reference/get_campaigns)

```typescript
CampaignsApi.getCampaigns(filter: string, options)
```
_______________________________

[Update Campaign](https://developers.klaviyo.com/en/v2023-10-15/reference/update_campaign)

```typescript
CampaignsApi.updateCampaign(id: string, campaignPartialUpdateQuery: CampaignPartialUpdateQuery)
```
_______________________________

[Update Campaign Message](https://developers.klaviyo.com/en/v2023-10-15/reference/update_campaign_message)

```typescript
CampaignsApi.updateCampaignMessage(id: string, campaignMessagePartialUpdateQuery: CampaignMessagePartialUpdateQuery)
```
_______________________________

[Update Campaign Send Job](https://developers.klaviyo.com/en/v2023-10-15/reference/update_campaign_send_job)

```typescript
CampaignsApi.updateCampaignSendJob(id: string, campaignSendJobPartialUpdateQuery: CampaignSendJobPartialUpdateQuery)
```
_______________________________
## CatalogsApi
_______________________________

[Create Back In Stock Subscription](https://developers.klaviyo.com/en/v2023-10-15/reference/create_back_in_stock_subscription)

```typescript
CatalogsApi.createBackInStockSubscription(serverBISSubscriptionCreateQuery: ServerBISSubscriptionCreateQuery)
```
_______________________________

[Create Catalog Category](https://developers.klaviyo.com/en/v2023-10-15/reference/create_catalog_category)

```typescript
CatalogsApi.createCatalogCategory(catalogCategoryCreateQuery: CatalogCategoryCreateQuery)
```
_______________________________

[Create Catalog Category Relationships Items](https://developers.klaviyo.com/en/v2023-10-15/reference/create_catalog_category_relationships_items)

```typescript
CatalogsApi.createCatalogCategoryRelationshipsItems(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
_______________________________

[Create Catalog Item](https://developers.klaviyo.com/en/v2023-10-15/reference/create_catalog_item)

```typescript
CatalogsApi.createCatalogItem(catalogItemCreateQuery: CatalogItemCreateQuery)
```
_______________________________

[Create Catalog Item Relationships Categories](https://developers.klaviyo.com/en/v2023-10-15/reference/create_catalog_item_relationships_categories)

```typescript
CatalogsApi.createCatalogItemRelationshipsCategories(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
_______________________________

[Create Catalog Variant](https://developers.klaviyo.com/en/v2023-10-15/reference/create_catalog_variant)

```typescript
CatalogsApi.createCatalogVariant(catalogVariantCreateQuery: CatalogVariantCreateQuery)
```
_______________________________

[Delete Catalog Category](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_catalog_category)

```typescript
CatalogsApi.deleteCatalogCategory(id: string)
```
_______________________________

[Delete Catalog Category Relationships Items](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_catalog_category_relationships_items)

```typescript
CatalogsApi.deleteCatalogCategoryRelationshipsItems(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
_______________________________

[Delete Catalog Item](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_catalog_item)

```typescript
CatalogsApi.deleteCatalogItem(id: string)
```
_______________________________

[Delete Catalog Item Relationships Categories](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_catalog_item_relationships_categories)

```typescript
CatalogsApi.deleteCatalogItemRelationshipsCategories(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
_______________________________

[Delete Catalog Variant](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_catalog_variant)

```typescript
CatalogsApi.deleteCatalogVariant(id: string)
```
_______________________________

[Get Catalog Categories](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_categories)

```typescript
CatalogsApi.getCatalogCategories(options)
```
_______________________________

[Get Catalog Category](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_category)

```typescript
CatalogsApi.getCatalogCategory(id: string, options)
```
_______________________________

[Get Catalog Category Items](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_category_items)

```typescript
CatalogsApi.getCatalogCategoryItems(id: string, options)
```
_______________________________

[Get Catalog Category Relationships Items](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_category_relationships_items)

```typescript
CatalogsApi.getCatalogCategoryRelationshipsItems(id: string, options)
```
_______________________________

[Get Catalog Item](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_item)

```typescript
CatalogsApi.getCatalogItem(id: string, options)
```
_______________________________

[Get Catalog Item Categories](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_item_categories)

```typescript
CatalogsApi.getCatalogItemCategories(id: string, options)
```
_______________________________

[Get Catalog Item Relationships Categories](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_item_relationships_categories)

```typescript
CatalogsApi.getCatalogItemRelationshipsCategories(id: string, options)
```
_______________________________

[Get Catalog Item Variants](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_item_variants)

```typescript
CatalogsApi.getCatalogItemVariants(id: string, options)
```
_______________________________

[Get Catalog Items](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_items)

```typescript
CatalogsApi.getCatalogItems(options)
```
_______________________________

[Get Catalog Variant](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_variant)

```typescript
CatalogsApi.getCatalogVariant(id: string, options)
```
_______________________________

[Get Catalog Variants](https://developers.klaviyo.com/en/v2023-10-15/reference/get_catalog_variants)

```typescript
CatalogsApi.getCatalogVariants(options)
```
_______________________________

[Get Create Categories Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_create_categories_job)

```typescript
CatalogsApi.getCreateCategoriesJob(jobId: string, options)
```
_______________________________

[Get Create Categories Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_create_categories_jobs)

```typescript
CatalogsApi.getCreateCategoriesJobs(options)
```
_______________________________

[Get Create Items Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_create_items_job)

```typescript
CatalogsApi.getCreateItemsJob(jobId: string, options)
```
_______________________________

[Get Create Items Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_create_items_jobs)

```typescript
CatalogsApi.getCreateItemsJobs(options)
```
_______________________________

[Get Create Variants Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_create_variants_job)

```typescript
CatalogsApi.getCreateVariantsJob(jobId: string, options)
```
_______________________________

[Get Create Variants Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_create_variants_jobs)

```typescript
CatalogsApi.getCreateVariantsJobs(options)
```
_______________________________

[Get Delete Categories Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_delete_categories_job)

```typescript
CatalogsApi.getDeleteCategoriesJob(jobId: string, options)
```
_______________________________

[Get Delete Categories Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_delete_categories_jobs)

```typescript
CatalogsApi.getDeleteCategoriesJobs(options)
```
_______________________________

[Get Delete Items Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_delete_items_job)

```typescript
CatalogsApi.getDeleteItemsJob(jobId: string, options)
```
_______________________________

[Get Delete Items Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_delete_items_jobs)

```typescript
CatalogsApi.getDeleteItemsJobs(options)
```
_______________________________

[Get Delete Variants Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_delete_variants_job)

```typescript
CatalogsApi.getDeleteVariantsJob(jobId: string, options)
```
_______________________________

[Get Delete Variants Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_delete_variants_jobs)

```typescript
CatalogsApi.getDeleteVariantsJobs(options)
```
_______________________________

[Get Update Categories Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_update_categories_job)

```typescript
CatalogsApi.getUpdateCategoriesJob(jobId: string, options)
```
_______________________________

[Get Update Categories Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_update_categories_jobs)

```typescript
CatalogsApi.getUpdateCategoriesJobs(options)
```
_______________________________

[Get Update Items Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_update_items_job)

```typescript
CatalogsApi.getUpdateItemsJob(jobId: string, options)
```
_______________________________

[Get Update Items Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_update_items_jobs)

```typescript
CatalogsApi.getUpdateItemsJobs(options)
```
_______________________________

[Get Update Variants Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_update_variants_job)

```typescript
CatalogsApi.getUpdateVariantsJob(jobId: string, options)
```
_______________________________

[Get Update Variants Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_update_variants_jobs)

```typescript
CatalogsApi.getUpdateVariantsJobs(options)
```
_______________________________

[Spawn Create Categories Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_create_categories_job)

```typescript
CatalogsApi.spawnCreateCategoriesJob(catalogCategoryCreateJobCreateQuery: CatalogCategoryCreateJobCreateQuery)
```
_______________________________

[Spawn Create Items Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_create_items_job)

```typescript
CatalogsApi.spawnCreateItemsJob(catalogItemCreateJobCreateQuery: CatalogItemCreateJobCreateQuery)
```
_______________________________

[Spawn Create Variants Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_create_variants_job)

```typescript
CatalogsApi.spawnCreateVariantsJob(catalogVariantCreateJobCreateQuery: CatalogVariantCreateJobCreateQuery)
```
_______________________________

[Spawn Delete Categories Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_delete_categories_job)

```typescript
CatalogsApi.spawnDeleteCategoriesJob(catalogCategoryDeleteJobCreateQuery: CatalogCategoryDeleteJobCreateQuery)
```
_______________________________

[Spawn Delete Items Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_delete_items_job)

```typescript
CatalogsApi.spawnDeleteItemsJob(catalogItemDeleteJobCreateQuery: CatalogItemDeleteJobCreateQuery)
```
_______________________________

[Spawn Delete Variants Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_delete_variants_job)

```typescript
CatalogsApi.spawnDeleteVariantsJob(catalogVariantDeleteJobCreateQuery: CatalogVariantDeleteJobCreateQuery)
```
_______________________________

[Spawn Update Categories Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_update_categories_job)

```typescript
CatalogsApi.spawnUpdateCategoriesJob(catalogCategoryUpdateJobCreateQuery: CatalogCategoryUpdateJobCreateQuery)
```
_______________________________

[Spawn Update Items Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_update_items_job)

```typescript
CatalogsApi.spawnUpdateItemsJob(catalogItemUpdateJobCreateQuery: CatalogItemUpdateJobCreateQuery)
```
_______________________________

[Spawn Update Variants Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_update_variants_job)

```typescript
CatalogsApi.spawnUpdateVariantsJob(catalogVariantUpdateJobCreateQuery: CatalogVariantUpdateJobCreateQuery)
```
_______________________________

[Update Catalog Category](https://developers.klaviyo.com/en/v2023-10-15/reference/update_catalog_category)

```typescript
CatalogsApi.updateCatalogCategory(id: string, catalogCategoryUpdateQuery: CatalogCategoryUpdateQuery)
```
_______________________________

[Update Catalog Category Relationships Items](https://developers.klaviyo.com/en/v2023-10-15/reference/update_catalog_category_relationships_items)

```typescript
CatalogsApi.updateCatalogCategoryRelationshipsItems(id: string, catalogCategoryItemOp: CatalogCategoryItemOp)
```
_______________________________

[Update Catalog Item](https://developers.klaviyo.com/en/v2023-10-15/reference/update_catalog_item)

```typescript
CatalogsApi.updateCatalogItem(id: string, catalogItemUpdateQuery: CatalogItemUpdateQuery)
```
_______________________________

[Update Catalog Item Relationships Categories](https://developers.klaviyo.com/en/v2023-10-15/reference/update_catalog_item_relationships_categories)

```typescript
CatalogsApi.updateCatalogItemRelationshipsCategories(id: string, catalogItemCategoryOp: CatalogItemCategoryOp)
```
_______________________________

[Update Catalog Variant](https://developers.klaviyo.com/en/v2023-10-15/reference/update_catalog_variant)

```typescript
CatalogsApi.updateCatalogVariant(id: string, catalogVariantUpdateQuery: CatalogVariantUpdateQuery)
```
_______________________________
## CouponsApi
_______________________________

[Create Coupon](https://developers.klaviyo.com/en/v2023-10-15/reference/create_coupon)

```typescript
CouponsApi.createCoupon(couponCreateQuery: CouponCreateQuery)
```
_______________________________

[Create Coupon Code](https://developers.klaviyo.com/en/v2023-10-15/reference/create_coupon_code)

```typescript
CouponsApi.createCouponCode(couponCodeCreateQuery: CouponCodeCreateQuery)
```
_______________________________

[Delete Coupon](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_coupon)

```typescript
CouponsApi.deleteCoupon(id: string)
```
_______________________________

[Delete Coupon Code](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_coupon_code)

```typescript
CouponsApi.deleteCouponCode(id: string)
```
_______________________________

[Get Coupon](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupon)

```typescript
CouponsApi.getCoupon(id: string, options)
```
_______________________________

[Get Coupon Code](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupon_code)

```typescript
CouponsApi.getCouponCode(id: string, options)
```
_______________________________

[Get Coupon Code Bulk Create Job](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupon_code_bulk_create_job)

```typescript
CouponsApi.getCouponCodeBulkCreateJob(jobId: string, options)
```
_______________________________

[Get Coupon Code Bulk Create Jobs](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupon_code_bulk_create_jobs)

```typescript
CouponsApi.getCouponCodeBulkCreateJobs(options)
```
_______________________________

[Get Coupon Code Relationships Coupon](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupon_code_relationships_coupon)

```typescript
CouponsApi.getCouponCodeRelationshipsCoupon(id: string, options)
```
_______________________________

[Get Coupon Codes](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupon_codes)

```typescript
CouponsApi.getCouponCodes(options)
```
_______________________________

[Get Coupon Codes For Coupon](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupon_codes_for_coupon)

```typescript
CouponsApi.getCouponCodesForCoupon(id: string, options)
```
_______________________________

[Get Coupon For Coupon Code](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupon_for_coupon_code)

```typescript
CouponsApi.getCouponForCouponCode(id: string, options)
```
_______________________________

[Get Coupon Relationships Coupon Codes](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupon_relationships_coupon_codes)

```typescript
CouponsApi.getCouponRelationshipsCouponCodes(id: string)
```
_______________________________

[Get Coupons](https://developers.klaviyo.com/en/v2023-10-15/reference/get_coupons)

```typescript
CouponsApi.getCoupons(options)
```
_______________________________

[Spawn Coupon Code Bulk Create Job](https://developers.klaviyo.com/en/v2023-10-15/reference/spawn_coupon_code_bulk_create_job)

```typescript
CouponsApi.spawnCouponCodeBulkCreateJob(couponCodeCreateJobCreateQuery: CouponCodeCreateJobCreateQuery)
```
_______________________________

[Update Coupon](https://developers.klaviyo.com/en/v2023-10-15/reference/update_coupon)

```typescript
CouponsApi.updateCoupon(id: string, couponUpdateQuery: CouponUpdateQuery)
```
_______________________________

[Update Coupon Code](https://developers.klaviyo.com/en/v2023-10-15/reference/update_coupon_code)

```typescript
CouponsApi.updateCouponCode(id: string, couponCodeUpdateQuery: CouponCodeUpdateQuery)
```
_______________________________
## DataPrivacyApi
_______________________________

[Request Profile Deletion](https://developers.klaviyo.com/en/v2023-10-15/reference/request_profile_deletion)

```typescript
DataPrivacyApi.requestProfileDeletion(dataPrivacyCreateDeletionJobQuery: DataPrivacyCreateDeletionJobQuery)
```
_______________________________
## EventsApi
_______________________________

[Create Event](https://developers.klaviyo.com/en/v2023-10-15/reference/create_event)

```typescript
EventsApi.createEvent(eventCreateQueryV2: EventCreateQueryV2)
```
_______________________________

[Get Event](https://developers.klaviyo.com/en/v2023-10-15/reference/get_event)

```typescript
EventsApi.getEvent(id: string, options)
```
_______________________________

[Get Event Metric](https://developers.klaviyo.com/en/v2023-10-15/reference/get_event_metric)

```typescript
EventsApi.getEventMetric(id: string, options)
```
_______________________________

[Get Event Profile](https://developers.klaviyo.com/en/v2023-10-15/reference/get_event_profile)

```typescript
EventsApi.getEventProfile(id: string, options)
```
_______________________________

[Get Event Relationships Metric](https://developers.klaviyo.com/en/v2023-10-15/reference/get_event_relationships_metric)

```typescript
EventsApi.getEventRelationshipsMetric(id: string)
```
_______________________________

[Get Event Relationships Profile](https://developers.klaviyo.com/en/v2023-10-15/reference/get_event_relationships_profile)

```typescript
EventsApi.getEventRelationshipsProfile(id: string)
```
_______________________________

[Get Events](https://developers.klaviyo.com/en/v2023-10-15/reference/get_events)

```typescript
EventsApi.getEvents(options)
```
_______________________________
## FlowsApi
_______________________________

[Get Flow](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow)

```typescript
FlowsApi.getFlow(id: string, options)
```
_______________________________

[Get Flow Action](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_action)

```typescript
FlowsApi.getFlowAction(id: string, options)
```
_______________________________

[Get Flow For Flow Action](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_action_flow)

```typescript
FlowsApi.getFlowActionFlow(id: string, options)
```
_______________________________

[Get Flow Action Messages](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_action_messages)

```typescript
FlowsApi.getFlowActionMessages(id: string, options)
```
_______________________________

[Get Flow Action Relationships Flow](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_action_relationships_flow)

```typescript
FlowsApi.getFlowActionRelationshipsFlow(id: string)
```
_______________________________

[Get Flow Action Relationships Messages](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_action_relationships_messages)

```typescript
FlowsApi.getFlowActionRelationshipsMessages(id: string, options)
```
_______________________________

[Get Flow Flow Actions](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_flow_actions)

```typescript
FlowsApi.getFlowFlowActions(id: string, options)
```
_______________________________

[Get Flow Message](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_message)

```typescript
FlowsApi.getFlowMessage(id: string, options)
```
_______________________________

[Get Flow Action For Message](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_message_action)

```typescript
FlowsApi.getFlowMessageAction(id: string, options)
```
_______________________________

[Get Flow Message Relationships Action](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_message_relationships_action)

```typescript
FlowsApi.getFlowMessageRelationshipsAction(id: string)
```
_______________________________

[Get Flow Message Relationships Template](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_message_relationships_template)

```typescript
FlowsApi.getFlowMessageRelationshipsTemplate(id: string)
```
_______________________________

[Get Flow Message Template](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_message_template)

```typescript
FlowsApi.getFlowMessageTemplate(id: string, options)
```
_______________________________

[Get Flow Relationships Flow Actions](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_relationships_flow_actions)

```typescript
FlowsApi.getFlowRelationshipsFlowActions(id: string, options)
```
_______________________________

[Get Flow Relationships Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_relationships_tags)

```typescript
FlowsApi.getFlowRelationshipsTags(id: string)
```
_______________________________

[Get Flow Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flow_tags)

```typescript
FlowsApi.getFlowTags(id: string, options)
```
_______________________________

[Get Flows](https://developers.klaviyo.com/en/v2023-10-15/reference/get_flows)

```typescript
FlowsApi.getFlows(options)
```
_______________________________

[Update Flow Status](https://developers.klaviyo.com/en/v2023-10-15/reference/update_flow)

```typescript
FlowsApi.updateFlow(id: string, flowUpdateQuery: FlowUpdateQuery)
```
_______________________________
## ImagesApi
_______________________________

[Get Image](https://developers.klaviyo.com/en/v2023-10-15/reference/get_image)

```typescript
ImagesApi.getImage(id: string, options)
```
_______________________________

[Get Images](https://developers.klaviyo.com/en/v2023-10-15/reference/get_images)

```typescript
ImagesApi.getImages(options)
```
_______________________________

[Update Image](https://developers.klaviyo.com/en/v2023-10-15/reference/update_image)

```typescript
ImagesApi.updateImage(id: string, imagePartialUpdateQuery: ImagePartialUpdateQuery)
```
_______________________________

[Upload Image From File](https://developers.klaviyo.com/en/v2023-10-15/reference/upload_image_from_file)

```typescript
ImagesApi.uploadImageFromFile(file: RequestFile, )
```
_______________________________

[Upload Image From URL](https://developers.klaviyo.com/en/v2023-10-15/reference/upload_image_from_url)

```typescript
ImagesApi.uploadImageFromUrl(imageCreateQuery: ImageCreateQuery)
```
_______________________________
## ListsApi
_______________________________

[Create List](https://developers.klaviyo.com/en/v2023-10-15/reference/create_list)

```typescript
ListsApi.createList(listCreateQuery: ListCreateQuery)
```
_______________________________

[Add Profile To List](https://developers.klaviyo.com/en/v2023-10-15/reference/create_list_relationships)

```typescript
ListsApi.createListRelationships(id: string, listMembersAddQuery: ListMembersAddQuery)
```
_______________________________

[Delete List](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_list)

```typescript
ListsApi.deleteList(id: string)
```
_______________________________

[Remove Profile From List](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_list_relationships)

```typescript
ListsApi.deleteListRelationships(id: string, listMembersDeleteQuery: ListMembersDeleteQuery)
```
_______________________________

[Get List](https://developers.klaviyo.com/en/v2023-10-15/reference/get_list)

```typescript
ListsApi.getList(id: string, options)
```
_______________________________

[Get List Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/get_list_profiles)

```typescript
ListsApi.getListProfiles(id: string, options)
```
_______________________________

[Get List Relationships Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/get_list_relationships_profiles)

```typescript
ListsApi.getListRelationshipsProfiles(id: string, options)
```
_______________________________

[Get List Relationships Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_list_relationships_tags)

```typescript
ListsApi.getListRelationshipsTags(id: string)
```
_______________________________

[Get List Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_list_tags)

```typescript
ListsApi.getListTags(id: string, options)
```
_______________________________

[Get Lists](https://developers.klaviyo.com/en/v2023-10-15/reference/get_lists)

```typescript
ListsApi.getLists(options)
```
_______________________________

[Update List](https://developers.klaviyo.com/en/v2023-10-15/reference/update_list)

```typescript
ListsApi.updateList(id: string, listPartialUpdateQuery: ListPartialUpdateQuery)
```
_______________________________
## MetricsApi
_______________________________

[Get Metric](https://developers.klaviyo.com/en/v2023-10-15/reference/get_metric)

```typescript
MetricsApi.getMetric(id: string, options)
```
_______________________________

[Get Metrics](https://developers.klaviyo.com/en/v2023-10-15/reference/get_metrics)

```typescript
MetricsApi.getMetrics(options)
```
_______________________________

[Query Metric Aggregates](https://developers.klaviyo.com/en/v2023-10-15/reference/query_metric_aggregates)

```typescript
MetricsApi.queryMetricAggregates(metricAggregateQuery: MetricAggregateQuery)
```
_______________________________
## ProfilesApi
_______________________________

[Create Profile](https://developers.klaviyo.com/en/v2023-10-15/reference/create_profile)

```typescript
ProfilesApi.createProfile(profileCreateQuery: ProfileCreateQuery)
```
_______________________________

[Create or Update Push Token](https://developers.klaviyo.com/en/v2023-10-15/reference/create_push_token)

```typescript
ProfilesApi.createPushToken(pushTokenCreateQuery: PushTokenCreateQuery)
```
_______________________________

[Get Profile](https://developers.klaviyo.com/en/v2023-10-15/reference/get_profile)

```typescript
ProfilesApi.getProfile(id: string, options)
```
_______________________________

[Get Profile Lists](https://developers.klaviyo.com/en/v2023-10-15/reference/get_profile_lists)

```typescript
ProfilesApi.getProfileLists(id: string, options)
```
_______________________________

[Get Profile Relationships Lists](https://developers.klaviyo.com/en/v2023-10-15/reference/get_profile_relationships_lists)

```typescript
ProfilesApi.getProfileRelationshipsLists(id: string)
```
_______________________________

[Get Profile Relationships Segments](https://developers.klaviyo.com/en/v2023-10-15/reference/get_profile_relationships_segments)

```typescript
ProfilesApi.getProfileRelationshipsSegments(id: string)
```
_______________________________

[Get Profile Segments](https://developers.klaviyo.com/en/v2023-10-15/reference/get_profile_segments)

```typescript
ProfilesApi.getProfileSegments(id: string, options)
```
_______________________________

[Get Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/get_profiles)

```typescript
ProfilesApi.getProfiles(options)
```
_______________________________

[Merge Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/merge_profiles)

```typescript
ProfilesApi.mergeProfiles(profileMergeQuery: ProfileMergeQuery)
```
_______________________________

[Subscribe Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/subscribe_profiles)

```typescript
ProfilesApi.subscribeProfiles(subscriptionCreateJobCreateQuery: SubscriptionCreateJobCreateQuery)
```
_______________________________

[Suppress Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/suppress_profiles)

```typescript
ProfilesApi.suppressProfiles(suppressionCreateJobCreateQuery: SuppressionCreateJobCreateQuery)
```
_______________________________

[Unsubscribe Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/unsubscribe_profiles)

```typescript
ProfilesApi.unsubscribeProfiles(subscriptionDeleteJobCreateQuery: SubscriptionDeleteJobCreateQuery)
```
_______________________________

[Unsuppress Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/unsuppress_profiles)

```typescript
ProfilesApi.unsuppressProfiles(suppressionDeleteJobCreateQuery: SuppressionDeleteJobCreateQuery)
```
_______________________________

[Update Profile](https://developers.klaviyo.com/en/v2023-10-15/reference/update_profile)

```typescript
ProfilesApi.updateProfile(id: string, profilePartialUpdateQuery: ProfilePartialUpdateQuery)
```
_______________________________
## SegmentsApi
_______________________________

[Get Segment](https://developers.klaviyo.com/en/v2023-10-15/reference/get_segment)

```typescript
SegmentsApi.getSegment(id: string, options)
```
_______________________________

[Get Segment Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/get_segment_profiles)

```typescript
SegmentsApi.getSegmentProfiles(id: string, options)
```
_______________________________

[Get Segment Relationships Profiles](https://developers.klaviyo.com/en/v2023-10-15/reference/get_segment_relationships_profiles)

```typescript
SegmentsApi.getSegmentRelationshipsProfiles(id: string, options)
```
_______________________________

[Get Segment Relationships Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_segment_relationships_tags)

```typescript
SegmentsApi.getSegmentRelationshipsTags(id: string)
```
_______________________________

[Get Segment Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_segment_tags)

```typescript
SegmentsApi.getSegmentTags(id: string, options)
```
_______________________________

[Get Segments](https://developers.klaviyo.com/en/v2023-10-15/reference/get_segments)

```typescript
SegmentsApi.getSegments(options)
```
_______________________________

[Update Segment](https://developers.klaviyo.com/en/v2023-10-15/reference/update_segment)

```typescript
SegmentsApi.updateSegment(id: string, segmentPartialUpdateQuery: SegmentPartialUpdateQuery)
```
_______________________________
## TagsApi
_______________________________

[Create Tag](https://developers.klaviyo.com/en/v2023-10-15/reference/create_tag)

```typescript
TagsApi.createTag(tagCreateQuery: TagCreateQuery)
```
_______________________________

[Create Tag Group](https://developers.klaviyo.com/en/v2023-10-15/reference/create_tag_group)

```typescript
TagsApi.createTagGroup(tagGroupCreateQuery: TagGroupCreateQuery)
```
_______________________________

[Create Tag Relationships Campaigns](https://developers.klaviyo.com/en/v2023-10-15/reference/create_tag_relationships_campaigns)

```typescript
TagsApi.createTagRelationshipsCampaigns(id: string, tagCampaignOp: TagCampaignOp)
```
_______________________________

[Create Tag Relationships Flows](https://developers.klaviyo.com/en/v2023-10-15/reference/create_tag_relationships_flows)

```typescript
TagsApi.createTagRelationshipsFlows(id: string, tagFlowOp: TagFlowOp)
```
_______________________________

[Create Tag Relationships Lists](https://developers.klaviyo.com/en/v2023-10-15/reference/create_tag_relationships_lists)

```typescript
TagsApi.createTagRelationshipsLists(id: string, tagListOp: TagListOp)
```
_______________________________

[Create Tag Relationships Segments](https://developers.klaviyo.com/en/v2023-10-15/reference/create_tag_relationships_segments)

```typescript
TagsApi.createTagRelationshipsSegments(id: string, tagSegmentOp: TagSegmentOp)
```
_______________________________

[Delete Tag](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_tag)

```typescript
TagsApi.deleteTag(id: string)
```
_______________________________

[Delete Tag Group](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_tag_group)

```typescript
TagsApi.deleteTagGroup(id: string)
```
_______________________________

[Delete Tag Relationships Campaigns](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_tag_relationships_campaigns)

```typescript
TagsApi.deleteTagRelationshipsCampaigns(id: string, tagCampaignOp: TagCampaignOp)
```
_______________________________

[Delete Tag Relationships Flows](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_tag_relationships_flows)

```typescript
TagsApi.deleteTagRelationshipsFlows(id: string, tagFlowOp: TagFlowOp)
```
_______________________________

[Delete Tag Relationships Lists](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_tag_relationships_lists)

```typescript
TagsApi.deleteTagRelationshipsLists(id: string, tagListOp: TagListOp)
```
_______________________________

[Delete Tag Relationships Segments](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_tag_relationships_segments)

```typescript
TagsApi.deleteTagRelationshipsSegments(id: string, tagSegmentOp: TagSegmentOp)
```
_______________________________

[Get Tag](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag)

```typescript
TagsApi.getTag(id: string, options)
```
_______________________________

[Get Tag Group](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_group)

```typescript
TagsApi.getTagGroup(id: string, options)
```
_______________________________

[Get Tag Group Relationships Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_group_relationships_tags)

```typescript
TagsApi.getTagGroupRelationshipsTags(id: string)
```
_______________________________

[Get Tag Group Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_group_tags)

```typescript
TagsApi.getTagGroupTags(id: string, options)
```
_______________________________

[Get Tag Groups](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_groups)

```typescript
TagsApi.getTagGroups(options)
```
_______________________________

[Get Tag Relationships Campaigns](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_relationships_campaigns)

```typescript
TagsApi.getTagRelationshipsCampaigns(id: string)
```
_______________________________

[Get Tag Relationships Flows](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_relationships_flows)

```typescript
TagsApi.getTagRelationshipsFlows(id: string)
```
_______________________________

[Get Tag Relationships Lists](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_relationships_lists)

```typescript
TagsApi.getTagRelationshipsLists(id: string)
```
_______________________________

[Get Tag Relationships Segments](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_relationships_segments)

```typescript
TagsApi.getTagRelationshipsSegments(id: string)
```
_______________________________

[Get Tag Relationships Tag Group](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_relationships_tag_group)

```typescript
TagsApi.getTagRelationshipsTagGroup(id: string)
```
_______________________________

[Get Tag Tag Group](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tag_tag_group)

```typescript
TagsApi.getTagTagGroup(id: string, options)
```
_______________________________

[Get Tags](https://developers.klaviyo.com/en/v2023-10-15/reference/get_tags)

```typescript
TagsApi.getTags(options)
```
_______________________________

[Update Tag](https://developers.klaviyo.com/en/v2023-10-15/reference/update_tag)

```typescript
TagsApi.updateTag(id: string, tagUpdateQuery: TagUpdateQuery)
```
_______________________________

[Update Tag Group](https://developers.klaviyo.com/en/v2023-10-15/reference/update_tag_group)

```typescript
TagsApi.updateTagGroup(id: string, tagGroupUpdateQuery: TagGroupUpdateQuery)
```
_______________________________
## TemplatesApi
_______________________________

[Create Template](https://developers.klaviyo.com/en/v2023-10-15/reference/create_template)

```typescript
TemplatesApi.createTemplate(templateCreateQuery: TemplateCreateQuery)
```
_______________________________

[Create Template Clone](https://developers.klaviyo.com/en/v2023-10-15/reference/create_template_clone)

```typescript
TemplatesApi.createTemplateClone(templateCloneQuery: TemplateCloneQuery)
```
_______________________________

[Create Template Render](https://developers.klaviyo.com/en/v2023-10-15/reference/create_template_render)

```typescript
TemplatesApi.createTemplateRender(templateRenderQuery: TemplateRenderQuery)
```
_______________________________

[Delete Template](https://developers.klaviyo.com/en/v2023-10-15/reference/delete_template)

```typescript
TemplatesApi.deleteTemplate(id: string)
```
_______________________________

[Get Template](https://developers.klaviyo.com/en/v2023-10-15/reference/get_template)

```typescript
TemplatesApi.getTemplate(id: string, options)
```
_______________________________

[Get Templates](https://developers.klaviyo.com/en/v2023-10-15/reference/get_templates)

```typescript
TemplatesApi.getTemplates(options)
```
_______________________________

[Update Template](https://developers.klaviyo.com/en/v2023-10-15/reference/update_template)

```typescript
TemplatesApi.updateTemplate(id: string, templateUpdateQuery: TemplateUpdateQuery)
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