import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counterInOutput:number;
  constructor(
    private store: Store<{ counterInAppModule: { counterInState: number } }>
  ) {
    store.select('counterInAppModule').subscribe(data=>{
      console.log(data);
      
      this.counterInOutput=data.counterInState
    })
  }

  ngOnInit(): void {}
}
