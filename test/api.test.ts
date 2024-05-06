import {describe, expect, jest, test} from '@jest/globals';
import {AccountsApi, ApiKeySession, OAuthBasicSession, RetryOptions} from '../api';
import axios from 'axios';

jest.mock('axios', () => jest.fn())
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

beforeEach(() => {
  jest.resetAllMocks()
})

describe('retry', () => {

  test('tests that no retry happens ',async () => {
    mockedAxios.mockRejectedValue({status: 401})
    const session = new OAuthBasicSession('fake-key', new RetryOptions({numOfAttempts: 2}))
    const accountsApi = new AccountsApi(session)
    try {
      await accountsApi.getAccount('fake_id')
    } catch (e) {
      expect(mockedAxios).toHaveBeenCalledTimes(1)
    }
  });
  test('tests that retry happens 2 times',async () => {
    mockedAxios.mockRejectedValue({status: 429})
    const session = new OAuthBasicSession('fake-key', new RetryOptions({numOfAttempts: 2}))
    const accountsApi = new AccountsApi(session)
    try {
      await accountsApi.getAccount('fake_id')
    } catch (e) {
      expect(mockedAxios).toHaveBeenCalledTimes(2)
    }
  });
  test('tests that retry happens 3 times by default',async () => {
    mockedAxios.mockRejectedValue({status: 429})

    const accountsApi = new AccountsApi(new ApiKeySession('fake-key'))
    try {
      await accountsApi.getAccount('fake_id')
    } catch (e) {
      expect(mockedAxios).toHaveBeenCalledTimes(3)
    }
  });
});