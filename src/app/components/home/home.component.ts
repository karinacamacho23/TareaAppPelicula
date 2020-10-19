import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Observable } from  'rxjs/Rx';
import { Ipeliculas } from '../../interface/peliculas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
	public url_img  : string      = 'https://image.tmdb.org/t/p/w200';
	o_populares : Observable <any> = null;
  
  url_     : string =''

  /*variables a usar*/
  populares : any [] = [] ;
  rates     : any [] = [] ;
  kids     : any [] = [] ;

  constructor( private ps : PeliculasService ) { 
  	//llamado del metodo Mostar Populares
    this.o_populares = ps.getPopulares ();
    this.mostrar_Populares();
    this. mostrar_Rates ();
    this.mostrar_PopularesKits();
   }

  mostrar_Populares (){
  	
  	
  	this.o_populares.subscribe( res => {

      this.populares = res;
      for (var i = 0; i < this.populares.length; ++i) {
        // code...
        this.populares[i].poster_path = this.url_img + this.populares[i].poster_path; 
      }
     //console.log ( this.populares )
  	})
    
  } //fin populares

  mostrar_Rates () {
    this.ps.getRates().subscribe ( (res : any) => {
      this.rates = res;

   });

  }


  mostrar_PopularesKits () {
    this.ps.getPopularesKits().subscribe ( (res : any) => {
      this.kids = res;
      console.log (res)
   });
  }
}
