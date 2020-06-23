import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnChanges {
  title = 'Transportation Photos';
  @Input() filterBy?: string = 'all';
  displayedImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.displayedImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.displayedImages = this.imageService.getImages();
  }
}
