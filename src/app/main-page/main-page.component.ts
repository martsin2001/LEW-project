import { Component, OnInit } from '@angular/core';
import { DataClientsSevrvice } from '../clients.service';

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

  dataUser:DATAUSER[] = [];

  dataCreateList:CREATELIST = {
    nameList: '',
    wordsInList: [],
    id: null
  }

  dataInputs = {
    word: '',
    translate: ''
  }


  constructor(private service: DataClientsSevrvice) { }

  refreshDataUser(){
    this.service.getDataUser(1).subscribe((data:any)=>{
      this.dataUser.push(data);
    })
  }

  ngOnInit() {
    this.refreshDataUser()
  }

  switchButtonBetweenLists(event):void{
    let buttons:any = document.getElementsByClassName('button-top');
    let arrWithButtons:any[] = [];
    for (let i = 0; i < buttons.length; i++) {
      arrWithButtons.push( buttons[i] )      
    }
    arrWithButtons.map((data:any)=>{
      if( data.className === event ){
        data.style.borderBottom = "3px solid gray";
      } else {
        data.style.borderBottom = "3px solid rgb(216, 216, 216)";
        data.style.background = 'white;'
      }
    })
  }

  addWordInWordsInList():void{
    this.dataCreateList.wordsInList.push(Object.assign({}, this.dataInputs));
    this.dataInputs.word = '';
    this.dataInputs.translate = '';
    document.getElementById('word').focus();
  }

  deleteWordFromList(data):void{
    let index:number =  this.dataCreateList.wordsInList.indexOf(data);
    this.dataCreateList.wordsInList.splice( index , 1 );
  }

  createList(){
    let id:number = this.dataUser[0].id;
    this.dataCreateList.id = this.dataUser[0].createdLists.length+1 ;
    this.dataUser[0].createdLists.push(
      Object.assign({}, this.dataCreateList)
    );
    let data = this.dataUser[0];
    this.service.updateDataUser(id,data).subscribe(data=>{
      console.log( data )
    }) 
  }

}
