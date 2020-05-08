import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchImageOpacityComponent } from './switch-image-opacity.component';

describe('SwitchImageOpacityComponent', () => {
  let component: SwitchImageOpacityComponent;
  let fixture: ComponentFixture<SwitchImageOpacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchImageOpacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchImageOpacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
