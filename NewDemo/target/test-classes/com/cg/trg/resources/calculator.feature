#Author: SWARUP TALUKDAR


Feature: CALCULATOR

Scenario Outline: Add
    Given entered two numbers <num1> and <num2>
    When added two numbers <sum>
    Then show the add result <result>

    Examples: 
      | num1  | num2 |sum |result|
      | 2     | 2    |4   |4     |
      | 5     | 6    |11  |11    |
      | 7     | 2    |9   |9     |

Scenario Outline: Subtract two numbers
    Given entered two numbers <num1> and <num2>
    When subtracted two numbers <sub>
    Then show the sub result <result>

    Examples: 
      | num1  | num2 |sub |result|
      | 2     | 2    |0   |0     |
      | 6     | 5    |1   |1     | 
      | 7     | 2    |5   |5     |
    
Scenario Outline: Multiply
 		Given entered two numbers <num1> and <num2>
    When multiplied two numbers <prod>
    Then show the prod result <result>

    Examples: 
      | num1  | num2 |prod|result|
      | 2     | 2    |4   |4     |
      | 5     | 6    |30  |30    |
      | 7     | 2    |14  |14    |
    
 Scenario Outline: Divide
 		Given entered two numbers <num1> and <num2>
    When divided two numbers <div>
    Then show the div result <result>

    Examples: 
      | num1  | num2 |div |result|
      | 2     | 2    |0   |0     |
      | 5     | 6    |0    |0    |
      | 7     | 2    |3   |3     |
