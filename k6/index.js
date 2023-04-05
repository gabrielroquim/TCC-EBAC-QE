import GetCustomer from "./requests/Get-Customer.js";
import { group, sleep } from "k6";


export default function() {
    group('GETCUSTOMER - Controller Customer',() =>{
        GetCustomer();
        sleep(1);
    });

  

}