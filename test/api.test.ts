import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import {
  AccountsApi,
  ApiKeySession,
  CampaignDefinition,
  CampaignCreateQueryResourceObjectAttributes,
  OAuthBasicSession,
  OmniCampaignResponseObjectResourceAttributes,
  SendSettings,
  ObjectSerializer,
  RetryWithExponentialBackoff,
} from "../api";
import axios, { AxiosError } from "axios";

jest.mock("axios", () => jest.fn());
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockIsAxiosError = (payload: any): payload is AxiosError => {
  return jest.requireActual<typeof axios>("axios").isAxiosError(payload);
};

Object.defineProperty(axios, "isAxiosError", {
  value: mockIsAxiosError,
  configurable: true,
  writable: true,
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("retry", () => {
  test("tests that no retry happens ", async () => {
    mockedAxios.mockRejectedValue({
      isAxiosError: true,
      response: {
        status: 401,
      },
    });
    const session = new OAuthBasicSession(
      "fake-key",
      new RetryWithExponentialBackoff({ numRetries: 2 })
    );
    const accountsApi = new AccountsApi(session);
    try {
      await accountsApi.getAccount("fake_id");
    } catch (e) {
      expect(mockedAxios).toHaveBeenCalledTimes(1);
    }
  });

  test("tests that retry happens 2 times", async () => {
    mockedAxios.mockRejectedValue({
      isAxiosError: true,
      response: {
        status: 429,
      },
    });
    const session = new OAuthBasicSession(
      "fake-key",
      new RetryWithExponentialBackoff({ numRetries: 2 })
    );
    const accountsApi = new AccountsApi(session);
    try {
      await accountsApi.getAccount("fake_id");
    } catch (e) {
      expect(mockedAxios).toHaveBeenCalledTimes(2);
    }
  });

  test("tests that retry happens 3 times by default", async () => {
    mockedAxios.mockRejectedValue({
      isAxiosError: true,
      response: {
        status: 429,
      },
    });

    const accountsApi = new AccountsApi(new ApiKeySession("fake-key"));
    try {
      await accountsApi.getAccount("fake_id");
    } catch (e) {
      expect(mockedAxios).toHaveBeenCalledTimes(3);
    }
  });
});

describe("Serialize", () => {
  test("an oneOf item serializes correctly", async () => {
    let campaign: CampaignCreateQueryResourceObjectAttributes = {
      definition: { name: "Campaign" },
      audiences: [{ temporaryId: "audience_1", included: ["TEST_ID"] }],
      messages: [
        {
          audienceTemporaryId: "audience_1",
          variations: [
            {
              definition: {
                name: "labelxyz",
                details: {
                  channel: "email",
                  subject: "Hello",
                  fromEmail: "foo.bar@example.com",
                  fromLabel: "Foo Bar",
                },
              },
            },
          ],
        },
      ],
    };
    const serialized = ObjectSerializer.serialize(
      campaign,
      "CampaignCreateQueryResourceObjectAttributes"
    );
    expect(serialized).toEqual({
      definition: { name: "Campaign" },
      audiences: [{ temporary_id: "audience_1", included: ["TEST_ID"] }],
      messages: [
        {
          audience_temporary_id: "audience_1",
          variations: [
            {
              definition: {
                name: "labelxyz",
                details: {
                  channel: "email",
                  subject: "Hello",
                  from_email: "foo.bar@example.com",
                  from_label: "Foo Bar",
                },
              },
            },
          ],
        },
      ],
    });
  });
});

describe("deserialize", () => {
  test("an oneOf item deserializes correctly", async () => {
    const serialized = {
      definition: {
        name: "Email",
        archived: false,
        send_settings: {
          send_timezone: "local",
          send_strategy: "static",
          send_passed_rltz_immediately: false,
        },
      },
      created_at: "2024-05-22T19:14:32.047339+00:00",
      updated_at: "2024-05-22T19:14:32.140795+00:00",
    };
    const deserialize: OmniCampaignResponseObjectResourceAttributes =
      ObjectSerializer.deserialize(
        serialized,
        "OmniCampaignResponseObjectResourceAttributes"
      );
    expect(deserialize.definition).toBeInstanceOf(CampaignDefinition);
    expect(deserialize.definition.sendSettings).toBeInstanceOf(SendSettings);
    expect(deserialize.definition.sendSettings?.sendPassedRltzImmediately).toBe(false);
  });
});

describe("serializerValidateType", () => {
  const mockType = {
    getAttributeTypeMap: () => [
      { name: "name", baseName: "name", type: "string" },
      { name: "status", baseName: "status", type: "string" },
    ],
  };

  test("returns true for an object whose properties all match the type map", () => {
    expect(
      ObjectSerializer.serializerValidateType({ name: "test", status: "active" }, mockType)
    ).toBe(true);
  });

  test("returns false for an object with an unknown property", () => {
    expect(
      ObjectSerializer.serializerValidateType({ name: "test", unknownProp: "value" }, mockType)
    ).toBe(false);
  });

  test("accepts a plain object without TypeScript error (issue klaviyo/klaviyo-api-node#109)", () => {
    const data: { [key: string]: any } = { name: "test", status: "active" };
    expect(ObjectSerializer.serializerValidateType(data, mockType)).toBe(true);
  });
});
