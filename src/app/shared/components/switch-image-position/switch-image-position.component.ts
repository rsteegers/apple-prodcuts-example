import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch-image-position',
  templateUrl: './switch-image-position.component.html',
  styleUrls: ['./switch-image-position.component.scss']
})
export class SwitchImagePositionComponent implements OnInit {

  @Input() set value(value: number) {
    this.setOpacity(value);
    this.setMarginLeft(value);
  }

  @Input() leftImageUrl = '';
  @Input() rigthImageUrl = '';

  minOpacity = 0;
  maxOpacity = 1;

  imageHeight = 600;
  imageWidth = 330;

  // Image left
  leftImageOpacity = this.maxOpacity;
  leftImageMarginLeft = 0;

  // Image rigth
  rigthImageOpacity = this.minOpacity;
  rigthImageMarginLeft = 0;


  constructor() { }

  ngOnInit(): void {
  }

  private setMarginLeft(value: number): void {
    this.leftImageMarginLeft = (value * this.imageWidth);
    this.rigthImageMarginLeft = -(value * this.imageWidth * 2);
  }

  private setOpacity(opacity: number): void {
    this.leftImageOpacity = this.validateOpacity(1 - opacity);
    this.rigthImageOpacity =  this.validateOpacity(opacity);
  }

  private validateOpacity(opacity: number): number {
    let opacityValidated = opacity;
    if (opacity > this.maxOpacity) {
      opacityValidated = this.maxOpacity;
    } else if (opacity < this.minOpacity) {
      opacityValidated = this.minOpacity;
    }

    return opacityValidated;
  }
}
