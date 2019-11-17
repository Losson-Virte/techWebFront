import {Component, EventEmitter, OnInit} from '@angular/core';
import {LiveUserService} from '../../services/live-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private submitted: boolean;

  constructor(private liveUserService: LiveUserService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  checkCreditentials(username: string, password: string) {
   this.liveUserService.login(username, password);
   this.liveUserService.isConnected() ? this.router.navigateByUrl('/home') : this.submitted = true;
  }
}
