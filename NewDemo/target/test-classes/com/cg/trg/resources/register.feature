#Author: Swarup Talukdar
Feature: Register
For registered user navigate to main page

Scenario: Registered Successfully
Given I entered user and pass
And I entered mobile and email             
Then User should be registered successfully
