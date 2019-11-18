import {Component, Input, OnInit} from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {LiveUserService} from '../shared/services/live-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {

  @Input() collapsed: boolean;

  constructor(private liveUser: LiveUserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  get logged(): boolean {
    return this.liveUser.isConnected();
  }

  redirect(path: string): void {
    this.router.navigateByUrl(path);
  }
}
