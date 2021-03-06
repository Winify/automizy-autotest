@Login
Feature: Logging in to Automizy

  As a customer,
  In order to access the software,
  I want to log in to the application

  Scenario: Logging in as an authorized customer
    Given the user is on the login page
    When she logs in
    Then she should have access to the application

  Scenario: Logging out from the application
    Given the user is logged in
    When she logs out
    Then she should see the login page