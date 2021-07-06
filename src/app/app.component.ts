import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photos: any[] = [];


  //injeção de dependência
  //constructor(http: HttpClient) {
  //observavel
  //const observable = http.get('http://localhost:3000/flavio/photos').subscribe();

  //this.photos é photos = [];


  /* http
    .get<Object[]>('http://localhost:3000/flavio/photos')
    .subscribe(photos => {
      console.log(photos);
      this.photos = photos,
      err => console.log(err.message)
    });

}*/

  constructor(private photoService: PhotoService) {
  }

  
  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos =>
        this.photos = photos
      );
   
  }


}


