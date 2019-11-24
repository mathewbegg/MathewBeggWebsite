import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { MatMenu } from '@angular/material';
import { ProjectViewComponent } from '../project-view/project-view.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('pageContent', {read: ViewContainerRef, static: true})
  pageContent: ViewContainerRef;

  pages = [
    {name: 'Projects', component: ProjectViewComponent}
  ]

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  viewComponent(component: any) {
    this.pageContent.clear();
    this.pageContent.createComponent(this.resolver.resolveComponentFactory(component));
  }

}
