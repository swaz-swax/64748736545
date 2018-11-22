#Author: Swarup Talukdar
Feature: User Login 
For valid username and password navigate to main page


Background: Background Successful
Given entered userb and passb
When valid userb and passb
Then executed in background 

Scenario: User Login Successful
Given entered user and pass
When valid user and pass
Then navigate to login successful page

Scenario: User Login Unsuccessful
Given entered user and pass
When invalid user and pass
Then navigate to error page

