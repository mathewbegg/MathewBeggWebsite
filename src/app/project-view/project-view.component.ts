import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit {
  projects = [
    {
      name: 'Tea Menu',
      address: 'http://tea.mathewbegg.com',
      description: 'This is a description',
    },
    {
      name: "'Love Letter' Game Assistant",
      address: 'http://loveletter.mathewbegg.com',
      description: 'This is a description',
    },
    {
      name: "'Superfight' Social Tabletop Game",
      address: 'http://superfight.mathewbegg.com',
      description: 'This is a description',
    },
  ]

  constructor() {}

  ngOnInit() {}
}
