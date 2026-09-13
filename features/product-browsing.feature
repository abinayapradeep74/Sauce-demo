Feature: Product browsing

  Scenario: Select a product from the inventory
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