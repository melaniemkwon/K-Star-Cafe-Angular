import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatToolbarModule, 
  MatListModule, 
  MatGridListModule, 
  MatCardModule
} from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule
    // FormsModule,
    // HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
