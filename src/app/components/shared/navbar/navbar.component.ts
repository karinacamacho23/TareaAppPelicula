import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent  {

 
  constructor( private ps : PeliculasService, 
  			   private router : Router ) { }

  buscar ( txt : string ) {
  	if ( (txt.length == 0) || (txt == null) ){
      return; 
    }
  	console.log ( txt )

  	this.router.navigate (['buscar/', txt]);
  
  }	


}
