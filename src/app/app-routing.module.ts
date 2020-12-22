import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectViewComponent } from './project-view/project-view.component';
import { AboutMeViewComponent } from './about-me-view/about-me-view.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';

const routes: Routes = [
  { path: 'aboutMe', component: AboutMeViewComponent },
  { path: 'resume', component: ResumeViewComponent },
  { path: 'projects', component: ProjectViewComponent },
  { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
