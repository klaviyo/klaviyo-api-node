import { describe, expect, test } from "@jest/globals";
import fs from "fs";
import path from "path";

const readme = fs.readFileSync(path.join(__dirname, "..", "README.md"), "utf8");

describe("README examples", () => {
  test("createProfile example includes the fixed email comma", () => {
    expect(readme).toContain('email: "typescript_test_1@klaviyo-demo.com",');
    expect(readme).not.toContain('email: "typescript_test_1@klaviyo-demo.com"\n    }');
  });

  test("organizational helpers code fence closes with triple backticks", () => {
    expect(readme).toContain(
      'const profilesApi = new Klaviyo.ProfilesApi(new Klaviyo.Auth.ApiKeySession("< YOUR API KEY HERE >", retry))\n```'
    );
    expect(readme).not.toContain(
      'const profilesApi = new Klaviyo.ProfilesApi(new Klaviyo.Auth.ApiKeySession("< YOUR API KEY HERE >", retry))\n````'
    );
  });

  test("image upload example consistently uses ImagesApi and closes the catch chain", () => {
    expect(readme).toContain('The `ImagesApi` exposes `uploadImageFromFile()`');
    expect(readme).toContain("import {ApiKeySession, ImagesApi } from 'klaviyo-api'");
    expect(readme).toContain('const imageApi = new ImagesApi(session)');
    expect(readme).not.toContain("import {ApiKeySession, ImageApi } from 'klaviyo-api'");
    expect(readme).not.toContain('The `ImageApi` exposes `uploadImageFromFile()`');
    expect(readme).toContain(
      'const imageApi = new ImagesApi(session)\nimageApi.uploadImageFromFile(fs.createReadStream("./test_image.jpeg")).then(result => {\n    console.log(result.body)\n}).catch(error => {\n  console.log(error)\n});'
    );
  });
});
