import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let store: MockStore;

  beforeEach(() => {
    const initialState = {
      usersList: {
        list: {
          errorMessage: 'Some error occurred'
        }
      }
    };

    TestBed.configureTestingModule({
      declarations: [ErrorMessageComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message form store', () => {
    const messageElem = fixture.debugElement.query(By.css('[data-test="VOLVO.USERS_LIST.ERROR_MESSAGE"]'));
    expect(messageElem.nativeElement.textContent.trim()).toBe('Some error occurred');
  });
});
