import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',],

})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    password: new FormControl('', Validators.required),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  login() {
    if(this.loginForm.invalid){
      console.log("ooooo")
    }
  }
}
