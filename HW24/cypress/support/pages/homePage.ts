import { baseUrl } from "../constants/constants";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    constructor() {
        super();

        this.url = baseUrl;
    }
   
    
}