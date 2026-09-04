import { expect, type Locator, type Page } from '@playwright/test';

export class TodoPage {
  readonly heading: Locator;
  readonly newTaskInput: Locator;
  readonly addButton: Locator;
  readonly taskList: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'My tasks' });
    this.newTaskInput = page.getByLabel('New task');
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.taskList = page.getByRole('list', { name: 'Task list' });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async addTask(title: string): Promise<void> {
    await this.newTaskInput.fill(title);
    await this.addButton.click();
  }

  task(title: string): Locator {
    return this.taskList.getByRole('listitem').filter({ hasText: title });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async expectTaskVisible(title: string): Promise<void> {
    await expect(this.task(title)).toBeVisible();
  }

  async expectTaskCount(count: number): Promise<void> {
    await expect(this.taskList.getByRole('listitem')).toHaveCount(count);
  }
}
