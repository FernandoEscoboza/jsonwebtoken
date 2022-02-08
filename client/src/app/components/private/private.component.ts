import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  userlist: any = [];

  constructor( private userServ: UserService ) { }

  ngOnInit(): void {
    this.getlist();
  }

  getlist(){
    this.userServ.getusers()
    // .pipe()
    .subscribe( res => this.userlist = res);
  }

}
