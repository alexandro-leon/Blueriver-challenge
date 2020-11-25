import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    buildingsArray = [];
    BRLink = "https://applefacilities.review.blueriver.com";
    APIEndpoint = "https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode%5B0%5D=sqo&or&locationCode%5B2%5D=nwr&or&locationCode%5B4%5D=scv&or&locationCode%5B6%5D=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600";
    constructor(private http: HttpClient){}

// Implementation of the lifecycle hook to get the data as soon as the app starts.
ngOnInit(){
  this.fetchBuildings();
}

// Property to handle the GET request from the server.
    private fetchBuildings(){
      this.http.get(this.APIEndpoint)
      // We map the results to an array in order to access the property in the objects.
      .pipe(map(responseData => {
        const bArray = [];
        for (const data in responseData){
          bArray.push(responseData[data])
        }
        return bArray[0].items;
      }))
      .subscribe(res =>{
        this.buildingsArray = res;
      })
    }
}
