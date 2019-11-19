import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {of} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../../interfaces/user';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  static defaultl = 'https://cdn.discordapp.com/emojis/539893268108935168.png';

  private user: User;

  pseudo: string;
  password: string;
  photo: string;
  email: string;

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  fourthForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private backEndService: BackendService) {
  }

  ngOnInit() {
    this.photo = '';
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.minLength(2)],
    });
    this.fourthForm = this.fb.group({
      fourthCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
    this.setDefaultPhoto();
  }

  onFourthSubmit() {
    this.thirdForm.markAsDirty();
  }

  setDefaultPhoto(){
    of(this.photo)
      .subscribe((_) => this.validImage(_) ?_ :  this.photo = RegisterComponent.defaultl);
  }

  validImage(src: string): boolean {
    return (src.match(new RegExp('(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)')) !== null);
  }

  redirectHome(): void {
    this.router.navigateByUrl('/home');
  }

  buildAndPost(): void {
    this.setDefaultPhoto();
    this.user = {
      pseudo: this.pseudo,
      mail: this.email,
      photo: this.photo,
      password: this.password,
    };
    this.backEndService.register(this.user);
  }
}
