import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';
import {BoardService} from '../board.service'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _httpService: HttpService,
    private _boardService:BoardService,
  ) { }

  ngOnInit(): void {
  }
  startGame(){
    this._boardService.createBoard().subscribe({next :data=>{
      //for testing purposes, data from newly created board
      console.log("board data: "+data)
      //if successfully create board, route to home and start the game
      this._router.navigate(['/home'])
    },error: error=>{
      console.log("error in start component startGame: "+error)
    }
  })
  }

}
