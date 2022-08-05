import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbServiceService } from '../services/db-service.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  constructor(private dbServ : DbServiceService) { }

  ngOnInit(): void {
  }

  quote = new FormControl("", [
    Validators.required
  ])

  quoteForm = new FormGroup({
    quote : this.quote
  })

  save(){
    // console.log("Quote: "+this.quote.value);
    this.dbServ.saveQuote(this.quote.value);
  }

  reset(){
    this.quoteForm.reset();
  }

}
