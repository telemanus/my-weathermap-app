import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-myweathermap',
  templateUrl: './myweathermap.component.html',
  styleUrls: ['./myweathermap.component.css']
})
export class MyweathermapComponent implements OnInit {

    private results = [];

    searchForm = new FormGroup(
        {
          cityname: new FormControl(''),
        }
    );

  constructor (private httpClient: HttpClient) {
    httpClient.get('https://api.openweathermap.org/data/2.5/weather?appID=5104ab5fe2fff1dd0c66d19d379048b7&q=${changes}')
    .subscribe(data => {
      console.log(data);
  }

 /* 
  ngOnInit() {

  }
*/

}
