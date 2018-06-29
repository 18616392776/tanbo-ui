import { Component, HostBinding, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ui-tab-view-item',
  templateUrl: './tab-view-item.component.html'
})
export class TabViewItemComponent {
  @HostBinding('class.ui-active')
  set active(value: boolean) {
    this._active = value;
    if (value) {
      this.changeDetectorRef.reattach();
    } else {
      this.changeDetectorRef.detach();
    }
  }

  get active() {
    return this._active;
  }

  private _active: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }
}