Feature: Todo management

  Background:
    Given I open the todo application

  Scenario: User adds a task
    When I add the task "Run Playwright tests"
    Then the task "Run Playwright tests" should be visible
    And the task list should contain 1 item

  Scenario: Empty task is not added
    When I add the task "   "
    Then the task list should contain 0 items
