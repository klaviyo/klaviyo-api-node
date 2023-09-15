# Migration

### Steps
- Swap to the new version:
  - Updating your `package.json` to a version >= 6.0.0
  - If you were modifying the `ApiClient` returned from `ConfigWrapper` object manually you will need to update you code
    to use the new `Session` objects


### Work done to make migration easier
 - Most current imports should still work. 
   - `ConfigWrapper` has been recreated, is now optional, and it now works differently under the hood. However, you can still use it to set a global api key, or pass it into an API constructor
 - Optional params should all have the same names, but now they have type support, letting you know which optional params are used on which endpoints

### Known manual migration issues
 - We will update this list with any know difference between the current node repo and this beta one.