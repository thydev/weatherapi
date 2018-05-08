import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){

  }

  getWeather(city: String){
    // // your code here (build up your url)
    // var apikey = "7a17de6eeca64f8d252858dfa99baa2f";
    // var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $('#city').val();
    // url += "&APPID=" + apikey;
    // //url += "&units=metric" // Celsius 
    // url += "&units=imperial" //Fahrenheit
    // $.get(url, function(res) {
    //     //console.log(res);
    //     $('#weather').html("<h1>Temperature: " + res.main.temp + " °F</h1>");
    // }, 'json');

    const apikey = "7a17de6eeca64f8d252858dfa99baa2f";
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&APPID=" + apikey
            + "&units=imperial" ;
    return this._http.get(url);
  }
}
