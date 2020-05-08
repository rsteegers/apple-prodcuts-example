import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbookContainerComponent } from './macbook-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MacbookContainerComponent', () => {
  let component: MacbookContainerComponent;
  let fixture: ComponentFixture<MacbookContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ MacbookContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacbookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
