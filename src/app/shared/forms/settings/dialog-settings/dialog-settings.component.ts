import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {ConfigurationsComponent} from '../../../../configurations/configurations.component';

@Component({
  selector: 'app-dialog-settings',
  templateUrl: './dialog-settings.component.html',
  styleUrls: ['./dialog-settings.component.css']
})
export class DialogSettingsComponent implements OnInit {

  @Input() un: string;

  constructor(protected ref: NbDialogRef<ConfigurationsComponent>) { }

  ngOnInit() {
  }

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }

}
