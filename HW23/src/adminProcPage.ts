import { HomePage } from "./homePage";
import { Page } from "@playwright/test";
import { baseUrl } from "../utils/constants";


export class AdminProcPage extends HomePage {

    constructor(page: Page) {
        super(page);
        
        this.url= `${baseUrl}today/adminproc`
    };

};
