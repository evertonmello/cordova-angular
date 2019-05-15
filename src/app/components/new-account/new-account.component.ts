import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  value = 25;
  step = 1
  constructor() { }

  ngOnInit() {
  }
  nextStep(){
    this.step = this.step + 1;  
    this.value = this.step * 25;
  }

}
