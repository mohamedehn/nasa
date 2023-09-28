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

    this.nasaService.getImageOfTheDay().subscribe(imgFromNasa => {
    this.imgOfTheDay = imgFromNasa;
    console.log(imgFromNasa);
    this.imageUrl = imgFromNasa.url;
    })
  }

}
