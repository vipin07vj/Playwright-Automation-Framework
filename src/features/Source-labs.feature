@smoke
Feature: Sauce Labs Product Checkout Functionality

  Scenario: Verify able to login with invalid credentails
    Given  I login with invalid "standard_user1" and "secret_sauce"


  Scenario: Add single product in cart and successfully checkout
    Given I login with valid "standard_user" and "secret_sauce"
    Then I add products in cart
    Then I click on checkout in your cart page
    Then I proceed to Checkout: Your Information
    Then I Finsh my request in Checkout: Overview

  Scenario: Add multiple products in cart and successfully checkout
    Given  I login with valid "standard_user" and "secret_sauce"
    Then I add multiple products in cart
    Then I click on checkout in your cart page
    Then I proceed to Checkout: Your Information
    Then I Finsh my request in Checkout: Overview

  Scenario: Add product in cart and cancelling the checkout
    Given  I login with valid "standard_user" and "secret_sauce"
    Then I add products in cart
    Then I click on checkout in your cart page
    Then I proceed to Checkout: Your Information
    Then I Finsh my request in Checkout: Overview

  Scenario: Remove product in cart
    Given  I login with valid "standard_user" and "secret_sauce"
    Then I add products in cart
    Then I click on remove button to remove the products

  Scenario: Sort products A–Z and complete the checkout
    Given  I login with valid "standard_user" and "secret_sauce"
    Then I sort products by A-Z
    Then I add products in cart
    Then I click on checkout in your cart page
    Then I proceed to Checkout: Your Information
    Then I Finsh my request in Checkout: Overview

  Scenario: Sort products Z–A and complete the checkout
    Given  I login with valid "standard_user" and "secret_sauce"
    When I sort products by Z-A
    Then I add products in cart
    Then I click on checkout in your cart page
    Then I proceed to Checkout: Your Information
    Then I Finsh my request in Checkout: Overview

  Scenario: Sort products by price low to high and complete the checkout
    Given  I login with valid "standard_user" and "secret_sauce"
    Then I sort products by Price low to high
    Then I add products in cart
    Then I click on checkout in your cart page
    Then I proceed to Checkout: Your Information
    Then I Finsh my request in Checkout: Overview

  Scenario: Sort products by price high to low and complete the checkout
    Given  I login with valid "standard_user" and "secret_sauce"
    When I sort products by Price high to low
    Then I add products in cart
    Then I click on checkout in your cart page
    Then I proceed to Checkout: Your Information
    Then I Finsh my request in Checkout: Overview

  Scenario: Add multiple products to cart and remove in cart
    Given  I login with valid "standard_user" and "secret_sauce"
    Then I add multiple products in cart
    Then I click on remove button to remove the product from multiple products

  Scenario: Remove product in product page
    Given  I login with valid "standard_user" and "secret_sauce"
    Then I add products in cart and remove it from there
