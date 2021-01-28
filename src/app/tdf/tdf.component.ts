import { Component, OnInit } from '@angular/core';
import { Form } from './form';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  firstName = '';
  cl = '';

  constructor() { }

  ngOnInit(): void {
  }

}
