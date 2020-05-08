import { TestBed } from '@angular/core/testing';

import { AlreadyAuthGuard } from './already-auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('AlreadyAuthGuard', () => {
  let guard: AlreadyAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
    });
    guard = TestBed.inject(AlreadyAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
