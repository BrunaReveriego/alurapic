import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shared/componentes/card/card.module';
import { PhotoModule } from '../photo/photo.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosListComponent } from './photos-list.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
    declarations: [
        PhotosListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription
    ],
    imports:[
        CommonModule,
        PhotoModule,
        CardModule
    ]
})
export class PhotosListModule {}