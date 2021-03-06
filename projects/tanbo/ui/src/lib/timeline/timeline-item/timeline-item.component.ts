import { Component, Input, HostBinding } from '@angular/core';

import { attrToBoolean } from '../../utils';

@Component({
  selector: 'ui-timeline-item',
  templateUrl: './timeline-item.component.html'
})
export class TimelineItemComponent {
  @Input() @HostBinding('class.ui-checked')
  set checked(v: boolean) {
    this._checked = attrToBoolean(v);
  }

  get checked() {
    return this._checked;
  }

  private _checked = false;
}
