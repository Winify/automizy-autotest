@NewCustomField
Feature: Adding new custom fields

  As a customer,
  In order to organize contact data individually,
  I want to create new custom fields

  Scenario: Adding a new custom field
    Given the user is logged in
    And he sees the custom fields
    When he adds a new custom field
    Then he should see the created field in the table

  Scenario: Creating a new field on the Contact Profile
    Given the user is logged in
    And she sees the complete list of contacts
    And she selects an active contact
    When she adds a new field to the contact
    Then she should see it added to the profile
