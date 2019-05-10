import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inputView = false;
  constructor() { }

  ngOnInit() {
  }

  showInput(){
    this.inputView = true;
  }

}
