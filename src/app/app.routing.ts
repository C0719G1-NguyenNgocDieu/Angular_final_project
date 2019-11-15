import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {AdminComponent} from "./admin/admin.component";
import {EditAdminComponent} from "./edit-admin/edit-admin.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    {path: 'editAdmin/:id', component: EditAdminComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
