import { check } from "k6"
import http from "k6/http"
import utils from "../utils/utils.js"

export default class Login {        
    #token

    access(user, pass) {            
        let response = http.post(`${utils.getBaseUrl()}`, JSON.stringify(     
            {
                "username": user,
                "password": pass
            }
        ), {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        this.#token = response.json('accessToken')                  
        check(response, {                                            
            "status must be equal 201": (r) => r.status === 201
        });
    }

    getToken() {                       
        return this.#token
    }
}