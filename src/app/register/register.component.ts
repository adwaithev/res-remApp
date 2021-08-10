import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-z]*')]],
    acno: ['', [Validators.required,Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required,Validators.minLength(4), Validators.pattern('[0-9a-z]*')]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {


    if (this.registerForm.valid) {


      var uname = this.registerForm.value.uname;
      var acno = this.registerForm.value.acno;
      var pswd = this.registerForm.value.pswd;
      var result = this.ds.register(uname, acno, pswd)
      if (result) {
        alert("registation successful")
        this.router.navigateByUrl('')
      }

    } else {
      alert("invalid form")
    }
  }



}


