import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {User} from '../interfaces/user';
import {of, pipe} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LiveUserService {
  private readonly exemple: User = {
    username: 'GMachRhea',
    id: 'tmpid',
    photo: 'https://cdn.discordapp.com/emojis/643784597204893707.png',
    email: 'thislongemail@exempledomain.fr'
  };

  private user: User;

  constructor() {
    this.user = this.exemple;
    this.getUserFromSession();
  }

  getConnected(): User {
    return this.user;
  }

  isConnected(): boolean {
    return this.user.id !== this.exemple.id;
  }


  login(usernamev: string, password: string): void {
    /* TODO: fetch user from bdd */
    this.user = {
      username: usernamev,
      email: this.exemple.email,
      id: password,
      photo: this.exemple.photo,

    };
    sessionStorage.setItem('session', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = this.exemple;
    sessionStorage.removeItem('session');
  }

  private getUserFromSession(): void {
    of(sessionStorage.getItem('session')).
    pipe( filter(_ => !!_))
      .subscribe((_) => this.user = JSON.parse(_) );
  }
}
