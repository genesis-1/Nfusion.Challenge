import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidServiceService {

  private bidMessageSource = new BehaviorSubject('');
  private askMessageSource = new BehaviorSubject('');
  
  bidcurrentMessage = this.bidMessageSource.asObservable();
  askcurrentMessage = this.askMessageSource.asObservable();

  constructor() { }

  changeMessage(askmessage: string, bidmessage: string) {
    this.bidMessageSource.next(bidmessage);
    this.askMessageSource.next(askmessage);
  }


 
}
