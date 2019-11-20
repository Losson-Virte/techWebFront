import { Component, OnInit } from '@angular/core';
import {Configuration} from '../shared/interfaces/configuration';
import {BackendService} from '../shared/services/backend.service';
import {LiveUserService} from '../shared/services/live-user.service';
import {NewConfigComponent} from '../shared/forms/new-config/new-config.component';
import {NbDialogService} from '@nebular/theme';
import {AccountComponent} from '../account/account.component';
import {ComponentI} from '../shared/interfaces/component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css', '../account/account.component.css', '../app.component.css']
})
export class ConfigurationsComponent implements OnInit {

  private configsp: Configuration[];

  constructor(private backendService: BackendService,
              private liveUser: LiveUserService,
              private dialogService: NbDialogService,
              private router: Router) { }

  ngOnInit() {
    this.backendService.fetchAllConfigs().subscribe(k => this.assign(k));
  }
  assign(config: Configuration[] ) {
    this.configsp = config;
}

  get configs(): Configuration[] {
    return this.configsp;
  }

  newConfig(config: Configuration): void {
    console.log(config);
    this.backendService.createNewConfig(config).subscribe(_ => this.router.navigateByUrl('/home'));
  }

  doNothing(): void {

  }

  open() {
    this.backendService.fetchAllComponents().subscribe(k => this.dialogService.open(NewConfigComponent,  {
      context: {
        comps: k,
      },
    }).onClose.subscribe((output: Configuration) => output && this.newConfig(output)));
  }
}
