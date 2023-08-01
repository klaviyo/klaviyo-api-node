# Contributing 

### SDK creation process

This repo is created by a two-step process: first, an OpenAPI Specification (OAS) is generated from the Klaviyo API source code. 
You can check out the raw OAS on [GitHub](https://github.com/klaviyo/openapi/blob/main/openapi/stable.json).
Then a modified version of the OpenAPI-Generator typescript node generator is used to create the SDK itself.
This process allows us to have an SDK release ready the same day as new endpoints are added.

### What this means for contributing

Due to the SDK being generated, we won't merge new code without updating the generator.
However, feel free to make a pr against our code, while we won't merge your pull request as is, it's still very helpful for correcting the generator, as we can merge your changes upstream into our private generator. 
Some changes will take longer than others to fix, depending on whether the issues are caused by a bug in the SDK generator or in the generated OAS itself.

You can also report bugs by opening an issue in this GitHub repo.

Lastly, if you have any feedback that you would like to share outside of a public forum, feel free to use our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLSckdxPXezeY6SludpOGpJ2nNZU280tEnSwuRnEyx0XNS02zdA/viewform). 

### Testing

Our unit tests are set up to hit a specific test account and are not included in this repo,
but if you want to test anything without a consuming app there is an included `sample.ts` file.
You can build the project and then execute the contents of the file with `npm run sample --pk=<your private key here>`