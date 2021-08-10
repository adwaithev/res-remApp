import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
   this.getDetails()
  }

  currentuser = ""
  currentacc = ""

  user: any = {
    1000: { acno: 1000, username: "userone", password: "one", event: [] },
    1001: { acno: 1001, username: "usertwo", password: "two", event: [] },
    1002: { acno: 1002, username: "userthree", password: "three", event: [] }
  }


  saveDetails() {
    localStorage.setItem("user", JSON.stringify(this.user))

    if (this.currentuser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentuser))
    }
    if (this.currentacc) {
      localStorage.setItem("currentacc", JSON.stringify(this.currentacc))
    }
  }

  getDetails() {
    if (localStorage.getItem("user"))
      this.user = JSON.parse(localStorage.getItem("user") || "")

    if (localStorage.getItem("currentUser")) {
      this.currentuser = JSON.parse(localStorage.getItem("currentuser") || "")
    }
    if (localStorage.getItem("currentacc")) {
      this.currentacc = JSON.parse(localStorage.getItem("currentacc") || "")
    }
  }


  getReminders() {
    return this.user[this.currentacc].event
  }

  register(username: any, acno: any, password: any) {
    let accDetails = this.user
    if (acno in accDetails) {
      alert("user exists please login")
      return false
    } else {
      accDetails[acno] = {
        username,
        acno,
        password,
        event: []
      }
      this.saveDetails();
      return true
    }
  }

  login(acno: any, password: any) {
    let accDetails = this.user;
    if (acno in accDetails) {
      if (password == accDetails[acno]["password"]) {
        this.currentacc = acno;
        this.currentuser = accDetails[acno]["username"]
        this.saveDetails();
        return true;

      } else {
        alert("incorrect password")
        return false;
      }
    }
    else {
      alert("invalid user,please sign in")
      return false;
    }
  }

  add(date: any, event: any) {

    let accDetails = this.user
      accDetails[this.currentacc]["event"].push({
        event: event,
        date: date

      })
    this.saveDetails()
    return true
  }



}
