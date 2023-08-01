import process from "process";

import {
  ProfileCreateQuery,
  ProfileEnum,
  ProfilesApi,
} from '../api'

namespace NodeJS {
  interface ProcessEnv {
    PK: string;
  }
}


let privateKey: string

if (process.env.PK) {
  privateKey = process.env.PK
} else {
  console.log("No private key passed via --pk=")
  process.exit(1)
}

const profilesApi = new ProfilesApi(privateKey)

let profile: ProfileCreateQuery = {
  data: {
    type: ProfileEnum.Profile,
    attributes: {
      email: "typescript_test_12@klaviyo-demo.com"
    }
  }
}


profilesApi.createProfile(profile).then(result => {
  console.log(result.body)
}).catch(error => {
  console.log(error)
});
