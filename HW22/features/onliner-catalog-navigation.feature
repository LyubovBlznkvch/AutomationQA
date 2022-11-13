@catalog_navigation 
Feature: Onliner.by Catalog Page navigation

Background:
Given the User opens web page https://catalog.onliner.by/

@isSectionOnTargetPageSelected
Scenario: Redirection on target page and selection of section
When the User clicks on section button
Then the User sees the section is selected
Then the User sees Каталог Onlíner as the page title

