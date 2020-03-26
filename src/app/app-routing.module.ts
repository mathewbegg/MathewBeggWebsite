import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { HomeViewComponent } from './home-view/home-view.component';

const routes: Routes = [
  { path: 'projects', component: ProjectViewComponent },
  { path: '', component: HomeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
