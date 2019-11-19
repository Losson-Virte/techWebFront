import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './shared/forms/register/register.component';
import {LiveUserService} from './shared/services/live-user.service';
import {SettingsComponent} from './shared/forms/settings/settings.component';
import {ComponentComponent} from './component/component.component';
import {ConfigurationsComponent} from './configurations/configurations.component';
import {CreditsComponent} from './credits/credits.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'components', component: ComponentComponent },
  { path: 'configs', component: ConfigurationsComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
