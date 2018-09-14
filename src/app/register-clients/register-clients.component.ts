import { Component, OnInit } from '@angular/core';
import { DataClientsSevrvice } from '../clients.service';
import { Router } from '@angular/router';

interface Client {
  name:string;
  email:string;
  password:string;
  dataCreateAccount:number;
  userAgents:object[];
}



@Component({
  selector: 'app-register-clients',
  templateUrl: './register-clients.component.html',
  styleUrls: ['./register-clients.component.scss']
})
export class RegisterClientsComponent implements OnInit {

  dataClients:any = [];
  dataRegister = {
    dataName: '',
    dataEmail: '',
    dataPassword: '',
  }
  displayError:boolean = false;
  showErrorsInput:boolean = false;
  typeEnter = 'Log In';
  singInOrLogIn = false;
  actionWithAccount = "I already have account";

  constructor(
    private serviceClient: DataClientsSevrvice,
    private router: Router
  ) { }

  refreshDataClient(){
    this.serviceClient.getClients().subscribe(data=>{
      this.dataClients = data
    })
  }

  ngOnInit() {
    this.refreshDataClient()
    console.log( this.router.navigated )
  }

  checkValueEmail(value){
    var check:string = '';
    if(value.indexOf('@') > 1){
      check = value.slice( value.indexOf('@') , value.length)
    }
  }

  registerClient(){
    var clientAlreadyIs:boolean = false;
    this.dataClients.map(data=>{
      if(data.email === this.dataRegister.dataEmail){
        clientAlreadyIs = true
      }
    })
    if( !clientAlreadyIs ){
      let object:Client = {
        name: this.dataRegister.dataName,
        email: this.dataRegister.dataEmail,
        password: this.dataRegister.dataPassword,
        dataCreateAccount: Date.now(),
        userAgents: [
            {
                userAgent: navigator.userAgent,
                exit: false,
                LastTimeEnter: Date.now(),
                online: true,
                dataLastSeen: null
            }
        ]
      }
      this.serviceClient.postClient(object).subscribe(data=>{
        console.log( data )
      })
      this.router.navigate(["/home"])
    } else {
      this.displayError = true;
      this.showErrorsInput = true;
      this.dataRegister.dataEmail = '';
      this.dataRegister.dataPassword = '';
    }
  }

  changeTypeEnter(){
    this.dataRegister.dataName = '';
    this.dataRegister.dataEmail = '';
    this.dataRegister.dataPassword = '';
    this.singInOrLogIn = !this.singInOrLogIn;
    this.typeEnter =  this.singInOrLogIn ? 'Sing In' : 'Log In';
    this.actionWithAccount = this.singInOrLogIn ? "Create acount":"I already have account";
  }

}
