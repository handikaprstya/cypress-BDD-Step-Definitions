Feature: Search Functionallity

    As a valid user
    I want to click search feature

    Scenario: Successful search with a valid keyword
    Given I am on the homepage 
    When I enter "Bank" in the search bar
    And I click the "Search" button
    Then I should see results related to "Bank"
    And The results page should display links and information relevant with my search

    Scenario: Search with an invalid keyword
    Given I am on the homepage
    When I enter "InvalidKeyword" in the search bar
    And I click the "Search" button
    Then I should see a message "No results found"
    And the results page should not display any links or related information

    Scenario: Search with an empty keyword
    Given I am on the homepage
    When I leave the search bar empty
    And I click the "Search" button
    Then I should see a message saying "Search Results"
    And No results should be displayed
