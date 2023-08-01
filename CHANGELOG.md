# Changelog
All notable changes to this project will be documented in this file.

## [5.0.0-beta.1] - revision 2023-07-15
### Added
 - Types - This is a complete rework of our node sdk to add native type support in package
 - ConfigWrapper is now optional
   - Pass your api key and optional retry data directly into API objects `new campaignsApi("<YOUR API KEY HERE>")`
 - Optional `Klaviyo` scope 
   - Instead of accessing items apis like `new campaignsApi()` you can also use `new Klaviyo.campaignsApi()` to keep your application organized.