import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {User} from '../interfaces/user';
import {of, pipe} from 'rxjs';
import {filter} from 'rxjs/operators';
import {BackendService} from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class LiveUserService {

  constructor(private backend: BackendService) {
    this.user = this.exemple;
    this.getUserFromSession();
  }
  readonly exemple: User = {
    pseudo: 'GMachRhea',
    id: 'tmpid',
    photo: 'https://cdn.discordapp.com/emojis/643784597204893707.png',
    mail: 'thislongemail@exempledomain.fr'
  };

  private user: User;

  private userAndSessionStorageUpdate(user: User) {
    this.user = user;
    sessionStorage.removeItem('session');
    sessionStorage.setItem('session', JSON.stringify(user));
  }

  getConnected(): User {
    return this.user;
  }

  isConnected(): boolean {
    return this.user.id !== this.exemple.id;
  }


  login(pseudo: string, password: string): void {
    this.backend.login(pseudo, password)
      .subscribe(value => { this.user = value; sessionStorage.setItem('session', JSON.stringify(this.user)); });
    // sessionStorage.setItem('session', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = this.exemple;
    sessionStorage.removeItem('session');
  }

  private getUserFromSession(): void {
    of(sessionStorage.getItem('session')).
    pipe( filter(_ => !!_))
      .subscribe((_) => { this.user = JSON.parse(_);  } );
  }

  update(data: any): void {
    this.backend.update(this.getConnected(), data).subscribe(value => this.userAndSessionStorageUpdate(value));
  }

  deleteUser(pw: string) {
    (this.user.password === pw) ? this.backend.deleteUser(this.user.id)  : this.isConnected();
  }
}
