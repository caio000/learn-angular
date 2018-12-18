import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAppComponent } from './my-app/my-app.component';
import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';
// import { UsuarioComponent } from './rotas/usuario/usuario.component';
// import { UsuarioDetalhesComponent } from './rotas/usuario/usuario-detalhes/usuario-detalhes.component';
import { AuthGuardService } from './guard/auth.guard.service';
import { CursosGuard } from './guard/cursos.guard.service';

const APP_ROUTES: Routes = [
    { path: 'alunos', loadChildren: './rotas/alunos/alunos.module#AlunosModule', canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    // { path: 'usuarios/:id', component: UsuarioDetalhesComponent },
    // { path: 'usuarios', component: UsuarioComponent },
    { path: 'rotas', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: '', component: MyAppComponent, canActivate: [AuthGuardService] }
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
