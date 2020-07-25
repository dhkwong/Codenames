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
    this.getTurn();
    //gets turn. moving to getTurn method
    // this.turn = this._boardService.getTurn().subscribe(data => {
    //   console.log("this.turn in home: " + JSON.stringify(data))
    //   return data;
    // })
  }

  async chooseCard(word: any) {
    //finds index of the word in board
    var index = await this.board.findIndex(x => x.word === word);
    await this._boardService.chooseCard(index)
      .then(data => {
        //from the tests below, we can see that we're sending data correctly to the service. So the issue lies with how we're storing and then re-retrieving the turn we've gotten
        console.log(index)
        console.log("chooseCard() in home data: "+data)
        console.log("ChooseCard() this.board[index].color: "+this.board[index].color)
        if (data == 'yellow') {
          //switch turn
          this._boardService.nextTurn();
          this.getTurn();
          //refresh component
          this._router.navigate([`/home`])
        }
        // if player chooses wrong color, then switch turn
        if (this.board[index].color != this.turn) {
          this._boardService.nextTurn()
          
          
          this._router.navigate(['/home'])
        }
      })
  }
  getTurn() {
    this._boardService.getTurn().subscribe(data => {
      console.log("this.turn in home: " + JSON.stringify(data))
      this.turn = JSON.stringify(data)
      // return JSON.stringify(data)
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
