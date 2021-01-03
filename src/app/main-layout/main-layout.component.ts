import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
  logoDirectoryPath = '../../assets/tech-logos/';
  logos = [
    'aws-logo.png',
    'angular-logo.png',
    'ngrx-logo.png',
    'html5-logo.png',
    'css3-logo.png',
    'sass-logo.png',
    'nodejs-logo.png',
    'typescript-logo.png',
    'java-logo.png',
    'c-logo.png',
    'mongodb-logo.png',
    'git-logo.png',
    'gocd-logo.png',
    'redux-logo.png',
  ].map((logo) => {
    return { path: this.logoDirectoryPath + logo };
  });

  constructor(
    private router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'linkedIn',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/linkedin-icon.svg')
    );
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/github-icon.svg')
    );
  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      this.activePage =
        this.pages.filter((page) => page.path === event.urlAfterRedirects)[0] ||
        this.activePage;
    });
  }
}
