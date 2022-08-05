import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../services/db-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allQuotes : any[] = [];

  constructor(private dbserv : DbServiceService) { }

  ngOnInit(): void {
    this.dbserv.getAllQuotes().then(docRef => {
      this.allQuotes = docRef.docs.map(doc => doc.data());
    })
  }

}
