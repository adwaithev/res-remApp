import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-addrem',
  templateUrl: './addrem.component.html',
  styleUrls: ['./addrem.component.css']
})
export class AddremComponent implements OnInit {

  addForm = this.fb.group({
    date: ['', [Validators.required]],
    event: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private ds: DataService,private router:Router) { }

  ngOnInit(): void {

  }
  add() {

    if (this.addForm.valid) {
      var date = this.addForm.value.date;
      var event = this.addForm.value.event;
      var result = this.ds.add(date,event)

      if (result) {
        alert("event added")
        this.router.navigateByUrl("dashboard")
      }

    } else {
      alert("invalid form")
    }
  }
}