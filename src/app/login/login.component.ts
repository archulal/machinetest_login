import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    myForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
        emaildata: this.formBuilder.group({
          email: ['',[Validators.required, Validators.email]],
        }),
        passworddata: this.formBuilder.group({
          password: ['',[Validators.required, Validators.minLength(6)]],
        })
      })
  }

  get f() { return this.myForm.controls; }

  myEvent($event){
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
  }
  this.loading = true;
    console.log(this.myForm.value);
  }
}
