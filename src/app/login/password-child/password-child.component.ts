import { Component, OnInit,Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-password-child',
  templateUrl: './password-child.component.html',
  styleUrls: ['./password-child.component.css']
})
export class PasswordChildComponent implements OnInit {
  @Input() passworddata: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
