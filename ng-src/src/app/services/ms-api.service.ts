import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class MSAPIService {

  constructor(private http: Http) { }

  private localhost = "http://localhost:3000";
  private truehost = "https://example.com";
  private env = this.truehost;

  private getHeader(){
    let header = new Headers();
    header.append('Content-Type','application/json');
    return header;
  }

  public addUser(newUser: any){
    return this.http.post(this.env+'api/user/adduser', newUser, {headers: this.getHeader()})
    .pipe(map(res=> res.json()));
  }
}
