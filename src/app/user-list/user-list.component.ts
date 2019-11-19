import { Component, OnInit } from '@angular/core';
import {User} from '../shared/interfaces/user';

@Component({
  selector:  'app-user-list',
  templateUrl:  './user-list.component.html',
  styleUrls:  ['./user-list.component.css', '../account/account.component.css']
})
export class UserListComponent implements OnInit {

  private users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [{_id:  '5dd2bebb6b04360db6294865', pseudo: 'user1', password: 'qwerty', mail: 'mail@mail.com',
      photo: 'https://randomuser.me/portraits/women/59.jpg', id: '5dd2bebb6b04360db6294865'},
      {_id: '5dd2bebb6b04360db6294866', pseudo: 'user2', password: 'soleil', mail: 'mailer@gmail.com',
        photo: 'https://randomuser.me/portraits/women/59.jpg', id: '5dd2bebb6b04360db6294866'},
      {_id: '5dd2bebb6b04360db6294867', pseudo: 'Michel', password: '1234', mail: 'mymail@webmail.com',
        photo: 'https://randomuser.me/portraits/women/59.jpg', id: '5dd2bebb6b04360db6294867'},
      {_id: '5dd2bebb6b04360db6294868', pseudo: 'admin', password: 'admin', mail: 'protect@security.com',
        photo: 'https://randomuser.me/portraits/women/59.jpg', id: '5dd2bebb6b04360db6294868'},
      {_id: '5dd2ed486b04360db6294869', pseudo: 'user1', password: 'qwerty', mail: 'mail@mail.com',
        photo: 'https://randomuser.me/portraits/women/59.jpg', id: '5dd2ed486b04360db6294869'},
      {_id: '5dd2ed486b04360db629486a', pseudo: 'user2', password: 'soleil', mail: 'mailer@gmail.com',
        photo: 'https://randomuser.me/portraits/women/59.jpg', id: '5dd2ed486b04360db629486a'},
      {_id: '5dd2ed486b04360db629486b', pseudo: 'Michel', password: '1234', mail: 'mymail@webmail.com',
        photo: 'https://randomuser.me/portraits/women/59.jpg', id: '5dd2ed486b04360db629486b'},
      {_id: '5dd2ed486b04360db629486c', pseudo: 'admin', password: 'admin', mail: 'protect@security.com',
        photo: 'https://randomuser.me/portraits/women/59.jpg', id: '5dd2ed486b04360db629486c'}];
  }

}
