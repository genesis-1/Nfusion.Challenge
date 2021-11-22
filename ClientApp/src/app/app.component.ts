import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BidServiceService } from './_services/bid-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private data: BidServiceService) { }

  bidMessage:string;
  AskMessage:string;
  bidsubscription: Subscription;
  asksubscription: Subscription;

  ngOnInit() {
    this.bidsubscription = this.data.bidcurrentMessage.subscribe(
      message => this.bidMessage = message,
      );
      this.asksubscription = this.data.askcurrentMessage.subscribe(
        message => this.AskMessage = message,
        );
  }
  
  ngOnDestroy() {
    this.bidsubscription.unsubscribe();
    this.asksubscription.unsubscribe();
  }

  title = 'app';


}

