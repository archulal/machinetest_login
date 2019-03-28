import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AutenticateService {

  constructor() { }
  
  login(userdata){
    const email = 'test@yopmail.com'
    const password = 'test'
    let response;
    if (userdata.emaildata.email == email && userdata.passworddata.password == password) {
      response = {
        status: "success",
        data: "user sucessfully login"
      }
      return response
    }else{
      response = {
        status: "fail",
        data: "user login failed"
      }
      return response
    }
  }
}
