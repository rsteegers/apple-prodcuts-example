import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbookCardInfoComponent } from './macbook-card-info.component';

describe('MacbookCardInfoComponent', () => {
  let component: MacbookCardInfoComponent;
  let fixture: ComponentFixture<MacbookCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacbookCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacbookCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
