# Klaviyo JavaScript SDK

- SDK version: 5.1.0

- Revision: 2023-08-15

## Helpful Resources

- [API Reference](https://developers.klaviyo.com/en/v2023-08-15/reference/)
- [API Guides](https://developers.klaviyo.com/en/v2023-08-15/docs)
- [Postman Workspace](https://www.postman.com/klaviyo/workspace/klaviyo-developers)

## Design & Approach

This SDK is a thin wrapper around our API. See our API Reference for full documentation on API behavior.

This SDK exactly mirrors the organization and naming convention of the above language-agnostic resources, with a few namespace changes to make it Pythonic (details in Appendix).

## Organization

This SDK is organized into the following resources:

 - Accounts
 - Campaigns
 - Catalogs
 - DataPrivacy
 - Events
 - Flows
 - Lists
 - Metrics
 - Profiles
 - Segments
 - Tags
 - Templates

# Installation

## NPM

You can install this library using `npm`.

`npm install klaviyo-api`

## source code

*Alternatively*, you can also run this using this repo as source code, by running *one* of the following shell commands within the cloned repo:

`npm install`

and then running JavaScript from the cloned repo.

### TypeScript Beta

The Beta SDK major.minor.patch version will correspond with the stable node SDK major.minor.patch version. For example, node SDK version 4.0.0 and TypeScript Beta SDK version 4.0.0-beta.1 have access to the same API version and underlying API functionality.

You can find the beta branch [linked](https://github.com/klaviyo/klaviyo-api-node/tree/typescript-beta) here.

We would love for you to try the beta SDK and share feedback with us before these features reach the general availability (stable) phase. If you have feedback you can leave it [here](https://docs.google.com/forms/d/e/1FAIpQLSckdxPXezeY6SludpOGpJ2nNZU280tEnSwuRnEyx0XNS02zdA/viewform).

> **Note**: There can be breaking changes between beta versions. Therefore we recommend pinning the package version to a specific beta version in your package.json file. This way you can install the same version each time without breaking changes unless you are intentionally looking for the latest beta version.

You can install this beta library using `npm`.

`npm install klaviyo-api@5.0.0-beta.1`

or with the tag

`npm install klaviyo-api@beta`

# Usage Example

### To instantiate the ConfigWrapper

```JavaScript
import {ConfigWrapper} from 'klaviyo-api'

ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE")
```
Or if ES6 isn't your thing
```JavaScript
var klaviyoSdk = require('klaviyo-api');

klaviyoSdk.ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE")
```

To edit the exponential backoff built into the ConfigWrapper you can pass optional parameters

```JavaScript
import {ConfigWrapper} from 'klaviyo-api'

ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE", {
    numOfAttempts: 5, // max number of rety attempts. Default is 3
    timeMultiple: 10, // how exponental the timing is. Default is 5
    startingDelay: 1000, // How long before first retry. Default is 500
})
```

NOTES:
* The SDK retries on resolvable errors, namely: rate limits (common) and server errors on klaviyo (rare).
* The first ConfigWrapper created is the default, if you want to use more than one api key see [multi-store instructions below](https://github.com/klaviyo/klaviyo-api-node#multiple-stores)

### To call the `getProfile` operation:

```JavaScript
import {Profiles} from 'klaviyo-api';

const profileId = "PROFILE_ID";
const opts = {};

Profiles.getProfile(profileId, opts)
    .then(data => 'Do Something Here')
    .catch(error => 'An error was thrown check the HTTP code with error.status');
```
or if you want to use async await
```JavaScript
import {Profiles} from 'klaviyo-api';

const profileId = "PROFILE_ID";
const opts = {};

// Just make sure you are calling with the async tag ie. async () => {}
try {
    response = await Profiles.getProfile(profileId, opts)
    console.log(response);
} catch (e) {
    console.log(e);
}
```

once again if you're not using ES6

```Javascript
var KlaviyoSdk = require('klaviyo-api');

var profileId = "PROFILE_ID";
var opts = {};

KlaviyoSdk.Profiles.getProfile(profileId, opts)
    .then(data => 'Do Something Here')
    .catch(error => 'An error was thrown check the HTTP code with error.status');
```

### What the response looks like

The response is an object with three parts: status, headers, and body

```JavaScript
import {Profiles} from 'klaviyo-api';

const opts = {};

// how to get your request information
try {
    response = await Profiles.getProfiles(opts)
    const response_body = response.body
    // first index id
    const id = response_body.data[0].id
    // getting the next page cursor
    const next_page_cursor = response_body.links.next
    // rest of the response information
    const status = response.status
    const headers = response.headers
} catch (e) {
    console.log(e);
}
```

### Multiple stores

if you need to use multiple api keys, you can forgo the wrapped api classes and make you own

```JavaScript
import {ConfigWrapper, CatalogsApi} from 'klaviyo-api'

const catalogApi = new CatalogsApi(ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE"))
const r = await catalogApi.createCatalogCategory(body)
```

## Optional Parameters and Json Api Features

Here we will go over

- Pagination
- Page size
- Additional Fields
- Filtering
- Sparse Fields
- Sorting
- Relationships

### Quick rule

As a reminder, the optional parameters are named slightly differently from how you would make the call without the SDK docs, query parameter names have variables that make bad JavaScript names like
`page[cursor]` are transformed to `pageCursor`. (Remove the weird characters and append words with camelCase). A modern IDE will make the positional arguments look a bit more clear.

### Cursor based Pagination

All the endpoints that return a list of results use cursor-based pagination.

Obtain the cursor value from the call you want to get the next page for, then pass it under the `pageCursor` optional parameter. The page cursor looks like `WzE2NDA5OTUyMDAsICIzYzRjeXdGTndadyIsIHRydWVd`.

API call:
```
https://a.klaviyo.com/api/profiles/?page[cursor]=WzE2NTcyMTM4NjQsICIzc042NjRyeHo0ciIsIHRydWVd
```

SDK call:

```JavaScript
import { ConfigWrapper, ProfilesApi } from 'klaviyo-api'
const profilesApi = new ProfilesApi(ConfigWrapper("<Your Private Key Here>"))

const profileList = await profilesApi.getProfiles({pageCursor: 'WzE2NTcyMTM4NjQsICIzc042NjRyeHo0ciIsIHRydWVd'})
```

You get the cursor for the next page from `body.link.next` which returns the entire URL of the next call but the sdk will accept the entire link and use only the relevant cursor.

Here is an example of getting the second next and passing in the page cursor:

```JavaScript
import { ConfigWrapper, ProfilesApi } from 'klaviyo-api'
const profilesApi = new ProfilesApi(ConfigWrapper("<Your Private Key Here>"))

try {
    const profilesListFirstPage = await profilesApi.getProfiles()
    const nextPage = profilesList.body.links.next
    const profileListSecondPage = await profilesApi.getProfiles({pageCursor: nextPage})
    console.log(profileListSecondPage.body)
} catch (e) {
    console.log(e)
}
```

There are more page cursors than just next, check the endpoint's docs or the response type, but often there is `first`, `last`, `next` and `prev`.

### Page Size
Some endpoint you can get a larger or smaller page size by using the `pageSize` parameter.

API call:

```
https://a.klaviyo.com/api/profiles/?page[size]=20
```

SDK call:

```JavaScript
import { ConfigWrapper, ProfilesApi } from 'klaviyo-api'
const profilesApi = new ProfilesApi(ConfigWrapper("<Your Private Key Here>"))

const profileList = await profilesApi.getProfiles({pageSize: 20})
```

### Additional Fields

Additional fields are used to populate part of the response that would be `null` otherwise.
For the `getProfile` endpoint you can pass in a request to get the predictive analytics of the profile. Using the `additionalFields` parameter often will change the rate limit of the endpoint so be sure to keep an eye on your usage.

API call
```
https://a.klaviyo.com/api/profiles/01GDDKASAP8TKDDA2GRZDSVP4H/?additional-fields[profile]=predictive_analytics
```
SDK call:

```javascript
import { ConfigWrapper, ProfilesApi } from 'klaviyo-api'
const profilesApi = new ProfilesApi(ConfigWrapper("<Your Private Key Here>"))

const profileId = '01GDDKASAP8TKDDA2GRZDSVP4H'
const profile = await profilesApi.getProfile(profileId, {additionalFieldsProfile: ['predictive_analytics']})

// If your profile has enough information for predictive analytis it will populate
console.log(profile.body.data.attributes.predictiveAnalytics)
```

#### Filtering

Filter by passing the filter as a string as under the optional parameter `filter`. Note that when filtering by a property it will be snake_case instead of camelCase, ie. `metric_id`

Read more about formatting your filter strings in our [developer documentation](https://developers.klaviyo.com/en/v2023-08-15/docs/filtering_)

Here is an example of a filter string for results between two date times: `less-than(updated,2023-04-26T00:00:00Z),greater-than(updated,2023-04-19T00:00:00Z)`

Here is a code example filter for profiles with the matching emails:

```
https://a.klaviyo.com/api/profiles/?filter=any(email,["henry.chan@klaviyo-demo.com","amanda.das@klaviyo-demo.com"]
```
SDK call:
```javascript
import { ConfigWrapper, ProfilesApi } from 'klaviyo-api'
const profilesApi = new ProfilesApi(ConfigWrapper("<Your Private Key Here>"))

const filter = 'any(email,["henry.chan@klaviyo-demo.com","amanda.das@klaviyo-demo.com"])'
// remember { filter: filter } is the same as {filter}
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
import { ConfigWrapper, EventsApi } from 'klaviyo-api'
const eventsApi = new EventsApi(ConfigWrapper("<Your Private Key Here>"))

const eventsList = await eventsApi.getEvents({fieldsEvent: ["event_properties"]})
```

### Sorting

Your can request the results of specific endpoints to be ordered by a given parameter. The direction of the sort can swapped by adding a `-` in front of the sort key.
For example `datetime` will be ascending while `-datetime` will be descending.

If you are unsure about the available sort fields you can always check the documentation for the endpoint you are using.
For a comprehensive list that links to the documentation for each function check the Endpoints section below.


API Call to get events sorted by oldest to newest datetime:

```
https://a.klaviyo.com/api/events/?sort=-datetime
```

SDK call:

```JavaScript
import { ConfigWrapper, EventsApi } from 'klaviyo-api'
const eventsApi = new EventsApi(ConfigWrapper("<Your Private Key Here>"))

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

```JavaScript
import { ConfigWrapper, ProfilesApi } from 'klaviyo-api'
const profilesApi = new ProfilesApi(ConfigWrapper("<Your Private Key Here>"))

const profileId = '01GDDKASAP8TKDDA2GRZDSVP4H'
const profile = await profilesApi.getProfile(profileId, {include:["lists"]})

// Profile information is accessed the same way with
console.log(profile.body.data)
// Lists related to the profile with be accessible via the included array
console.log(profile.body.included)
```

*Note about sparse fields and relationships:* you can request only specific fields of the included object as well.

```JavaScript
import { ConfigWrapper, ProfilesApi } from 'klaviyo-api'
const profilesApi = new ProfilesApi(ConfigWrapper("<Your Private Key Here>"))

const profileId = '01GDDKASAP8TKDDA2GRZDSVP4H'
// Use the fieldsLists property to request only the list name
const profile = await profilesApi.getProfile(profileId, { fieldsList: ['name'], include: ["lists"])

// Profile information is accessed the same way with
console.log(profile.body.data)
// Lists related to the profile with be accessible via the included array
console.log(profile.body.included)
```

### Relationships

The Klaviyo API has a series of endpoints to expose the relationships between different Klaviyo Items. You can read more about relationships in[our documentation](https://developers.klaviyo.com/en/v2023-08-15/docs/relationships_).

Here are some use cases and their examples:

API call to get the list membership for a profile with the given profile ID:


```
https://a.klaviyo.com/api/profiles/01GDDKASAP8TKDDA2GRZDSVP4H/relationships/lists/
```

SDK call:

```JavaScript
import { ConfigWrapper, ProfilesApi } from 'klaviyo-api'
const profilesApi = new ProfilesApi(ConfigWrapper("<Your Private Key Here>"))

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

```JavaScript
import { ConfigWrapper, TagsApi } from 'klaviyo-api'
const tagsApi = new TagsApi(ConfigWrapper("< Your private key here >"))

const tagId = '9c8db7a0-5ab5-4e3c-9a37-a3224fd14382'
const relatedCampagins = tagsApi.getTagRelationshipsCampaigns(tagId)
```
### Combining

You can use any combination of the features outlines above in conjunction with one another.

API call to get events associated with a specific metric, then return just the event properties sorted by oldest to newest datetime:

```
https://a.klaviyo.com/api/events/?fields[event]=event_properties&filter=equals(metric_id,"URDbLg")&sort=-datetime
```
SDK call:
```JavaScript
import { ConfigWrapper, EventsApi } from 'klaviyo-api'
const eventsApi = new EventsApi(ConfigWrapper("<Your Private Key Here>"))

const metricId = 'URDbLg'
const filter = `equal(metric_id,"${metricId}")`
const events = await eventsApi.getEvents({ fieldsEvent: ['event_properties'], filter, sort: '-datetime'})
```

# Comprehensive list of Operations & Parameters

_**NOTE:**_
- Organization: Resource groups and operation_ids are listed in alphabetical order, first by Resource name, then by OpenAPI Summary. Operation summaries are those listed in the right side bar of the [API Reference](https://developers.klaviyo.com/en/v2023-08-15/reference/get_events).
- For example values / data types, as well as whether parameters are required/optional, please reference the corresponding API Reference link.
- Some args are required for the API call to succeed, the API docs above are the source of truth regarding which params are required.


## AccountsApi


#### [Get Account](https://developers.klaviyo.com/en/v2023-08-15/reference/get_account)

```JavaScript
const Accounts.getAccount(id, opts)
```




#### [Get Accounts](https://developers.klaviyo.com/en/v2023-08-15/reference/get_accounts)

```JavaScript
const Accounts.getAccounts(opts)
```



## CampaignsApi


#### [Create Campaign](https://developers.klaviyo.com/en/v2023-08-15/reference/create_campaign)

```JavaScript
const Campaigns.createCampaign(body)
```




#### [Create Campaign Clone](https://developers.klaviyo.com/en/v2023-08-15/reference/create_campaign_clone)

```JavaScript
const Campaigns.createCampaignClone(body)
```




#### [Assign Campaign Message Template](https://developers.klaviyo.com/en/v2023-08-15/reference/create_campaign_message_assign_template)

```JavaScript
const Campaigns.createCampaignMessageAssignTemplate(body)
```




#### [Create Campaign Recipient Estimation Job](https://developers.klaviyo.com/en/v2023-08-15/reference/create_campaign_recipient_estimation_job)

```JavaScript
const Campaigns.createCampaignRecipientEstimationJob(body)
```




#### [Create Campaign Send Job](https://developers.klaviyo.com/en/v2023-08-15/reference/create_campaign_send_job)

```JavaScript
const Campaigns.createCampaignSendJob(body)
```




#### [Delete Campaign](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_campaign)

```JavaScript
const Campaigns.deleteCampaign(id)
```




#### [Get Campaign](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign)

```JavaScript
const Campaigns.getCampaign(id, opts)
```




#### [Get Campaign Campaign Messages](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_campaign_messages)

```JavaScript
const Campaigns.getCampaignCampaignMessages(id, opts)
```




#### [Get Campaign Message](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_message)

```JavaScript
const Campaigns.getCampaignMessage(id, opts)
```




#### [Get Campaign Message Campaign](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_message_campaign)

```JavaScript
const Campaigns.getCampaignMessageCampaign(id, opts)
```




#### [Get Campaign Message Relationships Campaign](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_message_relationships_campaign)

```JavaScript
const Campaigns.getCampaignMessageRelationshipsCampaign(id)
```




#### [Get Campaign Message Relationships Template](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_message_relationships_template)

```JavaScript
const Campaigns.getCampaignMessageRelationshipsTemplate(id)
```




#### [Get Campaign Message Template](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_message_template)

```JavaScript
const Campaigns.getCampaignMessageTemplate(id, opts)
```




#### [Get Campaign Recipient Estimation](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_recipient_estimation)

```JavaScript
const Campaigns.getCampaignRecipientEstimation(id, opts)
```




#### [Get Campaign Recipient Estimation Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_recipient_estimation_job)

```JavaScript
const Campaigns.getCampaignRecipientEstimationJob(id, opts)
```




#### [Get Campaign Relationships Campaign Messages](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_relationships_campaign_messages)

```JavaScript
const Campaigns.getCampaignRelationshipsCampaignMessages(id)
```




#### [Get Campaign Relationships Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_relationships_tags)

```JavaScript
const Campaigns.getCampaignRelationshipsTags(id)
```




#### [Get Campaign Send Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_send_job)

```JavaScript
const Campaigns.getCampaignSendJob(id, opts)
```




#### [Get Campaign Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaign_tags)

```JavaScript
const Campaigns.getCampaignTags(id, opts)
```




#### [Get Campaigns](https://developers.klaviyo.com/en/v2023-08-15/reference/get_campaigns)

```JavaScript
const Campaigns.getCampaigns(filter, opts)
```




#### [Update Campaign](https://developers.klaviyo.com/en/v2023-08-15/reference/update_campaign)

```JavaScript
const Campaigns.updateCampaign(body, id)
```




#### [Update Campaign Message](https://developers.klaviyo.com/en/v2023-08-15/reference/update_campaign_message)

```JavaScript
const Campaigns.updateCampaignMessage(body, id)
```




#### [Update Campaign Send Job](https://developers.klaviyo.com/en/v2023-08-15/reference/update_campaign_send_job)

```JavaScript
const Campaigns.updateCampaignSendJob(body, id)
```



## CatalogsApi


#### [Create Back In Stock Subscription](https://developers.klaviyo.com/en/v2023-08-15/reference/create_back_in_stock_subscription)

```JavaScript
const Catalogs.createBackInStockSubscription(body)
```




#### [Create Catalog Category](https://developers.klaviyo.com/en/v2023-08-15/reference/create_catalog_category)

```JavaScript
const Catalogs.createCatalogCategory(body)
```




#### [Create Catalog Category Relationships Items](https://developers.klaviyo.com/en/v2023-08-15/reference/create_catalog_category_relationships_items)

```JavaScript
const Catalogs.createCatalogCategoryRelationshipsItems(body, id)
```




#### [Create Catalog Item](https://developers.klaviyo.com/en/v2023-08-15/reference/create_catalog_item)

```JavaScript
const Catalogs.createCatalogItem(body)
```




#### [Create Catalog Item Relationships Categories](https://developers.klaviyo.com/en/v2023-08-15/reference/create_catalog_item_relationships_categories)

```JavaScript
const Catalogs.createCatalogItemRelationshipsCategories(body, id)
```




#### [Create Catalog Variant](https://developers.klaviyo.com/en/v2023-08-15/reference/create_catalog_variant)

```JavaScript
const Catalogs.createCatalogVariant(body)
```




#### [Delete Catalog Category](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_catalog_category)

```JavaScript
const Catalogs.deleteCatalogCategory(id)
```




#### [Delete Catalog Category Relationships Items](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_catalog_category_relationships_items)

```JavaScript
const Catalogs.deleteCatalogCategoryRelationshipsItems(body, id)
```




#### [Delete Catalog Item](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_catalog_item)

```JavaScript
const Catalogs.deleteCatalogItem(id)
```




#### [Delete Catalog Item Relationships Categories](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_catalog_item_relationships_categories)

```JavaScript
const Catalogs.deleteCatalogItemRelationshipsCategories(body, id)
```




#### [Delete Catalog Variant](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_catalog_variant)

```JavaScript
const Catalogs.deleteCatalogVariant(id)
```




#### [Get Catalog Categories](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_categories)

```JavaScript
const Catalogs.getCatalogCategories(opts)
```




#### [Get Catalog Category](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_category)

```JavaScript
const Catalogs.getCatalogCategory(id, opts)
```




#### [Get Catalog Category Items](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_category_items)

```JavaScript
const Catalogs.getCatalogCategoryItems(id, opts)
```




#### [Get Catalog Category Relationships Items](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_category_relationships_items)

```JavaScript
const Catalogs.getCatalogCategoryRelationshipsItems(id, opts)
```




#### [Get Catalog Item](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_item)

```JavaScript
const Catalogs.getCatalogItem(id, opts)
```




#### [Get Catalog Item Categories](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_item_categories)

```JavaScript
const Catalogs.getCatalogItemCategories(id, opts)
```




#### [Get Catalog Item Relationships Categories](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_item_relationships_categories)

```JavaScript
const Catalogs.getCatalogItemRelationshipsCategories(id, opts)
```




#### [Get Catalog Item Variants](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_item_variants)

```JavaScript
const Catalogs.getCatalogItemVariants(id, opts)
```




#### [Get Catalog Items](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_items)

```JavaScript
const Catalogs.getCatalogItems(opts)
```




#### [Get Catalog Variant](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_variant)

```JavaScript
const Catalogs.getCatalogVariant(id, opts)
```




#### [Get Catalog Variants](https://developers.klaviyo.com/en/v2023-08-15/reference/get_catalog_variants)

```JavaScript
const Catalogs.getCatalogVariants(opts)
```




#### [Get Create Categories Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_create_categories_job)

```JavaScript
const Catalogs.getCreateCategoriesJob(jobId, opts)
```




#### [Get Create Categories Jobs](https://developers.klaviyo.com/en/v2023-08-15/reference/get_create_categories_jobs)

```JavaScript
const Catalogs.getCreateCategoriesJobs(opts)
```




#### [Get Create Items Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_create_items_job)

```JavaScript
const Catalogs.getCreateItemsJob(jobId, opts)
```




#### [Get Create Items Jobs](https://developers.klaviyo.com/en/v2023-08-15/reference/get_create_items_jobs)

```JavaScript
const Catalogs.getCreateItemsJobs(opts)
```




#### [Get Create Variants Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_create_variants_job)

```JavaScript
const Catalogs.getCreateVariantsJob(jobId, opts)
```




#### [Get Create Variants Jobs](https://developers.klaviyo.com/en/v2023-08-15/reference/get_create_variants_jobs)

```JavaScript
const Catalogs.getCreateVariantsJobs(opts)
```




#### [Get Delete Categories Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_delete_categories_job)

```JavaScript
const Catalogs.getDeleteCategoriesJob(jobId, opts)
```




#### [Get Delete Categories Jobs](https://developers.klaviyo.com/en/v2023-08-15/reference/get_delete_categories_jobs)

```JavaScript
const Catalogs.getDeleteCategoriesJobs(opts)
```




#### [Get Delete Items Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_delete_items_job)

```JavaScript
const Catalogs.getDeleteItemsJob(jobId, opts)
```




#### [Get Delete Items Jobs](https://developers.klaviyo.com/en/v2023-08-15/reference/get_delete_items_jobs)

```JavaScript
const Catalogs.getDeleteItemsJobs(opts)
```




#### [Get Delete Variants Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_delete_variants_job)

```JavaScript
const Catalogs.getDeleteVariantsJob(jobId, opts)
```




#### [Get Delete Variants Jobs](https://developers.klaviyo.com/en/v2023-08-15/reference/get_delete_variants_jobs)

```JavaScript
const Catalogs.getDeleteVariantsJobs(opts)
```




#### [Get Update Categories Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_update_categories_job)

```JavaScript
const Catalogs.getUpdateCategoriesJob(jobId, opts)
```




#### [Get Update Categories Jobs](https://developers.klaviyo.com/en/v2023-08-15/reference/get_update_categories_jobs)

```JavaScript
const Catalogs.getUpdateCategoriesJobs(opts)
```




#### [Get Update Items Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_update_items_job)

```JavaScript
const Catalogs.getUpdateItemsJob(jobId, opts)
```




#### [Get Update Items Jobs](https://developers.klaviyo.com/en/v2023-08-15/reference/get_update_items_jobs)

```JavaScript
const Catalogs.getUpdateItemsJobs(opts)
```




#### [Get Update Variants Job](https://developers.klaviyo.com/en/v2023-08-15/reference/get_update_variants_job)

```JavaScript
const Catalogs.getUpdateVariantsJob(jobId, opts)
```




#### [Get Update Variants Jobs](https://developers.klaviyo.com/en/v2023-08-15/reference/get_update_variants_jobs)

```JavaScript
const Catalogs.getUpdateVariantsJobs(opts)
```




#### [Spawn Create Categories Job](https://developers.klaviyo.com/en/v2023-08-15/reference/spawn_create_categories_job)

```JavaScript
const Catalogs.spawnCreateCategoriesJob(body)
```




#### [Spawn Create Items Job](https://developers.klaviyo.com/en/v2023-08-15/reference/spawn_create_items_job)

```JavaScript
const Catalogs.spawnCreateItemsJob(body)
```




#### [Spawn Create Variants Job](https://developers.klaviyo.com/en/v2023-08-15/reference/spawn_create_variants_job)

```JavaScript
const Catalogs.spawnCreateVariantsJob(body)
```




#### [Spawn Delete Categories Job](https://developers.klaviyo.com/en/v2023-08-15/reference/spawn_delete_categories_job)

```JavaScript
const Catalogs.spawnDeleteCategoriesJob(body)
```




#### [Spawn Delete Items Job](https://developers.klaviyo.com/en/v2023-08-15/reference/spawn_delete_items_job)

```JavaScript
const Catalogs.spawnDeleteItemsJob(body)
```




#### [Spawn Delete Variants Job](https://developers.klaviyo.com/en/v2023-08-15/reference/spawn_delete_variants_job)

```JavaScript
const Catalogs.spawnDeleteVariantsJob(body)
```




#### [Spawn Update Categories Job](https://developers.klaviyo.com/en/v2023-08-15/reference/spawn_update_categories_job)

```JavaScript
const Catalogs.spawnUpdateCategoriesJob(body)
```




#### [Spawn Update Items Job](https://developers.klaviyo.com/en/v2023-08-15/reference/spawn_update_items_job)

```JavaScript
const Catalogs.spawnUpdateItemsJob(body)
```




#### [Spawn Update Variants Job](https://developers.klaviyo.com/en/v2023-08-15/reference/spawn_update_variants_job)

```JavaScript
const Catalogs.spawnUpdateVariantsJob(body)
```




#### [Update Catalog Category](https://developers.klaviyo.com/en/v2023-08-15/reference/update_catalog_category)

```JavaScript
const Catalogs.updateCatalogCategory(body, id)
```




#### [Update Catalog Category Relationships Items](https://developers.klaviyo.com/en/v2023-08-15/reference/update_catalog_category_relationships_items)

```JavaScript
const Catalogs.updateCatalogCategoryRelationshipsItems(body, id)
```




#### [Update Catalog Item](https://developers.klaviyo.com/en/v2023-08-15/reference/update_catalog_item)

```JavaScript
const Catalogs.updateCatalogItem(body, id)
```




#### [Update Catalog Item Relationships Categories](https://developers.klaviyo.com/en/v2023-08-15/reference/update_catalog_item_relationships_categories)

```JavaScript
const Catalogs.updateCatalogItemRelationshipsCategories(body, id)
```




#### [Update Catalog Variant](https://developers.klaviyo.com/en/v2023-08-15/reference/update_catalog_variant)

```JavaScript
const Catalogs.updateCatalogVariant(body, id)
```



## DataPrivacyApi


#### [Request Profile Deletion](https://developers.klaviyo.com/en/v2023-08-15/reference/request_profile_deletion)

```JavaScript
const DataPrivacy.requestProfileDeletion(body)
```



## EventsApi


#### [Create Event](https://developers.klaviyo.com/en/v2023-08-15/reference/create_event)

```JavaScript
const Events.createEvent(body)
```




#### [Get Event](https://developers.klaviyo.com/en/v2023-08-15/reference/get_event)

```JavaScript
const Events.getEvent(id, opts)
```




#### [Get Event Metric](https://developers.klaviyo.com/en/v2023-08-15/reference/get_event_metric)

```JavaScript
const Events.getEventMetric(id, opts)
```




#### [Get Event Profile](https://developers.klaviyo.com/en/v2023-08-15/reference/get_event_profile)

```JavaScript
const Events.getEventProfile(id, opts)
```




#### [Get Event Relationships Metric](https://developers.klaviyo.com/en/v2023-08-15/reference/get_event_relationships_metric)

```JavaScript
const Events.getEventRelationshipsMetric(id)
```




#### [Get Event Relationships Profile](https://developers.klaviyo.com/en/v2023-08-15/reference/get_event_relationships_profile)

```JavaScript
const Events.getEventRelationshipsProfile(id)
```




#### [Get Events](https://developers.klaviyo.com/en/v2023-08-15/reference/get_events)

```JavaScript
const Events.getEvents(opts)
```



## FlowsApi


#### [Get Flow](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow)

```JavaScript
const Flows.getFlow(id, opts)
```




#### [Get Flow Action](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_action)

```JavaScript
const Flows.getFlowAction(id, opts)
```




#### [Get Flow For Flow Action](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_action_flow)

```JavaScript
const Flows.getFlowActionFlow(id, opts)
```




#### [Get Flow Action Messages](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_action_messages)

```JavaScript
const Flows.getFlowActionMessages(id, opts)
```




#### [Get Flow Action Relationships Flow](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_action_relationships_flow)

```JavaScript
const Flows.getFlowActionRelationshipsFlow(id)
```




#### [Get Flow Action Relationships Messages](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_action_relationships_messages)

```JavaScript
const Flows.getFlowActionRelationshipsMessages(id, opts)
```




#### [Get Flow Flow Actions](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_flow_actions)

```JavaScript
const Flows.getFlowFlowActions(id, opts)
```




#### [Get Flow Message](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_message)

```JavaScript
const Flows.getFlowMessage(id, opts)
```




#### [Get Flow Action For Message](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_message_action)

```JavaScript
const Flows.getFlowMessageAction(id, opts)
```




#### [Get Flow Message Relationships Action](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_message_relationships_action)

```JavaScript
const Flows.getFlowMessageRelationshipsAction(id)
```




#### [Get Flow Message Relationships Template](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_message_relationships_template)

```JavaScript
const Flows.getFlowMessageRelationshipsTemplate(id)
```




#### [Get Flow Message Template](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_message_template)

```JavaScript
const Flows.getFlowMessageTemplate(id, opts)
```




#### [Get Flow Relationships Flow Actions](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_relationships_flow_actions)

```JavaScript
const Flows.getFlowRelationshipsFlowActions(id, opts)
```




#### [Get Flow Relationships Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_relationships_tags)

```JavaScript
const Flows.getFlowRelationshipsTags(id)
```




#### [Get Flow Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flow_tags)

```JavaScript
const Flows.getFlowTags(id, opts)
```




#### [Get Flows](https://developers.klaviyo.com/en/v2023-08-15/reference/get_flows)

```JavaScript
const Flows.getFlows(opts)
```




#### [Update Flow Status](https://developers.klaviyo.com/en/v2023-08-15/reference/update_flow)

```JavaScript
const Flows.updateFlow(body, id)
```



## ListsApi


#### [Create List](https://developers.klaviyo.com/en/v2023-08-15/reference/create_list)

```JavaScript
const Lists.createList(body)
```




#### [Add Profile To List](https://developers.klaviyo.com/en/v2023-08-15/reference/create_list_relationships)

```JavaScript
const Lists.createListRelationships(body, id)
```




#### [Delete List](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_list)

```JavaScript
const Lists.deleteList(id)
```




#### [Remove Profile From List](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_list_relationships)

```JavaScript
const Lists.deleteListRelationships(body, id)
```




#### [Get List](https://developers.klaviyo.com/en/v2023-08-15/reference/get_list)

```JavaScript
const Lists.getList(id, opts)
```




#### [Get List Profiles](https://developers.klaviyo.com/en/v2023-08-15/reference/get_list_profiles)

```JavaScript
const Lists.getListProfiles(id, opts)
```




#### [Get List Relationships Profiles](https://developers.klaviyo.com/en/v2023-08-15/reference/get_list_relationships_profiles)

```JavaScript
const Lists.getListRelationshipsProfiles(id, opts)
```




#### [Get List Relationships Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_list_relationships_tags)

```JavaScript
const Lists.getListRelationshipsTags(id)
```




#### [Get List Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_list_tags)

```JavaScript
const Lists.getListTags(id, opts)
```




#### [Get Lists](https://developers.klaviyo.com/en/v2023-08-15/reference/get_lists)

```JavaScript
const Lists.getLists(opts)
```




#### [Update List](https://developers.klaviyo.com/en/v2023-08-15/reference/update_list)

```JavaScript
const Lists.updateList(body, id)
```



## MetricsApi


#### [Get Metric](https://developers.klaviyo.com/en/v2023-08-15/reference/get_metric)

```JavaScript
const Metrics.getMetric(id, opts)
```




#### [Get Metrics](https://developers.klaviyo.com/en/v2023-08-15/reference/get_metrics)

```JavaScript
const Metrics.getMetrics(opts)
```




#### [Query Metric Aggregates](https://developers.klaviyo.com/en/v2023-08-15/reference/query_metric_aggregates)

```JavaScript
const Metrics.queryMetricAggregates(body)
```



## ProfilesApi


#### [Create Profile](https://developers.klaviyo.com/en/v2023-08-15/reference/create_profile)

```JavaScript
const Profiles.createProfile(body)
```




#### [Create or Update Push Token](https://developers.klaviyo.com/en/v2023-08-15/reference/create_push_token)

```JavaScript
const Profiles.createPushToken(body)
```




#### [Get Profile](https://developers.klaviyo.com/en/v2023-08-15/reference/get_profile)

```JavaScript
const Profiles.getProfile(id, opts)
```




#### [Get Profile Lists](https://developers.klaviyo.com/en/v2023-08-15/reference/get_profile_lists)

```JavaScript
const Profiles.getProfileLists(id, opts)
```




#### [Get Profile Relationships Lists](https://developers.klaviyo.com/en/v2023-08-15/reference/get_profile_relationships_lists)

```JavaScript
const Profiles.getProfileRelationshipsLists(id)
```




#### [Get Profile Relationships Segments](https://developers.klaviyo.com/en/v2023-08-15/reference/get_profile_relationships_segments)

```JavaScript
const Profiles.getProfileRelationshipsSegments(id)
```




#### [Get Profile Segments](https://developers.klaviyo.com/en/v2023-08-15/reference/get_profile_segments)

```JavaScript
const Profiles.getProfileSegments(id, opts)
```




#### [Get Profiles](https://developers.klaviyo.com/en/v2023-08-15/reference/get_profiles)

```JavaScript
const Profiles.getProfiles(opts)
```




#### [Subscribe Profiles](https://developers.klaviyo.com/en/v2023-08-15/reference/subscribe_profiles)

```JavaScript
const Profiles.subscribeProfiles(body)
```




#### [Suppress Profiles](https://developers.klaviyo.com/en/v2023-08-15/reference/suppress_profiles)

```JavaScript
const Profiles.suppressProfiles(body)
```




#### [Unsubscribe Profiles](https://developers.klaviyo.com/en/v2023-08-15/reference/unsubscribe_profiles)

```JavaScript
const Profiles.unsubscribeProfiles(body)
```




#### [Unsuppress Profiles](https://developers.klaviyo.com/en/v2023-08-15/reference/unsuppress_profiles)

```JavaScript
const Profiles.unsuppressProfiles(body)
```




#### [Update Profile](https://developers.klaviyo.com/en/v2023-08-15/reference/update_profile)

```JavaScript
const Profiles.updateProfile(body, id)
```



## SegmentsApi


#### [Get Segment](https://developers.klaviyo.com/en/v2023-08-15/reference/get_segment)

```JavaScript
const Segments.getSegment(id, opts)
```




#### [Get Segment Profiles](https://developers.klaviyo.com/en/v2023-08-15/reference/get_segment_profiles)

```JavaScript
const Segments.getSegmentProfiles(id, opts)
```




#### [Get Segment Relationships Profiles](https://developers.klaviyo.com/en/v2023-08-15/reference/get_segment_relationships_profiles)

```JavaScript
const Segments.getSegmentRelationshipsProfiles(id, opts)
```




#### [Get Segment Relationships Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_segment_relationships_tags)

```JavaScript
const Segments.getSegmentRelationshipsTags(id)
```




#### [Get Segment Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_segment_tags)

```JavaScript
const Segments.getSegmentTags(id, opts)
```




#### [Get Segments](https://developers.klaviyo.com/en/v2023-08-15/reference/get_segments)

```JavaScript
const Segments.getSegments(opts)
```




#### [Update Segment](https://developers.klaviyo.com/en/v2023-08-15/reference/update_segment)

```JavaScript
const Segments.updateSegment(body, id)
```



## TagsApi


#### [Create Tag](https://developers.klaviyo.com/en/v2023-08-15/reference/create_tag)

```JavaScript
const Tags.createTag(body)
```




#### [Create Tag Group](https://developers.klaviyo.com/en/v2023-08-15/reference/create_tag_group)

```JavaScript
const Tags.createTagGroup(body)
```




#### [Create Tag Relationships Campaigns](https://developers.klaviyo.com/en/v2023-08-15/reference/create_tag_relationships_campaigns)

```JavaScript
const Tags.createTagRelationshipsCampaigns(body, id)
```




#### [Create Tag Relationships Flows](https://developers.klaviyo.com/en/v2023-08-15/reference/create_tag_relationships_flows)

```JavaScript
const Tags.createTagRelationshipsFlows(body, id)
```




#### [Create Tag Relationships Lists](https://developers.klaviyo.com/en/v2023-08-15/reference/create_tag_relationships_lists)

```JavaScript
const Tags.createTagRelationshipsLists(body, id)
```




#### [Create Tag Relationships Segments](https://developers.klaviyo.com/en/v2023-08-15/reference/create_tag_relationships_segments)

```JavaScript
const Tags.createTagRelationshipsSegments(body, id)
```




#### [Delete Tag](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_tag)

```JavaScript
const Tags.deleteTag(id)
```




#### [Delete Tag Group](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_tag_group)

```JavaScript
const Tags.deleteTagGroup(id)
```




#### [Delete Tag Relationships Campaigns](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_tag_relationships_campaigns)

```JavaScript
const Tags.deleteTagRelationshipsCampaigns(body, id)
```




#### [Delete Tag Relationships Flows](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_tag_relationships_flows)

```JavaScript
const Tags.deleteTagRelationshipsFlows(body, id)
```




#### [Delete Tag Relationships Lists](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_tag_relationships_lists)

```JavaScript
const Tags.deleteTagRelationshipsLists(body, id)
```




#### [Delete Tag Relationships Segments](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_tag_relationships_segments)

```JavaScript
const Tags.deleteTagRelationshipsSegments(body, id)
```




#### [Get Tag](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag)

```JavaScript
const Tags.getTag(id, opts)
```




#### [Get Tag Group](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_group)

```JavaScript
const Tags.getTagGroup(id, opts)
```




#### [Get Tag Group Relationships Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_group_relationships_tags)

```JavaScript
const Tags.getTagGroupRelationshipsTags(id)
```




#### [Get Tag Group Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_group_tags)

```JavaScript
const Tags.getTagGroupTags(id, opts)
```




#### [Get Tag Groups](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_groups)

```JavaScript
const Tags.getTagGroups(opts)
```




#### [Get Tag Relationships Campaigns](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_relationships_campaigns)

```JavaScript
const Tags.getTagRelationshipsCampaigns(id)
```




#### [Get Tag Relationships Flows](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_relationships_flows)

```JavaScript
const Tags.getTagRelationshipsFlows(id)
```




#### [Get Tag Relationships Lists](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_relationships_lists)

```JavaScript
const Tags.getTagRelationshipsLists(id)
```




#### [Get Tag Relationships Segments](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_relationships_segments)

```JavaScript
const Tags.getTagRelationshipsSegments(id)
```




#### [Get Tag Relationships Tag Group](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_relationships_tag_group)

```JavaScript
const Tags.getTagRelationshipsTagGroup(id)
```




#### [Get Tag Tag Group](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tag_tag_group)

```JavaScript
const Tags.getTagTagGroup(id, opts)
```




#### [Get Tags](https://developers.klaviyo.com/en/v2023-08-15/reference/get_tags)

```JavaScript
const Tags.getTags(opts)
```




#### [Update Tag](https://developers.klaviyo.com/en/v2023-08-15/reference/update_tag)

```JavaScript
const Tags.updateTag(body, id)
```




#### [Update Tag Group](https://developers.klaviyo.com/en/v2023-08-15/reference/update_tag_group)

```JavaScript
const Tags.updateTagGroup(body, id)
```



## TemplatesApi


#### [Create Template](https://developers.klaviyo.com/en/v2023-08-15/reference/create_template)

```JavaScript
const Templates.createTemplate(body)
```




#### [Create Template Clone](https://developers.klaviyo.com/en/v2023-08-15/reference/create_template_clone)

```JavaScript
const Templates.createTemplateClone(body)
```




#### [Create Template Render](https://developers.klaviyo.com/en/v2023-08-15/reference/create_template_render)

```JavaScript
const Templates.createTemplateRender(body)
```




#### [Delete Template](https://developers.klaviyo.com/en/v2023-08-15/reference/delete_template)

```JavaScript
const Templates.deleteTemplate(id)
```




#### [Get Template](https://developers.klaviyo.com/en/v2023-08-15/reference/get_template)

```JavaScript
const Templates.getTemplate(id, opts)
```




#### [Get Templates](https://developers.klaviyo.com/en/v2023-08-15/reference/get_templates)

```JavaScript
const Templates.getTemplates(opts)
```




#### [Update Template](https://developers.klaviyo.com/en/v2023-08-15/reference/update_template)

```JavaScript
const Templates.updateTemplate(body, id)
```



# Appendix

## Limitations

- The `api_key` is set at the global level: this means that if you manage multiple stores, you will need to run the code for each store in a different environment

## Refresher on catching exceptions:

```JavaScript

try {
    await YOUR_CALL
} catch (e) {
    print(e.status, e.body, e.headers)
}
```

## Namespace

In the interest of making the SDK follow conventions, we made the following namespace changes *relative* to the language agnostic resources up top.

1. dashes `-` are removed in favor of camelCase
2. all other non-alphanumeric symbols, including spaces, are removed.

For example:
* `get-campaigns` becomes `getCampaigns`
* `Track & Identify` becomes `TrackIdentify`

## Parameters & Arguments

The parameters follow the same naming conventions as the resource groups and operations.

We stick to the following convention for parameters/arguments

1. All parameters are passed as function args.
2. All optional params, as well as all Body and Form Data params (including required ones), are passed in a single object param.
3. All query and path params that are tagged as `required` in the docs are passed as positional args.
4. There is no need to pass in your private `api_key` for any operations, as it is defined upon ConfigWrapper instantiation; public key is still required where its used.