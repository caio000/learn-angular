import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAppComponent } from './my-app/my-app.component';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';
import { UsuarioComponent } from './rotas/usuario/usuario.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'rotas', component: HomeComponent },
    { path: '', component: MyAppComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
