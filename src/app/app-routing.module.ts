import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [
{ path: 'pelicula/:id/:pag1', component : PeliculaComponent },
	{ path: 'buscar', component : BuscarComponent },
	{ path: 'buscar/:texto', component : BuscarComponent },
	{ path: 'home', component : HomeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
