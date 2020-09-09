import { Component, OnInit } from '@angular/core';
import {ngMod} from '@angular/forms';

@Component({
  selector: 'app-selectnumber',
  templateUrl: './selectnumber.component.html',
  styleUrls: ['./selectnumber.component.css']
})
export class SelectnumberComponent implements OnInit {
  num = '';
  constructor() { }

  ngOnInit(): void {
  }

}
