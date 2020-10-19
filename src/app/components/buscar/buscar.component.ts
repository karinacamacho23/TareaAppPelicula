import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

	aparecer : boolean = false;
	

	busqueda : any []  = [];
 
	constructor( private router : ActivatedRoute,
				 private ps : PeliculasService ) {
					router.params.subscribe ( param => {
						this.buscar ( param.texto );
					})
				 }


	buscar ( busqueda : string ) {
		
		return this.ps.searchMovieInput( busqueda )
			.subscribe ( result => {
				this.busqueda = result;
				if (this.busqueda != null ){
					this.aparecer = true;
				}else{
					this.aparecer = true;
				}
				
				
			})
		
		/*this.ps.searchMovieInput ( this.busqueda )
			.subscribe( resul => console.log (resul) );*/
	}
}
