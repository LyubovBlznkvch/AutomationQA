import { HomePage } from "./homePage";
import { Page } from "@playwright/test";
import { baseURL } from "../utils/constants";


export class AdminprocPage extends HomePage {

    constructor(page: Page) {
        super(page);
        
        this.url= `${baseURL}today/adminproc`
    };

};