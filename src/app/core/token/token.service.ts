import { Injectable } from "@angular/core";

const AUTH_TOKEN = 'authToken'

@Injectable({ providedIn: 'root'})
export class TokenService{

constructor() {}

    hasToken(){
        return !!this.getToken()
    }

    setToken(token){
        window.localStorage.setItem(AUTH_TOKEN, token)
    }

    getToken(){
        return window.localStorage.getItem(AUTH_TOKEN)
    }

    removeToken(){
        window.localStorage.removeItem(AUTH_TOKEN)
    }
}