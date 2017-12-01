@NewSegment @Focus
Feature: Adding new segments

  Scenario: Creating a segment
    Given the user is logged in
    And he sees the segments
    When he creates a new segment
    And he chooses firstname as Contact field value and it Is Vince
    And he saves the segment
    Then he should see created on the page