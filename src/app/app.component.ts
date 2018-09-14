import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor( private router: Router ){}
  textButtonEnter:string = '';
  blockContactsDispaly:boolean = true;

  ngOnInit(){
    this.router.events.subscribe(data=>{
      if( data instanceof NavigationEnd ) {
        if(data.url === "/register"){
          this.textButtonEnter = "Log In"
        } else this.textButtonEnter = "Sing out";

        if( data.url === '/home' ) {
          this.blockContactsDispaly = false
        }
      }
    })
  }

}
