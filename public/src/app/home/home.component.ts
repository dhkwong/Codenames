import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';
import {BoardService} from '../board.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//create class variables here
// board of values we'll populate
// board: string[];

  board: any[];

  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _httpService: HttpService,
    private _boardService: BoardService,
  ) { }

  ngOnInit(){
    this.getBoard();
  }
  // newBoard(){
  //   //may only need to create a service that randomly creates a board
  // }
  // buildBoard(){
  //   //use shared service to pass data between spymaster and home for board data
  //   //ngrx is a library used to maintain states (aka can store data) betweeen components. so use that for the shared board data service
  //   //may be overly complicated for a smaller app like this though(lots of boilerplate)

  // }
  getBoard(){
    this._boardService.getBoard()
    //subscribe to wait for session key storage
    .subscribe({
      next: data=>{

        // this.board=data;
        //unless we start through the startcomponent route, the behaviorSubject values revert to the default state, and the created deck values do not persist
        // may need to use LocalStorage or SessionStorage. may need to npm i it. LocalStorage persists past window close, while SessionStorage does not. Then push LocalStorage to board value aka setBoard()
        console.log("home component sessionStorage.getItem"+sessionStorage.getItem("boardSessionKey"))
        this.board = JSON.parse(sessionStorage.getItem("boardSessionKey"))
      }
      ,error: error =>{
        console.log("error in home component getBoard(): " + error)
      }
    })
  }



}
