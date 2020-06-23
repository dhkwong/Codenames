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
  private board : any;
  constructor(private _boardService : BoardService) { }

  ngOnInit() {
    this.updateBoard
    this.makeBoard
  }
  updateBoard(){
    //get board data from service
    this._boardService.sharedBoard.subscribe(board => this.board = board);
    //populate board
  }
  makeBoard(){   
    //build spymaster board here.
  }


}
