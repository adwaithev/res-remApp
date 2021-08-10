import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewrem',
  templateUrl: './viewrem.component.html',
  styleUrls: ['./viewrem.component.css']
})
export class ViewremComponent implements OnInit {


  events:any

  constructor(public ds:DataService) {
    this.events=this.ds.getReminders()
   }

  ngOnInit(): void {
  }

}
