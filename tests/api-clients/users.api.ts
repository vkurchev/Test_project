import { expect, type APIRequestContext, type APIResponse } from '@playwright/test';

type UserResponse = {
  id: number;
  name: string;
  role: string;
};

export class UsersApi {
  private response?: APIResponse;
  private responseBody?: UserResponse;

  constructor(private readonly request: APIRequestContext) {}

  async getUser(id: number): Promise<void> {
    this.response = await this.request.get(`/api/users/${id}`);
    this.responseBody = (await this.response.json()) as UserResponse;
  }

  async expectStatus(status: number): Promise<void> {
    expect(this.response, 'API request was not executed').toBeDefined();
    expect(this.response?.status()).toBe(status);
  }

  async expectUser(expected: Partial<UserResponse>): Promise<void> {
    expect(this.responseBody, 'API response body was not received').toMatchObject(expected);
  }
}
