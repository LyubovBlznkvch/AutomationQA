import { WebDriver, until } from "selenium-webdriver";
import { baseURL } from "../utils/constants";
import { HomePage } from "./homePage";

export class AdminprocPage extends HomePage {

    constructor(driver: WebDriver) {
        super(driver);
        
        this.url= `${baseURL}today/adminproc`
    };
  
};
