@navigation
Feature: Onliner.by Home Page navigation 
    Background: 
    Given the User opens web page https://www.onliner.by/

    @buttonTextVerify
    Scenario Outline: Verify the button <Name> inner text contains <Text>
    Then the User sees that the button <Name> contains <Text>
    Examples:
    | Name            | Text            |
    | Каталог         | Каталог         |
    | Новости         | Новости         |
    | Автобарахолка   | Автобарахолка   |
    | Дома и квартиры | Дома и квартиры |
    | Услуги          | Услуги          |
    | Барахолка       | Барахолка       |
    | Форум           | Форум           |

    @enterInvalidPasswordOnTargetPage
    Scenario: Verify redirection to sign-in form and sing in with invalid password
    When the User clicks on sign-in button
    Then the User sees opened sign-in form
    When the User sign in with valid login and invalid password of 10 symbols 
    Then the User sees password error massage
    
