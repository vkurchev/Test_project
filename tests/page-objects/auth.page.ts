import { expect, type Locator, type Page } from '@playwright/test';

export class AuthPage {
  readonly statusMessage: Locator;

  constructor(private readonly page: Page) {
    this.statusMessage = page.getByRole('status');
  }

  async open(): Promise<void> {
    await this.page.goto('/auth.html');
  }

  async login(email: string, password: string): Promise<void> {
    await this.page.getByLabel('Login email').fill(email);
    await this.page.getByLabel('Login password').fill(password);
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }

  async register(name: string, email: string, password: string): Promise<void> {
    await this.page.getByLabel('Registration name').fill(name);
    await this.page.getByLabel('Registration email').fill(email);
    await this.page.getByLabel('Registration password').fill(password);
    await this.page.getByRole('button', { name: 'Register' }).click();
  }

  async expectStatus(message: string): Promise<void> {
    await expect(this.statusMessage).toHaveText(message);
  }
}
