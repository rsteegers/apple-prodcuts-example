import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCircleButtonComponent } from './custom-circle-button.component';

describe('CustomCircleButtonComponent', () => {
  let component: CustomCircleButtonComponent;
  let fixture: ComponentFixture<CustomCircleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCircleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCircleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
