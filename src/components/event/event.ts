import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the EventComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event',
  templateUrl: 'event.html'
})
export class EventComponent {

  @Input() public event: any;
  @Output() navigate = new EventEmitter();

  constructor() {
  }

}
