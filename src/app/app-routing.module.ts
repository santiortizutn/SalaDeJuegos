import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EjerciciosComponent } from './paginas/ejercicios/ejercicios.component';
import { ErrorComponent } from './paginas/error/error.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { QuiensoyComponent } from './paginas/quiensoy/quiensoy.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [

  {path: '' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'quiensoy' , component: QuiensoyComponent},
  {path: 'registro' , component: RegistroComponent},
  {path: 'error' , component: ErrorComponent},
  {path: 'ejercicios' , component: EjerciciosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
