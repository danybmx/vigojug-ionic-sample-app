import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { EventsPage } from '../events/events';
import { PastEventsPage } from '../past-events/past-events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  events = EventsPage;
  pastEvents = PastEventsPage;
  about = AboutPage;

  constructor() {

  }

}
