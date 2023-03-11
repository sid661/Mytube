import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadformComponent } from './uploadform/uploadform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidharthisactiveGuard } from './sidharthisactive.guard';


const routes: Routes = [
  { path: 'upload', component: UploadformComponent},
{ path: '', redirectTo: 'home',pathMatch: 'full' },
  { path: 'home',component: DashboardComponent },
{ path: 'login',component: LoginComponent},
{ path: 'login/registration',component: RegistrationComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
