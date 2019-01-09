import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventsPage } from "../pages/events/events";
import { PastEventsPage } from "../pages/past-events/past-events";
import { HttpClientModule } from "@angular/common/http";
import { ComponentsModule } from "../components/components.module";
import { registerLocaleData } from "@angular/common";
import localeEs from '@angular/common/locales/es';
import {EventPage} from "../pages/event/event";

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EventPage,
    EventsPage,
    PastEventsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    EventsPage,
    EventPage,
    PastEventsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: 'es'},
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
