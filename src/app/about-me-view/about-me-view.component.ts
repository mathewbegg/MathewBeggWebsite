import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me-view',
  animations: [
    trigger('changePicture', [
      state(
        'display',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('display => hide', [animate('0.5s')]),
      transition('hide => display', [animate('0.5s')]),
    ]),
  ],
  templateUrl: './about-me-view.component.html',
  styleUrls: ['./about-me-view.component.scss'],
})
export class AboutMeViewComponent implements OnInit {
  constructor() {}

  pictures = [
    'ski-picture.png',
    'bridge-selfie.jpg',
    'jax-rock.jpg',
    'reflection.jpg',
    'mountain-branch.jpg',
    'polka-dots.jpg',
    'winter-picture.jpg',
    'sausage-cooking.jpg',
    'island-picture.jpg',
  ];

  picturePath = '../../assets/';
  displayPicture = true;
  currentPicture = 0;
  timer = interval(5000); //5 seconds
  timerSubscription: Subscription;

  ngOnInit() {
    this.timerSubscription = this.timer.subscribe(() => this.switchPicture());
  }

  switchPicture() {
    this.displayPicture = false;
    setTimeout(() => {
      this.currentPicture = (this.currentPicture + 1) % this.pictures.length;
    }, 500);
    setTimeout(() => {
      this.displayPicture = true;
    }, 600);
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}
