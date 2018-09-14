import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CreateListComponent } from './create-list/create-list.component';
import { MainPageComponent } from './main-page.component';

const router: Routes = [
    { 
        path: "home", 
        children:[
            {
                path: '',
                component: MainPageComponent
            },
            {
                path: 'create-list', 
                component: CreateListComponent
            }
        ],
    }
]

@NgModule({
    declarations: [
        CreateListComponent
    ],
    imports: [
      FormsModule,
      RouterModule.forChild(router)
    ],
    providers: [],
  })
  export class MainModule { }