import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
   loanDetails: any;
   statusType: string;
   url: string = 'http://192.168.8.103:9000';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getLoanDetails();
  }

  getLoanDetails() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    this.http.get<any>(this.url + '/loan/get', {headers: headers}).subscribe(res => {
        console.log(res);
        if (res.data != null) {
          this.loanDetails = res.data;
        }
      },
      err => {
        console.log(err);
        console.log('Error occured');
      }
    );
  }

  setStatusType(statusType){
    console.log(statusType);
    this.statusType =statusType;
  }
}
