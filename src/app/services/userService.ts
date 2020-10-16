import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { AppSettings } from '../helper/appSettings';


@Injectable()
export class userService{
    myheaders: HttpHeaders = new HttpHeaders();

    constructor(private httpClient:HttpClient){
        this.myheaders.append("Content-Type","application/json");
        this.myheaders.append("Origin","http://localhost:5000");
        this.myheaders.append("Accept","application/json")
    }

    getUsers(index){
        return this.httpClient.get<any>(`${AppSettings.BaseURL}/users?page=${index}`,{headers:this.myheaders})
        .pipe( map((response) => {return response}));
    }

    getUser(index){
        return this.httpClient.get<any>(`${AppSettings.BaseURL}/users/${index}`, {headers: this.myheaders})
        .pipe( map( (response) =>{ return response}));
    }

    postUser(user){
        return this.httpClient.post<any>(`${AppSettings.BaseURL}/users`,user,{headers:this.myheaders})
        .pipe( map((response) =>{ return response}));
    }
}