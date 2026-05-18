import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserData } from './user-data/user-data';

const routes: Routes = [
    {    path: '**',component: UserData}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
