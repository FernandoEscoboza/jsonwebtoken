import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url= 'http://localhost:3000/api';
  // url = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient,
    private jwthelper: JwtHelperService ) { 
    console.log('Servicios Http');
  }

  getusers(){
    return this.http.get(this.url);
    // .pipe(map( res => res.stores ));
    
  }

  postlogin(user: any){
    return this.http.post(this.url+'/login/',user);
  }

  islogin(): boolean{
    const token:any = localStorage.getItem('token');
    if(this.jwthelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
