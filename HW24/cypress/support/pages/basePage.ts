import { NavigationBar } from "./element/element";

export class BasePage {
    protected url!: string;
    public navigationBar: NavigationBar;

    constructor() {
        this.navigationBar = new NavigationBar();
     }

    public visitPage() {
        cy.visit(this.url)
    }

    public getCurrentUrl() {
        return cy.url();
    }

    public getPageTitle() {
       return cy.title();
    }

    public waitForTitleIncludeText(titleText: string) {
        this.getPageTitle().should("include", titleText)
    }
}