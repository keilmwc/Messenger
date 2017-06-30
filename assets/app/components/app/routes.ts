/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import {MessagesComponent} from "../messages/messages.component";
import {AuthenticationComponent} from "../auth/authentication.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'authentication', component: AuthenticationComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);