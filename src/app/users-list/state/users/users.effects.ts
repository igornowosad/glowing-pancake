import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromActions from './users.actions';
import { HttpService } from '@app/core/http.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
  ) {}

  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getUsers),
    mergeMap(() => this.httpService.getUsers()
      .pipe(
        map(users => fromActions.getUsersSuccess({ users })),
        catchError(error => of(fromActions.getUsersFail({ error })))
      ))
  ));

  removeUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.removeUser),
    mergeMap(({ id }) => this.httpService.removeUser(id)
      .pipe(
        map(() => fromActions.removeUserSuccess({ id })),
        catchError(error => {
          this.snackBar.open(
            'An error occurred while removing user, please try again.',
            null,
            { duration: 2000 }
          );
          return of(fromActions.removeUserFail({ error }));
        })
      ))
  ));
}
