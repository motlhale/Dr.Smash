import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../helper/appSettings';


@Injectable()
export class postService{
    myheaders:HttpHeaders = new HttpHeaders();

    constructor(private httpClient:HttpClient){
        this.myheaders.append("Content-Type","application/json");
        this.myheaders.append("Origin","http://localhost:5000");
        this.myheaders.append("Accept","application/json");
    }

    getPosts(){
        return this.httpClient.get<any>(`${AppSettings.BaseURL}/posts`,{headers: this.myheaders})
        .pipe( map( (response) =>{ return response }))
    }

    getUserPost(index){
        return this.httpClient.get<any>(`${AppSettings.BaseURL}/users/${index}/posts`,{ headers: this.myheaders})
        .pipe( map( (response) => {return response}))
    }

}
