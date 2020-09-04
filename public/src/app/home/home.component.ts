import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';
import { BoardService } from '../board.service';
import { throwError } from 'rxjs';
// import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  board: any[];
  turn: any;
  redscore: any;
  bluescore: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private _boardService: BoardService,
  ) { }
    //BUG: numbers added ONLY if opposite color
  async ngOnInit() {
    await this.getScore()
    await this.getTurn();
    await this.getBoard();
  }

  endTurn(){
      if(this._boardService.nextTurn()){
        this.getTurn()
        this._router.navigate(['/home'])
      }
      else{
        return false
      }
  
  }
  addScore(color) {
    if (this._boardService.addscore(color)) {
      return this.getScore()
    }
    
  }
  getScore() {
    this.redscore = sessionStorage.getItem("redscore")
    this.bluescore = sessionStorage.getItem("bluescore")
    return true
  }
  async chooseCard(word: any) {
    //finds index of the word in board
    var index = this.board.findIndex(x => x.word === word);
    var cardColor = this.board[index].color;
    await this._boardService.chooseCard(index)
      .then(cardcolor => {
        console.log(index)
        console.log("chooseCard() current turn: " + this.turn)
        console.log("ChooseCard() this.board[index].color: " + this.board[index].color)
        
        //logic for checking turn vs card color chosen
        if (JSON.stringify(cardcolor) === 'yellow') {
          //switch turn
          if (this._boardService.nextTurn() == true) {
            this.getTurn();
            //refresh component
            this._router.navigate([`/home`])
          } 
        }
        else if (cardColor === 'black') {
          //else assassin and restart. Maybe have a win screen
          if(this.turn==='blue'){
            sessionStorage.setItem('redscore','8')
            this._router.navigate([`/home`]).then(()=>window.location.reload())
          }else if(this.turn ==='red'){
            sessionStorage.setItem('bluescore','9')
            this._router.navigate(['/home']).then(()=>window.location.reload())
          }
          // this._router.navigate(['start'])
          //   .then(() => window.location.reload());
        }
        else if (cardColor !== this.turn) {
          console.log("cardColor in else if chooseCard home component: " + cardColor)
          //testing
          this._boardService.addscore(cardColor)
          this.getScore()
          //change turn in boardservice/sessionstore
          this._boardService.nextTurn()
          //refresh turn in component
          this.getTurn()
          //refresh board
          this.getBoard()
          //refresh component
          this._router.navigate([`/home`])
        } else if(cardColor === this.turn){ 
          //else then they chose the right color and we can just getboard.
          console.log("this turn")
          this._boardService.addscore(this.turn)
          this.getScore()
          this.getBoard()
          //refresh component
          this._router.navigate([`/home`])
        }
      })
  }
  getTurn() {
    this._boardService.getTurn().subscribe(data => {
      try {
        console.log("this.turn in home: " + JSON.stringify(data))
        this.turn = data
        return true
      } catch (error) {
        console.log("getTurn home component error: " + error)
        return false
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

  restart() {
    this._router.navigate(['/start']).then(() => window.location.reload())
  }



}
