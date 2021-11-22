import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BidServiceService } from '../_services/bid-service.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit,OnDestroy {


  constructor(private _router: Router,private dataSaver: BidServiceService,private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  BidForm: FormGroup;  
  submitted = false;   
  EventValue: any = "Save"; 
  
  askValue: string = "";
  bidValue: string = "";

  bidMessage:string;
  askMessage:string;
  bidsubscription: Subscription;
  asksubscription: Subscription;
  
  ngOnInit(): void {  
  
    this.asksubscription = this.dataSaver.askcurrentMessage.subscribe(message => this.askMessage = message);
    this.bidsubscription = this.dataSaver.bidcurrentMessage.subscribe(message => this.bidMessage = message);

    this.BidForm = new FormGroup({  
      askformValue: new FormControl("",[Validators.required]),        
      bidformValue: new FormControl("",[Validators.required]),    
    })    
  } 

  Save() {
    this.submitted = true;
     this.bidValue = this.BidForm.get('bidformValue').value;
     this.askValue = this.BidForm.get('askformValue').value;

     this.dataSaver.changeMessage(this.askValue, this.bidValue);

     this._router.navigateByUrl('/fetch-data');
  } 

  ngOnDestroy() {
    this.asksubscription.unsubscribe();
    this.bidsubscription.unsubscribe();
  }






}
