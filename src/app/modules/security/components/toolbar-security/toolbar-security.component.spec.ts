import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSecurityComponent } from './toolbar-security.component';

describe('ToolbarSecurityComponent', () => {
  let component: ToolbarSecurityComponent;
  let fixture: ComponentFixture<ToolbarSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
