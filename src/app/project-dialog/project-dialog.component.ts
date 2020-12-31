import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ProjectData {
  name: string;
  address: string;
  description: string[];
  iconURL: string;
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss'],
})
export class ProjectDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProjectData) {}

  ngOnInit() {}
}
