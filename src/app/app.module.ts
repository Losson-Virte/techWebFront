import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LogoComponent } from './logo/logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbUserModule,
  NbIconModule,
  NbCardModule, NbInputModule, NbStepperModule, NbListModule, NbMenuModule, NbTreeGridModule, NbAccordionModule, NbDialogModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './shared/forms/login/login.component';
import { RegisterComponent } from './shared/forms/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccountComponent } from './account/account.component';
import {HttpClientModule} from '@angular/common/http';
import { SettingsComponent } from './shared/forms/settings/settings.component';
import {ComponentComponent, CpIconComponent} from './component/component.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { CreditsComponent } from './credits/credits.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewConfigComponent } from './shared/forms/new-config/new-config.component';
import { DialogSettingsComponent } from './shared/forms/settings/dialog-settings/dialog-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    LogoComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    SettingsComponent,
    ComponentComponent,
    CpIconComponent,
    ConfigurationsComponent,
    CreditsComponent,
    UserListComponent,
    NewConfigComponent,
    DialogSettingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({name: 'cosmic'}),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbUserModule,
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbStepperModule,
    NbListModule,
    NbMenuModule,
    NbTreeGridModule,
    NbAccordionModule,
    NbDialogModule.forRoot(),
    NbDialogModule.forChild(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewConfigComponent, DialogSettingsComponent],
})
export class AppModule { }
