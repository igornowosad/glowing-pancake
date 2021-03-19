import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '@app/shared';
import * as usersActions from '@app/users-list/state/users/users.actions';
import { selectFilteredUsers } from '@app/users-list/state/users';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent implements OnInit {
  displayedColumns = [
    'id',
    'name',
    'surname',
    'birthDate',
    'phone',
    'city',
    'street',
    'number',
    'delete',
    'edit'
  ];

  tableData$: Observable<User[]>;

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tableData$ = this.store.pipe(select(selectFilteredUsers));
  }

  removeUser(id: User['id']): void {
    this.store.dispatch(usersActions.removeUser({ id }));
  }

  goToEditUser(id: User['id']): void {
    this.router.navigate(['add', id]);
  }
}
