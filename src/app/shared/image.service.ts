import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  displayedImages = [];

  getImages() {
    return (this.displayedImages = images.slice(0));
  }

  getImage(id: number) {
    return images.slice(0).find((image) => image.id == id);
  }
}

const images = [
  {
    id: 1,
    category: 'boats',
    caption: 'Boaty McBoatface',
    url: 'assets/img/boat_01.jpg',
  },
  {
    id: 2,
    category: 'cars',
    caption: 'Slammed patina Karmann Ghia',
    url: 'assets/img/car_01.jpg',
  },
  {
    id: 3,
    category: 'boats',
    caption: 'Tuna fishing boat',
    url: 'assets/img/boat_02.jpg',
  },
  {
    id: 4,
    category: 'planes',
    caption: 'Cessna 172 Skyhawk',
    url: 'assets/img/plane_01.jpg',
  },
  {
    id: 5,
    category: 'planes',
    caption: 'F-14 Tomcat at sunset',
    url: 'assets/img/plane_02.jpg',
  },
  {
    id: 6,
    category: 'cars',
    caption: '1981 DeLorean DMC-12',
    url: 'assets/img/car_02.jpg',
  },
  {
    id: 7,
    category: 'boats',
    caption: 'Bayliner 5288 Pilot House Motoryacht',
    url: 'assets/img/boat_03.jpg',
  },
  {
    id: 8,
    category: 'cars',
    caption: 'Datsun 280Z',
    url: 'assets/img/car_04.jpg',
  },
  {
    id: 9,
    category: 'cars',
    caption: 'Jeep Grand Wagoneer',
    url: 'assets/img/car_03.jpg',
  },
  {
    id: 10,
    category: 'planes',
    caption: 'Pitts Special biplane',
    url: 'assets/img/plane_03.jpg',
  },
  {
    id: 11,
    category: 'boats',
    caption: 'Bavaria Cruiser',
    url: 'assets/img/boat_04.jpg',
  },
  {
    id: 12,
    category: 'planes',
    caption: 'Cirrus SR22',
    url: 'assets/img/plane_04.jpg',
  },
];
