#Author: SWARUP TALUKDAR
Feature: Find product
  Scenario Outline: Multiply two numbers
    Given I entered two numbers <num1> and <num2>
    When multiply two numbers <prod>
    Then show the result in <result>

    Examples: 
      | num1  | num2 | prod  | result|
      | 2     | 2    | 4     | 4     |
      | 5     | 6    | 30    | 30    |
      | 7     | 2    | 14    | 14    |
      
