import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import{Router} from '@angular/router'
import { LoginServiceService } from 'src/app/services/login/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public fb: FormBuilder, public loginService: LoginServiceService, public router: Router) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.router.events.subscribe(event => {
      console.log('event---->', event)
    })
  }

  ngOnInit() {
  }

  login(val) {
    this.loginService.login(val);
  }

}
