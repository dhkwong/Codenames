import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpymasterComponent } from './spymaster/spymaster.component';
import { StartComponent } from './start/start.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; //allows ngforms
import { StorageServiceModule } from 'ngx-webstorage-service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpymasterComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
