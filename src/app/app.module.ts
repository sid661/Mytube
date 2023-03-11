import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NagivationComponent } from './nagivation/nagivation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UploadformComponent } from './uploadform/uploadform.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Uploadform2Component } from './uploadform2/uploadform2.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';





@NgModule({
  declarations: [
    AppComponent,
    VideoContentComponent,
    ChipsBarComponent,
    NagivationComponent,
    DashboardComponent,
    UploadformComponent,
    Uploadform2Component,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatTabsModule,
    MatButtonToggleModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
