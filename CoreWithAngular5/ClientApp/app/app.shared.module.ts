import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
import { ProductKeyComponent } from './components/adminsetup/ProductKey.component';
import { InviteAdminComponent } from './components/adminsetup/InviteAdmin/InviteAdmin.component';
import { CheckProductKeyComponent} from './components/adminsetup/CheckProductKey/CheckProductKey.component';
import { appRoutes } from './routes';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        SignupComponent,
        RegistrationSuccessComponent,
        UserComponent,
        SignInComponent,
        DashboardComponent,
        AddOrganizationComponent,
        ProductKeyComponent,
        InviteAdminComponent,
        CheckProductKeyComponent,
        HomeComponent
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppModuleShared {
}
