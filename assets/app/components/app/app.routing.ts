/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import {MessagesComponent} from "../messages/messages.component";
import {AuthenticationComponent} from "../auth/authentication.component";
import {AUTHENTICATION_ROUTES} from "../auth/authentication.routing";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'authentication', component: AuthenticationComponent, children: AUTHENTICATION_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);