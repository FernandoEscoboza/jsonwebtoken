import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private userServ: UserService,
    private router: Router
  ){}
  
  canActivate(): boolean {

    if(this.userServ.islogin()){
      console.log('El token no es valido');
      this.router.navigate(['login']);
      return false;
    } 
    return true;
  }
  
}
