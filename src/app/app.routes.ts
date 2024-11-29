import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { AppComponent } from './app.component';
import { MeetingComponent } from './meeting/meeting.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }
    , { path: 'login', component: LoginComponent }
    , { path: 'signup', component: SignupComponent }
    , { path: 'master', component: MasterComponent }
    , { path: 'home', component: HomeComponent }
    , { path: 'contact', component: ContactComponent }
    , { path: 'reports', component: ReportsComponent }
    , { path: 'meeting', component: MeetingComponent }
    , { path: 'clientes', component: ClientesComponent }

];
