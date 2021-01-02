import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
      address: 'https://superfight.mathewbegg.com',
      description: [
        "I created a browser adaptation of the social card game 'Superfight' so I could play it with friends virtually during the COVID-19 lockdown.",
        'The client-side is an angular web app hosted from an AWS S3 bucket, it connects via socket.io to a Node.js server hosted on an AWS EC2 instance.',
      ],
      iconURL: '../../assets/superfight-icon.png',
    },
    {
      name: 'Martial Art School Student Database',
      address: 'https://tkddb-demo.mathewbegg.com',
      description: [
        'This is an in-progress prototype of a cloud-based student database system designed for a martial arts school.',
        'Student data is stored in JSON form, the application parses the data and displays/sorts each field according to configurable settings.',
        'The client-side is an angular web app hosted from an AWS S3 bucket that reads/writes data from a severless AWS backend (API Gateway -> Lambda -> DynamoDB)',
        'NOTE: For demo purposes, the app fetches randomly generated data from a mock data service.',
      ],
      iconURL: '../../assets/tkddb-icon.png',
    },
    {
      name: 'Tea Menu',
      address: 'https://tea.mathewbegg.com',
      description: [
        'The first app I created with a backend: a simple page showcasing a menu of teas.',
        'It is an angular web app hosted from an AWS S3 bucket that fetches data from a serverless AWS backend (API Gateway -> Lambda -> DynamoDB)',
      ],
      iconURL: '../../assets/tea-icon.png',
    },
    {
      name: "'Love Letter' Game Assistant",
      address: 'https://loveletter.mathewbegg.com',
      description: [
        'The first web app I created: a basic helper app for the tabletop game \'Love Letter\', in which one must keep track of "dead" and "alive" characters.',
        'It is a simple angular web app hosted from an AWS S3 bucket.',
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
