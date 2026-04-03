const fs = require('fs');
const path = require('path');

const readme = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf8');

function requireContains(text) {
  if (!readme.includes(text)) {
    console.error(`Missing expected README content: ${text}`);
    process.exit(1);
  }
}

function requireAbsent(text) {
  if (readme.includes(text)) {
    console.error(`Unexpected stale README content: ${text}`);
    process.exit(1);
  }
}

requireContains('email: "typescript_test_1@klaviyo-demo.com",');
requireAbsent('email: "typescript_test_1@klaviyo-demo.com"\n    }');

requireContains('The `ImagesApi` exposes `uploadImageFromFile()`');
requireContains("import {ApiKeySession, ImagesApi } from 'klaviyo-api'");
requireContains('const imageApi = new ImagesApi(session)');
requireAbsent("import {ApiKeySession, ImageApi } from 'klaviyo-api'");
requireAbsent('The `ImageApi` exposes `uploadImageFromFile()`');

requireContains('const imageApi = new ImagesApi(session)\nimageApi.uploadImageFromFile(fs.createReadStream("./test_image.jpeg")).then(result => {\n    console.log(result.body)\n}).catch(error => {\n  console.log(error)\n});');

requireContains('const profilesApi = new Klaviyo.ProfilesApi(new Klaviyo.Auth.ApiKeySession("< YOUR API KEY HERE >", retry))\n```');
requireAbsent('const profilesApi = new Klaviyo.ProfilesApi(new Klaviyo.Auth.ApiKeySession("< YOUR API KEY HERE >", retry))\n````');

console.log('README examples are consistent and syntactically corrected.');
