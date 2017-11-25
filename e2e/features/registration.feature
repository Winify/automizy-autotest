@Registration
Feature: Registration for Automizy

  As a potential customer,
  In order to use the software,
  I want to register on the web application

  Scenario: Signing up on the Login page
    Given the user is on the web page
    And the user navigates to the login page
    When he creates an account with a new email
    Then he should see the registration form

  Scenario: Free Trial on the homepage
    Given the user is on the web page
    When he wants to see the trial version
    And he signs up on the free trial
    Then he should see the registration form

  Scenario: Getting started on the homepage
    Given the user is on the web page
    When he applies for a trial with an email
    Then he should see the registration form

  @Slow
  Scenario: Registering on the application
    Given the user is on the web page
    When he applies for a trial with an email
    And he registers an account
    Then he should have access to the application
