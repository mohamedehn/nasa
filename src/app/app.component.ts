import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nasa';

  public imgOfTheDay! : any;

  imageUrl : string = '';

  constructor(public nasaService : NasaService){}

  ngOnInit(): void {

    const imageUrl = "https://api.nasa.gov/planetary/apod?api_key=Twisz2wDRJsAHoqdW3LtnWzoJA04d8atgGgOiIIU"

    this.nasaService.getImageOfTheDay().subscribe(imgFromNasa => {
    this.imgOfTheDay = imgFromNasa;
    console.log(imgFromNasa);
    this.imageUrl = imgFromNasa.url;
    })
  }

}
