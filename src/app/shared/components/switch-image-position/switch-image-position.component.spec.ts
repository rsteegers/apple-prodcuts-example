import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchImagePositionComponent } from './switch-image-position.component';

describe('SwitchImagePositionComponent', () => {
  let component: SwitchImagePositionComponent;
  let fixture: ComponentFixture<SwitchImagePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchImagePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchImagePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
