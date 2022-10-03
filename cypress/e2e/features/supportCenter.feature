Feature: Support Center search

    Background: 
    Given A web browser is at the support center page
    Scenario: Using valid credentials in search
        When User types the request "get started"
        Then The relevant results are displayed and the message "Search results for: get started"
    Scenario: Using invalid credentials in search
        When User types the incorrect request  "sta rt"
        Then The error message "We couldn't find any articles for" is displayed
    Scenario: Сlear search field, using cancel icon
        When User types the request "start" and clicks cancel icon
        Then The search field is empty
    Scenario: Type request into search input, clicking search icon
        When User types the request "Pricing" and clicks search icon
        Then The message "Search results for: Pricing" is displayed
    Scenario: Checking that social icon have correct links
        When User focuses at social icons
        Then The social icons have correct links on social media
