import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { UserSearchBarComponent } from '@app/users-list/components';
import { MaterialModule } from '@app/core/material.module';

describe('UserSearchBarComponent', () => {
  let component: UserSearchBarComponent;
  let fixture: ComponentFixture<UserSearchBarComponent>;
  let store: MockStore;

  beforeEach(() => {
    const initialState = {
      usersList: {
        list: {
          searchValue: ''
        }
      }
    };

    TestBed.configureTestingModule({
      declarations: [UserSearchBarComponent],
      providers: [provideMockStore({ initialState })],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserSearchBarComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input label', () => {
    const label = fixture.debugElement.query(By.css('[data-test="VOLVO.USERS_LIST.USER_SEARCH_BAR.LABEL"]')).nativeElement;
    expect(label).toBeTruthy();
  });

  it('should display input', () => {
    const searchInput = fixture.debugElement.query(By.css('[data-test="VOLVO.USERS_LIST.USER_SEARCH_BAR.INPUT"]')).nativeElement;
    expect(searchInput).toBeTruthy();
  });
});
