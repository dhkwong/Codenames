import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';
import { BoardService } from '../board.service';


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
  turn: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private _boardService: BoardService,
  ) { }

  ngOnInit() {
    this.getBoard();
    this.turn = this._boardService.getTurn().subscribe(data => {
      console.log("this.turn in home: " + JSON.stringify(data))
      return data;
    })
  }

  async onClick(word: any) {
    //finds index of the word
    var index = await this.board.findIndex(x => x.word === word);
    await this._boardService.chooseCard(index)
      .then(data => {
        if (data == 'yellow') {
          //switch turn
          this._boardService.nextTurn();
          //refresh component
          this._router.navigate([`/home`])
        }
        //if player chooses wrong color switch turn
        if (this.board[index].color != this.turn) {
          this._boardService.nextTurn();
          this._router.navigate(['/home'])
        }
      })
  }
  getBoard() {
    this._boardService.getBoard()
      //subscribe to wait for session key storage
      .subscribe({
        next: data => {
          console.log("home component sessionStorage.getItem" + sessionStorage.getItem("boardSessionKey"))
          this.board = JSON.parse(sessionStorage.getItem("boardSessionKey"))
        }
        , error: error => {
          console.log("error in home component getBoard(): " + error)
        }
      })
  }



}
