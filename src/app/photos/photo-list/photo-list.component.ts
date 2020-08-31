import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';


import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: String = ''
  hasMore: boolean = true
  currentPage: number = 1
  userName: string = ''

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.userName
    this.photos = this.activatedRoute.snapshot.data.photos
  }

  loadMore() {
    this.photoService.
      listPhotosFromUserPaginated(this.userName, this.currentPage++)
      .subscribe(userPhotos => {
        this.filter = ''
        this.photos = this.photos.concat(userPhotos)
        if (!this.photos.length)
          this.hasMore = false
      })
  }
}
