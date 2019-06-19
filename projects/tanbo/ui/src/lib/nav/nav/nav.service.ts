import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavService {
  thumbnail = new BehaviorSubject<boolean>(false);
}
