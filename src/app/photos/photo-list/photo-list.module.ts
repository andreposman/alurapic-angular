import { CardModule } from './../../shared/components/card/card.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

import { PhotoModule } from './../photo/photo.module';
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],

    imports: [
        PhotoModule,
        CardModule,
        DarkOnHoverModule,
        CommonModule,
        HttpClientModule
    ]
})
export class PhotoListModule { }