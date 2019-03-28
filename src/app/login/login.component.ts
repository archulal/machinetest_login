import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticateService } from './autenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _authservice: AutenticateService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      emaildata: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
      }),
      passworddata: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(3)]],
      })
    })
  }

  get f() { return this.myForm.controls; }

  myEvent($event) {
    const email = 'test@yopmail.com'
    const password = 'test'
    if (this.myForm.invalid) {
      return;
    }
    if (this.myForm.value.emaildata.email == email && this.myForm.value.passworddata.password == password) {
      this.router.navigate(['home']);
    } else {
      this.error = "User name or Password Incorrect";
      // this.router.navigate(['home']);
    }

    console.log(this.myForm.value);
  }
}
