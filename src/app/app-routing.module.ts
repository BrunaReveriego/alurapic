import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

const routes: Routes = [
  { path: 'user/flavio', component: PhotosListComponent },
  { path: 'p/add', component: PhotoFormComponent }
];

@NgModule({
  /* RouterModule sabe quais são as rotas da aplicação */
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
