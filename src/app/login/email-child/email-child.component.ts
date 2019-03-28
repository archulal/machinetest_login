import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-email-child',
  templateUrl: './email-child.component.html',
  styleUrls: ['./email-child.component.css']
})
export class EmailChildComponent implements OnInit {

  @Input() emaildata: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
