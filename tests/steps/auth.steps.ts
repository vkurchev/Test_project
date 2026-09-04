import { Given, Then, When } from '../fixtures/test.fixture';

Given('I open the authentication page', async ({ authPage }) => {
  await authPage.open();
});

When(
  'I log in with email {string} and password {string}',
  async ({ authPage }, email: string, password: string) => {
    await authPage.login(email, password);
  },
);

When(
  'I register with name {string}, email {string} and password {string}',
  async ({ authPage }, name: string, email: string, password: string) => {
    await authPage.register(name, email, password);
  },
);

Then('I should see the authentication message {string}', async ({ authPage }, message: string) => {
  await authPage.expectStatus(message);
});
