import {Injectable} from "@angular/core";
import { HttpClient} from  '@angular/common/http';
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { local } from "d3";
import { Router } from "@angular/router";
import { ApiService } from "./api.service";

@Injectable()
export class AuthenticationService {

  constructor(private http:  HttpClient,private router: Router, private apiService: ApiService) {}

  private basePath = 'http://localhost:8080/miudelar-server/admin/';

  login(loginObj){
    console.log(JSON.stringify(loginObj))
     return this.http.post(this.basePath + 'login', loginObj, {responseType: 'text'})
     .pipe(catchError(e=>throwError(new Error(e.message))));
     
     //.subscribe((r)=>console.error("GOOD"),err=>console.log('ERROR'+err.message));;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  private extractData(res) {
    let body = res.json();
    return body;
  }
}
  