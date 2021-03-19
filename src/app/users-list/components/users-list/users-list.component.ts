import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { User } from '@app/shared';
import * as usersActions from '@app/users-list/state/users/users.actions';
import { selectErrorMessage, selectFilteredUsers, selectLoading } from '@app/users-list/state/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  tableData$: Observable<User[]>;
  isLoading$: Observable<boolean>;
  searchValue$: Observable<string>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.tableData$ = this.store.pipe(select(selectFilteredUsers));
    this.isLoading$ = this.store.pipe(select(selectLoading));
    this.errorMessage$ = this.store.pipe(select(selectErrorMessage));

    this.store.dispatch(usersActions.getUsers());
  }
}
