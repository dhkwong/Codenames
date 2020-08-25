import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';
import {BoardService} from '../board.service';

@Component({
  selector: 'app-spymaster',
  templateUrl: './spymaster.component.html',
  styleUrls: ['./spymaster.component.css']
})
export class SpymasterComponent implements OnInit {
  board : any[];
  redscore:any;
  bluescore: any;
  turn: any;


  constructor(
    private _router: Router,
    private _httpService: HttpService,
    private _boardService: BoardService,
    ) { }

  ngOnInit() {
    this.getBoard()
    this.updateScore()
  }
  getBoard() {
    this._boardService.getBoard()
      //subscribe to wait for session key storage
      .subscribe({
        next: data => {
          console.log("spymaster component sessionStorage.getItem" + sessionStorage.getItem("boardSessionKey"))
          this.board = JSON.parse(sessionStorage.getItem("boardSessionKey"))
        }
        , error: error => {
          console.log("error in spymaster component getBoard(): " + error)
        }
      })
  }
  
  updateScore(){
    this.redscore = sessionStorage.getItem('redscore')
    this.bluescore = sessionStorage.getItem('bluescore')
  }


}
