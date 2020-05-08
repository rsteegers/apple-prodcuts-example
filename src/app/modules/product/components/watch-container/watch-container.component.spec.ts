import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchContainerComponent } from './watch-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WatchContainerComponent', () => {
  let component: WatchContainerComponent;
  let fixture: ComponentFixture<WatchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ WatchContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
