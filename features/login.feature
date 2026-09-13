Feature: Customer login

  As a customer
  I want to log in to the Sauce Demo store
  So that I can access my account and shop for products

  Scenario: Login with valid customer credentials
    Given I am on the Sauce Demo login page
    When I enter valid customer credentials
    And I click the login button
    Then I should be successfully logged in