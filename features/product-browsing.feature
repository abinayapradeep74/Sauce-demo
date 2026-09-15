Feature: Product browsing
  @smoke @regression
  Scenario Outline: Complete purchase with valid customer details
    Given I am on the Sauce Demo login page
    When I enter valid customer credentials
    And I click the login button
    Then I should be successfully logged in
    When I select the "Sauce Labs Backpack" product
    Then I should see the product details page
    When I add the product to the cart
    Then the cart should contain 1 item
    When I click the shopping cart
    Then I should see the "Sauce Labs Backpack" product in the cart
    When I click the checkout button
    When I enter the checkout first name "<firstName>"
    And I enter the checkout last name "<lastName>"
    And I enter the checkout postal code "<postalCode>"
    And I click the continue button
    Then I should see the checkout overview page
    When I click the finish button
    Then I should see the order confirmation
    When I open the menu
    And I click logout
    Then I should see the login page
    Examples:
    | firstName | lastName | postalCode |
    | Abinaya   | Pradeep  | PE1 1AA    |
    | Test      | User     | M1 1AA     |