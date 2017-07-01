import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import {ChartsModule} from 'ng2-charts/charts/charts';
// import '../../node_modules/chart.js/dist/Chart.bundle.min.js';

import { MenuService } from "../services/menuService";
import { NoteService } from "../services/noteService";
import { DataService } from "../services/dataService";
import { FilterService } from "../services/sharedServices/filterService";
import { DatabaseService } from "../services/sharedServices/databaseService";
import { APIService } from "../services/sharedServices/apiService";
import { UserService } from "../services/userService";
import { StaffService } from "../services/staffService";
import { CodeService } from "../services/codeService";
import { ChartService } from "../services/chartservice";
import { MessageService } from "../services/sharedServices/messageService";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // ChartsModule,
    HttpModule,
    IonicStorageModule.forRoot(
      {
        name: "_hrisDB",
        driverOrder: ['sqlite', 'indexedDB', 'websql']
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MenuService,
    DataService,
    FilterService,
    DatabaseService,
    APIService,
    NoteService,
    UserService,
    StaffService,
    CodeService,
    ChartService,
    MessageService
  ]
})
export class AppModule { }
