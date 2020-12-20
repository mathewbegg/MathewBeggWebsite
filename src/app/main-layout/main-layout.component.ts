import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
})
export class MainLayoutComponent implements OnInit {
  pages = [
    { name: "About Me", path: "/aboutMe" },
    { name: "Resumé", path: "/resume" },
    { name: "Projects", path: "/projects" },
  ];

  activePage = this.pages[0];

  constructor() {}

  ngOnInit() {}
}
