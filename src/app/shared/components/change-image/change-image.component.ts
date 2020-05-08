import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-change-image',
  templateUrl: './change-image.component.html',
  styleUrls: ['./change-image.component.scss'],
  animations: [
    trigger('changeImage', [
      state('on', style({
        opacity: 1,
      })),
      state('off', style({
        opacity: 0
      })),
      transition('on <=> off', [
        animate('0.5s')
      ])
    ])
  ]
})
export class ChangeImageComponent implements OnInit {

  @Input() firstImageUrl = '';
  @Input() secondImageUrl = '';
  @Input() set firstImageSelected(value: boolean) {
    this.setImageSelected(value);
  }

  imageUrl = '';

  imageHeight = 600;
  imageWidth = 600;

  firstImageState = '';
  secondImageState = '';

  constructor() { }

  ngOnInit(): void {
  }

  setImageSelected(firstImageSelected: boolean): void {
    this.firstImageState = firstImageSelected ? 'on' : 'off';
    this.secondImageState = firstImageSelected ? 'off' : 'on';
    this.imageUrl = firstImageSelected ? this.firstImageUrl : this.secondImageUrl;
  }

}
