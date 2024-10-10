import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedSubjectService {

  private Details=new ReplaySubject(3);

  currentmsg:Observable<any>=this.Details.asObservable();

  profileDetails(msg:any)
  {
    this.Details.next(msg);
  }

  constructor() { }
}
