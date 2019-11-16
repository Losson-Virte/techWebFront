import {Component, OnInit, ViewChild} from '@angular/core';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NbSidebarService],
})
export class AppComponent implements OnInit {
  title = 'techWebFront';

  constructor(private sidebarService: NbSidebarService) {
  }

  ngOnInit(): void {
    this.toggle();
  }


  toggle() {
    this.sidebarService.toggle(true);
  }

}
