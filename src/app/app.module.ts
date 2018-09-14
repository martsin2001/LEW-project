// IMPORT MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'; 


// IMPORT COMPONENTS
import { AppComponent } from './app.component';
import { DataClientsSevrvice } from './clients.service';
import { RegisterClientsComponent } from './register-clients/register-clients.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NameDirective } from './register-clients/register.directive';
import { MainModule } from './main-page/main-page.module';
import {MatDialogModule} from '@angular/material/dialog';
// import { NameDirective } from './register-clients/register.directive';


const router:Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: "register", component: RegisterClientsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterClientsComponent,
    MainPageComponent,
    NameDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    MainModule,
    MatDialogModule
  ],
  providers: [DataClientsSevrvice],
  bootstrap: [AppComponent]
})
export class AppModule { }
