import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatTooltipModule,
  MatDialogModule,
  MatRippleModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectViewComponent } from './project-view/project-view.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeViewComponent } from './about-me-view/about-me-view.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProjectViewComponent,
    AboutMeViewComponent,
    ResumeViewComponent,
    ProjectDialogComponent,
  ],
  entryComponents: [ProjectViewComponent, ProjectDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    AppRoutingModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
