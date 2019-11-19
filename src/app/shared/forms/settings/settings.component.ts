import { Component, OnInit } from '@angular/core';
import {LiveUserService} from '../../services/live-user.service';
import {User} from '../../interfaces/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css', '../login/login.component.css']
})
export class SettingsComponent implements OnInit {

  private user: User;
  private readonly pform: FormGroup;

  constructor(private liveuserService: LiveUserService) {
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
      id: new FormControl('0'),
      pseudo: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required, Validators.email
      ])),
      photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg')
    });
  }

  preCompletion(): void {
    this.pform.patchValue(this.user);
  }
}
