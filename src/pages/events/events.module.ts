import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import {EventComponent} from "../../components/event/event";

@NgModule({
  declarations: [
    EventsPage,
  ],
  entryComponents: [
    EventComponent,
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
  ],
})
export class EventsPageModule {}
