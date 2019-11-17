import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from '../interfaces/user';

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
  }

  getConnected(): User {
    return this.user;
  }

  isConnected(): boolean {
    return this.user.id !== this.exemple.id;
  }


  login(usernamev: string, password: string): void {
    /* fetch user from bdd */
    this.user = {
      username: usernamev,
      email: this.exemple.email,
      id: password,
      photo: this.exemple.photo,

    };
  }

  logout(): void {
    this.user = this.exemple;
  }
}
