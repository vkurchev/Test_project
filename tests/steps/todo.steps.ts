import { Given, Then, When } from '../fixtures/test.fixture';

Given('I open the todo application', async ({ todoPage }) => {
  await todoPage.open();
  await todoPage.expectLoaded();
});

When('I add the task {string}', async ({ todoPage }, title: string) => {
  await todoPage.addTask(title);
});

Then('the task {string} should be visible', async ({ todoPage }, title: string) => {
  await todoPage.expectTaskVisible(title);
});

Then('the task list should contain {int} item(s)', async ({ todoPage }, count: number) => {
  await todoPage.expectTaskCount(count);
});
