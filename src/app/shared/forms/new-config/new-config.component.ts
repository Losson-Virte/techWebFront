import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {ConfigurationsComponent} from '../../../configurations/configurations.component';
import {ComponentI} from '../../interfaces/component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Configuration} from '../../interfaces/configuration';
import {LiveUserService} from '../../services/live-user.service';

@Component({
  selector: 'app-new-config',
  templateUrl: './new-config.component.html',
  styleUrls: ['./new-config.component.css']
})
export class NewConfigComponent implements OnInit {
  private readonly pform: FormGroup;

  constructor(protected ref: NbDialogRef<ConfigurationsComponent>, private liveuserService: LiveUserService) {
    this.pform = this.buildForm();
    this.usedComponents = [];
    this.unusedComponents = [];
  }

  @Input() comps: ComponentI[];

  private unusedComponents: ComponentI[];
  private usedComponents: ComponentI[];

  ngOnInit() {
    this.unusedComponents = this.comps;
  }

  dismiss() {
    this.ref.close();
  }

  submit(): void {
    this.ref.close(this.constructConfig());
  }

  get form(): FormGroup {
    return this.pform;
  }
  private buildForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(12),
      Validators.required,
      // UsernameUnicityValidator.available(users)
    ]))});
  }


  private switchright(compo: ComponentI): void {
    this.unusedComponents.splice(this.unusedComponents.indexOf(compo), 1);
    this.usedComponents[this.usedComponents.length] = compo;
    setTimeout(() => {
    });
  }
  private switchleft(compo: ComponentI): void {
    this.usedComponents.splice(this.usedComponents.indexOf(compo), 1);
    this.unusedComponents[this.unusedComponents.length] = compo;
  }

  constructConfig(): Configuration {
    return {
      user: this.liveuserService.getConnected(),
      composants: this.usedComponents,
      name: this.form.getRawValue().name,
    };
  }
}
