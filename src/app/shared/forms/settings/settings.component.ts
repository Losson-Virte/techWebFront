import {Component, Input, OnInit} from '@angular/core';
import {LiveUserService} from '../../services/live-user.service';
import {User} from '../../interfaces/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ImageFormatValidator} from '../validators/image-format-validator';
import {NbDialogService} from '@nebular/theme';
import {NewConfigComponent} from '../new-config/new-config.component';
import {DialogSettingsComponent} from './dialog-settings/dialog-settings.component';
import {ComponentI} from '../../interfaces/component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css',
    '../login/login.component.css', '../../../account/account.component.css', '../../../side-menu/side-menu.component.css']
})
export class SettingsComponent implements OnInit {

  private user: User;
  private readonly pform: FormGroup;

  constructor(private liveuserService: LiveUserService, private router: Router, private dialogService: NbDialogService) {
    this.pform = this.buildForm();
  }

  ngOnInit() {
    this.user = this.liveuserService.getConnected();
    this.preCompletion();
  }

  get pseudo(): string {
    return this.user.pseudo;
  }
  get photo(): string {
    return this.user.photo;
  }
  get email(): string {
    return this.user.mail;
  }
  get pass(): string {
    return this.user.password;
  }
  get form(): FormGroup {
    return this.pform;
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(3)
      ])),
      mail: new FormControl('', Validators.compose([
        Validators.required, Validators.email
      ])),
      photo: new FormControl('', ImageFormatValidator.imageFormat)
    });
  }

  preCompletion(): void {
    this.pform.patchValue(this.user);
  }

  onSave(): void {
    this.liveuserService.update({
      password: this.pform.getRawValue().password,
      mail: this.pform.getRawValue().mail,
      photo: this.pform.getRawValue().photo
    });
  }

  toggle() {
    this.dialogService.open(DialogSettingsComponent,
      { context: {
        un: this.user.pseudo,
      },
    }).onClose.subscribe(output => output && this.deletionMethod(output) );
  }

  deletionMethod(pw: string) {
    this.liveuserService.deleteUser(pw);
    this.router.navigateByUrl('/home');
  }
}
