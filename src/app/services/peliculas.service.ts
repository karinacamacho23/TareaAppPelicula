 import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';

import {map} from 'rxjs/operators';



 /*para trabajar con peticiones y jsonP*/

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
	busqueda : any [];
	rates : any[] = [];
	kids : any[] = [];
	public url_img  : string      = 'https://image.tmdb.org/t/p/w200';

	private apikey : string = '7e3fa246a94fd44b34317b264def4499';
	private urlMovie : string = "https://api.themoviedb.org/3";

	constructor( private http : HttpClient ) { 	} //fin del constructor

			/*mostrar peliculas mas populares*/

	getPopulares () {
		
		let url : string = `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&`;
		
    	return this.http.jsonp( url, 'callback=JSONP_CALLBACK')
    		.pipe(
    			map ( (res : any ) => {
    				
    				return (res. results);
    				
    			} )
    		);

	} // fin-Populares

	getRates () {
	
		let url : string = `${this.urlMovie}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.apikey}&language=es&`;
		return this.http.jsonp( url, 'callback=JSONP_CALLBACK')
			.pipe(
				map ( (resul : any) => {
					this.rates = resul.results;
					for (var i = 0; i < this.rates.length; ++i) {
				        // code...
				        this.rates[i].poster_path = this.url_img + this.rates[i].poster_path;
				        if (this.rates[i].poster_path == 'https://image.tmdb.org/t/p/w200null') {
				        	this.rates[i].poster_path = 'assets/img/unnamed.png'
				        }
				      }
				      /*console.log ( this.rates )*/
				      return this.rates;
				    } )
			)
			
	} //fin-Rates

	/*peliculas de niños*/
	getPopularesKits () {
		let url : string = `${this.urlMovie}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&`;
		return this.http.jsonp( url, 'callback=JSONP_CALLBACK')
		.pipe(
				map ( (resul : any) => {
					this.kids = resul.results;
					for (var i = 0; i < this.kids.length; ++i) {
				        // code...
				        this.kids[i].poster_path = this.url_img + this.kids[i].poster_path;
				        if (this.kids[i].poster_path == 'https://image.tmdb.org/t/p/w200null') {
				        	this.kids[i].poster_path = 'assets/img/unnamed.png'
				        }
				      }
				      
				      return this.kids;
				    } )
			)
			
	};

	searchMovie ( id : string ) {

		let url : string = `${ this.urlMovie }/movie/${ id }?api_key=${ this.apikey }&language=es&`
		return this.http.jsonp( url, 'callback=JSONP_CALLBACK' );
			
	}



	searchMovieInput  ( texto : string) {

		let url : string = `${ this.urlMovie }/search/movie?api_key=${ this.apikey }&query=${texto}&language=es&`
		return this.http.jsonp ( url, 'callback=JSONP_CALLBACK' )
			.pipe (
				map ( ( resul : any ) => {
					this.busqueda = resul.results;
					for (var i = 0; i < this.busqueda.length; ++i) {
				        // code...
				        this.busqueda[i].poster_path = this.url_img + this.busqueda[i].poster_path;
				        if (this.busqueda[i].poster_path == 'https://image.tmdb.org/t/p/w200null') {
				        	this.busqueda[i].poster_path = 'assets/img/unnamed.png'
				        }
				    }
				    return this.busqueda;
				})
			)							
	}
/*
https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher*/
}

/*
${ this.urlMovie }/search/movie?api_key=${ this.apikey }&query={ id }*/