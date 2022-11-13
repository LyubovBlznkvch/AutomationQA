@navigation
Feature: Onliner.by Home Page navigation 
    Background: 
    Given the User opens web page https://www.onliner.by/

    @buttonTextVerify
    Scenario Outline: Verify the button <Name> inner text contains <Text>
    Then the User sees that the text of button <Index> contains <Text>
    Examples:
    | Text            | Index |
    | Каталог         | 1     |
    | Новости         | 2     |
    | Автобарахолка   | 3     |
    | Дома и квартиры | 4     |
    | Услуги          | 5     |
    | Барахолка       | 6     |
    | Форум           | 7     |

    @enterInvalidPasswordOnTargetPage
    Scenario: Verify redirection to sign-in form and sing in with invalid password
    When the User clicks on sign-in button
    Then the User sees opened sign-in form
    When the User signs in with valid login and invalid password of 10 symbols 
    Then the User sees password error massage
    
