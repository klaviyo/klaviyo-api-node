# Migration

### Steps
- Swap to the new version:
  - updating your `package.json` manually to the current beta version
  - currently, there are no known breaking changes from moving from the node sdk to the TypeScript Beta sdk


### Work done to make migration easier
 - Most current imports should still work. 
   - ConfigWrapper has been recreated, is now optional, and it now works differently under the hood. However, you can still use it to set a global api key, or pass it into an API constructor
 - Optional params should all have the same names, but now they have type support, letting you know which optional params are used on which endpoints

### Known manual migration issues
 - We will update this list with any know difference between the current node repo and this beta one.