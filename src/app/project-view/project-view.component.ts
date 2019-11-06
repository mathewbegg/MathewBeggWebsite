import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  links = [
    {
      name: 'Basketball',
      address: 'http://basketball.mathewbegg.com'
    },
    {
      name: 'Love Letter',
      address: 'http://loveletter.mathewbegg.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
