import { Component, OnInit } from '@angular/core';
import { DataClientsSevrvice } from '../clients.service';
import { Router, NavigationEnd } from '@angular/router';

interface DATAUSER {
  emailClient:string;
  createdLists:object[],
  id:number | null
}

interface CREATELIST {
  nameList:string;
  wordsInList:object[];
  id: null | number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor( private router: Router ){}

  ngOnInit() {
    
  }

  

}
