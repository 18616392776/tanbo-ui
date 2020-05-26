import { Component, Optional, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavItemService } from '../nav-item/nav-item.service';
import { NavService } from './nav.service';
import { attrToBoolean } from '../../utils';

@Component({
  selector: 'ui-nav',
  templateUrl: './nav.component.html',
  providers: [
    NavService
  ]
})
export class NavComponent implements OnDestroy, OnInit {
  @Input()
  @HostBinding('class.ui-thumbnail')
  set thumbnail(v: any) {
    this._thumbnail = attrToBoolean(v);
    this.navService.thumbnail.next(this._thumbnail);
  }

  get thumbnail() {
    return this._thumbnail;
  }

  @Input() @HostBinding('class.ui-open')
  set expand(v: boolean) {
    this._expand = attrToBoolean(v);
  }

  get expand() {
    return this._expand;
  }

  private _expand = false;
  private _thumbnail = false;
  private sub: Subscription;

  constructor(@Optional() private navItemService: NavItemService,
              private navService: NavService) {
  }

  ngOnInit() {
    if (this.navItemService) {
      this.navItemService.publishMenu(true);
      this.navItemService.changeExpandStatus(this.expand);
      this.sub = this.navItemService.expand.subscribe(b => {
        this.expand = b;
      });
    } else {
      this.expand = true;
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.navItemService.publishMenu(false);
      this.sub.unsubscribe();
    }
  }
}
