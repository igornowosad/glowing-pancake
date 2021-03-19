import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { User } from '@app/shared';
import { HttpService } from '@app/core/http.service';
import * as fromActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
  ) {}

  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getUser),
    mergeMap(({ id }) => this.httpService.getUser(id)
      .pipe(
        map(user => fromActions.getUserSuccess({ user })),
        catchError(() => of(fromActions.getUserFail()))
      ))
  ));

  addUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.addUser),
    mergeMap(({ user }) => this.httpService.addUser(user)
      .pipe(
        map((newUser: Partial<User>) => {
          this.snackBar.open('User added successfully!', null, { duration: 2000 });
          return fromActions.addUserSuccess({ user: newUser });
        }),
        catchError(() => of(fromActions.addUserFail()))
      ))
  ));

  editUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.editUser),
    mergeMap(({ id, data }) => this.httpService.editUser(id, data)
      .pipe(
        map((newUser: Partial<User>) => {
          this.snackBar.open('User edited successfully!', null, { duration: 2000 });
          return fromActions.editUserSuccess({ user: newUser });
        }),
        catchError(() => of(fromActions.editUserFail()))
      ))
  ));
}
