import {NgModule} from '@angular/core';
import {EventComponent} from './event/event';
import {IonicModule} from "ionic-angular";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(ComponentsModule)
  ],
  exports: [EventComponent]
})
export class ComponentsModule {
}
