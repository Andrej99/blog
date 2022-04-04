import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./posts/posts.component";
import {PostFullComponent} from "./post-full/post-full.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path:"main", component:MainPageComponent},
  {path:"posts", component:PostsComponent},
  {path:"post/:id", component:PostFullComponent},
  {path: "dashboard", component:DashboardComponent}
  
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
