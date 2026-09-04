import { createBdd, test as base } from 'playwright-bdd';
import { UsersApi } from '../api-clients/users.api';
import { AuthPage } from '../page-objects/auth.page';
import { TodoPage } from '../page-objects/todo.page';

type Pages = {
  authPage: AuthPage;
  todoPage: TodoPage;
  usersApi: UsersApi;
};

export const test = base.extend<Pages>({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  todoPage: async ({ page }, use) => {
    await use(new TodoPage(page));
  },
  usersApi: async ({ request }, use) => {
    await use(new UsersApi(request));
  },
});

export const { Given, When, Then } = createBdd(test);
export { expect } from '@playwright/test';
