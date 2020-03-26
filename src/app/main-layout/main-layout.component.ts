import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
} from '@angular/core';
import { MatMenu } from '@angular/material';
import { ProjectViewComponent } from '../project-view/project-view.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  pages = [
    { name: 'Home', path: '' },
    { name: 'Projects', path: '/projects' },
  ];

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}
}
