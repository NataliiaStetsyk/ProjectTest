import {Injectable} from '@angular/core';

@Injectable ()

export class ImageService{
    visibleImage = [];  
   getImage(){
return this.visibleImage =IMAGES.slice(0);
   }
}
const IMAGES = [
    {"id":1, "category": "test1", "caption": "Image1","url": "assets/img/1.jpg"},
    {"id":2, "category": "test2", "caption": "Image2","url": "assets/img/2.jpg"},
    {"id":3, "category": "test3", "caption": "Image3","url": "assets/img/3.jpg"},
    {"id":4, "category": "test4", "caption": "Image4","url": "assets/img/4.gif"},
    {"id":5, "category": "test5", "caption": "Image5","url": "assets/img/5.jpg"}
]