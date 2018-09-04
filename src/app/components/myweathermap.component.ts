import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';
import {Observable, of} from  'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-myweathermap',
  templateUrl: './myweathermap.component.html',
  styleUrls: ['./myweathermap.component.css']
})

export class MyweathermapComponent implements OnInit {

  private result = {};

  searchForm = new FormGroup(
      {
        cityname: new FormControl(''),
      }
  );

  constructor (private httpClient: HttpClient) {

    /*
    console.log(this.searchForm.value.cityname);
    httpClient.get('https://api.openweathermap.org/data/2.5/weather?appID=5104ab5fe2fff1dd0c66d19d379048b7&q=${this.searchForm.value.cityname}')
    .subscribe((data:any) => {  
      console.log(data);
      });
    */
    }
    

  ngOnInit() {
    const cityField = this.searchForm.get('cityname');
    console.log(cityField);
    let debounce = cityField.valueChanges.pipe (
      debounceTime(1000),
      distinctUntilChanged()
    );
    debounce.subscribe(changes => {
      console.log(changes);
      this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?appID=5104ab5fe2fff1dd0c66d19d379048b7&q=${changes}`)
      .subscribe((data:any)=>{
        console.log("data>>>", data);
        this.result = data.main;
      })

    }

    )
    
    /*
    this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?appID=5104ab5fe2fff1dd0c66d19d379048b7&q=${this.searchForm.value.cityname}')
    .subscribe((data:any) => {  
      console.log(data);
      });
      */

  }


}
