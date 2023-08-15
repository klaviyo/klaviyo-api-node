# Changelog
All notable changes to this project will be documented in this file.

## [5.1.0-beta.1] - revision 2023-08-15
### Added
- Flow Message Templates
  - You can now retrieve the templates associated with flow messages using `flowsApi.getFlowMessageTemplate()` or `flowsApi.getFlowMessageRelationshipsTemplate()` . You’re also able to include the template HTML for a flow message using `flowsApi.getFlowMessage(FLOW_MESSAGE_ID, {include: ['template']})`. 
- Create or Update Push Tokens
  - We have added an endpoint to create push tokens, `profilesApi.createPushToken()`.  This endpoint can be used to migrate profiles and their push tokens from another platform to Klaviyo. If you’re looking to register push tokens from users’ devices, please use our mobile SDKs.


## [5.0.0-beta.1] - revision 2023-07-15
### Added
 - Types - This is a complete rework of our node sdk to add native type support in package
 - ConfigWrapper is now optional
   - Pass your api key and optional retry data directly into API objects `new campaignsApi("<YOUR API KEY HERE>")`
 - Optional `Klaviyo` scope 
   - Instead of accessing items apis like `new campaignsApi()` you can also use `new Klaviyo.campaignsApi()` to keep your application organized.