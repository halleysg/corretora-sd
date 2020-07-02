import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CarteiraComponent } from './carteira/carteira.component';
import { HomebrokerComponent } from './homebroker/homebroker.component';
import { UpdateCComponent } from './update/updateC.component';
import { UpdateMComponent } from './update/updateM.component ';
import { UpdateAComponent } from './update/updateA.component';
import { AnalistaComponent } from './analista/analista.component';
import { InvService } from './inv.service';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  { path: 'profile/carteira', component: CarteiraComponent, canActivate: [AuthGuardService]},
  { path: 'profile/homebroker', component: HomebrokerComponent, canActivate: [AuthGuardService]},
  { path: 'profile/updateC', component: UpdateCComponent, canActivate: [AuthGuardService]},
  { path: 'profile/updateM', component: UpdateMComponent, canActivate: [AuthGuardService]},
  { path: 'profile/updateA', component: UpdateAComponent, canActivate: [AuthGuardService]},
  { path: 'profile/analista', component: AnalistaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    CarteiraComponent,
    HomebrokerComponent,
    UpdateCComponent,
    UpdateMComponent,
    UpdateAComponent,
    AnalistaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService, AuthService, InvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
