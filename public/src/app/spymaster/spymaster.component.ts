import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { map, switchMap } from 'rxjs/operators';
import { NgForm, Form } from '@angular/forms';

@Component({
  selector: 'app-spymaster',
  templateUrl: './spymaster.component.html',
  styleUrls: ['./spymaster.component.css']
})
export class SpymasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
