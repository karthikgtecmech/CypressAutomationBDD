Feature: End to End Ecommerce validation

    Application Regression

    @Regression
    Scenario: Ecommerce products delivery
        Given I Open Ecommerce Page
        When I add items to the Cart
        And Validate the total prices
        Then Select the Country Submit and verify Thank You

    @Smoke
    Scenario: Filling the form to shop
        Given I Open Ecommerce Page
        When I will fill the form details
            | Name | Gender |
            | Kar  | Male   |
        Then Validate the form behaviour
        And Select the shop page