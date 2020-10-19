import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*Servico*/
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent {

	aparecer : boolean            = false;
	padre    : any;
	id       : string             = null;
	pag      : string			  = null;
	busqueda : any                = {};
	public url_img  : string      = 'https://image.tmdb.org/t/p/w200';
	prob     : any = '';


	constructor( private arout : ActivatedRoute, 
				 private ps : PeliculasService ) { 
		arout.params.subscribe ( param => {
			this.id = param.id;
			this.pag= param.pag1;
			if ( param != null ){
				this.buscarPeli ();
			}
			
		})
		
	}


	buscarPeli () {
		this.ps.searchMovie( this.id )
			.subscribe ( (resul : any) => {
				this.busqueda = resul;
				if (this.busqueda != null ){
					this.aparecer = true;
				}else{
					this.aparecer = true;
				}
				this.busqueda.poster_path = this.url_img + this.busqueda.poster_path;
				this.prob = this.busqueda.genres[0].name;

				 
			} )

			
	}


}
