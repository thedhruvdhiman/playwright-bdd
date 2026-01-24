Feature: Login
         
    @test
    Scenario: Check get started link
        Given I login to the application with username standard_user and password secret_sauce
        Then I am on home page
        When I should see the page title
        # Then I see in title "Installation"
