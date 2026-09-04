Feature: User authentication

  Background:
    Given I open the authentication page

  Scenario: User logs in
    When I log in with email "user@example.com" and password "secret123"
    Then I should see the authentication message "Welcome, user@example.com"

  Scenario: User registers
    When I register with name "Anna", email "anna@example.com" and password "secret123"
    Then I should see the authentication message "Account created for Anna"
