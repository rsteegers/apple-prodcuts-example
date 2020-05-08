import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-layout',
  templateUrl: './security-layout.component.html',
  styleUrls: ['./security-layout.component.scss']
})
export class SecurityLayoutComponent implements OnInit {

  currentYear = 1976;

  constructor() { }

  ngOnInit(): void {
    this.animateCurrentYear(1990, 2020, 1000);
  }

  animateCurrentYear(start, end, duration) {
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const that = this;
    const timer = setInterval(() => {
        current += increment;
        that.currentYear = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
  }

}
