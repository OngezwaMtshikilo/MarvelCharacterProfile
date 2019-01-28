import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagecharactersComponent } from './managecharacters/managecharacters.component';

const routes: Routes = [
  {
    path:'',
    component:ManagecharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
