import { Component, OnInit } from '@angular/core';
import {User} from '../shared/interfaces/user';
import {LiveUserService} from '../shared/services/live-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private liveUserService: LiveUserService, private router: Router) { }

  ngOnInit() {
  }

  get username(): string {
    return this.liveUserService.getConnected().pseudo;
  }

  get photo(): string {
    return this.liveUserService.getConnected().photo;
  }

  get email(): string {
    return this.liveUserService.getConnected().email;
  }

  get loggedUser(): boolean {
    return this.liveUserService.isConnected();
  }

  redirectHome(): void {
    this.router.navigateByUrl('/home');
  }
}
