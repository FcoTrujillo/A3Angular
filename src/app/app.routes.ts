import { UserComponent } from './pages/user/user.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const routes: Routes = [

{ path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "new/user", component: UserFormComponent },
    { path: "user/:_id", component: UserComponent},
    { path: "update/user/:_id", component: UserFormComponent},
    {path: "**", redirectTo: ""}
];