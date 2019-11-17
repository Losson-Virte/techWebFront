import {Component, Input, OnInit} from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {LiveUserService} from '../shared/services/live-user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {

  @Input() collapsed: boolean;

  constructor(private liveUser: LiveUserService) {
  }

  ngOnInit(): void {
  }

  get logged(): boolean {
    return this.liveUser.isConnected();
  }
}
