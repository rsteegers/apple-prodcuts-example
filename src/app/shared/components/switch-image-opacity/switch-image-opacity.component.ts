import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch-image-opacity',
  templateUrl: './switch-image-opacity.component.html',
  styleUrls: ['./switch-image-opacity.component.scss']
})
export class SwitchImageOpacityComponent implements OnInit {

  @Input() set value(value: number) {
    this.setOpacity(value);
  }

  @Input() leftImageUrl = '';
  @Input() rigthImageUrl = '';

  minOpacity = 0.2;
  maxOpacity = 1;

  leftImageOpacity = this.maxOpacity;
  rigthImageOpacity = this.minOpacity;

  imageHeight = 206;
  imageWidth = 103;

  constructor() { }

  ngOnInit(): void {
  }

  private setOpacity(opacity: number): void {
    this.leftImageOpacity = this.validateOpacity(1 - opacity);
    this.rigthImageOpacity = this.validateOpacity(opacity);
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
