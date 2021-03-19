import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as usersActions from '@app/users-list/state/users/users.actions';
import { selectSearchValue } from '@app/users-list/state/users';

@Component({
  selector: 'app-user-search-bar',
  templateUrl: './user-search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchBarComponent implements OnInit {
  searchValue$: Observable<string>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.searchValue$ = this.store.pipe(select(selectSearchValue));
  }

  searchUser(target: HTMLInputElement): void {
    this.store.dispatch(usersActions.searchByName({ name: target.value }));
  }

  clearSearchBar(): void {
    this.store.dispatch(usersActions.clearSearchByName());
  }
}
