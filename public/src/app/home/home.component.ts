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



  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit(){
  }
  // newBoard(){
  //   //may only need to create a service that randomly creates a board
  // }
  // buildBoard(){
  //   //use shared service to pass data between spymaster and home for board data
  //   //ngrx is a library used to maintain states (aka can store data) betweeen components. so use that for the shared board data service
  //   //may be overly complicated for a smaller app like this though(lots of boilerplate)

  // }



}
