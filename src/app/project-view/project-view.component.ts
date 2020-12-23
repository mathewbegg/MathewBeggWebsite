import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {
  ProjectData,
  ProjectDialogComponent,
} from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit {
  projects: ProjectData[] = [
    {
      name: "'Superfight' Social Tabletop Game",
      address: 'http://superfight.mathewbegg.com',
      description: [
        "I created a browser adaptation of the social card game 'Superfight' so I could play it with friends virtually during the COVID-19 lockdown.",
        'The client-side is an angular app hosted from an AWS S3 bucket, it connects via socket.io to a Node.js server hosted on an AWS EC2 instance.',
      ],
      iconURL: '../../assets/superfight-icon.png',
    },
    {
      name: 'Tea Menu',
      address: 'http://tea.mathewbegg.com',
      description: [
        'The first app I created with a backend: a simple page showcasing a menu of teas.',
        'It is an angular app hosted from an AWS S3 bucket that fetches data from a serverless AWS backend (API Gateway -> Lambda -> DynamoDB)',
      ],
      iconURL: '../../assets/tea-icon.png',
    },
    {
      name: "'Love Letter' Game Assistant",
      address: 'http://loveletter.mathewbegg.com',
      description: [
        'The first web app I created: a basic helper app for the tabletop game \'Love Letter\', in which one must keep track of "dead" and "alive" characters.',
        'It is a simple angular app hosted from an AWS S3 bucket.',
      ],
      iconURL: '../../assets/loveletter-icon.png',
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(projectData: ProjectData) {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: projectData,
      maxWidth: 'max(min(400px,90vw),25vw)',
    });
  }
}
