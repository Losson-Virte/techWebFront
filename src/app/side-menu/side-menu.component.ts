import {Component, Input, OnInit} from '@angular/core';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {

  @Input() collapsed: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }
}
