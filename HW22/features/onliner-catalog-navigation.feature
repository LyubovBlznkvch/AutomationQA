@catalog_navigation 
Feature: Onliner.by Catalog Page navigation

Background:
Given the User opens web page https://catalog.onliner.by/

@isSectionSelected
Scenario: Selection of section
When the User click on section name 
Then the User sees the section is selected