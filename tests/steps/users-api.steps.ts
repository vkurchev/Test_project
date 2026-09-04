import { Then, When } from '../fixtures/test.fixture';

When('I request user with id {int}', async ({ usersApi }, id: number) => {
  await usersApi.getUser(id);
});

Then('the API response status should be {int}', async ({ usersApi }, status: number) => {
  await usersApi.expectStatus(status);
});

Then('the response should contain user name {string}', async ({ usersApi }, name: string) => {
  await usersApi.expectUser({ name });
});
