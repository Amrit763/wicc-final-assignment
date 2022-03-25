import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  
  //   slides = [
  //     {id: 1, img: "./../../../assets/images/pic1.jpeg"},
  //     {id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff"},
  //     {id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff"},
  //     {id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff"},
  //     {id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff"},
  //     {id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff"},
  //     {id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  //   ];

}
