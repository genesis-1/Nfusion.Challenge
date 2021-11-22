import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BidServiceService } from '../_services/bid-service.service';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent  implements OnInit,OnDestroy{
  public bidList: DataDto[];
  public changedList: DataDto[];
  bidsubscription: Subscription;
  asksubscription: Subscription;
  bidMessage:string;
  askMessage:string;

  

  constructor(private _router: Router,private dataSaver: BidServiceService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this._router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnDestroy(): void {
    this.asksubscription.unsubscribe();
    this.bidsubscription.unsubscribe();
  }

  ngOnInit(): void {
    
    this.asksubscription = this.dataSaver.askcurrentMessage.subscribe(message => this.askMessage = message);
    this.bidsubscription = this.dataSaver.bidcurrentMessage.subscribe(message => this.bidMessage = message);

    this.http.get<DataDto[]>(this.baseUrl + 'api/MetalInfo').subscribe(result => {
      if (this.askMessage === '' && this.bidMessage === '') {
        this.bidList = result;
      } else {
        this.bidList = result;
        for (let i = 0; i < this.bidList.length; i++) {
          console.log(i);
          this.bidList[i]["dataDto"].bid = Number.parseInt(this.bidMessage);
          this.bidList[i]["dataDto"].ask = Number.parseInt(this.askMessage);
        }
        this.askMessage = '';
        this.bidMessage = '';
        this.dataSaver.changeMessage(this.askMessage, this.bidMessage);
        
      }

    }, error => console.error(error));
  }
}



interface DataDto {
  symbol: string;
  bid: number;
  ask: number;
  oneDayChange: number;
  oneDayPercentChange: number;
}
