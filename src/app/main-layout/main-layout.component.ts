import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  pages = [
    { name: 'About Me', path: '/aboutMe' },
    { name: 'Resumé', path: '/resume' },
    { name: 'Projects', path: '/projects' },
  ];

  activePage;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      this.activePage =
        this.pages.filter((page) => page.path === event.urlAfterRedirects)[0] ||
        this.activePage;
    });
  }
}
