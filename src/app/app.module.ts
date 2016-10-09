import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import * as firebase from 'firebase'; // See https://github.com/angular/angularfire2/issues/529
import { AngularFireModule } from 'angularfire2';
import { MomentModule } from 'angular2-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { config } from './config/config';
import { ListComponent } from './todos/list/list.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    LoginComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(config.FIREBASE_CONFIG, config.FIREBASE_AUTH_CONFIG),
    MomentModule,
  ],
  providers: [
    MdIconRegistry,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
