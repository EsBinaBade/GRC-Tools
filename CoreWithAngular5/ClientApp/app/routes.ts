import { Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { SignupComponent } from './components/user/sing-up/sign-up.component';
import { RegistrationSuccessComponent } from './components/user/sing-up/RegistrationSuccess.component';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddOrganizationComponent } from './components/adminsetup/EntitySetup/AddOrganization.component';
//import { EditOrganizationComponent } from './components/adminsetup/EntitySetup/EditOrganization.component';
import { AuditComponent } from './components/adminsetup/Audit/audit.component';

import { CheckProductKeyComponent } from './components/adminsetup/CheckProductKey/CheckProductKey.component';

import { ProductKeyComponent} from './components/adminsetup/ProductKey.component';
import { InviteAdminComponent } from './components/adminsetup/InviteAdmin/InviteAdmin.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: '/checkProductKey', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'addOrganization', component: AddOrganizationComponent },
    { path: 'edit/Organization/:organizationId', component: AddOrganizationComponent },
    { path: 'productKey', component: ProductKeyComponent},
    { path: 'inviteAdmin', component: InviteAdminComponent },
    { path: 'checkProductKey', component: CheckProductKeyComponent },
    //{ path: 'editOrganization', component: EditOrganizationComponent },
    { path: 'audit', component: AuditComponent },

    
    //{ path: 'sign-up', component: SignupComponent },
    { path: 'success', component: RegistrationSuccessComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'user', component: UserComponent },
    //{ path: 'sign-in', component: SignInComponent },
    {
        path: 'sign-up', component: UserComponent,
        children: [{ path: '', component: SignupComponent }]
    },
    {
        path: 'sign-in', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },

    { path: 'fetch-data', component: FetchDataComponent },
    { path: '**', redirectTo: 'home' }
];