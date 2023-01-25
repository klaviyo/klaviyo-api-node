# Changelog
All notable changes to this project will be documented in this file.

## [2.0.0] - revision 2023-01-24

- Added the following endpoints (which were previously in our Beta API/SDKs):
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