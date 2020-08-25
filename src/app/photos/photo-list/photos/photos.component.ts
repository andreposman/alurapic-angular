import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = []

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos)
      this.rows = this.groupColumns(this.photos)
  }
  groupColumns(photos: Photo[]) {
    const newRows = []
    const PHOTOS_IN_ROW = 3;

    for (let index = 0; index < photos.length; index += PHOTOS_IN_ROW) {
      newRows.push(photos.slice(index, index + PHOTOS_IN_ROW))
    }

    return newRows
  }

}
