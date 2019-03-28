import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-child',
  templateUrl: './submit-child.component.html',
  styleUrls: ['./submit-child.component.css']
})
export class SubmitChildComponent implements OnInit {
 @Output() myEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(button){
    this.myEvent.emit(button);
} 
}
