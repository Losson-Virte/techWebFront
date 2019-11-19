import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {User} from '../interfaces/user';
import {from, Observable, of} from 'rxjs';
import {ComponentI} from '../interfaces/component';
import {flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // private property to store all backend URLs
  private readonly backendUrl: any;
  private user: User;
  readonly exemple: User = {
    pseudo: 'GMachRhea',
    id: 'tmpid',
    photo: 'https://cdn.discordapp.com/emojis/643784597204893707.png',
    mail: 'thislongemail@exempledomain.fr'
  };


  constructor(private http: HttpClient) {
    this.backendUrl = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this.backendUrl[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  register(user: User): Observable<any> {
    return this.http.post<User>(this.backendUrl.getAll, user, this.options());
  }

  fetchAll(): Observable<User[]> {
    return from(this.http.get<User[]>(this.backendUrl.getAll));
  }

  login(pseudo: string, password: string): Observable<User> {
      this.fetchAll()
        .subscribe((value) => value.filter(
          k => k.pseudo === pseudo ?
            (k.password === password ? this.user = k : this.exemple) : this.exemple ));
      return of(this.user);
  }

  fetchAllComponents(): Observable<ComponentI[]> {
    return from(this.http.get<ComponentI[]>(this.backendUrl.getAllComponents));
  }

  update(user: User, parameters: any): Observable<User> {
    console.log(user);
    console.log(parameters);
    return this.http.put<User>(this.backendUrl.oneUser.replace(':id', user.id, this.options()), parameters);
  }


  private options(headerList: object = {}): any {
    return { headers: new HttpHeaders(Object.assign({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      }, headerList)) };
  }


}
