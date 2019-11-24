import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectViewComponent } from './project-view/project-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProjectViewComponent
  ],
  entryComponents: [
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
