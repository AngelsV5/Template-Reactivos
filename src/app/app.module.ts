import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfComponent } from './inf/inf.component';
import { InfReactiveComponent } from './inf-reactive/inf-reactive.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InfComponent,
    InfReactiveComponent,
    HomeComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
