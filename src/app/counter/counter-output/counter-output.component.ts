import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  @Input() counterInOutput: any;
  // counterInOutput: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
