import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneContainerComponent } from './iphone-container.component';

describe('IphoneContainerComponent', () => {
  let component: IphoneContainerComponent;
  let fixture: ComponentFixture<IphoneContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
