@NewContacts
Feature: Adding new contacts

  As a customer,
  In order to send mails to more people,
  I want to add them as contacts

  @Focus
  Scenario: Adding a person as a contact
    Given the user is logged in
    And he sees the complete list of contacts
    When he adds a new contact
    Then he should see the new contact profile page