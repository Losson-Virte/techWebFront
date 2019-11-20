import { Component, OnInit } from '@angular/core';
import {Configuration} from '../shared/interfaces/configuration';
import {BackendService} from '../shared/services/backend.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css', '../account/account.component.css']
})
export class ConfigurationsComponent implements OnInit {

  private configsp: Configuration[];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.fetchAllConfigs().subscribe(k => this.assign(k));
  }
  assign(config: Configuration[] ) {
    this.configsp = config;
}

  get configs(): Configuration[] {
    return this.configsp;
  }
}
