import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarProductComponent } from './toolbar-product.component';
import { StoreModule, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { localStorageSyncReducer } from 'src/app/app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ToolbarProductComponent', () => {
  let component: ToolbarProductComponent;
  let fixture: ComponentFixture<ToolbarProductComponent>;
  const reducers: ActionReducerMap<any> = { };
  const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
      ],
      declarations: [ ToolbarProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
