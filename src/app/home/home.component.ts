import { Component, OnInit } from '@angular/core';
import {LiveUserService} from '../shared/services/live-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private liveService: LiveUserService) {
  }

  ngOnInit() {
  }

  loggedUser(): boolean {
    return this.liveService.isConnected();
  }

  getConnectedName(): string {
    return this.liveService.getConnected().username;
  }

}
