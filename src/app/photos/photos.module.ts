import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

@NgModule({
    declarations: [PhotoComponent,
        PhotosListComponent
    ],
    imports: [HttpClientModule]
})
export class PhotosModule { }
