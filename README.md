# Klaviyo JavaScript SDK

- SDK version: 2.1.0

- Revision: 2023-02-22

## Helpful Resources

- [API Reference](https://developers.klaviyo.com/en/reference/)
- [API Guides](https://developers.klaviyo.com/en/docs)
- [Postman Workspace](https://www.postman.com/klaviyo/workspace/klaviyo-developers)

## Design & Approach

This SDK is a thin wrapper around our API. See our API Reference for full documentation on API behavior.

This SDK exactly mirrors the organization and naming convention of the above language-agnostic resources, with a few namespace changes to make it Pythonic (details in Appendix).

## Organization

This SDK is organized into the following resources:

 - Campaigns
 - Catalogs
 - Client
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

# Usage Example

### To instantiate the ConfigWrapper

```JavaScript
import {ConfigWrapper} from 'klaviyo-api'

ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE")
```
Or if ES6 isn't your thing
```JavaScript
var KlaviyoSdk = require('klaviyo-api');

KlaviyoSdk.ConfigWrapper("KLAVIYO PRIVATE KEY GOES HERE")
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

NOTE:
* The SDK retries on resolvable errors, namely: rate limits (common) and server errors on klaviyo (rare).

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

### Optional Parameters

Different endpoint include specific optional parameters. Here is a few examples how to use these and what they look like

more often than not the info that can go into the `opts` param are the optional headers.
These are formatted in js a bit different from the docs, headers names have variables that make bad names like
page[cursor] are transformed to `pageCursor`. (Remove the weird characters and append words with camelCase)

```javascript
const opts = {
    pageCursor: "page_cursor", // page[cursor]
    fieldsList: ["list", "of", "wanted", "attributes"] // fields[list]
    include: ["resource_to_include"] // include
}
```


#### Cursor based Pagination

Obtain the cursor value from the call you want to get the next page for, then pass it under the `pageCursor` optional parameter

```javascript
// page cursor looks like 'WzE2NDA5OTUyMDAsICIzYzRjeXdGTndadyIsIHRydWVd'
// next.link returns the entire url of the next call but the sdk will accept the entire link and use only the relevant cursor

const response = await Profiles.getProfiles();
const opts = {pageCursor: response.body.links.next}
const response2 = await Profiles.getProfiles(opts);
```

#### Filtering

Filter by passing the filter as a string as under the optional parameter `filter`

Read more about formatting your filter strings in our developer documentation

```javascript
const filter = 'any(email,["henry.chan@klaviyo-demo.com","amanda.das@klaviyo-demo.com"])'

const response1 = await Profiles.getProfiles({filter}); // the same as {filter: filter}
```

#### Sparse Fields

The SDK expands the optional sparse fields into their own option, where you can pass a list of the desired items to include

```javascript
const fieldsProfile = ["email"]
const fieldsList = ["name"]

await Profiles.getProfile(PROFILE_ID, {
    fieldsProfile,
    fieldsList
});
```

### Includes

Includes you can pass a similar way, just add the values you want to include as a list

```javascript
const include = ["lists","segments"]

await Profiles.getProfile(PROFILE_ID, {
    include,
});
```


# Comprehensive list of Operations & Parameters

_**NOTE:**_
- Organization: Resource groups and operation_ids are listed in alphabetical order, first by Resource name, then by **OpenAPI Summary**. Operation summaries are those listed in the right side bar of the [API Reference](https://developers.klaviyo.com/en/reference/track-post).
- For example values / data types, as well as whether parameters are required/optional, please reference the corresponding API Reference link.
- Some keyword args are required for the API call to succeed, the API docs above are the source of truth regarding which keyword params are required.



## CampaignsApi


#### [Create Campaign](https://developers.klaviyo.com/en/v2023-02-22/reference/create_campaign)

```JavaScript
const Campaigns.createCampaign(body)
```




#### [Create Campaign Clone](https://developers.klaviyo.com/en/v2023-02-22/reference/create_campaign_clone)

```JavaScript
const Campaigns.createCampaignClone(body)
```




#### [Create Campaign Message Assign Template](https://developers.klaviyo.com/en/v2023-02-22/reference/create_campaign_message_assign_template)

```JavaScript
const Campaigns.createCampaignMessageAssignTemplate(body)
```




#### [Create Campaign Recipient Estimation Job](https://developers.klaviyo.com/en/v2023-02-22/reference/create_campaign_recipient_estimation_job)

```JavaScript
const Campaigns.createCampaignRecipientEstimationJob(body)
```




#### [Create Campaign Send Job](https://developers.klaviyo.com/en/v2023-02-22/reference/create_campaign_send_job)

```JavaScript
const Campaigns.createCampaignSendJob(body)
```




#### [Delete Campaign](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_campaign)

```JavaScript
const Campaigns.deleteCampaign(id)
```




#### [Get Campaign](https://developers.klaviyo.com/en/v2023-02-22/reference/get_campaign)

```JavaScript
const Campaigns.getCampaign(id, opts)
```




#### [Get Campaign Message](https://developers.klaviyo.com/en/v2023-02-22/reference/get_campaign_message)

```JavaScript
const Campaigns.getCampaignMessage(id, opts)
```




#### [Get Campaign Recipient Estimation](https://developers.klaviyo.com/en/v2023-02-22/reference/get_campaign_recipient_estimation)

```JavaScript
const Campaigns.getCampaignRecipientEstimation(id, opts)
```




#### [Get Campaign Recipient Estimation Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_campaign_recipient_estimation_job)

```JavaScript
const Campaigns.getCampaignRecipientEstimationJob(id, opts)
```




#### [Get Campaign Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_campaign_relationships)

```JavaScript
const Campaigns.getCampaignRelationships(id, relatedResource)
```




#### [Get Campaign Send Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_campaign_send_job)

```JavaScript
const Campaigns.getCampaignSendJob(id, opts)
```




#### [Get Campaign Tags](https://developers.klaviyo.com/en/v2023-02-22/reference/get_campaign_tags)

```JavaScript
const Campaigns.getCampaignTags(campaignId, opts)
```




#### [Get Campaigns](https://developers.klaviyo.com/en/v2023-02-22/reference/get_campaigns)

```JavaScript
const Campaigns.getCampaigns(opts)
```




#### [Update Campaign](https://developers.klaviyo.com/en/v2023-02-22/reference/update_campaign)

```JavaScript
const Campaigns.updateCampaign(body, id)
```




#### [Update Campaign Message](https://developers.klaviyo.com/en/v2023-02-22/reference/update_campaign_message)

```JavaScript
const Campaigns.updateCampaignMessage(body, id)
```




#### [Update Campaign Send Job](https://developers.klaviyo.com/en/v2023-02-22/reference/update_campaign_send_job)

```JavaScript
const Campaigns.updateCampaignSendJob(body, id)
```



## CatalogsApi


#### [Create Catalog Category](https://developers.klaviyo.com/en/v2023-02-22/reference/create_catalog_category)

```JavaScript
const Catalogs.createCatalogCategory(body)
```




#### [Create Catalog Category Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/create_catalog_category_relationships)

```JavaScript
const Catalogs.createCatalogCategoryRelationships(body, id, relatedResource)
```




#### [Create Catalog Item](https://developers.klaviyo.com/en/v2023-02-22/reference/create_catalog_item)

```JavaScript
const Catalogs.createCatalogItem(body)
```




#### [Create Catalog Item Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/create_catalog_item_relationships)

```JavaScript
const Catalogs.createCatalogItemRelationships(body, id, relatedResource)
```




#### [Create Catalog Variant](https://developers.klaviyo.com/en/v2023-02-22/reference/create_catalog_variant)

```JavaScript
const Catalogs.createCatalogVariant(body)
```




#### [Delete Catalog Category](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_catalog_category)

```JavaScript
const Catalogs.deleteCatalogCategory(id)
```




#### [Delete Catalog Category Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_catalog_category_relationships)

```JavaScript
const Catalogs.deleteCatalogCategoryRelationships(body, id, relatedResource)
```




#### [Delete Catalog Item](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_catalog_item)

```JavaScript
const Catalogs.deleteCatalogItem(id)
```




#### [Delete Catalog Item Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_catalog_item_relationships)

```JavaScript
const Catalogs.deleteCatalogItemRelationships(body, id, relatedResource)
```




#### [Delete Catalog Variant](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_catalog_variant)

```JavaScript
const Catalogs.deleteCatalogVariant(id)
```




#### [Get Catalog Categories](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_categories)

```JavaScript
const Catalogs.getCatalogCategories(opts)
```




#### [Get Catalog Category](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_category)

```JavaScript
const Catalogs.getCatalogCategory(id, opts)
```




#### [Get Catalog Category Items](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_category_items)

```JavaScript
const Catalogs.getCatalogCategoryItems(categoryId, opts)
```




#### [Get Catalog Category Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_category_relationships)

```JavaScript
const Catalogs.getCatalogCategoryRelationships(id, relatedResource, opts)
```




#### [Get Catalog Item](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_item)

```JavaScript
const Catalogs.getCatalogItem(id, opts)
```




#### [Get Catalog Item Categories](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_item_categories)

```JavaScript
const Catalogs.getCatalogItemCategories(itemId, opts)
```




#### [Get Catalog Item Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_item_relationships)

```JavaScript
const Catalogs.getCatalogItemRelationships(id, relatedResource, opts)
```




#### [Get Catalog Item Variants](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_item_variants)

```JavaScript
const Catalogs.getCatalogItemVariants(itemId, opts)
```




#### [Get Catalog Items](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_items)

```JavaScript
const Catalogs.getCatalogItems(opts)
```




#### [Get Catalog Variant](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_variant)

```JavaScript
const Catalogs.getCatalogVariant(id, opts)
```




#### [Get Catalog Variants](https://developers.klaviyo.com/en/v2023-02-22/reference/get_catalog_variants)

```JavaScript
const Catalogs.getCatalogVariants(opts)
```




#### [Get Create Categories Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_create_categories_job)

```JavaScript
const Catalogs.getCreateCategoriesJob(jobId, opts)
```




#### [Get Create Categories Jobs](https://developers.klaviyo.com/en/v2023-02-22/reference/get_create_categories_jobs)

```JavaScript
const Catalogs.getCreateCategoriesJobs(opts)
```




#### [Get Create Items Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_create_items_job)

```JavaScript
const Catalogs.getCreateItemsJob(jobId, opts)
```




#### [Get Create Items Jobs](https://developers.klaviyo.com/en/v2023-02-22/reference/get_create_items_jobs)

```JavaScript
const Catalogs.getCreateItemsJobs(opts)
```




#### [Get Create Variants Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_create_variants_job)

```JavaScript
const Catalogs.getCreateVariantsJob(jobId, opts)
```




#### [Get Create Variants Jobs](https://developers.klaviyo.com/en/v2023-02-22/reference/get_create_variants_jobs)

```JavaScript
const Catalogs.getCreateVariantsJobs(opts)
```




#### [Get Delete Categories Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_delete_categories_job)

```JavaScript
const Catalogs.getDeleteCategoriesJob(jobId, opts)
```




#### [Get Delete Categories Jobs](https://developers.klaviyo.com/en/v2023-02-22/reference/get_delete_categories_jobs)

```JavaScript
const Catalogs.getDeleteCategoriesJobs(opts)
```




#### [Get Delete Items Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_delete_items_job)

```JavaScript
const Catalogs.getDeleteItemsJob(jobId, opts)
```




#### [Get Delete Items Jobs](https://developers.klaviyo.com/en/v2023-02-22/reference/get_delete_items_jobs)

```JavaScript
const Catalogs.getDeleteItemsJobs(opts)
```




#### [Get Delete Variants Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_delete_variants_job)

```JavaScript
const Catalogs.getDeleteVariantsJob(jobId, opts)
```




#### [Get Delete Variants Jobs](https://developers.klaviyo.com/en/v2023-02-22/reference/get_delete_variants_jobs)

```JavaScript
const Catalogs.getDeleteVariantsJobs(opts)
```




#### [Get Update Categories Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_update_categories_job)

```JavaScript
const Catalogs.getUpdateCategoriesJob(jobId, opts)
```




#### [Get Update Categories Jobs](https://developers.klaviyo.com/en/v2023-02-22/reference/get_update_categories_jobs)

```JavaScript
const Catalogs.getUpdateCategoriesJobs(opts)
```




#### [Get Update Items Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_update_items_job)

```JavaScript
const Catalogs.getUpdateItemsJob(jobId, opts)
```




#### [Get Update Items Jobs](https://developers.klaviyo.com/en/v2023-02-22/reference/get_update_items_jobs)

```JavaScript
const Catalogs.getUpdateItemsJobs(opts)
```




#### [Get Update Variants Job](https://developers.klaviyo.com/en/v2023-02-22/reference/get_update_variants_job)

```JavaScript
const Catalogs.getUpdateVariantsJob(jobId, opts)
```




#### [Get Update Variants Jobs](https://developers.klaviyo.com/en/v2023-02-22/reference/get_update_variants_jobs)

```JavaScript
const Catalogs.getUpdateVariantsJobs(opts)
```




#### [Spawn Create Categories Job](https://developers.klaviyo.com/en/v2023-02-22/reference/spawn_create_categories_job)

```JavaScript
const Catalogs.spawnCreateCategoriesJob(body)
```




#### [Spawn Create Items Job](https://developers.klaviyo.com/en/v2023-02-22/reference/spawn_create_items_job)

```JavaScript
const Catalogs.spawnCreateItemsJob(body)
```




#### [Spawn Create Variants Job](https://developers.klaviyo.com/en/v2023-02-22/reference/spawn_create_variants_job)

```JavaScript
const Catalogs.spawnCreateVariantsJob(body)
```




#### [Spawn Delete Categories Job](https://developers.klaviyo.com/en/v2023-02-22/reference/spawn_delete_categories_job)

```JavaScript
const Catalogs.spawnDeleteCategoriesJob(body)
```




#### [Spawn Delete Items Job](https://developers.klaviyo.com/en/v2023-02-22/reference/spawn_delete_items_job)

```JavaScript
const Catalogs.spawnDeleteItemsJob(body)
```




#### [Spawn Delete Variants Job](https://developers.klaviyo.com/en/v2023-02-22/reference/spawn_delete_variants_job)

```JavaScript
const Catalogs.spawnDeleteVariantsJob(body)
```




#### [Spawn Update Categories Job](https://developers.klaviyo.com/en/v2023-02-22/reference/spawn_update_categories_job)

```JavaScript
const Catalogs.spawnUpdateCategoriesJob(body)
```




#### [Spawn Update Items Job](https://developers.klaviyo.com/en/v2023-02-22/reference/spawn_update_items_job)

```JavaScript
const Catalogs.spawnUpdateItemsJob(body)
```




#### [Spawn Update Variants Job](https://developers.klaviyo.com/en/v2023-02-22/reference/spawn_update_variants_job)

```JavaScript
const Catalogs.spawnUpdateVariantsJob(body)
```




#### [Update Catalog Category](https://developers.klaviyo.com/en/v2023-02-22/reference/update_catalog_category)

```JavaScript
const Catalogs.updateCatalogCategory(body, id)
```




#### [Update Catalog Category Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/update_catalog_category_relationships)

```JavaScript
const Catalogs.updateCatalogCategoryRelationships(body, id, relatedResource)
```




#### [Update Catalog Item](https://developers.klaviyo.com/en/v2023-02-22/reference/update_catalog_item)

```JavaScript
const Catalogs.updateCatalogItem(body, id)
```




#### [Update Catalog Item Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/update_catalog_item_relationships)

```JavaScript
const Catalogs.updateCatalogItemRelationships(body, id, relatedResource)
```




#### [Update Catalog Variant](https://developers.klaviyo.com/en/v2023-02-22/reference/update_catalog_variant)

```JavaScript
const Catalogs.updateCatalogVariant(body, id)
```



## ClientApi


#### [Create Client Event](https://developers.klaviyo.com/en/v2023-02-22/reference/create_client_event)

```JavaScript
const Client.createClientEvent(body, companyId)
```




#### [Create or Update Client Profile](https://developers.klaviyo.com/en/v2023-02-22/reference/create_client_profile)

```JavaScript
const Client.createClientProfile(body, companyId)
```




#### [Create Client Subscription](https://developers.klaviyo.com/en/v2023-02-22/reference/create_client_subscription)

```JavaScript
const Client.createClientSubscription(body, companyId)
```



## DataPrivacyApi


#### [Request Profile Deletion](https://developers.klaviyo.com/en/v2023-02-22/reference/request_profile_deletion)

```JavaScript
const DataPrivacy.requestProfileDeletion(body)
```



## EventsApi


#### [Create Event](https://developers.klaviyo.com/en/v2023-02-22/reference/create_event)

```JavaScript
const Events.createEvent(body)
```




#### [Get Event](https://developers.klaviyo.com/en/v2023-02-22/reference/get_event)

```JavaScript
const Events.getEvent(id, opts)
```




#### [Get Event Metrics](https://developers.klaviyo.com/en/v2023-02-22/reference/get_event_metrics)

```JavaScript
const Events.getEventMetrics(id, opts)
```




#### [Get Event Profiles](https://developers.klaviyo.com/en/v2023-02-22/reference/get_event_profiles)

```JavaScript
const Events.getEventProfiles(id, opts)
```




#### [Get Event Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_event_relationships)

```JavaScript
const Events.getEventRelationships(id, relatedResource)
```




#### [Get Events](https://developers.klaviyo.com/en/v2023-02-22/reference/get_events)

```JavaScript
const Events.getEvents(opts)
```



## FlowsApi


#### [Get Flow](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow)

```JavaScript
const Flows.getFlow(id, opts)
```




#### [Get Flow Action](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_action)

```JavaScript
const Flows.getFlowAction(id, opts)
```




#### [Get Flow For Flow Action](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_action_flow)

```JavaScript
const Flows.getFlowActionFlow(actionId, opts)
```




#### [Get Messages For Flow Action](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_action_messages)

```JavaScript
const Flows.getFlowActionMessages(actionId, opts)
```




#### [Get Flow Action Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_action_relationships)

```JavaScript
const Flows.getFlowActionRelationships(id, relatedResource, opts)
```




#### [Get Flow Actions For Flow](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_flow_actions)

```JavaScript
const Flows.getFlowFlowActions(flowId, opts)
```




#### [Get Flow Message](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_message)

```JavaScript
const Flows.getFlowMessage(id, opts)
```




#### [Get Flow Action For Message](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_message_action)

```JavaScript
const Flows.getFlowMessageAction(messageId, opts)
```




#### [Get Flow Message Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_message_relationships)

```JavaScript
const Flows.getFlowMessageRelationships(id, relatedResource)
```




#### [Get Flow Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_relationships)

```JavaScript
const Flows.getFlowRelationships(id, relatedResource)
```




#### [Get Flow Tags](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flow_tags)

```JavaScript
const Flows.getFlowTags(flowId, opts)
```




#### [Get Flows](https://developers.klaviyo.com/en/v2023-02-22/reference/get_flows)

```JavaScript
const Flows.getFlows(opts)
```




#### [Update Flow Status](https://developers.klaviyo.com/en/v2023-02-22/reference/update_flow)

```JavaScript
const Flows.updateFlow(body, id)
```



## ListsApi


#### [Create List](https://developers.klaviyo.com/en/v2023-02-22/reference/create_list)

```JavaScript
const Lists.createList(body)
```




#### [Add Profile to List](https://developers.klaviyo.com/en/v2023-02-22/reference/create_list_relationships)

```JavaScript
const Lists.createListRelationships(body, id, relatedResource)
```




#### [Delete List](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_list)

```JavaScript
const Lists.deleteList(id)
```




#### [Remove Profile from List](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_list_relationships)

```JavaScript
const Lists.deleteListRelationships(body, id, relatedResource)
```




#### [Get List](https://developers.klaviyo.com/en/v2023-02-22/reference/get_list)

```JavaScript
const Lists.getList(id, opts)
```




#### [Get List Profiles](https://developers.klaviyo.com/en/v2023-02-22/reference/get_list_profiles)

```JavaScript
const Lists.getListProfiles(listId, opts)
```




#### [Get List Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_list_relationships)

```JavaScript
const Lists.getListRelationships(id, relatedResource, opts)
```




#### [Get List Tags](https://developers.klaviyo.com/en/v2023-02-22/reference/get_list_tags)

```JavaScript
const Lists.getListTags(listId, opts)
```




#### [Get Lists](https://developers.klaviyo.com/en/v2023-02-22/reference/get_lists)

```JavaScript
const Lists.getLists(opts)
```




#### [Update List](https://developers.klaviyo.com/en/v2023-02-22/reference/update_list)

```JavaScript
const Lists.updateList(body, id)
```



## MetricsApi


#### [Get Metric](https://developers.klaviyo.com/en/v2023-02-22/reference/get_metric)

```JavaScript
const Metrics.getMetric(id, opts)
```




#### [Get Metrics](https://developers.klaviyo.com/en/v2023-02-22/reference/get_metrics)

```JavaScript
const Metrics.getMetrics(opts)
```




#### [Query Metric Aggregates](https://developers.klaviyo.com/en/v2023-02-22/reference/query_metric_aggregates)

```JavaScript
const Metrics.queryMetricAggregates(body)
```



## ProfilesApi


#### [Create Profile](https://developers.klaviyo.com/en/v2023-02-22/reference/create_profile)

```JavaScript
const Profiles.createProfile(body)
```




#### [Get Profile](https://developers.klaviyo.com/en/v2023-02-22/reference/get_profile)

```JavaScript
const Profiles.getProfile(id, opts)
```




#### [Get Profile Lists](https://developers.klaviyo.com/en/v2023-02-22/reference/get_profile_lists)

```JavaScript
const Profiles.getProfileLists(profileId, opts)
```




#### [Get Profile Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_profile_relationships)

```JavaScript
const Profiles.getProfileRelationships(id, relatedResource)
```




#### [Get Profile Segments](https://developers.klaviyo.com/en/v2023-02-22/reference/get_profile_segments)

```JavaScript
const Profiles.getProfileSegments(profileId, opts)
```




#### [Get Profiles](https://developers.klaviyo.com/en/v2023-02-22/reference/get_profiles)

```JavaScript
const Profiles.getProfiles(opts)
```




#### [Subscribe Profiles](https://developers.klaviyo.com/en/v2023-02-22/reference/subscribe_profiles)

```JavaScript
const Profiles.subscribeProfiles(body)
```




#### [Suppress Profiles](https://developers.klaviyo.com/en/v2023-02-22/reference/suppress_profiles)

```JavaScript
const Profiles.suppressProfiles(body)
```




#### [Unsubscribe Profiles](https://developers.klaviyo.com/en/v2023-02-22/reference/unsubscribe_profiles)

```JavaScript
const Profiles.unsubscribeProfiles(body)
```




#### [Unsuppress Profiles](https://developers.klaviyo.com/en/v2023-02-22/reference/unsuppress_profiles)

```JavaScript
const Profiles.unsuppressProfiles(body)
```




#### [Update Profile](https://developers.klaviyo.com/en/v2023-02-22/reference/update_profile)

```JavaScript
const Profiles.updateProfile(body, id)
```



## SegmentsApi


#### [Get Segment](https://developers.klaviyo.com/en/v2023-02-22/reference/get_segment)

```JavaScript
const Segments.getSegment(id, opts)
```




#### [Get Segment Profiles](https://developers.klaviyo.com/en/v2023-02-22/reference/get_segment_profiles)

```JavaScript
const Segments.getSegmentProfiles(segmentId, opts)
```




#### [Get Segment Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_segment_relationships)

```JavaScript
const Segments.getSegmentRelationships(id, relatedResource, opts)
```




#### [Get Segment Tags](https://developers.klaviyo.com/en/v2023-02-22/reference/get_segment_tags)

```JavaScript
const Segments.getSegmentTags(segmentId, opts)
```




#### [Get Segments](https://developers.klaviyo.com/en/v2023-02-22/reference/get_segments)

```JavaScript
const Segments.getSegments(opts)
```




#### [Update Segment](https://developers.klaviyo.com/en/v2023-02-22/reference/update_segment)

```JavaScript
const Segments.updateSegment(body, id)
```



## TagsApi


#### [Create Tag](https://developers.klaviyo.com/en/v2023-02-22/reference/create_tag)

```JavaScript
const Tags.createTag(body)
```




#### [Create Tag Group](https://developers.klaviyo.com/en/v2023-02-22/reference/create_tag_group)

```JavaScript
const Tags.createTagGroup(body)
```




#### [Create Tag Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/create_tag_relationships)

```JavaScript
const Tags.createTagRelationships(body, id, relatedResource)
```




#### [Delete Tag](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_tag)

```JavaScript
const Tags.deleteTag(id)
```




#### [Delete Tag Group](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_tag_group)

```JavaScript
const Tags.deleteTagGroup(id)
```




#### [Delete Tag Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_tag_relationships)

```JavaScript
const Tags.deleteTagRelationships(body, id, relatedResource)
```




#### [Get Tag](https://developers.klaviyo.com/en/v2023-02-22/reference/get_tag)

```JavaScript
const Tags.getTag(id, opts)
```




#### [Get Tag Group](https://developers.klaviyo.com/en/v2023-02-22/reference/get_tag_group)

```JavaScript
const Tags.getTagGroup(id, opts)
```




#### [Get Tag Group Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_tag_group_relationships)

```JavaScript
const Tags.getTagGroupRelationships(id, relatedResource)
```




#### [Get Tag Group Tags](https://developers.klaviyo.com/en/v2023-02-22/reference/get_tag_group_tags)

```JavaScript
const Tags.getTagGroupTags(id, opts)
```




#### [Get Tag Groups](https://developers.klaviyo.com/en/v2023-02-22/reference/get_tag_groups)

```JavaScript
const Tags.getTagGroups(opts)
```




#### [Get Tag Relationships](https://developers.klaviyo.com/en/v2023-02-22/reference/get_tag_relationships)

```JavaScript
const Tags.getTagRelationships(id, relatedResource)
```




#### [Get Tag Tag Group](https://developers.klaviyo.com/en/v2023-02-22/reference/get_tag_tag_group)

```JavaScript
const Tags.getTagTagGroup(id, opts)
```




#### [Get Tags](https://developers.klaviyo.com/en/v2023-02-22/reference/get_tags)

```JavaScript
const Tags.getTags(opts)
```




#### [Update Tag](https://developers.klaviyo.com/en/v2023-02-22/reference/update_tag)

```JavaScript
const Tags.updateTag(body, id)
```




#### [Update Tag Group](https://developers.klaviyo.com/en/v2023-02-22/reference/update_tag_group)

```JavaScript
const Tags.updateTagGroup(body, id)
```



## TemplatesApi


#### [Create Template](https://developers.klaviyo.com/en/v2023-02-22/reference/create_template)

```JavaScript
const Templates.createTemplate(body)
```




#### [Create Template Clone](https://developers.klaviyo.com/en/v2023-02-22/reference/create_template_clone)

```JavaScript
const Templates.createTemplateClone(body)
```




#### [Create Template Render](https://developers.klaviyo.com/en/v2023-02-22/reference/create_template_render)

```JavaScript
const Templates.createTemplateRender(body)
```




#### [Delete Template](https://developers.klaviyo.com/en/v2023-02-22/reference/delete_template)

```JavaScript
const Templates.deleteTemplate(id)
```




#### [Get Template](https://developers.klaviyo.com/en/v2023-02-22/reference/get_template)

```JavaScript
const Templates.getTemplate(id, opts)
```




#### [Get Templates](https://developers.klaviyo.com/en/v2023-02-22/reference/get_templates)

```JavaScript
const Templates.getTemplates(opts)
```




#### [Update Template](https://developers.klaviyo.com/en/v2023-02-22/reference/update_template)

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