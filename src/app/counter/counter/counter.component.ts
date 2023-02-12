import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counterInCounter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onIncrementInCounter() {
    this.counterInCounter++;
  }

  onDecrementInCounter() {
    this.counterInCounter--;
  }

  onResetInCounter() {
    this.counterInCounter = 0;
  }
}
