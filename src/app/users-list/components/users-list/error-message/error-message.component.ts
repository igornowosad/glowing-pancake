import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectErrorMessage } from '@app/users-list/state/users';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent implements OnInit {
  errorMessage$: Observable<string>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.errorMessage$ = this.store.pipe(select(selectErrorMessage));
  }
}
