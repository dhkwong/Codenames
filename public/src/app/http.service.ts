import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
//service that utilizes the httpclient from angular common to communicate with the node server
  constructor(private _http: HttpClient) { }

  // getMovies() {
  //   console.log("getMovies");
  //   return this._http.get('/api/movies');
  // }
  // submitMovie(movie: any) {
  //   console.log("I'm in submitmovie",movie);
  //   return this._http.post('/api/movies', movie);
  // }
  // editMovie(movie, review) { //for inserting reviews
  //   console.log("I'm adding a review in http.services.ts", movie);
  //   return this._http.put(`/api/movies/${movie.movie._id}`, review);
  // }
  // deleteMovie(movie) {
  //   console.log("I'm deleting a movie in http.services.ts", movie);
  //   return this._http.delete(`/api/movies/${movie._id}`);
  // }
  // findMovie(id:any){
  //   console.log("I'm retrieving a movie in findMovie: http.service",id);
  //   return this._http.get(`/api/movies/${id}`);
  // }
}
