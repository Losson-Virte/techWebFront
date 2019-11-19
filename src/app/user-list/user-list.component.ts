import { Component, OnInit } from '@angular/core';
import {User} from '../shared/interfaces/user';
import {BackendService} from '../shared/services/backend.service';

@Component({
  selector:  'app-user-list',
  templateUrl:  './user-list.component.html',
  styleUrls:  ['./user-list.component.css', '../account/account.component.css']
})
export class UserListComponent implements OnInit {

  private users: User[];

  constructor(private backEndService: BackendService) { }

  ngOnInit() {
    this.backEndService.fetchAll().subscribe(value => this.users = value);
  }

}
