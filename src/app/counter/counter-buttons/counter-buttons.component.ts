import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();
  // c;
  constructor() {}

  ngOnInit(): void {}

  onIncrement(){
    // this.increment.emit(this.c);
    this.increment.emit();
  }
  onDecrement(){
    // this.increment.emit(this.c);
    this.decrement.emit();
  }
  onReset(){
    // this.increment.emit(this.c);
    this.reset.emit();
  }

}
