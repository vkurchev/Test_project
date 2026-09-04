@api
Feature: Users API

  Scenario: Get an existing user
    When I request user with id 1
    Then the API response status should be 200
    And the response should contain user name "Ada Lovelace"
