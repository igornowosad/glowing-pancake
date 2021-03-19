import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUsersMessageComponent } from '@app/users-list/components';
import { AppRoutingModule } from '@app/app-routing.module';
import { MaterialModule } from '@app/core/material.module';

describe('NoUsersMessageComponent', () => {
  let component: NoUsersMessageComponent;
  let fixture: ComponentFixture<NoUsersMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        MaterialModule,
        AppRoutingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoUsersMessageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
